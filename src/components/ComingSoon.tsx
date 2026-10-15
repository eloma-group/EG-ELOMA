import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Shown for every page except the homepage while the site is locked (see SITE_LOCKED in App.tsx).
export default function ComingSoon() {
  return (
    <>
      <title>Coming soon | EG Eloma</title>
      <meta name="robots" content="noindex" />
      <div className="phero">
        <div className="orb" aria-hidden="true">
          <svg aria-hidden="true" viewBox="-640 -460 1280 920">
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
            <Link to="/">Home</Link>
          </p>
          <h1>Coming soon</h1>
          <p className="lead">This page is being prepared and will be available shortly.</p>
          <div className="cta">
            <Link className="btn w" to="/">Back to home</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
