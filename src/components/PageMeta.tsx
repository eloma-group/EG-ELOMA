import { useEffect } from 'react'
import { BUSINESS, COUNTRIES, SITE, SOCIAL } from '../siteInfo'

type Crumb = { name: string; path: string }

interface PageMetaProps {
  title: string
  description: string
  path: string
  // Name of this page in the breadcrumb trail (Home > parent > crumb). Not used on the home page.
  crumb?: string
  parent?: Crumb
  jsonLd?: { '@graph'?: object[] }
  // Keep the page out of search results and the sitemap (links on it are still followed).
  noindex?: boolean
  // Language and region of the page (country pages): sets <html lang> and og:locale.
  locale?: string
}

// Products by group, as on the Products page: the company's offer catalog in structured data.
const PRODUCT_GROUPS: [group: string, products: [name: string, path: string][]][] = [
  ['Microsoft & Licensing', [['Microsoft Products', '/microsoft'], ['Microsoft Licensing', '/microsoft-licensing'], ['Microsoft Product Development', '/microsoft-development']]],
  ['Marketing & Growth', [['Social Media Management', '/social-media'], ['Search Engine Optimisation (SEO)', '/seo'], ['Local Listing (Google Business Profile)', '/local-listing'], ['Google & Meta Ads', '/google-meta-ads'], ['PPC (Pay-Per-Click)', '/ppc'], ['Designing (Design Hub)', '/design']]],
  ['Development', [['Website Development', '/website-development'], ['Software Development', '/software-development'], ['SaaS Development', '/saas-development'], ['App Development', '/app-development'], ['API Integrations', '/api-integrations']]],
  ['Business Communications', [['Toll-Free Number', '/toll-free-number'], ['Virtual Mobile Number', '/virtual-mobile-number'], ['Landline Number', '/landline-number'], ['IVR System', '/ivr-system'], ['Virtual Customer Care Support', '/virtual-customer-care']]],
  ['Cloud, Security & Support', [['Cybersecurity', '/cybersecurity'], ['Cloud Maintenance', '/cloud-maintenance'], ['Server Maintenance', '/server-maintenance'], ['Support Services', '/support-services']]],
]

// The company, added to every page. ProfessionalService makes it a local business with an address for Google. Pages point at it with { "@id": ORG_ID }.
const ORG_ID = SITE + '/#organization'
const PHONE = '+61-' + BUSINESS.phone.label.replace(/ /g, '-')
const ORG = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: BUSINESS.name,
  alternateName: BUSINESS.formerName,
  legalName: BUSINESS.legalName,
  url: SITE + '/',
  logo: { '@type': 'ImageObject', '@id': SITE + '/#logo', url: SITE + '/assets/logo-mark-eloma.png', contentUrl: SITE + '/assets/logo-mark-eloma.png', width: 149, height: 120, caption: BUSINESS.name },
  image: SITE + '/og-image.png',
  description: 'Australian-owned Microsoft, software, marketing, business communications and cybersecurity partner based in Melbourne.',
  telephone: PHONE,
  email: BUSINESS.email,
  taxID: BUSINESS.abn,
  address: { '@type': 'PostalAddress', ...BUSINESS.postal },
  parentOrganization: { '@type': 'Organization', ...BUSINESS.parent },
  identifier: { '@type': 'PropertyValue', propertyID: 'ABN', value: BUSINESS.abn.replace(/ /g, '') },
  areaServed: ['Australia', 'United States', 'Canada', 'United Kingdom', 'New Zealand'].map(name => ({ '@type': 'Country', name })),
  sameAs: SOCIAL.map(s => s.href),
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'customer service', telephone: PHONE, email: BUSINESS.email, areaServed: 'AU', availableLanguage: 'English' },
    { '@type': 'ContactPoint', contactType: 'sales', telephone: PHONE, email: BUSINESS.email, url: SITE + '/contact', areaServed: ['AU', 'US', 'CA', 'GB', 'NZ'], availableLanguage: 'English' },
  ],
  knowsAbout: ['Microsoft 365', 'Microsoft licensing', 'Website development', 'Software development', 'App development', 'Search engine optimisation', 'Digital marketing', 'Business phone numbers', 'Cloud computing', 'Cybersecurity', 'Essential Eight'],
  memberOf: ['Australian Signals Directorate', 'Women’s Empowerment Principles (WEPs)', 'Australian Red Cross Lifeblood'].map(name => ({ '@type': 'Organization', name })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'EG Eloma products',
    url: SITE + '/products',
    itemListElement: PRODUCT_GROUPS.map(([group, products]) => ({
      '@type': 'OfferCatalog',
      name: group,
      itemListElement: products.map(([name, path]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, url: SITE + path } })),
    })),
  },
}

// The site itself, on the home page.
const WEBSITE = { '@type': 'WebSite', '@id': SITE + '/#website', url: SITE + '/', name: BUSINESS.name, publisher: { '@id': ORG_ID }, inLanguage: 'en-AU' }

// The home page (for everyone) and the country pages are alternate versions of each other for search engines.
const ALTERNATES = [{ lang: 'x-default', path: '/' }, ...COUNTRIES.map(c => ({ lang: c.lang, path: c.path }))]

const breadcrumbs = (trail: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE + c.path })),
})

// React 19 hoists <title>, <meta> and <link> into <head>.
export default function PageMeta({ title, description, path, crumb, parent, jsonLd, noindex, locale = 'en-AU' }: PageMetaProps) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  const url = SITE + path
  const trail = path !== '/' && crumb ? [{ name: 'Home', path: '/' }, ...(parent ? [parent] : []), { name: crumb, path }] : null
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [ORG, ...(path === '/' ? [WEBSITE] : []), ...(jsonLd?.['@graph'] ?? []), ...(trail ? [breadcrumbs(trail)] : [])],
  }
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={url} />
      {ALTERNATES.some(a => a.path === path) && ALTERNATES.map(a => <link key={a.lang} rel="alternate" hrefLang={a.lang} href={SITE + a.path} />)}
      <meta property="og:locale" content={locale.replace('-', '_')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
    </>
  )
}
