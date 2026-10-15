import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Virtual Customer Care Support | EG Eloma",
  "description": "Your customers looked after, even when you're busy. Trained virtual agents answering calls, chats and emails in your business name.",
  "crumb": "Virtual Customer Care Support",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Virtual Customer Care Support",
        "description": "Trained virtual agents answering calls, chats and emails in your business name.",
        "provider": {
          "@id": "https://egeloma.com.au/#org"
        },
        "serviceType": "Virtual Customer Care Support",
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
        "url": "https://egeloma.com.au/virtual-customer-care"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Will callers know it's outsourced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Agents answer in your business name using your scripts."
            }
          },
          {
            "@type": "Question",
            "name": "Can you cover different time zones?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We support customers in Australia, the US, Canada, the UK and New Zealand."
            }
          },
          {
            "@type": "Question",
            "name": "Can you use our systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Agents can work in your CRM, booking or helpdesk tools."
            }
          },
          {
            "@type": "Question",
            "name": "Can agents book appointments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, directly into your calendar or booking system."
            }
          },
          {
            "@type": "Question",
            "name": "How do agents learn about my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build scripts and FAQs with you before go-live."
            }
          },
          {
            "@type": "Question",
            "name": "Can I listen to calls?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Call recordings and reports are available."
            }
          }
        ]
      }
    ]
  },
  "path": "/virtual-customer-care"
}

export default function VirtualCustomerCare() {
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
          <h1>Virtual Customer Care Support</h1>
          <p className="lead">Your customers looked after, even when you're busy.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Virtual Customer Care Support?</h2>
            </div>
            <div>
              <p>
                Missed calls are missed sales. Our virtual customer care team answers your calls, live chats and emails in your business name, books appointments, takes messages and handles common questions.
              </p>
              <p>Choose business hours, after-hours or 24/7 coverage across time zones.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Virtual Customer Care Support problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Missed calls while you're on the job</b>
              <p>Every call answered in your business name.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Website chat nobody monitors</b>
              <p>Live chat answered by trained agents.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Inbox overflowing</b>
              <p>Email enquiries triaged and answered.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Can't afford a full-time receptionist</b>
              <p>Pay for the coverage you need.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Virtual Customer Care Support</h2>
            </div>
            <Link className="more" to="/contact?service=Virtual+Customer+Care+Support">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Call answering</b>
              <p>Answered in your business name.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>{"Live chat & email"}</b>
              <p>Website chat and inbox support.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Appointment booking</b>
              <p>Directly into your calendar.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>{"Order & enquiry handling"}</b>
              <p>Common questions resolved first time.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Escalation</b>
              <p>Urgent matters passed to you immediately.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Daily reports</b>
              <p>Every interaction logged and summarised.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Virtual Customer Care Support is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Owner-operators</h3>
              <p>Calls answered while you're busy with customers.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Growing service businesses</h3>
              <p>Extra capacity without hiring.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>International businesses</h3>
              <p>Coverage across time zones.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Virtual Customer Care Support works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Onboarding call</b>
              <p>Learn your services, tone and common questions.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Scripts and rules</b>
              <p>Agree what agents handle and when to escalate.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Go live</b>
              <p>Calls, chats or emails answered in your name.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Daily summaries</b>
              <p>A record of every interaction.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Virtual Customer Care Support</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>No missed opportunities</b>
                    <small>Every customer gets an answer.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Lower cost</b>
                    <small>No extra staff to hire and train.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Extended hours</b>
                    <small>After-hours and 24/7 options.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Happier customers</b>
                    <small>Fast, friendly, consistent service.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/ivr-system">IVR System</Link>
                <Link to="/toll-free-number">Toll-Free Number</Link>
                <Link to="/support-services">Support Services</Link>
              </div>
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
                Virtual Customer Care Support questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Will callers know it's outsourced?</summary>
                <p>No. Agents answer in your business name using your scripts.</p>
              </details>
              <details>
                <summary>Can you cover different time zones?</summary>
                <p>Yes. We support customers in Australia, the US, Canada, the UK and New Zealand.</p>
              </details>
              <details>
                <summary>Can you use our systems?</summary>
                <p>Yes. Agents can work in your CRM, booking or helpdesk tools.</p>
              </details>
              <details>
                <summary>Can agents book appointments?</summary>
                <p>Yes, directly into your calendar or booking system.</p>
              </details>
              <details>
                <summary>How do agents learn about my business?</summary>
                <p>We build scripts and FAQs with you before go-live.</p>
              </details>
              <details>
                <summary>Can I listen to calls?</summary>
                <p>Call recordings and reports are available.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Virtual Customer Care Support</h2>
          <p>Talk to our Business Communications team about virtual customer care support for your organisation.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Virtual+Customer+Care+Support">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
