// Meta Pixel events. The base code in index.html loads the pixel and sends the first PageView.
declare global {
  interface Window { fbq?: (...args: unknown[]) => void; dataLayer?: unknown[] }
}

export const track = (event: 'PageView' | 'Lead' | 'Contact' | 'Schedule') => window.fbq?.('track', event)

// Google Ads "Submit lead form" conversion. The site has no Google Ads base tag, so this loads gtag.js for the
// account the first time it is needed (it shares the dataLayer with Google Tag Manager) and then sends the conversion.
const ADS_ID = 'AW-18565910760'

export const trackAdsConversion = () => {
  const dl = (window.dataLayer ??= [])
  // gtag.js only reads `arguments` objects from the dataLayer, not plain arrays.
  // eslint-disable-next-line prefer-rest-params
  const gtag = function (..._: unknown[]) { dl.push(arguments) }
  if (!document.querySelector(`script[src*="${ADS_ID}"]`)) {
    const s = document.createElement('script')
    s.async = true
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ADS_ID
    document.head.appendChild(s)
    gtag('js', new Date())
    gtag('config', ADS_ID)
  }
  gtag('event', 'conversion', { send_to: ADS_ID + '/ey8OCOfKqLUdEOih9ZRF', value: 1.0, currency: 'AUD' })
}

// sessionStorage key the contact form sets before going to /thank-you, which sends Lead once and clears it.
export const LEAD_FLAG = 'eg-lead'

// The site switches pages without reloading, so each in-app navigation sends its own PageView.
// Starts at the landing URL, which the base code has already counted.
let lastPath = typeof location === 'undefined' ? '' : location.pathname

// Google Tag Manager: every page, the landing one included, pushes "virtual_page_view" to the dataLayer,
// so one Custom Event trigger in GTM fires on each page the visitor sees.
let lastGtmPath = ''

export const trackPageView = (pathname: string) => {
  if (pathname !== lastGtmPath) {
    lastGtmPath = pathname
    ;(window.dataLayer ??= []).push({ event: 'virtual_page_view', page_path: pathname, page_location: location.href, page_title: document.title })
  }
  if (pathname === lastPath) return
  lastPath = pathname
  track('PageView')
}

// Clicks on any phone link ("Call us", the number in the header, footer and contact page).
if (typeof document !== 'undefined') {
  document.addEventListener('click', e => {
    if ((e.target as Element).closest?.('a[href^="tel:"]')) track('Contact')
  })
}
