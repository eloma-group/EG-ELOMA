// Website chat <-> Microsoft Teams, shared by functions/teams-chat.js (the website) and functions/teams-bot.js (Teams).
// A Teams bot posts each website visitor's chat as a thread in one channel; replies in that thread go back to the visitor.
// App settings (Static Web App > Environment variables):
//   CHAT_STORAGE   connection string of an Azure Storage account (table "webchat" is created on first use)
//   BOT_ENDPOINT_KEY  random secret (24+ characters) in the Azure Bot's messaging endpoint URL, see checkTeamsActivity
//   BOT_APP_ID, BOT_APP_SECRET, BOT_TENANT_ID  the Azure Bot's app registration; default to M365_CLIENT_ID,
//                  M365_CLIENT_SECRET and M365_TENANT_ID when the bot uses the same app as the form emails
import { createPublicKey, verify, randomBytes, timingSafeEqual } from 'node:crypto'
import { TableClient } from '@azure/data-tables'

const env = process.env
export const botId = () => env.BOT_APP_ID || env.M365_CLIENT_ID
const botSecret = () => env.BOT_APP_SECRET || env.M365_CLIENT_SECRET
const botTenant = () => env.BOT_TENANT_ID || env.M365_TENANT_ID
export const configured = () => Boolean(botId() && botSecret() && botTenant() && env.CHAT_STORAGE)

// ---------- storage ----------
// Rows: ('cfg','teams') channel to post in · ('thread', key(conversation)) -> sid · (sid,'session') · (sid,'m<time>-<rand>') messages
let table
async function db() {
  if (!table) {
    // http is only allowed for the local storage emulator (Azurite); Azure storage is always https
    const local = /DefaultEndpointsProtocol=http;|UseDevelopmentStorage=true/.test(env.CHAT_STORAGE)
    const t = TableClient.fromConnectionString(env.CHAT_STORAGE, 'webchat', { allowInsecureConnection: local })
    await t.createTable()
    table = t
  }
  return table
}
export async function get(pk, rk) {
  try {
    return await (await db()).getEntity(pk, rk)
  } catch (e) {
    if (e.statusCode === 404) return null
    throw e
  }
}
export const put = async entity => (await db()).upsertEntity(entity, 'Merge')
export const key = s => Buffer.from(s).toString('base64url')
export const msgKey = () => 'm' + String(Date.now()).padStart(14, '0') + '-' + randomBytes(3).toString('hex')

export async function teamMessages(sid, after) {
  const from = after && after > 'm' ? after : 'm'
  const out = []
  const rows = (await db()).listEntities({
    queryOptions: { filter: `PartitionKey eq '${sid}' and RowKey gt '${from.replace(/'/g, "''")}' and RowKey lt 'n' and from eq 'team'` },
  })
  for await (const r of rows) out.push({ id: r.rowKey, text: r.text, author: r.author })
  return out
}

