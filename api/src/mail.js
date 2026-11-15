// Shared by the form functions: sends an email through Microsoft 365 (Microsoft Graph sendMail).
// App settings (Static Web App > Environment variables):
//   M365_TENANT_ID, M365_CLIENT_ID, M365_CLIENT_SECRET  Entra app registration with the Mail.Send application permission
//     (plus Mail.ReadWrite for quote emails whose files total more than 3 MB, see sendLarge)
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

const GRAPH = 'https://graph.microsoft.com/v1.0'
// sendMail takes about 4 MB per request (base64 included). Above this, the message is built as a draft and
// big files go up through upload sessions, which needs the Mail.ReadWrite application permission too.
const INLINE_LIMIT = 3 * 1024 * 1024
const CHUNK = 10 * 320 * 1024 // upload session chunks must be multiples of 320 KiB

async function graph(token, step, url, init = {}) {
  const res = await fetch(url.startsWith('http') ? url : GRAPH + url, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', ...init.headers },
  })
  if (!res.ok) throw new SendError(step, res.status, await res.text())
  return res.status === 202 || res.status === 204 ? null : res.json()
}

const fileAttachment = a => ({
  '@odata.type': '#microsoft.graph.fileAttachment',
  name: a.name,
  contentType: a.contentType || 'application/octet-stream',
  contentBytes: a.bytes.toString('base64'),
})

// Draft + attachments + send, for messages too big for one sendMail call (files up to 25 MB in total).
async function sendLarge(token, from, message, attachments) {
  const user = `/users/${encodeURIComponent(from)}`
  const draft = await graph(token, 'createDraft', `${user}/messages`, { method: 'POST', body: JSON.stringify(message) })
  const msg = `${user}/messages/${draft.id}`
  try {
    for (const a of attachments) {
      if (a.bytes.length < INLINE_LIMIT) {
        await graph(token, 'addAttachment', `${msg}/attachments`, { method: 'POST', body: JSON.stringify(fileAttachment(a)) })
        continue
      }
      const session = await graph(token, 'uploadSession', `${msg}/attachments/createUploadSession`, {
        method: 'POST',
        body: JSON.stringify({ AttachmentItem: { attachmentType: 'file', name: a.name, size: a.bytes.length, contentType: a.contentType || 'application/octet-stream' } }),
      })
      for (let start = 0; start < a.bytes.length; start += CHUNK) {
        const part = a.bytes.subarray(start, Math.min(start + CHUNK, a.bytes.length))
        // The upload URL carries its own token; Graph rejects an Authorization header here.
        const res = await fetch(session.uploadUrl, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/octet-stream', 'Content-Range': `bytes ${start}-${start + part.length - 1}/${a.bytes.length}` },
          body: part,
        })
        if (!res.ok) throw new SendError('uploadChunk', res.status, await res.text())
      }
    }
    await graph(token, 'sendDraft', `${msg}/send`, { method: 'POST' })
  } catch (err) {
    await graph(token, 'deleteDraft', msg, { method: 'DELETE' }).catch(() => {})
    throw err
  }
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
    const message = {
      subject,
      body: { contentType: 'HTML', content: html },
      toRecipients: [{ emailAddress: { address: to } }],
      ...(replyTo && { replyTo: [{ emailAddress: replyTo }] }),
    }
    const total = attachments.reduce((n, a) => n + a.bytes.length, 0)
    if (total > INLINE_LIMIT) await sendLarge(token, from, message, attachments)
    else
      await graph(token, 'sendMail', `/users/${encodeURIComponent(from)}/sendMail`, {
        method: 'POST',
        body: JSON.stringify({
          message: { ...message, ...(attachments.length && { attachments: attachments.map(fileAttachment) }) },
          saveToSentItems: false,
        }),
      })
  } catch (err) {
    ctx.error('form email failed', err.message, err.body || err)
    return { status: 502, jsonBody: { error: 'Could not send', detail: err.detail || { step: 'network', code: err.message } } }
  }
  return null
}
