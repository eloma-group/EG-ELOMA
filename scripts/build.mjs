// Builds the site in site/ into dist/ (what Azure Static Web Apps serves).
// - Adds the Google Tag Manager, Meta Pixel, Google Search Console and Pinterest tags to every page,
//   plus assets/track.js (GTM page views, Meta Pixel events, Google Ads lead conversion).
// - Serves clean URLs: links "services/seo.html" become "/services/seo", canonical URLs drop ".html".
// - Adds ?v=<hash> to CSS/JS links so browsers pick up changes straight away.
// - Writes sitemap.xml and staticwebapp.config.json (301s from the old site's URLs to the new pages).
import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const src = root + 'site/'
const dist = root + 'dist/'
const SITE = 'https://egeloma.com'

const GTM_ID = 'GTM-NNJK4GCG'
const PIXEL_ID = '4397938067133138'

const HEAD_TOP = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');</script>
<!-- End Google Tag Manager -->
<meta name="google-site-verification" content="j76VNDkhTJUYx6CERezc3DDBNqwMDS-skQo8uTs1VoY" />
<meta name="p:domain_verify" content="024c5d844002bfd8ce7de2ec61d525cb"/>`

// fbq queues events at once; fbevents.js is fetched on the first scroll, tap, click or key press,
// or 3.5 s after the page has loaded, so it never competes with loading the page.
const HEAD_END = `<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];var d,E=['scroll','pointerdown','keydown','touchstart'];function l(){if(d)return;d=1;
E.forEach(function(x){f.removeEventListener(x,l,true)});t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}
E.forEach(function(x){f.addEventListener(x,l,{capture:true,passive:true,once:true})});
function w(){setTimeout(l,3500)}if(b.readyState==='complete')w();else f.addEventListener('load',w)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');
</script>
<!-- End Meta Pixel Code -->`

const BODY_TOP = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<noscript><img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1"></noscript>`

// Old site URLs -> new pages (301). Each also redirects with ".html".
const REDIRECTS = {
  '/services': '/products',
  '/pricing': '/plans',
  '/about': '/company',
  '/industries': '/products',
  '/australia': '/',
  '/united-states': '/',
  '/canada': '/',
  '/united-kingdom': '/',
  '/new-zealand': '/',
  '/software-development': '/custom-software',
  '/design': '/services/designing',
  '/microsoft-development': '/services/microsoft-product-development',
  '/social-media': '/services/social-media-management',
  ...Object.fromEntries(
    ['seo', 'website-development', 'api-integrations', 'app-development', 'cloud-maintenance', 'cybersecurity', 'google-meta-ads',
      'ivr-system', 'landline-number', 'local-listing', 'microsoft-licensing', 'ppc', 'saas-development', 'server-maintenance',
      'support-services', 'toll-free-number', 'virtual-customer-care', 'virtual-mobile-number'].map(s => ['/' + s, '/services/' + s]),
  ),
  '/blog': '/updates',
  '/blog-1300-vs-1800-numbers': '/services/toll-free-number',
  '/blog-black-friday-ads-plan': '/services/google-meta-ads',
  '/blog-choose-it-support': '/services/support-services',
  '/blog-copilot-readiness': '/services/microsoft-365-copilot',
  '/blog-core-web-vitals': '/services/website-development',
  '/blog-essential-eight-guide': '/services/cybersecurity',
  '/blog-google-ai-answers-guide': '/services/seo',
  '/blog-google-vs-meta-ads': '/services/google-meta-ads',
  '/blog-local-seo-checklist': '/services/local-listing',
  '/blog-microsoft-365-plans-compared': '/services/microsoft-licensing',
  '/blog-microsoft-nonprofit': '/services/microsoft-for-nonprofits',
  '/blog-notifiable-data-breaches': '/services/cybersecurity',
  '/blog-saas-mvp-planning': '/services/saas-development',
  '/blog-teams-phone': '/services/teams-calling',
}

const walk = (dir, rel = '') =>
  readdirSync(dir + rel, { withFileTypes: true }).flatMap(e => (e.isDirectory() ? walk(dir, rel + e.name + '/') : [rel + e.name]))

// "services/seo.html" -> "/services/seo", "index.html" -> "/", "404.html" -> "/404"
const urlOf = file => '/' + file.replace(/\.html$/, '').replace(/(^|\/)index$/, '$1')
const clean = path => path.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '')

// Empty dist/ (not remove it: on Windows a folder that a terminal is open in can't be deleted).
mkdirSync(dist, { recursive: true })
for (const e of readdirSync(dist)) rmSync(dist + e, { recursive: true, force: true })
cpSync(src, dist, { recursive: true })
const files = walk(dist)

const hash = file => createHash('sha256').update(readFileSync(dist + file)).digest('hex').slice(0, 8)
const assetHash = Object.fromEntries(files.filter(f => /^assets\/.+\.(css|js)$/.test(f)).map(f => ['/' + f, hash(f)]))

