// Meta Pixel events. The base code in index.html loads the pixel and sends the first PageView.
declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

export const track = (event: 'PageView' | 'Lead' | 'Contact' | 'Schedule') => window.fbq?.('track', event)

// The site switches pages without reloading, so each in-app navigation sends its own PageView.
// Starts at the landing URL, which the base code has already counted.
let lastPath = typeof location === 'undefined' ? '' : location.pathname

export const trackPageView = (pathname: string) => {
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
