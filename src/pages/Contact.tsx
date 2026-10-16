import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import ContactForm from '../components/ContactForm'
import { BUSINESS } from '../siteInfo'
import Header, { PORTAL_URL } from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Contact EG Eloma | Book a Free Consultation",
  "description": "Book a free consultation with EG Eloma. Microsoft, software, marketing, communications, cloud and cybersecurity for every industry in AU, US, CA, UK and NZ.",
  "crumb": "Contact",
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "url": "https://egeloma.com.au/contact",
        "name": "Contact EG Eloma",
        "about": {
          "@id": "https://egeloma.com.au/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I call you?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Call us on 1800 054 555 during business hours; existing clients can also call the support line."
            }
          },
          {
            "@type": "Question",
            "name": "Do you meet in person?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We meet online by default and in person where practical."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly will you reply?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Within one business day, usually much sooner."
            }
          },
          {
            "@type": "Question",
            "name": "Is the consultation really free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. There is no cost and no obligation."
            }
          },
          {
            "@type": "Question",
            "name": "What should I prepare?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Just a short description of your business and what you'd like to achieve. We'll take it from there."
            }
          },
          {
            "@type": "Question",
            "name": "I'm an existing client. Where do I get help?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use the client portal to raise a ticket 24/7, or contact your account manager."
            }
          }
        ]
      }
    ]
  },
  "path": "/contact"
}