// ---------- Bot Framework connector (bot -> Teams) ----------
let token = { value: '', exp: 0 }
async function botToken() {
  if (token.exp > Date.now() + 60000) return token.value
  const res = await fetch(`https://login.microsoftonline.com/${botTenant()}/oauth2/v2.0/token`, {
    method: 'POST',
    body: new URLSearchParams({ client_id: botId(), client_secret: botSecret(), scope: 'https://api.botframework.com/.default', grant_type: 'client_credentials' }),
  })
  if (!res.ok) throw new Error(`bot token ${res.status} ${await res.text()}`)
  const j = await res.json()
  token = { value: j.access_token, exp: Date.now() + j.expires_in * 1000 }
  return token.value
}
export async function connector(serviceUrl, path, body) {
  const res = await fetch(serviceUrl.replace(/\/?$/, '/') + path, {
    method: 'POST',
    headers: { Authorization: `Bearer ${await botToken()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`connector ${res.status} ${await res.text()}`)
  return res.json().catch(() => ({}))
}
// New thread in the configured channel; returns its conversation id (includes ;messageid=)
export const newThread = async (cfg, html) =>
  (await connector(cfg.serviceUrl, 'v3/conversations', {
    isGroup: true,
    channelData: { channel: { id: cfg.channelId }, tenant: { id: botTenant() } },
    activity: { type: 'message', textFormat: 'xml', text: html },
  })).id
export const postToThread = (serviceUrl, conversationId, html) =>
  connector(serviceUrl, `v3/conversations/${encodeURIComponent(conversationId)}/activities`, { type: 'message', textFormat: 'xml', text: html })
export const replyTo = (activity, text) =>
  connector(activity.serviceUrl, `v3/conversations/${encodeURIComponent(activity.conversation.id)}/activities/${encodeURIComponent(activity.id)}`, { type: 'message', text })

// ---------- requests from Teams (Teams -> bot) ----------
// Static Web Apps replaces the Authorization header on requests to managed functions with its own token, so the
// Bot Framework token never reaches us. Instead the Azure Bot's messaging endpoint carries a secret:
//   https://egeloma.com/api/teams-bot?key=<BOT_ENDPOINT_KEY>
// and the activity must come from our tenant's Teams service. The token check below still runs first, in case the
// header ever does get through.
const TEAMS_SERVICE = /^https:\/\/smba\.trafficmanager\.net\//
export function checkTeamsActivity(act, providedKey) {
  const expected = env.BOT_ENDPOINT_KEY || ''
  if (expected.length < 24) return 'endpoint key not configured'
  const a = Buffer.from(String(providedKey || '')), b = Buffer.from(expected)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return 'bad key'
  if (!TEAMS_SERVICE.test(act?.serviceUrl || '')) return 'not a Teams service url'
  if (act?.channelData?.tenant?.id !== botTenant()) return 'wrong tenant'
  return ''
}

// Bot Framework token check
let keys = { list: [], exp: 0 }
async function signingKeys(refresh) {
  if (!refresh && keys.exp > Date.now()) return keys.list
  const cfg = await (await fetch('https://login.botframework.com/v1/.well-known/openidconfiguration')).json()
  keys = { list: (await (await fetch(cfg.jwks_uri)).json()).keys, exp: Date.now() + 12 * 3600 * 1000 }
  return keys.list
}
// Returns '' when the request really comes from the Bot Framework for this bot, otherwise the reason it doesn't.
export async function checkBotRequest(auth, serviceUrl) {
  const m = /^Bearer\s+([\w-]+)\.([\w-]+)\.([\w-]+)$/.exec(auth || '')
  if (!m) return 'missing token'
  let header, claims
  try {
    header = JSON.parse(Buffer.from(m[1], 'base64url'))
    claims = JSON.parse(Buffer.from(m[2], 'base64url'))
  } catch {
    return 'malformed token'
  }
  if (header.alg !== 'RS256') return 'bad algorithm'
  const find = list => list.find(k => k.kid === header.kid)
  const jwk = find(await signingKeys()) || find(await signingKeys(true))
  if (!jwk) return 'unknown key'
  if (jwk.endorsements && !jwk.endorsements.includes('msteams')) return 'key not endorsed for Teams'
  const pub = createPublicKey({ key: { kty: jwk.kty, n: jwk.n, e: jwk.e }, format: 'jwk' })
  if (!verify('RSA-SHA256', Buffer.from(`${m[1]}.${m[2]}`), pub, Buffer.from(m[3], 'base64url'))) return 'bad signature'
  const now = Date.now() / 1000
  if (claims.iss !== 'https://api.botframework.com') return 'bad issuer'
  if (claims.aud !== botId()) return 'bad audience'
  if (!(claims.exp > now - 300) || (claims.nbf && claims.nbf > now + 300)) return 'expired'
  if (claims.serviceurl && claims.serviceurl !== serviceUrl) return 'service url mismatch'
  return ''
}

// ---------- text ----------
export const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
// Teams message HTML -> plain text (drops @mentions of the bot)
export const plain = html =>
  String(html || '')
    .replace(/<at>.*?<\/at>/gi, '')
    .replace(/<br\s*\/?>|<\/p>|<\/div>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&')
    .replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n')
    .trim()
