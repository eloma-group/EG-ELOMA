import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const POPULAR = [
  { to: '/services', label: 'Services' },
  { to: '/microsoft', label: 'Microsoft' },
  { to: '/pricing', label: 'Plans' },
  { to: '/industries', label: 'Industries' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'Company' },
]

// Shown for every URL that is not a page (typos, removed pages). Prerendered to dist/404.html,
// which each host serves with a real 404 status (see scripts/prerender.mjs).
export default function NotFound() {
  return (
    <>
      <title>Page not found | EG Eloma</title>
      <meta name="robots" content="noindex" />
      <div className="phero">
        <div className="orb" aria-hidden="true">
          <svg viewBox="-640 -460 1280 920">
            <ellipse rx="470" ry="146" />
            <g transform="rotate(62)">
              <ellipse rx="470" ry="146" />
            </g>
            <g transform="rotate(-62)">
              <ellipse rx="470" ry="146" />
            </g>
            <circle r="6">
              <animateMotion dur="30s" repeatCount="indefinite" path="M470 0A470 146 0 1 1 -470 0A470 146 0 1 1 470 0" />
            </circle>
            <g transform="rotate(62)">
              <circle r="5.5">
                <animateMotion dur="36s" begin="-10s" repeatCount="indefinite" path="M-470 0A470 146 0 1 1 470 0A470 146 0 1 1 -470 0" />
              </circle>
            </g>
            <g transform="rotate(-62)">
              <circle r="6">
                <animateMotion dur="42s" begin="-20s" repeatCount="indefinite" path="M470 0A470 146 0 1 0 -470 0A470 146 0 1 0 470 0" />
              </circle>
            </g>
            <circle r="5">
              <animateMotion dur="30s" begin="-15s" repeatCount="indefinite" path="M470 0A470 146 0 1 1 -470 0A470 146 0 1 1 470 0" />
            </circle>
          </svg>
        </div>
        <Header />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link> / Error 404
          </p>
          <h1>Page not found</h1>
          <p className="lead">The page you are looking for has moved or no longer exists. Check the address, or pick up from one of the pages below.</p>
          <div className="cta">
            <Link className="btn w" to="/">Back to home</Link>
            <Link className="btn d" to="/contact">Contact us</Link>
          </div>
          <nav className="pl" aria-label="Popular pages" style={{ marginTop: '28px' }}>
            {POPULAR.map(p => (
              <Link key={p.to} to={p.to}>{p.label}</Link>
            ))}
          </nav>
        </section>
      </div>
      <Footer />
    </>
  )
}
