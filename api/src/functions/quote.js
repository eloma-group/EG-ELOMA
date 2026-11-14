import { app } from '@azure/functions'
import { EMAIL, SITE, send, table } from '../mail.js'

// POST /api/quote (multipart/form-data): the "Request a quote" form, with the visitor's files as email attachments.
// Graph sendMail takes up to 4 MB per message, so files are capped at 2.5 MB in total (site/assets/quote.js has the same limit).

const FIELDS = [
  ['reference', 'Reference'],
  ['name', 'Name'],
  ['business', 'Business name'],
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['country', 'Country'],
  ['website', 'Website'],
  ['contact_method', 'Preferred contact'],
  ['services[]', 'Interested in'],
  ['current_tools', 'Current tools'],
  ['monthly_spend', 'Monthly subscription spend'],
  ['team_size', 'Team size'],
  ['budget', 'Budget'],
  ['currency', 'Currency'],
  ['timeline', 'Timeline'],
  ['message', 'Message'],
  ['consent', 'Consent to use details and files'],
  ['timezone', 'Time zone'],
  ['page', 'Sent from'],
]
const MAX_FILES = 10
const MAX_BYTES = 2.5 * 1024 * 1024
const REF = /^EGQ-[0-9A-Z-]{4,20}$/

app.http('quote', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    let form
    try {
      form = await req.formData()
    } catch {
      return { status: 400, jsonBody: { error: 'Invalid request' } }
    }
    if (form.get('company_website')) return { status: 200, jsonBody: { ok: true } } // honeypot

    const val = k => form.getAll(k).filter(v => typeof v === 'string').map(v => v.trim()).filter(Boolean).join(', ').slice(0, k === 'message' || k === 'current_tools' ? 5000 : 300)
    const data = Object.fromEntries(FIELDS.map(([k]) => [k, val(k)]))
    if (!data.name || !EMAIL.test(data.email)) return { status: 400, jsonBody: { error: 'Name and a valid email are required' } }
    if (!REF.test(data.reference)) data.reference = 'EGQ-' + Date.now().toString(36).toUpperCase()

    const files = form.getAll('files[]').filter(f => typeof f === 'object' && f.size > 0)
    const total = files.reduce((a, f) => a + f.size, 0)
    if (files.length > MAX_FILES || total > MAX_BYTES) return { status: 413, jsonBody: { error: 'Files too large' } }
    const attachments = await Promise.all(
      files.map(async f => ({ name: f.name.slice(0, 150), contentType: f.type, bytes: Buffer.from(await f.arrayBuffer()) })),
    )

    const failed = await send(ctx, {
      subject: `Quote request ${data.reference}: ${data.name}${data.business ? ` (${data.business})` : ''}`,
      html:
        `<p>New quote request from ${SITE}</p>${table(FIELDS.map(([k, label]) => [label, data[k]]))}` +
        (files.length ? `<p>${files.length} file${files.length === 1 ? '' : 's'} attached.</p>` : ''),
      replyTo: { address: data.email, name: data.name },
      attachments,
    })
    return failed || { status: 200, jsonBody: { ok: true, reference: data.reference } }
  },
})
