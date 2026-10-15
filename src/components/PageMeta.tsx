import { BUSINESS, SITE, SOCIAL } from '../siteInfo'

type Crumb = { name: string; path: string }

export interface PageMetaProps {
  title: string
  description: string
  path: string
  // Name of this page in the breadcrumb trail (Home > parent > crumb). Not used on the home page.
  crumb?: string
  parent?: Crumb
  jsonLd?: { '@graph'?: object[] }
}

// The company, added to every page. ProfessionalService makes it a local business with an address for Google. Pages point at it with { "@id": ORG_ID }.
const ORG_ID = SITE + '/#org'
const ORG = {
  '@type': ['Corporation', 'ProfessionalService'],
  '@id': ORG_ID,
  name: BUSINESS.name,
  url: SITE + '/',
  logo: SITE + '/assets/logo-mark-eloma.png',
  alternateName: 'EG Eloma | Microsoft, Software, Marketing & Cybersecurity',
  description: 'Australian-owned technology partner for Microsoft, software, marketing, communications, cloud and cybersecurity services.',
  address: { '@type': 'PostalAddress', ...BUSINESS.postal },
  telephone: BUSINESS.phone.label,
  email: BUSINESS.email,
  taxID: 'ABN ' + BUSINESS.abn,
  areaServed: ['Australia', 'United States', 'Canada', 'United Kingdom', 'New Zealand'].map(name => ({ '@type': 'Country', name })),
  sameAs: SOCIAL.map(s => s.href),
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone.href.replace('tel:', ''),
      contactType: 'customer service',
      email: BUSINESS.email,
      areaServed: 'AU',
      availableLanguage: 'en',
    },
  ],
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
