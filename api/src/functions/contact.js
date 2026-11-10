import { app } from '@azure/functions'

// POST /api/contact: emails a consultation request through Microsoft 365 (Microsoft Graph sendMail).
// App settings (Static Web App > Environment variables):
//   M365_TENANT_ID, M365_CLIENT_ID, M365_CLIENT_SECRET  Entra app registration with the Mail.Send application permission
//   MAIL_FROM  mailbox the email is sent from (default connect@egeloma.com.au)
//   MAIL_TO    mailbox that receives enquiries (default connect@egeloma.com.au)

const FIELDS = [
  ['name', 'Name'],
  ['business', 'Business name'],
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['country', 'Country'],
  ['industry', 'Industry'],
  ['service', 'Product or plan'],
  ['message', 'Message'],
]
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Failures carry the step and Microsoft's error code (never secrets) so the cause shows in the response and logs.
class SendError extends Error {
  constructor(step, status, body) {
    let code = ''
    try {
      const j = JSON.parse(body)
      code = j.error?.code || j.error || ''
      if (j.error_codes) code += ` AADSTS${j.error_codes[0]}`
    } catch {}
    super(`${step} ${status} ${code}`.trim())
    this.detail = { step, status, code }
    this.body = body
  }
}

const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

async function graphToken(env) {
  const res = await fetch(`https://login.microsoftonline.com/${env.M365_TENANT_ID}/oauth2/v2.0/token`, {
    method: 'POST',
    body: new URLSearchParams({
      client_id: env.M365_CLIENT_ID,
      client_secret: env.M365_CLIENT_SECRET,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials',
    }),
  })
  if (!res.ok) throw new SendError('token', res.status, await res.text())
  return (await res.json()).access_token
}

app.http('contact', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    let body
    try {
      body = await req.json()
    } catch {
      return { status: 400, jsonBody: { error: 'Invalid request' } }
    }
    const data = Object.fromEntries(FIELDS.map(([k]) => [k, String(body?.[k] ?? '').trim().slice(0, k === 'message' ? 5000 : 200)]))

    // Hidden field that people never see: if it's filled in, a bot sent the form. Pretend it worked.
    if (body?.website) return { status: 200, jsonBody: { ok: true } }
    if (!data.name || !EMAIL.test(data.email)) return { status: 400, jsonBody: { error: 'Name and a valid email are required' } }

    const env = process.env
    const missing = ['M365_TENANT_ID', 'M365_CLIENT_ID', 'M365_CLIENT_SECRET'].filter(k => !env[k])
    if (missing.length) {
      ctx.error('contact form not configured, missing', missing.join(', '))
      return { status: 500, jsonBody: { error: 'Could not send', detail: { step: 'config', missing } } }
    }
    const from = env.MAIL_FROM || 'connect@egeloma.com.au'
    const to = env.MAIL_TO || 'connect@egeloma.com.au'
    const rows = FIELDS.filter(([k]) => data[k])
      .map(([k, label]) => `<tr><th align="left" valign="top" style="padding:6px 12px 6px 0">${label}</th><td style="padding:6px 0;white-space:pre-wrap">${esc(data[k])}</td></tr>`)
      .join('')

    try {
      const token = await graphToken(env)
      const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(from)}/sendMail`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: {
            subject: `New enquiry: ${data.name}${data.business ? ` (${data.business})` : ''}`,
            body: { contentType: 'HTML', content: `<p>New consultation request from egeloma.com.au</p><table>${rows}</table>` },
            toRecipients: [{ emailAddress: { address: to } }],
            replyTo: [{ emailAddress: { address: data.email, name: data.name } }],
          },
          saveToSentItems: false,
        }),
      })
      if (!res.ok) throw new SendError('sendMail', res.status, await res.text())
    } catch (err) {
      ctx.error('contact form email failed', err.message, err.body || err)
      return { status: 502, jsonBody: { error: 'Could not send', detail: err.detail || { step: 'network', code: err.message } } }
    }
    return { status: 200, jsonBody: { ok: true } }
  },
})
