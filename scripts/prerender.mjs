// Turns every route into a static HTML file after `vite build`, so pages show instantly
// (and search engines see the full content) before any JavaScript runs.
// "/" -> dist/index.html, "/seo" -> dist/seo.html (servers map /seo to seo.html, see public/.htaccess).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = root + 'dist/'
const ssrDir = root + 'dist-ssr/'

const { render, routes, routeFiles, RENAMED, SITE, COUNTRIES } = await import(pathToFileURL(ssrDir + 'entry-server.js').href)
const template = readFileSync(dist + 'index.html', 'utf8')

// The whole stylesheet is small (~15 KB gzipped), so it goes inline: no render-blocking request.
const cssHref = template.match(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/)
const css = cssHref ? readFileSync(dist + cssHref[1].replace(/^\//, ''), 'utf8') : ''

// React puts <title>, <meta> and <link> elements from the page first; move them into <head>.
const HEAD_TAG = /^(?:<title>[^<]*<\/title>|<meta [^>]*\/?>|<link [^>]*\/?>)/

const inlineCss = (html, styles = css) => (cssHref ? html.replace(cssHref[0], `<style>${styles}</style>`) : html)

// Web fonts are split out of the page CSS so they never hold up (or move) the first paint:
// - returning visitors have them cached, so they are applied up front with font-display:optional
//   (used if ready within ~100 ms, which a cached font is; never swapped in later, so nothing moves);
// - first-time visitors see the size-matched fallback fonts; the web fonts download after the first
//   paint and are applied on the first click or key press (shifts right after input do not count as CLS).
const fontFaces = css.match(/@font-face\{font-family:(?:Geist|Poppins|Geist Mono);[^}]*\}/g) || []
const fontUrls = fontFaces.map(rule => rule.match(/url\(([^)]+)\)/)[1])
const pageCss = fontFaces.reduce((all, rule) => all.replace(rule, ''), css)

// The page is already complete HTML, so the app script and the web fonts are only fetched once the first
// paint is on screen (with a fallback timer for tabs opened in the background, which do not paint).
const deferScript = (html) =>
  html.replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/, (_, src) =>
    `<script>(function(){var F=${JSON.stringify(fontFaces.join(''))},U=${JSON.stringify(fontUrls)},d,f;` +
    `function add(css){var t=document.createElement('style');t.textContent=css;document.head.appendChild(t)}` +
    // On the first click or key press, (re)declare the fonts with swap: covers new visitors, and returning
    // visitors whose cached fonts were not ready in time for font-display:optional.
    `function onInput(){if(f)return;f=1;['click','keydown'].forEach(function(e){addEventListener(e,function(){add(F)},{once:true,capture:true})})}` +
    `var c;try{c=localStorage.getItem('egf')}catch(e){}if(c){add(F.replace(/font-display:swap/g,'font-display:optional'));onInput()}` +
    `function fonts(){if(c)return;U.forEach(function(u){fetch(u).catch(function(){})});try{localStorage.setItem('egf','1')}catch(e){}onInput()}` +
    `function go(){if(d)return;d=1;fonts();var s=document.createElement('script');s.type='module';s.crossOrigin='';s.src='${src}';document.head.appendChild(s)}` +
    `if(window.PerformanceObserver&&(PerformanceObserver.supportedEntryTypes||[]).indexOf('paint')>=0)new PerformanceObserver(function(l){if(l.getEntriesByName('first-contentful-paint').length)setTimeout(go)}).observe({type:'paint',buffered:true});` +
    `else addEventListener('load',function(){setTimeout(go)});setTimeout(go,2500)})()</script>`)

