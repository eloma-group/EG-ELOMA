// Live site address, used for canonical URLs and structured data.
export const SITE = 'https://egeloma.com.au'

// Business details shown in the header, footer and legal pages. Change them here only.
export const BUSINESS = {
  name: 'EG Eloma',
  // Registered company name, as on the ABN Lookup (abr.business.gov.au).
  legalName: 'EG Digital Australia Pty Ltd',
  formerName: 'EG Digital',
  // The group EG Eloma belongs to.
  parent: { name: 'Eloma Group', url: 'https://elomagroup.com.au/' },
  abn: '76 693 175 012',
  phone: { label: '1800 054 555', href: 'tel:1800054555' },
  email: 'connect@egeloma.com.au',
  address: '71 Gipps Street, Collingwood, Melbourne, VIC 3066, Australia',
  // The same address split into parts, for structured data.
  postal: { streetAddress: '71 Gipps Street', addressLocality: 'Collingwood', addressRegion: 'VIC', postalCode: '3066', addressCountry: 'AU' },
  state: 'Victoria',
}

// Social profiles linked from the footer.
export const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/egeloma.au/' },
  { label: 'Facebook', href: 'https://www.facebook.com/egeloma.au' },
  { label: 'Threads', href: 'https://www.threads.com/@egeloma.au' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/egeloma-au/' },
] as const

// Countries we serve, each with its own page. The phone number is shown on Australian and global pages only;
// pages for the other countries show the email address instead.
export const COUNTRIES = [
  { code: 'AU', name: 'Australia', path: '/australia', lang: 'en-AU', currency: 'AUD', blurb: '1300 & 1800 numbers, Essential Eight aligned security and local SEO in every state.' },
  { code: 'US', name: 'United States', path: '/united-states', lang: 'en-US', currency: 'USD', blurb: '1-800 toll-free numbers, websites, SEO and Microsoft 365 for businesses in all 50 states.' },
  { code: 'CA', name: 'Canada', path: '/canada', lang: 'en-CA', currency: 'CAD', blurb: 'Toll-free numbers, bilingual-ready websites and managed IT across every province.' },
  { code: 'UK', name: 'United Kingdom', path: '/united-kingdom', lang: 'en-GB', currency: 'GBP', blurb: '0800 freephone numbers, SEO and Microsoft 365, with Cyber Essentials preparation.' },
  { code: 'NZ', name: 'New Zealand', path: '/new-zealand', lang: 'en-NZ', currency: 'NZD', blurb: '0800 numbers, websites and IT support on trans-Tasman hours.' },
] as const

export type CountryCode = (typeof COUNTRIES)[number]['code']

// Date shown on the Privacy Policy and Terms of Use pages.
export const LEGAL_UPDATED = '14 October 2026'
