import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RelatedReading from '../components/RelatedReading'

const meta = {
  "title": "24/7 IT Support & Helpdesk Melbourne | EG Eloma",
  "description": "Real people. Fast answers. 24/7. 24/7 helpdesk and managed IT support with an average response under 15 minutes.",
  "crumb": "Support Services",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Support Services",
        "description": "24/7 helpdesk and managed IT support with an average response under 15 minutes.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "serviceType": "Support Services",
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
        "url": "https://egeloma.com.au/support-services"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are your support hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our team is available 24/7."
            }
          },
          {
            "@type": "Question",
            "name": "How do I raise a ticket?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Through your customer portal, by email or by phone."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support remote and overseas staff?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, across Australia, the US, Canada, the UK and New Zealand."
            }
          },
          {
            "@type": "Question",
            "name": "Is support included in a monthly fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most clients choose a monthly support plan; we quote based on users and devices."
            }
          },
          {
            "@type": "Question",
            "name": "Can you support staff in other countries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, across our five countries."
            }
          },
          {
            "@type": "Question",
            "name": "What does under 15 minutes mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is our average response time; resolution time depends on the issue."
            }
          }
        ]
      }
    ]
  },
  "path": "/support-services"
}

export default function SupportServices() {
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
            <Link to="/products#cloud">{"Cloud, Security & Support"}</Link>
          </p>
          <h1>{"24/7 IT Support & Helpdesk Melbourne"}</h1>
          <p className="lead">Real people. Fast answers. 24/7.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Support Services?</h2>
            </div>
            <div>
              <p>
                When something stops working, you need help now. Our support team provides helpdesk and managed IT support for your staff, devices, Microsoft 365, websites and systems, with an average response time under 15 minutes.
              </p>
              <p>Raise tickets in your EG Eloma customer portal, by email or by phone, and track every request.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Support Services problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>IT problems stop work</b>
              <p>Fast remote help to get staff working again.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>New staff waiting for laptops and accounts</b>
              <p>Onboarding checklists so they're ready on day one.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>No record of past issues</b>
              <p>Every request tracked in your client portal.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Support only in business hours</b>
              <p>24/7 coverage.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Support Services</h2>
            </div>
            <Link className="more" to="/contact?service=Support+Services">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>24/7 helpdesk</b>
              <p>Phone, email and portal support.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Remote support</b>
              <p>Fast fixes without waiting for a visit.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Device management</b>
              <p>Laptops and phones set up and secured.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>User onboarding</b>
              <p>New staff ready on day one.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Customer portal</b>
              <p>Track tickets, products and invoices.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Dedicated account manager</b>
              <p>One person who knows your business.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Support Services is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Small businesses without IT staff</h3>
              <p>A full helpdesk on demand.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Companies with one IT person</h3>
              <p>Back-up support and after-hours cover.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Distributed teams</h3>
              <p>Support for staff in different cities and countries.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Support Services works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Onboarding</b>
              <p>Document your users, devices and systems.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Portal access</b>
              <p>Staff can raise and track tickets.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Proactive care</b>
              <p>Monitoring and maintenance in the background.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Quarterly review</b>
              <p>Review issues, trends and improvements.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Support Services</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Less downtime</b>
                    <small>Problems fixed quickly.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Predictable cost</b>
                    <small>Simple monthly support plans.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>One point of contact</b>
                    <small>For all your technology.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Visibility</b>
                    <small>Every request tracked in your portal.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/cybersecurity">Cybersecurity</Link>
                <Link to="/cloud-maintenance">Cloud Maintenance</Link>
                <Link to="/virtual-customer-care">Virtual Customer Care Support</Link>
                <Link to="/microsoft-licensing">Microsoft Licensing</Link>
              </div>
            </div>
          </div>
        </section>
        <RelatedReading posts={['/blog-notifiable-data-breaches', '/blog-essential-eight-guide', '/blog-choose-it-support']} />
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Support Services questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>What are your support hours?</summary>
                <p>Our team is available 24/7.</p>
              </details>
              <details>
                <summary>How do I raise a ticket?</summary>
                <p>Through your customer portal, by email or by phone.</p>
              </details>
              <details>
                <summary>Do you support remote and overseas staff?</summary>
                <p>Yes, across Australia, the US, Canada, the UK and New Zealand.</p>
              </details>
              <details>
                <summary>Is support included in a monthly fee?</summary>
                <p>Most clients choose a monthly support plan; we quote based on users and devices.</p>
              </details>
              <details>
                <summary>Can you support staff in other countries?</summary>
                <p>Yes, across our five countries.</p>
              </details>
              <details>
                <summary>What does under 15 minutes mean?</summary>
                <p>It is our average response time; resolution time depends on the issue.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Support Services</h2>
          <p>{"Talk to our Cloud, Security & Support team about support services for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Support+Services">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