// '/404' is not a page, so it renders the "Page not found" screen: written to 404.html, which every host
// serves (with a 404 status) for URLs that are not a page.
const noindex = new Set()
for (const route of [...routes, '/404']) {
  let body = await render(route)
  let head = ''
  for (let m; (m = body.match(HEAD_TAG)); body = body.slice(m[0].length)) {
    // <title> stays plain (marked by main.tsx before React starts) so the page source shows a bare <title> tag.
    head += m[0].startsWith('<title>') ? m[0] : m[0].replace(/^<(\w+)/, '<$1 data-pre')
  }
  // A page with its own robots tag (the 404 page's noindex) replaces the site-wide one in index.html.
  if (/name="robots" content="[^"]*noindex/.test(head)) noindex.add(route)
  const base = head.includes('name="robots"') ? template.replace(/<meta name="robots"[^>]*>\n?/, '') : template
  // <html lang> follows the page's og:locale (en_US on the United States page), en-AU otherwise.
  const lang = (head.match(/property="og:locale" content="([a-z]{2})_([A-Z]{2})"/) || [, 'en', 'AU']).slice(1).join('-')
  const html = deferScript(inlineCss(base, pageCss))
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace('</head>', `${head}\n</head>`)
  const file = route === '/' ? 'index.html' : route.slice(1) + '.html'
  writeFileSync(dist + file, html)
  console.log('prerendered', route.padEnd(28), '->', file, (html.length / 1024).toFixed(1) + ' KB')
}

// sitemap.xml lists every indexable page (not noindex ones), dated by the last commit that changed its file in src/pages
// (today if the file has uncommitted changes or no history yet).
const today = new Date().toISOString().slice(0, 10)
const git = (...args) => { try { return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim() } catch { return '' } }
const lastmod = (file) => (git('status', '--porcelain', '--', file) ? today : git('log', '-1', '--format=%cs', '--', file) || today)
const sitemapRoutes = ['/', ...routes.filter(r => r !== '/')].filter(r => !noindex.has(r))
// The home page and the country pages list each other as language/region alternates (hreflang).
const alternates = [['x-default', '/'], ...COUNTRIES.map(c => [c.lang, c.path])]
const altLinks = (r) => alternates.some(([, p]) => p === r)
  ? alternates.map(([lang, p]) => `<xhtml:link rel="alternate" hreflang="${lang}" href="${SITE}${p}"/>`).join('')
  : ''
writeFileSync(dist + 'sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
  sitemapRoutes.map(r => `  <url><loc>${SITE}${r}</loc><lastmod>${lastmod(routeFiles[r])}</lastmod>${altLinks(r)}</url>\n`).join('') +
  '</urlset>\n')
console.log('wrote sitemap.xml with', sitemapRoutes.length, 'URLs; left out (noindex):', [...noindex].join(' '))

// Azure Static Web Apps ignores .htaccess/web.config: it reads staticwebapp.config.json instead.
writeFileSync(dist + 'staticwebapp.config.json', JSON.stringify({
  // Azure maps the clean URLs itself: /seo serves seo.html, and /seo.html and /seo/ 301 to /seo.
  // (Explicit /seo -> seo.html rewrites would also catch /seo/ and serve it as a duplicate page.)
  trailingSlash: 'never',
  routes: [
    { route: '/index.html', redirect: '/', statusCode: 301 },
    // Renamed pages: old URL (and its .html form) -> new URL.
    ...Object.entries(RENAMED).flatMap(([from, to]) => [from, from + '.html'].map(route => ({ route, redirect: to, statusCode: 301 }))),
    { route: '/assets/*', headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
  ],
  responseOverrides: { 404: { rewrite: '/404.html', statusCode: 404 } },
  globalHeaders: {
    'Cache-Control': 'no-cache',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    // Other sites cannot show these pages in a frame (clickjacking); X-Frame-Options covers older browsers.
    'Content-Security-Policy': "frame-ancestors 'self'",
    'X-Frame-Options': 'SAMEORIGIN',
    // The site uses none of these browser features, so no script on it can ask for them.
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
  mimeTypes: { '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json' },
}, null, 2))

// The stylesheet now lives inline in every page.
if (cssHref) rmSync(dist + cssHref[1].replace(/^\//, ''))
rmSync(ssrDir, { recursive: true, force: true })
