import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Virtual Mobile Number | EG Eloma",
  "description": "A business mobile number without a second phone. Business mobile numbers that ring on any phone or app, with SMS included.",
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
        "name": "Virtual Mobile Number",
        "description": "Business mobile numbers that ring on any phone or app, with SMS included.",
        "provider": {
          "@id": "https://egdigital.com.au/#org"
        },
        "serviceType": "Virtual Mobile Number",
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
        "url": "https://egdigital.com.au/virtual-mobile-number"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I need a new phone or SIM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Calls come through an app or forward to your existing phone."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get numbers in other countries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, including Australia, the US, Canada, the UK and New Zealand."
            }
          },
          {
            "@type": "Question",
            "name": "Is SMS included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Business SMS is available on virtual mobile numbers."
            }
          },
          {
            "@type": "Question",
            "name": "Does it need a second SIM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. It works through an app or call forwarding."
            }
          },
          {
            "@type": "Question",
            "name": "Can several staff share one number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes."
            }
          },
          {
            "@type": "Question",
            "name": "Can I send SMS from my computer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, depending on the setup."
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
            "name": "Virtual Mobile Number",
            "item": "https://egdigital.com.au/virtual-mobile-number"
          }
        ]
      }
    ]
  },
  "path": "/virtual-mobile-number"
}

export default function VirtualMobileNumber() {
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
          <h1>Virtual Mobile Number</h1>
          <p className="lead">A business mobile number without a second phone.</p>
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
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                Overview
              </p>
              <h2 style={{ marginTop: "10px" }}>What is Virtual Mobile Number?</h2>
            </div>
            <div>
              <p>
                Keep work and personal calls separate. A virtual mobile number rings on your existing phone, an app or Microsoft Teams, and can send and receive SMS.
              </p>
              <p>Perfect for sales teams, tradies, remote staff and businesses entering new markets.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Virtual Mobile Number problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Staff giving out personal numbers</b>
              <p>A business mobile number on their existing phone.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Customers texting personal phones</b>
              <p>Business SMS from a shared business number.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Staff leave with client contacts</b>
              <p>The number stays with the business.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Expanding into another country</b>
              <p>Local mobile numbers in your target market.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Virtual Mobile Number</h2>
            </div>
            <Link className="more" to="/contact?service=Virtual+Mobile+Number">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Local mobile numbers</b>
              <p>Numbers in your target country.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Calls on any device</b>
              <p>Phone, app, desktop or Teams.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Business SMS</b>
              <p>Send and receive texts from the number.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Voicemail to email</b>
              <p>Messages delivered to your inbox.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Team sharing</b>
              <p>Share one number across staff.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Call forwarding</b>
              <p>Divert by time or availability.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Virtual Mobile Number is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Sole traders and tradies</h3>
              <p>Separate work calls from personal calls.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Sales teams</h3>
              <p>Shared business numbers that stay with the company.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Remote workers</h3>
              <p>A local mobile number wherever they work.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Virtual Mobile Number works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Pick a number</b>
              <p>Choose a mobile number in the country you need.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Install the app</b>
              <p>Set up calls and SMS on existing phones.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Set forwarding</b>
              <p>Hours, voicemail and team sharing.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Go live</b>
              <p>Start using the number the same week.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Virtual Mobile Number</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Privacy</b>
                    <small>Keep your personal number private.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Professional</b>
                    <small>A dedicated business line.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Flexible</b>
                    <small>Work from anywhere.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Quick setup</b>
                    <small>Live in days, not weeks.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/toll-free-number">Toll-Free Number</Link>
                <Link to="/landline-number">Landline Number</Link>
                <Link to="/ivr-system">IVR System</Link>
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
                Virtual Mobile Number questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Do I need a new phone or SIM?</summary>
                <p>No. Calls come through an app or forward to your existing phone.</p>
              </details>
              <details>
                <summary>Can I get numbers in other countries?</summary>
                <p>Yes, including Australia, the US, Canada, the UK and New Zealand.</p>
              </details>
              <details>
                <summary>Is SMS included?</summary>
                <p>Business SMS is available on virtual mobile numbers.</p>
              </details>
              <details>
                <summary>Does it need a second SIM?</summary>
                <p>No. It works through an app or call forwarding.</p>
              </details>
              <details>
                <summary>Can several staff share one number?</summary>
                <p>Yes.</p>
              </details>
              <details>
                <summary>Can I send SMS from my computer?</summary>
                <p>Yes, depending on the setup.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Virtual Mobile Number</h2>
          <p>Talk to our Business Communications team about virtual mobile number for your organisation.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Virtual+Mobile+Number">Get a quote</Link>
            <Link className="btn d" to="/services">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
