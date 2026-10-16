import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "API Integration Services Melbourne | EG Eloma",
  "description": "Make your systems talk to each other. Connect your CRM, accounting, eCommerce, payments and Microsoft systems.",
  "crumb": "API Integrations",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "API Integrations",
        "description": "Connect your CRM, accounting, eCommerce, payments and Microsoft systems.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "serviceType": "API Integrations",
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
        "url": "https://egeloma.com.au/api-integrations"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you connect systems without an API?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Often yes, using exports, webhooks or automation tools. We'll find the best option."
            }
          },
          {
            "@type": "Question",
            "name": "Is the data secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We use secure authentication, encryption and least-privilege access."
            }
          },
          {
            "@type": "Question",
            "name": "Do you maintain integrations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We monitor and update integrations when the connected systems change."
            }
          },
          {
            "@type": "Question",
            "name": "What is an API?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A secure way for two systems to exchange data automatically."
            }
          },
          {
            "@type": "Question",
            "name": "Can you connect to Xero or MYOB?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, along with many CRM, eCommerce and payment platforms."
            }
          },
          {
            "@type": "Question",
            "name": "What if a system changes its API?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We monitor and update integrations as part of support."
            }
          }
        ]
      }
    ]
  },
  "path": "/api-integrations"
}

export default function ApiIntegrations() {
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
            <Link to="/products#development">Development</Link>
          </p>
          <h1>API Integration Services Melbourne</h1>
          <p className="lead">Make your systems talk to each other.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is API Integrations?</h2>
            </div>
            <div>
              <p>
                Double data entry wastes time and causes errors. We connect your software through APIs so data flows automatically between your website, CRM, accounting, eCommerce, payment, shipping and Microsoft systems.
              </p>
              <p>Custom integrations, middleware and automation, monitored so nothing breaks silently.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>API Integrations problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Orders re-typed into accounting</b>
              <p>Orders flow automatically from your store or portal.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>CRM out of date</b>
              <p>Contacts and deals sync with your other systems.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Silent sync failures</b>
              <p>Monitoring and alerts when something stops working.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Spreadsheets used as glue</b>
              <p>Proper integrations replace manual exports and imports.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in API Integrations</h2>
            </div>
            <Link className="more" to="/contact?service=API+Integrations">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>CRM integrations</b>
              <p>Salesforce, HubSpot, Dynamics 365 and more.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Accounting</b>
              <p>Xero, MYOB, QuickBooks and others.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>{"eCommerce & payments"}</b>
              <p>Shopify, WooCommerce, Stripe and PayPal.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>{"Microsoft 365 & Graph"}</b>
              <p>Outlook, Teams, SharePoint and Entra ID.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Custom APIs</b>
              <p>Secure APIs for your own platforms.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>{"Monitoring & alerts"}</b>
              <p>Know immediately if a sync fails.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who API Integrations is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Online stores</h3>
              <p>Sync orders, stock and customers with accounting and shipping.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Sales teams</h3>
              <p>Connect your CRM with email, forms and quoting tools.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Multi-system businesses</h3>
              <p>Remove manual exports between platforms.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How API Integrations works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>System inventory</b>
              <p>List the systems and the data that should flow between them.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Data mapping</b>
              <p>Match fields and rules between systems.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Build and test</b>
              <p>Develop the integration and test with real data.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Monitor</b>
              <p>Alerts and logs so failures are fixed quickly.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of API Integrations</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>No double entry</b>
                    <small>Enter once, update everywhere.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Fewer errors</b>
                    <small>Automated, consistent data.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Real-time data</b>
                    <small>Up-to-date information across systems.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Scalable</b>
                    <small>Add new systems as you grow.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/software-development">Software Development</Link>
                <Link to="/microsoft-development">Microsoft Product Development</Link>
                <Link to="/saas-development">SaaS Development</Link>
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
                API Integrations questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Can you connect systems without an API?</summary>
                <p>Often yes, using exports, webhooks or automation tools. We'll find the best option.</p>
              </details>
              <details>
                <summary>Is the data secure?</summary>
                <p>Yes. We use secure authentication, encryption and least-privilege access.</p>
              </details>
              <details>
                <summary>Do you maintain integrations?</summary>
                <p>Yes. We monitor and update integrations when the connected systems change.</p>
              </details>
              <details>
                <summary>What is an API?</summary>
                <p>A secure way for two systems to exchange data automatically.</p>
              </details>
              <details>
                <summary>Can you connect to Xero or MYOB?</summary>
                <p>Yes, along with many CRM, eCommerce and payment platforms.</p>
              </details>
              <details>
                <summary>What if a system changes its API?</summary>
                <p>We monitor and update integrations as part of support.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with API Integrations</h2>
          <p>Talk to our Development team about api integrations for your organisation.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=API+Integrations">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
