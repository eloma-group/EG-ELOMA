// Live site address, used for canonical URLs and structured data.
export const SITE = 'https://egeloma.com.au'

// Business details shown in the header, footer and legal pages. Change them here only.
export const BUSINESS = {
  name: 'EG Eloma',
  // The group EG Eloma belongs to.
  parent: 'Eloma Group',
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
  { label: 'Threads', href: 'https://www.threads.net/@egeloma.au' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/egeloma-au/' },
] as const

// Date shown on the Privacy Policy and Terms of Use pages.
export const LEGAL_UPDATED = '14 October 2026'
