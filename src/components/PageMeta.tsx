import { BUSINESS, SITE, SOCIAL } from '../siteInfo'

type Crumb = { name: string; path: string }

interface PageMetaProps {
  title: string
  description: string
  path: string
  // Name of this page in the breadcrumb trail (Home > parent > crumb). Not used on the home page.
  crumb?: string
  parent?: Crumb
  jsonLd?: { '@graph'?: object[] }
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

const breadcrumbs = (trail: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE + c.path })),
})

// React 19 hoists <title>, <meta> and <link> into <head>.
export default function PageMeta({ title, description, path, crumb, parent, jsonLd }: PageMetaProps) {
  const url = SITE + path
  const trail = path !== '/' && crumb ? [{ name: 'Home', path: '/' }, ...(parent ? [parent] : []), { name: crumb, path }] : null
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [ORG, ...(jsonLd?.['@graph'] ?? []), ...(trail ? [breadcrumbs(trail)] : [])],
  }
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
    </>
  )
}
