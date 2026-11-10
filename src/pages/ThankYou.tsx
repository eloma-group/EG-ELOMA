import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LEAD_FLAG, track } from '../pixel'
import { BUSINESS } from '../siteInfo'

const meta = {
  title: 'Thank You | EG Eloma',
  description: 'Thanks for contacting EG Eloma. A specialist will reply within one business day.',
  path: '/thank-you',
  crumb: 'Thank you',
  noindex: true,
}

// Where the contact form sends people after a successful enquiry. Google Ads counts a conversion when this URL loads.
export default function ThankYou() {
  // Count the Meta Pixel Lead once per enquiry, not on reloads or direct visits.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(LEAD_FLAG)) {
        sessionStorage.removeItem(LEAD_FLAG)
        track('Lead')
      }
    } catch {}
  }, [])

  return (
    <>
      <PageMeta {...meta} />
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
            <span>/</span>
            <span>Thank you</span>
          </p>
          <h1>Thank you, we've got your enquiry</h1>
          <p className="lead">
            {"A specialist will reply within one business day. If it's urgent, email us at "}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
          </p>
          <div className="cta">
            <Link className="btn w" to="/">Back to home</Link>
            <Link className="btn d" to="/blog">Read our blog</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
