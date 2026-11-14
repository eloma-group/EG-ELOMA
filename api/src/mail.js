// Shared by the form functions: sends an email through Microsoft 365 (Microsoft Graph sendMail).
// App settings (Static Web App > Environment variables):
//   M365_TENANT_ID, M365_CLIENT_ID, M365_CLIENT_SECRET  Entra app registration with the Mail.Send application permission
//   MAIL_FROM  mailbox the email is sent from (default connect@egeloma.com.au)
//   MAIL_TO    mailbox that receives enquiries (default connect@egeloma.com.au)

export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const SITE = 'egeloma.com'

// Failures carry the step and Microsoft's error code (never secrets) so the cause shows in the response and logs.
export class SendError extends Error {
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

export const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

// <table> of label/value rows, skipping empty values.
export const table = rows =>
  '<table>' +
  rows
    .filter(([, v]) => v)
    .map(([label, v]) => `<tr><th align="left" valign="top" style="padding:6px 12px 6px 0">${esc(label)}</th><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join('') +
  '</table>'

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

// Sends the email and returns an HTTP response for the function to return.
// attachments: [{ name, contentType, bytes: Buffer }]
export async function send(ctx, { subject, html, replyTo, attachments = [] }) {
  const env = process.env
  const missing = ['M365_TENANT_ID', 'M365_CLIENT_ID', 'M365_CLIENT_SECRET'].filter(k => !env[k])
  if (missing.length) {
    ctx.error('form email not configured, missing', missing.join(', '))
    return { status: 500, jsonBody: { error: 'Could not send', detail: { step: 'config', missing } } }
  }
  const from = env.MAIL_FROM || 'connect@egeloma.com.au'
  const to = env.MAIL_TO || 'connect@egeloma.com.au'
  try {
    const token = await graphToken(env)
    const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(from)}/sendMail`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: {
          subject,
          body: { contentType: 'HTML', content: html },
          toRecipients: [{ emailAddress: { address: to } }],
          ...(replyTo && { replyTo: [{ emailAddress: replyTo }] }),
          ...(attachments.length && {
            attachments: attachments.map(a => ({
              '@odata.type': '#microsoft.graph.fileAttachment',
              name: a.name,
              contentType: a.contentType || 'application/octet-stream',
              contentBytes: a.bytes.toString('base64'),
            })),
          }),
        },
        saveToSentItems: false,
      }),
    })
    if (!res.ok) throw new SendError('sendMail', res.status, await res.text())
  } catch (err) {
    ctx.error('form email failed', err.message, err.body || err)
    return { status: 502, jsonBody: { error: 'Could not send', detail: err.detail || { step: 'network', code: err.message } } }
  }
  return null
}
