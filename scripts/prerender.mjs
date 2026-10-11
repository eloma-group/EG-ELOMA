// Turns every route into a static HTML file after `vite build`, so pages show instantly
// (and search engines see the full content) before any JavaScript runs.
// "/" -> dist/index.html, "/seo" -> dist/seo.html (servers map /seo to seo.html, see public/.htaccess).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = root + 'dist/'
const ssrDir = root + 'dist-ssr/'

const { render, routes } = await import(pathToFileURL(ssrDir + 'entry-server.js').href)
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

// Empty shell for URLs that are not a page (old .html links, typos): the app redirects them on the client.
writeFileSync(dist + 'app-shell.html', inlineCss(template))

for (const route of routes) {
  let body = await render(route)
  let head = ''
  for (let m; (m = body.match(HEAD_TAG)); body = body.slice(m[0].length)) {
    head += m[0].replace(/^<(\w+)/, '<$1 data-pre')
  }
  const html = deferScript(inlineCss(template, pageCss))
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace('</head>', `${head}\n</head>`)
  const file = route === '/' ? 'index.html' : route.slice(1) + '.html'
  writeFileSync(dist + file, html)
  console.log('prerendered', route.padEnd(28), '->', file, (html.length / 1024).toFixed(1) + ' KB')
}

// Azure Static Web Apps ignores .htaccess/web.config: it reads staticwebapp.config.json instead.
const pageRoutes = routes.filter(r => r !== '/')
writeFileSync(dist + 'staticwebapp.config.json', JSON.stringify({
  routes: [
    { route: '/index.html', redirect: '/', statusCode: 301 },
    ...pageRoutes.map(r => ({ route: r + '.html', redirect: r, statusCode: 301 })),
    ...pageRoutes.map(r => ({ route: r, rewrite: r + '.html' })),
    { route: '/assets/*', headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
  ],
  navigationFallback: { rewrite: '/app-shell.html', exclude: ['/assets/*', '/*.{png,jpg,svg,ico,webp,woff2,js,css,json,xml,txt}'] },
  globalHeaders: { 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin' },
  mimeTypes: { '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json' },
}, null, 2))

// The stylesheet now lives inline in every page.
if (cssHref) rmSync(dist + cssHref[1].replace(/^\//, ''))
rmSync(ssrDir, { recursive: true, force: true })
