import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Landline Number | EG Eloma",
  "description": "A local number for every city you serve. Local landline numbers on cloud phone systems, with no copper line needed.",
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://egdigital.com.au/#org",
        "name": "EG Eloma",
        "url": "https://egdigital.com.au/",
        "logo": "https://egdigital.com.au/logo.png",
        "description": "Australian-owned technology partner for Microsoft, software, marketing, communications, cloud and cybersecurity services.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Australia"
          },
          {
            "@type": "Country",
            "name": "United States"
          },
          {
            "@type": "Country",
            "name": "Canada"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          },
          {
            "@type": "Country",
            "name": "New Zealand"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Landline Number",
        "description": "Local landline numbers on cloud phone systems, with no copper line needed.",
        "provider": {
          "@id": "https://egdigital.com.au/#org"
        },
        "serviceType": "Landline Number",
        "areaServed": [
          {
            "@type": "Country",
            "name": "Australia"
          },
          {
            "@type": "Country",
            "name": "United States"
          },
          {
            "@type": "Country",
            "name": "Canada"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          },
          {
            "@type": "Country",
            "name": "New Zealand"
          }
        ],
        "url": "https://egdigital.com.au/landline-number"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I keep my current landline number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually yes. We handle the porting process."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need new phones?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not necessarily. You can use apps, Teams or compatible handsets."
            }
          },
          {
            "@type": "Question",
            "name": "Does it work with Microsoft Teams?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can set up Teams Phone with your landline numbers."
            }
          },
          {
            "@type": "Question",
            "name": "Will call quality be good?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With a reliable internet connection, cloud calls are clear and stable."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need new handsets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not necessarily. Apps and Teams work on existing devices."
            }
          },
          {
            "@type": "Question",
            "name": "Can I keep my existing numbers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually yes, through number porting."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://egdigital.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://egdigital.com.au/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Landline Number",
            "item": "https://egdigital.com.au/landline-number"
          }
        ]
      }
    ]
  },
  "path": "/landline-number"
}

export default function LandlineNumber() {
  return (
    <>
      <PageMeta {...meta} />
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
        <Header active="/services" />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Products</Link>
            <span>/</span>
            <Link to="/services#communications">Business Communications</Link>
          </p>
          <h1>Landline Number</h1>
          <p className="lead">A local number for every city you serve.</p>
          <div className="cta">
            <Link className="btn w" to="/contact">Book a free consultation</Link>
            <Link className="btn d" to="/pricing">View plans</Link>
          </div>
          <div className="tbar">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Australian owned
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Microsoft Partner
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              ASD Essential Eight aligned
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              24/7 support
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Fixed written quotes
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              5 countries
            </span>
          </div>
        </section>
      </div>
      <main className="wrap">
        <section className="s first rv">
          <div className="ov">
            <div>
              <p className="ey" style={{ font: "500 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                Overview
              </p>
              <h2 style={{ marginTop: "10px" }}>What is Landline Number?</h2>
            </div>
            <div>
              <p>
                Local numbers build trust. We supply cloud-based landline numbers for any city we serve, with calls answered on desk phones, mobiles, softphones or Microsoft Teams.
              </p>
              <p>No copper lines or on-site phone system: everything runs in the cloud and moves with you.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Landline Number problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Old phone system costs too much</b>
              <p>A cloud phone system with lower running costs.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>No local presence in new cities</b>
              <p>Local numbers for each city you serve.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Desk phones tie staff to the office</b>
              <p>Answer on mobile, laptop or Teams.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Hard to add new staff lines</b>
              <p>Add lines in minutes.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Landline Number</h2>
            </div>
            <Link className="more" to="/contact?service=Landline+Number">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Local area numbers</b>
              <p>City numbers across our five countries.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Cloud phone system</b>
              <p>No hardware to maintain.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Teams Phone</b>
              <p>Make and take calls in Microsoft Teams.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Number porting</b>
              <p>Keep your existing landline numbers.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>{"Hunt groups & queues"}</b>
              <p>Ring the right people in order.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Desk phones</b>
              <p>Supply and setup of handsets if needed.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Landline Number is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Offices replacing old phone systems</h3>
              <p>Move to the cloud and cut running costs.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Businesses opening in new cities</h3>
              <p>Local numbers that look established.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Hybrid teams</h3>
              <p>Answer the office line from anywhere.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Landline Number works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Number and handset review</b>
              <p>Check existing numbers, devices and call flows.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Port numbers</b>
              <p>Move your numbers to the cloud system.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Configure</b>
              <p>Set up hunt groups, voicemail and Teams calling.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Switch over</b>
              <p>Cut over with minimal downtime.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Landline Number</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Local presence</b>
                    <small>Look local in every market.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Lower cost</b>
                    <small>Cheaper than traditional phone lines.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Work anywhere</b>
                    <small>Your landline follows you.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Scales easily</b>
                    <small>Add lines in minutes.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/toll-free-number">Toll-Free Number</Link>
                <Link to="/ivr-system">IVR System</Link>
                <Link to="/microsoft">Microsoft Products</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "500 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "600 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Landline Number questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Can I keep my current landline number?</summary>
                <p>Usually yes. We handle the porting process.</p>
              </details>
              <details>
                <summary>Do I need new phones?</summary>
                <p>Not necessarily. You can use apps, Teams or compatible handsets.</p>
              </details>
              <details>
                <summary>Does it work with Microsoft Teams?</summary>
                <p>Yes. We can set up Teams Phone with your landline numbers.</p>
              </details>
              <details>
                <summary>Will call quality be good?</summary>
                <p>With a reliable internet connection, cloud calls are clear and stable.</p>
              </details>
              <details>
                <summary>Do I need new handsets?</summary>
                <p>Not necessarily. Apps and Teams work on existing devices.</p>
              </details>
              <details>
                <summary>Can I keep my existing numbers?</summary>
                <p>Usually yes, through number porting.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Landline Number</h2>
          <p>Talk to our Business Communications team about landline number for your organisation.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Landline+Number">Get a quote</Link>
            <Link className="btn d" to="/services">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
