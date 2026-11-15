import { app } from '@azure/functions'
import { checkBotRequest, configured, get, key, msgKey, plain, put, replyTo } from '../teams.js'

// POST /api/teams-bot: messaging endpoint of the Azure Bot (Teams -> website). See ../teams.js.
// - Bot added to a team: website chats go to that team's General channel, unless a channel was already chosen.
// - "@EG Eloma Website Chat setup" posted in a channel: website chats go to that channel.
// - A reply in a website chat's thread: saved for the visitor, whose chat widget picks it up.
// Reading thread replies without an @mention needs the ChannelMessage.Read.Group permission in the Teams app (teams-app/).

const saveChannel = (act, channelId) =>
  put({ partitionKey: 'cfg', rowKey: 'teams', serviceUrl: act.serviceUrl, channelId, teamId: act.channelData?.team?.id || '' })

app.http('teams-bot', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (req, ctx) => {
    if (!configured()) return { status: 503 }
    let act
    try {
      act = await req.json()
    } catch {
      return { status: 400 }
    }
    const bad = await checkBotRequest(req.headers.get('authorization'), act?.serviceUrl)
    if (bad) {
      ctx.warn('teams bot request rejected:', bad)
      return { status: 401, jsonBody: { error: bad } }
    }

    try {
      const ch = act.channelData || {}
      if (act.type === 'conversationUpdate') {
        const added = (act.membersAdded || []).some(m => m.id === act.recipient?.id)
        if (added && ch.team?.id && !(await get('cfg', 'teams'))) await saveChannel(act, ch.team.id)
        return { status: 200 }
      }
      if (act.type !== 'message' || !ch.channel?.id) return { status: 200 }

      const text = plain(act.text)
      const thread = await get('thread', key(act.conversation.id))
      if (thread) {
        if (text) await put({ partitionKey: thread.sid, rowKey: msgKey(), from: 'team', author: String(act.from?.name || '').split(' ')[0], text: text.slice(0, 4000) })
      } else if (/^set ?up\b/i.test(text)) {
        await saveChannel(act, ch.channel.id)
        await replyTo(act, 'Done. New chats from the egeloma.com website will appear in this channel. Reply in a chat\'s thread to answer the visitor on the website.')
      }
      return { status: 200 }
    } catch (err) {
      ctx.error('teams bot failed', err.message)
      return { status: 500 }
    }
  },
})