// Links inside the chat assistant and updates scripts ("services/seo.html") also point at clean URLs.
for (const f of files.filter(f => /^assets\/.+\.js$/.test(f))) {
  const js = readFileSync(dist + f, 'utf8')
  const out = js.replace(/(['"(/])((?:[a-z0-9-]+\/)*[a-z0-9-]+)\.html(?=[#'"?)])/g, (_, q, p) => q + (p === 'index' ? '' : p))
  if (out !== js) writeFileSync(dist + f, out)
}

const SKIP = /^(?:[a-z][a-z0-9+.-]*:|#|\/\/|\$|\{)/i
const noindex = []
for (const file of files.filter(f => f.endsWith('.html'))) {
  // 404.html is served for any missing URL, so its links resolve from the site root.
  const base = new URL(file === '404.html' ? '/' : '/' + file, SITE)
  let html = readFileSync(dist + file, 'utf8')

  // Relative and .html links -> root-relative clean URLs; CSS/JS get ?v=<hash>.
  html = html.replace(/\b(href|src|action)="([^"]*)"/g, (all, attr, val) => {
    if (!val || SKIP.test(val) || val.includes('${')) return all
    const u = new URL(val, base)
    if (u.origin !== SITE) return all
    let path = clean(u.pathname)
    if (assetHash[u.pathname] && !u.search) return `${attr}="${u.pathname}?v=${assetHash[u.pathname]}"`
    return `${attr}="${path}${u.search}${u.hash}"`
  })
  // Canonical, og:url and structured data: https://egeloma.com/x.html -> https://egeloma.com/x
  html = html.replace(/https:\/\/www\.egeloma\.com\/((?:[a-z0-9-]+\/)*[a-z0-9-]+)\.html/g, (_, p) => SITE + (p === 'index' ? '/' : '/' + p))

  html = html
    .replace(/(<meta name="viewport"[^>]*>)/, `$1\n${HEAD_TOP}`)
    .replace('</head>', `${HEAD_END}\n</head>`)
    .replace(/<body([^>]*)>/, `<body$1>\n${BODY_TOP}`)
    .replace('</body>', '<script src="/assets/track.js?v=' + assetHash['/assets/track.js'] + '"></script>\n</body>')
    .replace('<html lang="en">', '<html lang="en-AU">')
  for (const tag of ['GTM-NNJK4GCG', 'google-site-verification', 'fbevents.js', 'track.js'])
    if (!html.includes(tag)) throw new Error(`${file}: could not add ${tag}`)

  if (/<meta name="robots" content="[^"]*noindex/.test(html)) noindex.push(urlOf(file))
  writeFileSync(dist + file, html)
}

// sitemap.xml: every indexable page, dated by the last commit that changed its source file (today if changed since).
const today = new Date().toISOString().slice(0, 10)
const git = (...args) => { try { return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim() } catch { return '' } }
const lastmod = file => (git('status', '--porcelain', '--', 'site/' + file) ? today : git('log', '-1', '--format=%cs', '--', 'site/' + file) || today)
const pages = files.filter(f => f.endsWith('.html') && !noindex.includes(urlOf(f)))
  .sort((a, b) => (a === 'index.html' ? -1 : b === 'index.html' ? 1 : a.split('/').length - b.split('/').length || a.localeCompare(b)))
writeFileSync(dist + 'sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages.map(f => `  <url><loc>${SITE}${urlOf(f)}</loc><lastmod>${lastmod(f)}</lastmod></url>\n`).join('') +
  '</urlset>\n')

// Azure Static Web Apps configuration.
writeFileSync(dist + 'staticwebapp.config.json', JSON.stringify({
  // Azure maps clean URLs itself: /contact serves contact.html, and /contact.html and /contact/ 301 to /contact.
  trailingSlash: 'never',
  // Managed Azure Functions in api/ (/api/contact, /api/quote, /api/subscribe).
  platform: { apiRuntime: 'node:22' },
  routes: [
    { route: '/index.html', redirect: '/', statusCode: 301 },
    ...Object.entries(REDIRECTS).flatMap(([from, to]) => [from, from + '.html'].map(route => ({ route, redirect: to, statusCode: 301 }))),
    // CSS and JS links carry ?v=<hash>; images and fonts are cached for a week.
    { route: '/assets/*', headers: { 'Cache-Control': 'public, max-age=604800' } },
  ],
  responseOverrides: { 404: { rewrite: '/404.html', statusCode: 404 } },
  globalHeaders: {
    'Cache-Control': 'no-cache',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    // Other sites cannot show these pages in a frame (clickjacking); X-Frame-Options covers older browsers.
    'Content-Security-Policy': "frame-ancestors 'self'",
    'X-Frame-Options': 'SAMEORIGIN',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
  mimeTypes: { '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json' },
}, null, 2))

console.log(`built ${files.filter(f => f.endsWith('.html')).length} pages into dist/; sitemap.xml has ${pages.length} URLs; not indexed: ${noindex.join(' ')}`)
