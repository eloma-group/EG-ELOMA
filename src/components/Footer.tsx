import { Link } from 'react-router-dom'
import { PHONE, PORTAL_URL, showsPhone } from './Header'
import { BUSINESS, COUNTRIES, SOCIAL, type CountryCode } from '../siteInfo'

const { email: EMAIL, abn: ABN, address: ADDRESS } = BUSINESS

type FooterLink = { label: string } & ({ to: string } | { href: string })

const SOCIAL_ICONS: Record<(typeof SOCIAL)[number]['label'], string> = {
  Instagram: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z',
  Facebook: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z',
  Threads: 'M17.07 11.25c-.09-.04-.18-.08-.27-.12-.16-2.94-1.77-4.63-4.47-4.65h-.04c-1.62 0-2.96.69-3.79 1.94l1.49 1.02c.62-.94 1.59-1.14 2.3-1.14h.03c.89.01 1.56.27 1.99.77.31.37.52.87.63 1.51-.79-.13-1.65-.18-2.56-.12-2.58.15-4.24 1.65-4.13 3.74.06 1.06.58 1.97 1.48 2.56.76.5 1.73.74 2.75.69 1.34-.07 2.39-.59 3.13-1.53.56-.72.91-1.65 1.07-2.82.64.39 1.12.9 1.38 1.51.45 1.05.47 2.77-.93 4.17-1.23 1.23-2.71 1.76-4.94 1.77-2.48-.02-4.35-.81-5.57-2.37C5.48 16.8 4.9 14.71 4.88 12c.02-2.71.6-4.8 1.73-6.24 1.22-1.56 3.09-2.35 5.57-2.37 2.5.02 4.4.82 5.66 2.38.62.77 1.08 1.73 1.39 2.85l1.75-.47c-.37-1.38-.96-2.57-1.77-3.56C17.6 2.58 15.24 1.6 12.19 1.58h-.01C9.13 1.6 6.79 2.58 5.23 4.57 3.84 6.34 3.12 8.8 3.1 11.99v.02c.02 3.19.74 5.65 2.13 7.42 1.56 1.99 3.9 2.97 6.95 2.99h.01c2.71-.02 4.62-.73 6.2-2.3 2.06-2.06 2-4.65 1.32-6.23-.49-1.14-1.42-2.06-2.64-2.64zm-4.68 4.4c-1.13.06-2.31-.44-2.37-1.53-.04-.8.57-1.7 2.42-1.81.21-.01.42-.02.63-.02.67 0 1.3.07 1.87.19-.21 2.66-1.46 3.11-2.55 3.17z',
  LinkedIn: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
}

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Products',
    links: [
      { to: '/products#microsoft', label: 'Microsoft & Licensing' },
      { to: '/products#marketing', label: 'Marketing & Growth' },
      { to: '/products#development', label: 'Development' },
      { to: '/products#communications', label: 'Business Communications' },
      { to: '/products#cloud', label: 'Cloud, Security & Support' },
      { to: '/products', label: 'All products' },
    ],
  },
  {
    title: 'Popular',
    links: [
      { to: '/website-development', label: 'Website Development' },
      { to: '/seo', label: 'Search Engine Optimisation' },
      { to: '/social-media', label: 'Social Media Management' },
      { to: '/microsoft', label: 'Microsoft Products' },
      { to: '/toll-free-number', label: 'Toll-Free Number' },
      { to: '/cybersecurity', label: 'Cybersecurity' },
    ],
  },
  {
    title: 'Countries',
    links: COUNTRIES.map(c => ({ to: c.path, label: c.name })),
  },
  {
    title: 'Company',
    links: [
      { to: '/company', label: 'About EG Eloma' },
      { to: '/plans', label: 'Plans & quotes' },
      { to: '/industries', label: 'Industries' },
      { to: '/blog', label: 'Blog' },
      { to: '/contact', label: 'Contact' },
      { href: PORTAL_URL, label: 'Client portal' },
    ],
  },
]

export default function Footer({ country }: { country?: CountryCode }) {
  return (
    <footer>
      <div className="wrap fgrid">
        <div>
          <Link className="logo" to="/">
            <img src="/assets/logo-mark-eloma.png" alt="EG Eloma logo" width="50" height="40" />
            <span className="lw">
              <span className="lwn"><b>EG</b> Eloma</span>
              <span className="lwb">By Eloma Group</span>
            </span>
          </Link>
          <p style={{ marginTop: '14px' }}>
            Australian-owned technology partner for Microsoft, software, marketing, communications, cloud and cybersecurity. Serving Australia, the United States, Canada, the United Kingdom and New Zealand.
          </p>
          <address className="fcon">
            {showsPhone(country) && (
              <a href={PHONE.href}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                </svg>
                {PHONE.label} (Australia)
              </a>
            )}
            <a href={'mailto:' + EMAIL}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {EMAIL}
            </a>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              {ADDRESS}
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </svg>
              ABN {ABN}
            </span>
          </address>
          <ul className="fsoc" aria-label="EG Eloma on social media">
            {SOCIAL.map(s => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`EG Eloma on ${s.label}`} title={s.label}>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={SOCIAL_ICONS[s.label]} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {COLUMNS.map(col => (
          <div key={col.title}>
            <h2 className="fh">{col.title}</h2>
            <ul>
              {col.links.map(l => (
                <li key={l.label}>
                  {'to' in l ? <Link to={l.to}>{l.label}</Link> : <a href={l.href} rel="noopener">{l.label}</a>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap">
        <p className="tm">
          Microsoft, Microsoft 365, Azure, Teams, Copilot and other Microsoft product names are trademarks of the Microsoft group of companies. Google and Meta product names are trademarks of their respective owners. Mock-ups, example scenarios and illustrative figures on this site are labelled as such and are not guarantees of results. Third-party offers, including Microsoft nonprofit offers, are set by their providers and may change.
        </p>
      </div>
      <div className="fbot">
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', paddingBlock: '22px' }}>
          <p className="k">
            © EG Eloma · Australian owned
            {COUNTRIES.map(c => (
              <span key={c.code}>
                {' · '}
                <Link to={c.path} hrefLang={c.lang}>{c.code}</Link>
              </span>
            ))}
          </p>
          <nav aria-label="Legal" style={{ display: 'flex', gap: '22px' }}>
            <Link className="k" to="/privacy">Privacy</Link>
            <Link className="k" to="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