export default function Contact() {
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
        <Header active="/contact" />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </p>
          <h1>Book a free consultation</h1>
          <p className="lead">Tell us about your business. A specialist will reply within one business day.</p>
          <div className="tbar">
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Australian owned
            </span>
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Microsoft Partner
            </span>
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              ASD Essential Eight aligned
            </span>
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              24/7 support
            </span>
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Fixed written quotes
            </span>
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              5 countries
            </span>
          </div>
        </section>
      </div>
      <main className="wrap">
        <section className="s first rv">
          <div className="two ctwo" style={{ gap: "clamp(24px,4vw,56px)" }}>
            <div className="card" style={{ padding: "0" }}>
              <ContactForm />
            </div>
            <div style={{ display: "grid", gap: "32px", alignContent: "start" }}>
              <div>
                <h2 className="t" style={{ font: "400 21px var(--sans)", letterSpacing: "-.02em" }}>Get in touch</h2>
                <address className="cinfo">
                  <a href={BUSINESS.phone.href}>
                    <span className="pi">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                      </svg>
                    </span>
                    <span>
                      <small>Phone</small>
                      {BUSINESS.phone.label}
                    </span>
                  </a>
                  <a href={'mailto:' + BUSINESS.email}>
                    <span className="pi">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    <span>
                      <small>Email</small>
                      {BUSINESS.email}
                    </span>
                  </a>
                  <div>
                    <span className="pi">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                        <circle cx="12" cy="9.5" r="2.5" />
                      </svg>
                    </span>
                    <span>
                      <small>Address</small>
                      {BUSINESS.address}
                    </span>
                  </div>
                </address>
              </div>
              <div>
                <h2 className="t" style={{ font: "400 21px var(--sans)", letterSpacing: "-.02em" }}>Existing clients</h2>
                <p style={{ color: "var(--dim)", marginTop: "8px" }}>
                  Raise a ticket and track it in your client portal. Our team is available 24/7.
                </p>
                <div className="cta" style={{ justifyContent: "flex-start", marginTop: "18px" }}>
                  <a className="btn w" href={PORTAL_URL} rel="noopener">Client portal</a>
                  <Link className="btn d" to="/support-services">Support</Link>
                </div>
              </div>
              <div>
                <h2 className="t" style={{ font: "400 21px var(--sans)", letterSpacing: "-.02em" }}>Where we work</h2>
                <ul className="bl" style={{ marginTop: "18px" }}>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <div>
                      <b>Australia</b>
                      <small>Head office</small>
                    </div>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <div>
                      <b>{"United States & Canada"}</b>
                      <small>Remote and on-site delivery</small>
                    </div>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <div>
                      <b>{"United Kingdom & New Zealand"}</b>
                      <small>Remote and on-site delivery</small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Enquiry types</p>
              <h2>How can we help?</h2>
              <p className="sub">Choose the right way to reach us.</p>
            </div>
          </div>
          <div className="stg cards c3">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>New project or quote</h3>
              <p>Websites, software, marketing, numbers or Microsoft. Use the form and choose your product.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Existing client support</h3>
              <p>Log in to the client portal to raise and track a ticket, 24/7.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Urgent security incident</h3>
              <p>Existing clients: call our support line and mark the ticket urgent. We respond immediately.</p>
            </div>
            <div className="card" style={{ transitionDelay: "210ms" }}>
              <h3>Microsoft for Nonprofits</h3>
              <p>Choose 'Microsoft for Nonprofits' in the form and we'll check your eligibility.</p>
            </div>
            <div className="card" style={{ transitionDelay: "280ms" }}>
              <h3>Partnerships</h3>
              <p>Agencies and vendors interested in working with us. Choose 'Other' and tell us about you.</p>
            </div>
            <div className="card" style={{ transitionDelay: "350ms" }}>
              <h3>Careers</h3>
              <p>Choose 'Other' and include a short introduction and the role you're interested in.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Response times</h2>
              <div className="cmp">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Request</th>
                      <th scope="col">Typical response</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                        New enquiries
                      </th>
                      <td>Within one business day</td>
                    </tr>
                    <tr>
                      <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                        Support tickets
                      </th>
                      <td>Average under 15 minutes</td>
                    </tr>
                    <tr>
                      <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                        Urgent incidents (clients)
                      </th>
                      <td>Immediate, 24/7</td>
                    </tr>
                    <tr>
                      <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                        Quotes after consultation
                      </th>
                      <td>Typically within a few business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h2 className="t">Help us prepare</h2>
              <p style={{ color: "var(--dim)", marginBottom: "14px" }}>If you can, include:</p>
              <ul className="bl">
                <li>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b style={{ fontWeight: "400", fontSize: "15px" }}>Your business name and website</b>
                  </div>
                </li>
                <li>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b style={{ fontWeight: "400", fontSize: "15px" }}>How many people use computers or phones</b>
                  </div>
                </li>
                <li>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b style={{ fontWeight: "400", fontSize: "15px" }}>What you use today (for example email, phone or accounting systems)</b>
                  </div>
                </li>
                <li>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b style={{ fontWeight: "400", fontSize: "15px" }}>What you'd like to improve and by when</b>
                  </div>
                </li>
                <li>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b style={{ fontWeight: "400", fontSize: "15px" }}>Any deadlines, budgets or compliance requirements</b>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Coverage</p>
              <h2>Hours and coverage</h2>
            </div>
          </div>
          <div className="cmp">
            <table>
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">Presence</th>
                  <th scope="col">Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                    Australia
                  </th>
                  <td>Head office</td>
                  <td style={{ color: "#fff", background: "none" }}>Business hours AEST/AEDT, plus 24/7 support</td>
                </tr>
                <tr>
                  <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                    New Zealand
                  </th>
                  <td>Remote delivery</td>
                  <td style={{ color: "#fff", background: "none" }}>NZ business hours, plus 24/7 support</td>
                </tr>
                <tr>
                  <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                    United States
                  </th>
                  <td>Remote delivery</td>
                  <td style={{ color: "#fff", background: "none" }}>US business hours by arrangement, plus 24/7 support</td>
                </tr>
                <tr>
                  <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                    Canada
                  </th>
                  <td>Remote delivery</td>
                  <td style={{ color: "#fff", background: "none" }}>Canadian business hours by arrangement, plus 24/7 support</td>
                </tr>
                <tr>
                  <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                    United Kingdom
                  </th>
                  <td>Remote delivery</td>
                  <td style={{ color: "#fff", background: "none" }}>UK business hours by arrangement, plus 24/7 support</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="affn">Phone, email and office address: [to be added before launch].</p>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Next steps</p>
              <h2>What happens next</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "5" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>You send the form</b>
              <p>Takes about two minutes.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>We reply</b>
              <p>A specialist contacts you within one business day.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Free consultation</b>
              <p>A short call to understand your goals.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Recommendation</b>
              <p>The right products and plan for you.</p>
            </div>
            <div>
              <i>STEP 05</i>
              <b>Fixed quote</b>
              <p>A clear price, with no obligation.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Before you get in touch
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Can I call you?</summary>
                <p>Yes. Call us on <a href={BUSINESS.phone.href}>{BUSINESS.phone.label}</a> during business hours; existing clients can also call the support line.</p>
              </details>
              <details>
                <summary>Do you meet in person?</summary>
                <p>We meet online by default and in person where practical.</p>
              </details>
              <details>
                <summary>How quickly will you reply?</summary>
                <p>Within one business day, usually much sooner.</p>
              </details>
              <details>
                <summary>Is the consultation really free?</summary>
                <p>Yes. There is no cost and no obligation.</p>
              </details>
              <details>
                <summary>What should I prepare?</summary>
                <p>Just a short description of your business and what you'd like to achieve. We'll take it from there.</p>
              </details>
              <details>
                <summary>I'm an existing client. Where do I get help?</summary>
                <p>Use the client portal to raise a ticket 24/7, or contact your account manager.</p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
