import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Toll-Free Number | EG Eloma",
  "description": "One memorable number. Calls answered wherever you are. 1300, 1800, 1-800 and 0800 numbers that make it easy for customers to call.",
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
        "name": "Toll-Free Number",
        "description": "1300, 1800, 1-800 and 0800 numbers that make it easy for customers to call.",
        "provider": {
          "@id": "https://egdigital.com.au/#org"
        },
        "serviceType": "Toll-Free Number",
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
        "url": "https://egdigital.com.au/toll-free-number"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I keep my existing number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. In most cases we can port your existing 1300 or 1800 number to us."
            }
          },
          {
            "@type": "Question",
            "name": "Where can calls be answered?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On any mobile, landline, softphone or Microsoft Teams."
            }
          },
          {
            "@type": "Question",
            "name": "Do you supply numbers in other countries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes: Australia, the US, Canada, the UK and New Zealand."
            }
          },
          {
            "@type": "Question",
            "name": "Who pays for calls to an 1800 number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The business pays; the call is free for most callers in Australia."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a vanity number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Subject to availability, yes."
            }
          },
          {
            "@type": "Question",
            "name": "Can calls ring in Microsoft Teams?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes."
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
            "name": "Toll-Free Number",
            "item": "https://egdigital.com.au/toll-free-number"
          }
        ]
      }
    ]
  },
  "path": "/toll-free-number"
}

export default function TollFreeNumber() {
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
          <h1>Toll-Free Number</h1>
          <p className="lead">One memorable number. Calls answered wherever you are.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Toll-Free Number?</h2>
            </div>
            <div>
              <p>
                A toll-free or local-rate number makes your business look established and easy to reach. We supply 1300 and 1800 numbers in Australia, 1-800 numbers in the US and Canada, and 0800 numbers in the UK and New Zealand.
              </p>
              <p>Calls route to any mobile, landline or team, with call recording, reporting and IVR menus available.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Toll-Free Number problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Customers can't remember your number</b>
              <p>A memorable vanity number such as 1800 YOURBIZ.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Calls go to one phone only</b>
              <p>Route calls to the right team, location or mobile.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Losing your number when you move</b>
              <p>Your number stays with you wherever you go.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>No idea which ads drive calls</b>
              <p>Separate numbers and call reports for each campaign.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Toll-Free Number</h2>
            </div>
            <Link className="more" to="/contact?service=Toll-Free+Number">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>{"1300 & 1800 numbers"}</b>
              <p>Australian toll-free and local-rate numbers.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>{"1-800 & 0800 numbers"}</b>
              <p>US, Canada, UK and New Zealand.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Vanity numbers</b>
              <p>Memorable words like 1800 YOURBIZ.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Smart routing</b>
              <p>By time, location or team.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Call recording</b>
              <p>Recordings for training and quality.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Call reporting</b>
              <p>See every call, missed call and peak time.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Toll-Free Number is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>National service providers</h3>
              <p>One number for customers anywhere in the country.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Advertisers</h3>
              <p>Memorable numbers for radio, signage and vehicles.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Businesses expanding overseas</h3>
              <p>1-800 numbers in the US and Canada, 0800 in the UK and NZ.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Toll-Free Number works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Choose a number</b>
              <p>Pick a 1300, 1800, 1-800 or 0800 number, or a vanity word.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Routing plan</b>
              <p>Decide where calls go by time, team or location.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Activate or port</b>
              <p>Switch on a new number or move your existing one.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Report</b>
              <p>Monthly call volumes, missed calls and peak times.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Toll-Free Number</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Look established</b>
                    <small>A national presence for any size business.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Never miss calls</b>
                    <small>Route to whoever is available.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Keep your number</b>
                    <small>Move offices or phones without changing it.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Measure marketing</b>
                    <small>Track calls from each campaign.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/ivr-system">IVR System</Link>
                <Link to="/virtual-mobile-number">Virtual Mobile Number</Link>
                <Link to="/virtual-customer-care">Virtual Customer Care Support</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="sh">
            <div>
              <p className="ey">Example project</p>
              <h2>What this looks like in practice for toll-free number</h2>
            </div>
          </div>
          <div className="case">
            <div className="cl">
              <span className="tag2">Example scenario</span>
              <h3>A multi-location health clinic</h3>
              <p className="res">Every call answered, simpler marketing and a more professional patient experience.</p>
            </div>
            <div className="cr">
              <div>
                <b>The challenge</b>
                <p>Patients called each clinic separately and many after-hours calls went unanswered.</p>
              </div>
              <div>
                <b>What we did</b>
                <p>One 1300 number with an IVR menu routes patients to the right clinic, with after-hours virtual reception.</p>
              </div>
              <div>
                <b>The outcome</b>
                <p>Every call answered, simpler marketing and a more professional patient experience.</p>
              </div>
              <p className="note2">Illustrative example of a typical project.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "500 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "600 clamp(28px,2.8vw,40px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Toll-Free Number questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Can I keep my existing number?</summary>
                <p>Yes. In most cases we can port your existing 1300 or 1800 number to us.</p>
              </details>
              <details>
                <summary>Where can calls be answered?</summary>
                <p>On any mobile, landline, softphone or Microsoft Teams.</p>
              </details>
              <details>
                <summary>Do you supply numbers in other countries?</summary>
                <p>Yes: Australia, the US, Canada, the UK and New Zealand.</p>
              </details>
              <details>
                <summary>Who pays for calls to an 1800 number?</summary>
                <p>The business pays; the call is free for most callers in Australia.</p>
              </details>
              <details>
                <summary>Can I get a vanity number?</summary>
                <p>Subject to availability, yes.</p>
              </details>
              <details>
                <summary>Can calls ring in Microsoft Teams?</summary>
                <p>Yes.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Toll-Free Number</h2>
          <p>Talk to our Business Communications team about toll-free number for your organisation.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Toll-Free+Number">Get a quote</Link>
            <Link className="btn d" to="/services">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
