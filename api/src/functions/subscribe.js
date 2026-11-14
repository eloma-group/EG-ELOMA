import { app } from '@azure/functions'
import { EMAIL, SITE, send, table } from '../mail.js'

// POST /api/subscribe (multipart/form-data): the "Get updates" sign-up on /updates. Emails the sign-up to the team.

app.http('subscribe', {
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

    const email = String(form.get('email') || '').trim().slice(0, 200)
    const name = String(form.get('name') || '').trim().slice(0, 200)
    const topics = form.getAll('topics[]').map(String).join(', ').slice(0, 300)
    if (!EMAIL.test(email)) return { status: 400, jsonBody: { error: 'A valid email is required' } }

    const failed = await send(ctx, {
      subject: `Updates sign-up: ${email}`,
      html: `<p>New updates sign-up from ${SITE}/updates</p>${table([['Name', name], ['Email', email], ['Topics', topics]])}`,
      replyTo: { address: email, ...(name && { name }) },
    })
    return failed || { status: 200, jsonBody: { ok: true } }
  },
})
