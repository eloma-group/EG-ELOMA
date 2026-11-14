import { app } from '@azure/functions'
import { EMAIL, SITE, send, table } from '../mail.js'

// POST /api/contact (JSON): the enquiry form on the home and contact pages. Emailed through Microsoft 365, see ../mail.js.

const FIELDS = [
  ['name', 'Name'],
  ['business', 'Business name'],
  ['email', 'Email'],
  ['phone', 'Phone'],
  ['country', 'Country'],
  ['industry', 'Industry'],
  ['service', 'Interested in'],
  ['message', 'Message'],
]

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

    const failed = await send(ctx, {
      subject: `New enquiry: ${data.name}${data.business ? ` (${data.business})` : ''}`,
      html: `<p>New consultation request from ${SITE}</p>${table(FIELDS.map(([k, label]) => [label, data[k]]))}`,
      replyTo: { address: data.email, name: data.name },
    })
    return failed || { status: 200, jsonBody: { ok: true } }
  },
})
