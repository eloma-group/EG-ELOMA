import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BUSINESS } from '../siteInfo'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Products' },
  { to: '/microsoft', label: 'Microsoft' },
  { to: '/pricing', label: 'Plans' },
  { to: '/industries', label: 'Industries' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'Company' },
  { to: '/contact', label: 'Contact' },
]

export const PORTAL_URL = 'https://teamegdigital.com'
export const PHONE = BUSINESS.phone

export default function Header({ active }: { active?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="nav">
        <Link className="logo" to="/" aria-label="EG Eloma home">
          <img src="/assets/logo-mark-eloma.png" alt="" width="50" height="40" />
          <span className="lw">
            <span className="lwn"><b>EG</b> Eloma</span>
            <span className="lwb">By Eloma Group</span>
          </span>
          <small>Microsoft Partner</small>
        </Link>
        <nav aria-label="Main">
          <ul>
            {NAV.map(n => (
              <li key={n.to}>
                <Link to={n.to} aria-current={n.to === active ? 'page' : undefined}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="r">
          <a className="ln tel" href={PHONE.href}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
            </svg>
            {PHONE.label}
          </a>
          <a className="ln" href={PORTAL_URL} rel="noopener">Client login</a>
          <Link className="btn w" to="/contact">Book a consultation</Link>
          <button className="menu-btn" type="button" aria-expanded={open} aria-controls="mnav" aria-label="Menu" onClick={() => setOpen(o => !o)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      <nav className={open ? 'mnav open' : 'mnav'} id="mnav" aria-label="Mobile">
        {NAV.map(n => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        <a href={PHONE.href}>Call {PHONE.label}</a>
        <a href={PORTAL_URL} rel="noopener">Client login</a>
      </nav>
    </header>
  )
}
