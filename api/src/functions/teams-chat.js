import { app } from '@azure/functions'
import { EMAIL } from '../mail.js'
import { configured, esc, get, key, msgKey, newThread, postToThread, put, teamMessages } from '../teams.js'

// /api/teams-chat: the "Teams" mode of the website chat widget (site/assets/chat.js). See ../teams.js.
//   GET  ?status=1            -> { ready }   whether Teams chat is set up (otherwise the widget opens Teams itself)
//   GET  ?sid=..&after=..     -> { messages } team replies newer than `after`
//   POST { sid, text, name, email, page }  -> the visitor's message, posted to their thread in Teams

const SID = /^[A-Za-z0-9_-]{20,64}$/
const MAX_MESSAGES = 300 // per visitor session, to stop a script from flooding the channel

app.http('teams-chat', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    if (req.method === 'GET') {
      const q = req.query
      if (q.get('status')) {
        const ready = configured() && Boolean(await get('cfg', 'teams').catch(() => null))
        return { jsonBody: { ready } }
      }
      const sid = q.get('sid') || ''
      if (!SID.test(sid)) return { status: 400, jsonBody: { error: 'Invalid request' } }
      if (!configured()) return { status: 503, jsonBody: { error: 'Not set up' } }
      return { headers: { 'Cache-Control': 'no-store' }, jsonBody: { messages: await teamMessages(sid, q.get('after') || '') } }
    }

    let body
    try {
      body = await req.json()
    } catch {
      return { status: 400, jsonBody: { error: 'Invalid request' } }
    }
    if (body?.website) return { jsonBody: { ok: true } } // honeypot
    const sid = String(body?.sid || '')
    const text = String(body?.text || '').trim().slice(0, 1000)
    if (!SID.test(sid) || !text) return { status: 400, jsonBody: { error: 'Invalid request' } }
    if (!configured()) return { status: 503, jsonBody: { error: 'Not set up' } }

    try {
      const cfg = await get('cfg', 'teams')
      if (!cfg) return { status: 503, jsonBody: { error: 'Not set up' } }
      let session = await get(sid, 'session')
      if (session && session.count >= MAX_MESSAGES) return { status: 429, jsonBody: { error: 'Too many messages' } }

      if (!session) {
        const name = String(body.name || '').trim().slice(0, 80)
        const email = String(body.email || '').trim().slice(0, 200)
        const page = String(body.page || '').slice(0, 300)
        if (!name) return { status: 400, jsonBody: { error: 'Name is required' } }
        if (email && !EMAIL.test(email)) return { status: 400, jsonBody: { error: 'Invalid email' } }
        const conv = await newThread(
          cfg,
          `<b>💬 New website chat: ${esc(name)}</b><br>` +
            (email ? `Email: ${esc(email)}<br>` : 'No email given<br>') +
            (page ? `Page: ${esc(page)}<br>` : '') +
            `<br>${esc(text)}<br><br><i>Reply in this thread to answer them on the website.</i>`,
        )
        session = { partitionKey: sid, rowKey: 'session', conv, serviceUrl: cfg.serviceUrl, name, email, page, count: 1 }
        await put(session)
        await put({ partitionKey: 'thread', rowKey: key(conv), sid })
      } else {
        await postToThread(session.serviceUrl, session.conv, `<b>${esc(session.name)}:</b> ${esc(text)}`)
        await put({ partitionKey: sid, rowKey: 'session', count: (session.count || 0) + 1 })
      }
      await put({ partitionKey: sid, rowKey: msgKey(), from: 'visitor', text })
      return { jsonBody: { ok: true } }
    } catch (err) {
      ctx.error('teams chat failed', err.message)
      return { status: 502, jsonBody: { error: 'Could not send' } }
    }
  },
})
