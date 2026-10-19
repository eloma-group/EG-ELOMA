import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RelatedReading from '../components/RelatedReading'

const meta = {
  "title": "IVR Phone System for Business Melbourne | EG Eloma",
  "description": "'Press 1 for sales.' Every caller to the right place. Professional phone menus that route every caller to the right person, fast.",
  "crumb": "IVR System",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "IVR System",
        "description": "Professional phone menus that route every caller to the right person, fast.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "serviceType": "IVR System",
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
        "url": "https://egeloma.com.au/ivr-system"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can the IVR work with my existing numbers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We connect it to your existing toll-free, landline or mobile numbers."
            }
          },
          {
            "@type": "Question",
            "name": "Can callers leave messages after hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Voicemail can be emailed to the right team."
            }
          },
          {
            "@type": "Question",
            "name": "Can you use AI voice agents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can add AI-powered answering and routing where it suits."
            }
          },
          {
            "@type": "Question",
            "name": "How many menu options should we have?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually no more than four or five at each level."
            }
          },
          {
            "@type": "Question",
            "name": "Can callers reach a person quickly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We always include a fast route to a person."
            }
          },
          {
            "@type": "Question",
            "name": "Can you record the greetings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with professional voice prompts."
            }
          }
        ]
      }
    ]
  },
  "path": "/ivr-system"
}

export default function IvrSystem() {
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
        <Header active="/products" />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <Link to="/products#communications">Business Communications</Link>
          </p>
          <h1>IVR Phone Systems for Melbourne Businesses</h1>
          <p className="lead">'Press 1 for sales.' Every caller to the right place.</p>
          <div className="cta">
            <Link className="btn w" to="/contact">Book a free consultation</Link>
            <Link className="btn d" to="/plans">View plans</Link>
          </div>
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
          <div className="ov">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                Overview
              </p>
              <h2 style={{ marginTop: "10px" }}>What is IVR System?</h2>
            </div>
            <div>
              <p>
                An IVR (interactive voice response) system greets callers professionally and routes them to the right team, location or information, 24 hours a day.
              </p>
              <p>We design the call flow, record professional voice prompts, and connect it to your toll-free, landline and Teams numbers.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>IVR System problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Receptionist overloaded with calls</b>
              <p>Menus send callers straight to the right team.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Callers asking the same questions</b>
              <p>Recorded answers for hours, location and FAQs.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>After-hours calls lost</b>
              <p>After-hours routing, voicemail or virtual reception.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Long holds and hang-ups</b>
              <p>Queues, callbacks and better routing.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in IVR System</h2>
            </div>
            <Link className="more" to="/contact?service=IVR+System">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Call flow design</b>
              <p>Menus mapped to how your business works.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Professional voice prompts</b>
              <p>Recorded greetings and messages.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Business hours routing</b>
              <p>Different handling after hours.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>{"Queues & callbacks"}</b>
              <p>Hold music, queue position and callbacks.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>CRM integration</b>
              <p>Show caller details to your team.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Analytics</b>
              <p>See call volumes and drop-offs.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who IVR System is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Clinics and practices</h3>
              <p>Route patients to bookings, results or reception.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Multi-department businesses</h3>
              <p>Send callers to sales, support or accounts.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Businesses with after-hours calls</h3>
              <p>Handle calls properly when the office is closed.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How IVR System works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Call analysis</b>
              <p>Review why people call and where calls go today.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Menu design</b>
              <p>A short, clear menu with a fast route to a person.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Voice recording</b>
              <p>Professional greetings and prompts.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Test and tune</b>
              <p>Test every path and adjust using call reports.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of IVR System</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Faster answers</b>
                    <small>Callers reach the right person first time.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Professional image</b>
                    <small>A big-business experience.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>24/7 information</b>
                    <small>Answer common questions automatically.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Lower workload</b>
                    <small>Fewer transferred calls.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/toll-free-number">Toll-Free Number</Link>
                <Link to="/virtual-customer-care">Virtual Customer Care Support</Link>
                <Link to="/landline-number">Landline Number</Link>
                <Link to="/virtual-mobile-number">Virtual Mobile Number</Link>
              </div>
            </div>
          </div>
        </section>
        <RelatedReading posts={['/blog-1300-vs-1800-numbers', '/blog-teams-phone']} />
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                IVR System questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Can the IVR work with my existing numbers?</summary>
                <p>Yes. We connect it to your existing toll-free, landline or mobile numbers.</p>
              </details>
              <details>
                <summary>Can callers leave messages after hours?</summary>
                <p>Yes. Voicemail can be emailed to the right team.</p>
              </details>
              <details>
                <summary>Can you use AI voice agents?</summary>
                <p>Yes. We can add AI-powered answering and routing where it suits.</p>
              </details>
              <details>
                <summary>How many menu options should we have?</summary>
                <p>Usually no more than four or five at each level.</p>
              </details>
              <details>
                <summary>Can callers reach a person quickly?</summary>
                <p>Yes. We always include a fast route to a person.</p>
              </details>
              <details>
                <summary>Can you record the greetings?</summary>
                <p>Yes, with professional voice prompts.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with IVR System</h2>
          <p>Talk to our Business Communications team about ivr system for your organisation.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=IVR+System">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
