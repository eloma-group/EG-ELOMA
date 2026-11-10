// Meta Pixel events. The base code in index.html loads the pixel and sends the first PageView.
declare global {
  interface Window { fbq?: (...args: unknown[]) => void; dataLayer?: unknown[] }
}

export const track = (event: 'PageView' | 'Lead' | 'Contact' | 'Schedule') => window.fbq?.('track', event)

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
