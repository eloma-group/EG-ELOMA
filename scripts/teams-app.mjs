// Builds the Teams app package for the website chat bot: teams-app/egeloma-website-chat.zip
//   npm run teams-app -- <bot app id>
// Upload the zip in Teams (Apps > Manage your apps > Upload an app) and add it to the team that answers website chats.
import { readFileSync, writeFileSync } from 'node:fs'
import { crc32, deflateRawSync } from 'node:zlib'
import { fileURLToPath } from 'node:url'

const dir = fileURLToPath(new URL('../teams-app/', import.meta.url))
const id = process.argv[2] || ''
if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)) {
  console.error('Usage: npm run teams-app -- <bot app id>   (the Azure Bot\'s Microsoft App ID, a GUID)')
  process.exit(1)
}
const files = [
  ['manifest.json', Buffer.from(readFileSync(dir + 'manifest.json', 'utf8').replaceAll('{{BOT_APP_ID}}', id.toLowerCase()))],
  ['color.png', readFileSync(dir + 'color.png')],
  ['outline.png', readFileSync(dir + 'outline.png')],
]

// Minimal zip writer (deflate, no folders)
const local = [], central = []
let offset = 0
for (const [name, data] of files) {
  const n = Buffer.from(name), z = deflateRawSync(data), crc = crc32(data)
  const h = Buffer.alloc(30)
  h.writeUInt32LE(0x04034b50, 0); h.writeUInt16LE(20, 4); h.writeUInt16LE(8, 8)
  h.writeUInt32LE(crc, 14); h.writeUInt32LE(z.length, 18); h.writeUInt32LE(data.length, 22); h.writeUInt16LE(n.length, 26)
  const c = Buffer.alloc(46)
  c.writeUInt32LE(0x02014b50, 0); c.writeUInt16LE(20, 4); c.writeUInt16LE(20, 6); c.writeUInt16LE(8, 10)
  c.writeUInt32LE(crc, 16); c.writeUInt32LE(z.length, 20); c.writeUInt32LE(data.length, 24); c.writeUInt16LE(n.length, 28); c.writeUInt32LE(offset, 42)
  local.push(h, n, z); central.push(c, n)
  offset += h.length + n.length + z.length
}
const cd = Buffer.concat(central), end = Buffer.alloc(22)
end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(files.length, 8); end.writeUInt16LE(files.length, 10)
end.writeUInt32LE(cd.length, 12); end.writeUInt32LE(offset, 16)
writeFileSync(dir + 'egeloma-website-chat.zip', Buffer.concat([...local, cd, end]))
console.log('teams-app/egeloma-website-chat.zip written for bot', id)
