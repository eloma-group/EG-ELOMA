import { app } from '@azure/functions'
import { EMAIL, SITE, esc, send } from '../mail.js'

// POST /api/book (JSON): the "Pick a time" meeting request on /contact. Emails the team a formatted request with
// the time in Melbourne and in the visitor's time zone, plus an .ics file to add it to the calendar, then emails the
// visitor a receipt of their request.

const HQ = 'Australia/Melbourne'
const SERVICES = {
  consult: 'Free consultation',
  review: 'Free subscription review',
  licence: 'Free licence review',
  marketing: 'Marketing strategy call',
}

const validZone = z => {
  try { new Intl.DateTimeFormat('en-AU', { timeZone: z }); return true } catch { return false }
}
const when = (d, zone) => d.toLocaleString('en-AU', { timeZone: zone, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: '2-digit' })
const short = (d, zone) => d.toLocaleString('en-AU', { timeZone: zone, weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' })
const icsDate = d => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
const icsText = s => String(s).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1')

const row = (label, value, html) => value
  ? `<tr><td style="padding:10px 16px 10px 0;color:#506274;font-size:14px;vertical-align:top;white-space:nowrap;border-bottom:1px solid #EEF2F6">${esc(label)}</td>` +
    `<td style="padding:10px 0;color:#0B213A;font-size:15px;vertical-align:top;border-bottom:1px solid #EEF2F6;white-space:pre-wrap">${html || esc(value)}</td></tr>`
  : ''

app.http('book', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    let body
    try {
      body = await req.json()
    } catch {
      return { status: 400, jsonBody: { error: 'Invalid request' } }
    }
    if (body?.website) return { status: 200, jsonBody: { ok: true } } // honeypot

    const get = (k, n = 200) => String(body?.[k] ?? '').trim().slice(0, n)
    const d = { name: get('name'), business: get('business'), email: get('email'), phone: get('phone', 40), notes: get('notes', 3000) }
    const service = SERVICES[get('service')]
    const start = new Date(get('start'))
    const tz = validZone(get('tz')) ? get('tz') : HQ
    const now = Date.now()

    if (!d.name || !EMAIL.test(d.email)) return { status: 400, jsonBody: { error: 'Name and a valid email are required' } }
    if (!service) return { status: 400, jsonBody: { error: 'Choose a meeting type' } }
    if (isNaN(start) || start.getTime() < now - 5 * 60000 || start.getTime() > now + 100 * 864e5 || start.getUTCMinutes() % 30)
      return { status: 400, jsonBody: { error: 'Choose a valid time' } }
    // Meetings run Monday to Friday, 9:00 am to 5:00 pm Melbourne time (the last slot starts at 4:30 pm).
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-AU', { timeZone: HQ, weekday: 'short', hour: 'numeric', hourCycle: 'h23' }).formatToParts(start).map(x => [x.type, x.value]))
    if (p.weekday === 'Sat' || p.weekday === 'Sun' || +p.hour < 9 || +p.hour > 16)
      return { status: 400, jsonBody: { error: 'Choose a time between 9 am and 5 pm Melbourne time, Monday to Friday' } }

    const mins = 30
    const end = new Date(start.getTime() + mins * 60000)
    const melb = when(start, HQ)
    const local = tz === HQ ? '' : `${when(start, tz)} (${tz.replace(/_/g, ' ')})`
    const mail = `<a href="mailto:${esc(d.email)}" style="color:#157A5A">${esc(d.email)}</a>`
    const tel = d.phone ? `<a href="tel:${esc(d.phone.replace(/[^\d+]/g, ''))}" style="color:#157A5A">${esc(d.phone)}</a>` : ''

    const html = `<div style="font-family:Segoe UI,Arial,sans-serif;background:#F4F7FA;padding:24px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #DDE4EC">
<tr><td style="background:#0B213A;padding:22px 28px">
  <div style="color:#2DB88C;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase">New meeting request</div>
  <div style="color:#ffffff;font-size:22px;font-weight:600;margin-top:6px">${esc(service)} · ${mins} min</div>
  <div style="color:#A9BCCB;font-size:14px;margin-top:4px">Microsoft Teams · from the booking form on ${SITE}/contact</div>
</td></tr>
<tr><td style="padding:22px 28px 6px">
  <div style="background:#E7F6F0;border-radius:10px;padding:16px 18px">
    <div style="color:#157A5A;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase">Requested time (Melbourne)</div>
    <div style="color:#0B213A;font-size:18px;font-weight:600;margin-top:4px">${esc(melb)}</div>
    ${local ? `<div style="color:#506274;font-size:14px;margin-top:6px">Their time: ${esc(local)}</div>` : ''}
  </div>
</td></tr>
<tr><td style="padding:12px 28px 8px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    ${row('Name', d.name)}${row('Business', d.business)}${row('Email', d.email, mail)}${row('Phone', d.phone, tel)}${row('Wants to discuss', d.notes)}
  </table>
</td></tr>
<tr><td style="padding:16px 28px 26px;color:#506274;font-size:13px;line-height:1.5">
  Reply to this email to reach ${esc(d.name)} directly. Open the attached calendar file to add the meeting, then send them the Teams link to confirm.
</td></tr>
</table></div>`

    const ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//EG Eloma//Booking//EN', 'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${start.getTime()}-${Math.random().toString(36).slice(2)}@${SITE}`,
      `DTSTAMP:${icsDate(new Date())}`, `DTSTART:${icsDate(start)}`, `DTEND:${icsDate(end)}`,
      `SUMMARY:${icsText(`${service}: ${d.name}${d.business ? ` (${d.business})` : ''}`)}`,
      `DESCRIPTION:${icsText(`${service} (${mins} min, Microsoft Teams)\nName: ${d.name}\n${d.business ? `Business: ${d.business}\n` : ''}Email: ${d.email}\n${d.phone ? `Phone: ${d.phone}\n` : ''}${d.notes ? `About: ${d.notes}` : ''}`)}`,
      'LOCATION:Microsoft Teams',
      'END:VEVENT', 'END:VCALENDAR',
    ].join('\r\n')

    const failed = await send(ctx, {
      subject: `Meeting request: ${service} · ${short(start, HQ)} (Melbourne) · ${d.name}${d.business ? `, ${d.business}` : ''}`,
      html,
      replyTo: { address: d.email, name: d.name },
      attachments: [{ name: 'meeting-request.ics', contentType: 'text/calendar', bytes: Buffer.from(ics, 'utf8') }],
    })
    if (failed) return failed

    // Receipt for the visitor. The team already has the request, so a failure here is only logged.
    const team = process.env.MAIL_TO || 'connect@egeloma.com.au'
    const theirs = when(start, tz)
    const first = d.name.split(/\s+/)[0]
    const receipt = `<div style="font-family:Segoe UI,Arial,sans-serif;background:#F4F7FA;padding:24px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #DDE4EC">
<tr><td style="background:#0B213A;padding:22px 28px">
  <div style="color:#ffffff;font-size:13px;font-weight:700;letter-spacing:3px">EG ELOMA</div>
  <div style="color:#ffffff;font-size:22px;font-weight:600;margin-top:10px">We’ve got your meeting request</div>
</td></tr>
<tr><td style="padding:24px 28px 4px;color:#0B213A;font-size:15px;line-height:1.6">
  Hi ${esc(first)},<br><br>
  Thanks for booking a time with us. Here’s what you asked for. We’ll send you a Microsoft Teams link to join.
</td></tr>
<tr><td style="padding:16px 28px 4px">
  <div style="background:#E7F6F0;border-radius:10px;padding:16px 18px">
    <div style="color:#157A5A;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase">${esc(service)} · ${mins} min · Microsoft Teams</div>
    <div style="color:#0B213A;font-size:18px;font-weight:600;margin-top:6px">${esc(theirs)}</div>
    <div style="color:#506274;font-size:14px;margin-top:4px">${tz === HQ ? 'Melbourne time' : `Your time (${esc(tz.replace(/_/g, ' '))}) · Melbourne: ${esc(short(start, HQ))}`}</div>
  </div>
</td></tr>
${d.notes ? `<tr><td style="padding:16px 28px 0;color:#506274;font-size:14px;line-height:1.5"><b style="color:#0B213A">You’d like to discuss:</b><br><span style="white-space:pre-wrap">${esc(d.notes)}</span></td></tr>` : ''}
<tr><td style="padding:20px 28px 24px;color:#0B213A;font-size:15px;line-height:1.6">
  Need to change the time or add something? Just reply to this email, or call us on <a href="tel:1800054555" style="color:#157A5A">1800 054 555</a> (free in Australia).<br><br>
  The EG Eloma team
</td></tr>
<tr><td style="background:#F8FAFC;border-top:1px solid #EEF2F6;padding:14px 28px;color:#8A9AAB;font-size:12px">
  You’re getting this because you requested a meeting at <a href="https://${SITE}/contact" style="color:#8A9AAB">${SITE}</a>.
</td></tr>
</table></div>`
    const receiptFailed = await send(ctx, {
      to: d.email,
      subject: `We’ve got your request: ${service}, ${short(start, tz)}`,
      html: receipt,
      replyTo: { address: team, name: 'EG Eloma' },
    })
    if (receiptFailed) ctx.error('booking receipt not sent to visitor', JSON.stringify(receiptFailed.jsonBody))
    return { status: 200, jsonBody: { ok: true } }
  },
})
