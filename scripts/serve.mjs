// Local preview: builds the site, serves dist/ on http://localhost:5173 with clean URLs and the redirects
// from staticwebapp.config.json, and rebuilds when a file in site/ changes.
// The /api form functions only run on Azure, so the forms show their "couldn't be sent" message here.
import { createServer } from 'node:http'
import { existsSync, readFileSync, statSync, watch } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = root + 'dist/'
const PORT = Number(process.env.PORT) || 5173
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml', '.woff2': 'font/woff2' }

const build = () => {
  try { execFileSync(process.execPath, [root + 'scripts/build.mjs'], { stdio: 'inherit' }) } catch { console.error('build failed') }
}
build()
let timer
watch(root + 'site', { recursive: true }, () => { clearTimeout(timer); timer = setTimeout(build, 150) })

const isFile = p => existsSync(p) && statSync(p).isFile()

createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost')
  const path = decodeURIComponent(url.pathname)
  const config = JSON.parse(readFileSync(dist + 'staticwebapp.config.json', 'utf8'))
  const redirect = config.routes.find(r => r.redirect && r.route === path)
  const move = to => { res.writeHead(301, { Location: to + url.search }); res.end() }
  if (redirect) return move(redirect.redirect)
  if (path.length > 1 && path.endsWith('/')) return move(path.slice(0, -1))
  if (path.endsWith('.html')) return move(path.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '') || '/')

  let file = path === '/' ? dist + 'index.html' : dist + path.slice(1)
  let status = 200
  if (!isFile(file)) file = isFile(file + '.html') ? file + '.html' : ((status = 404), dist + '404.html')
  res.writeHead(status, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' })
  res.end(readFileSync(file))
}).listen(PORT, () => console.log(`\n  EG Eloma preview: http://localhost:${PORT}/\n`))
