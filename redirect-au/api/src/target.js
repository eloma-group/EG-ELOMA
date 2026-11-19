// Where a request to an old domain (egeloma.com.au, egdigital.com.au) should go: the same path and query on egeloma.com.
// The main site then applies its own 301s for old URLs (/seo, /blog-…), see scripts/build.mjs.

export const SITE = 'https://egeloma.com'

export function target(originalUrl) {
  let url
  try {
    url = new URL(originalUrl)
  } catch {
    return SITE + '/'
  }
  // /index.html and /index → the home page.
  const path = url.pathname.replace(/\/index(\.html?)?$/i, '/')
  return SITE + path + url.search
}
