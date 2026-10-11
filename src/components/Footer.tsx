import { Link } from 'react-router-dom'
import { PHONE, PORTAL_URL } from './Header'
import { BUSINESS } from '../siteInfo'

const { email: EMAIL, abn: ABN, address: ADDRESS } = BUSINESS

type FooterLink = { label: string } & ({ to: string } | { href: string })

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Products',
    links: [
      { to: '/services#microsoft', label: 'Microsoft & Licensing' },
      { to: '/services#marketing', label: 'Marketing & Growth' },
      { to: '/services#development', label: 'Development' },
      { to: '/services#communications', label: 'Business Communications' },
      { to: '/services#cloud', label: 'Cloud, Security & Support' },
      { to: '/services', label: 'All products' },
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
    title: 'Company',
    links: [
      { to: '/about', label: 'About EG Eloma' },
      { to: '/pricing', label: 'Plans & quotes' },
      { to: '/industries', label: 'Industries' },
      { to: '/blog', label: 'Blog' },
      { to: '/contact', label: 'Contact' },
      { href: PORTAL_URL, label: 'Client portal' },
    ],
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap fgrid">
        <div>
          <Link className="logo" to="/">
            <img src="/assets/logo-mark-eloma.png" alt="" width="50" height="40" />
            <span className="lw">
              <span className="lwn"><b>EG</b> Eloma</span>
              <span className="lwb">By Eloma Group</span>
            </span>
          </Link>
          <p style={{ marginTop: '14px' }}>
            Australian-owned technology partner for Microsoft, software, marketing, communications, cloud and cybersecurity. Serving Australia, the United States, Canada, the United Kingdom and New Zealand.
          </p>
          <address className="fcon">
            <a href={PHONE.href}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
              </svg>
              {PHONE.label}
            </a>
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
          <p className="k">© EG Eloma · Australian owned · AU · US · CA · UK · NZ</p>
          <nav aria-label="Legal" style={{ display: 'flex', gap: '22px' }}>
            <Link className="k" to="/privacy">Privacy</Link>
            <Link className="k" to="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
