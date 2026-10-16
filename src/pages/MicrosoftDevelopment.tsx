import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Power Apps & SharePoint Development Melbourne | EG Eloma",
  "description": "Turn the Microsoft tools you already own into custom business systems. Custom solutions on Power Apps, SharePoint, Teams, Dynamics 365 and Copilot.",
  "crumb": "Microsoft Product Development",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Microsoft Product Development",
        "description": "Custom solutions on Power Apps, SharePoint, Teams, Dynamics 365 and Copilot.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "serviceType": "Microsoft Product Development",
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
        "url": "https://egeloma.com.au/microsoft-development"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do we need extra licences?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sometimes. Some Power Platform features need premium licences. We'll tell you exactly what is required before we start."
            }
          },
          {
            "@type": "Question",
            "name": "Can you connect to our other systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We connect Microsoft tools to accounting, CRM, ERP and custom systems through connectors and APIs."
            }
          },
          {
            "@type": "Question",
            "name": "Can you support Dynamics 365?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, including Business Central, Sales and Customer Service implementations and support."
            }
          },
          {
            "@type": "Question",
            "name": "What is low-code development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Building apps with visual tools like Power Apps, which is faster than traditional coding for many business needs."
            }
          },
          {
            "@type": "Question",
            "name": "Can you add Copilot to our apps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Copilot Studio lets us build AI assistants that use your own content and data."
            }
          },
          {
            "@type": "Question",
            "name": "Who maintains the solutions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We can support them, or train your team to make simple changes themselves."
            }
          }
        ]
      }
    ]
  },
  "path": "/microsoft-development"
}

export default function MicrosoftDevelopment() {
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
            <Link to="/products#microsoft">{"Microsoft & Licensing"}</Link>
          </p>
          <h1>{"Power Apps, SharePoint & Microsoft Development Melbourne"}</h1>
          <p className="lead">Turn the Microsoft tools you already own into custom business systems.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Microsoft Product Development?</h2>
            </div>
            <div>
              <p>
                Most businesses use only a fraction of what Microsoft 365 and Azure can do. We build custom apps, workflows, intranets and dashboards on the Microsoft platform, so your systems are secure, familiar to staff and easy to maintain.
              </p>
              <p>
                From a simple approval workflow in Power Automate to a full Dynamics 365 rollout, our developers design, build, test and support it.
              </p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Microsoft Product Development problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Approvals stuck in email chains</b>
              <p>Power Automate workflows route, remind and record every approval.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Data scattered across spreadsheets</b>
              <p>Power Apps and SharePoint lists give everyone one source of truth.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Reports built by hand each month</b>
              <p>Power BI dashboards refresh automatically from your systems.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Intranet nobody uses</b>
              <p>A modern SharePoint intranet designed around what staff actually need.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Microsoft Product Development</h2>
            </div>
            <Link className="more" to="/contact?service=Microsoft+Product+Development">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Power Apps</b>
              <p>Custom business apps for phones, tablets and desktops.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Power Automate</b>
              <p>Automated approvals, notifications and data flows.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Power BI</b>
              <p>Live dashboards and reports from all your data.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>{"SharePoint & intranets"}</b>
              <p>Document management and staff portals.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>{"Teams apps & bots"}</b>
              <p>Bring your tools and alerts into Microsoft Teams.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>{"Copilot & AI"}</b>
              <p>Custom copilots and AI agents with Copilot Studio.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Microsoft Product Development is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Operations teams</h3>
              <p>Automate approvals, requests and reporting inside Microsoft 365.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Finance and management</h3>
              <p>Power BI dashboards that show the numbers without manual reports.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>HR and internal comms</h3>
              <p>A SharePoint intranet with policies, news and forms in one place.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Microsoft Product Development works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Map the process</b>
              <p>We document how the work happens today and where time is lost.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Prototype</b>
              <p>A working Power Apps or Power Automate prototype in days.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Build and test</b>
              <p>Refine with your users, then test permissions and data.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Roll out</b>
              <p>Train staff and publish the solution across your tenant.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Microsoft Product Development</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Use what you own</b>
                    <small>Get more value from your Microsoft licences.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Secure by default</b>
                    <small>Built inside your Microsoft 365 security and permissions.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Fast to deliver</b>
                    <small>Low-code tools mean faster results.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Easy to support</b>
                    <small>Familiar tools for your staff and our team.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/microsoft">Microsoft Products</Link>
                <Link to="/api-integrations">API Integrations</Link>
                <Link to="/software-development">Software Development</Link>
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
                Microsoft Product Development questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Do we need extra licences?</summary>
                <p>Sometimes. Some Power Platform features need premium licences. We'll tell you exactly what is required before we start.</p>
              </details>
              <details>
                <summary>Can you connect to our other systems?</summary>
                <p>Yes. We connect Microsoft tools to accounting, CRM, ERP and custom systems through connectors and APIs.</p>
              </details>
              <details>
                <summary>Can you support Dynamics 365?</summary>
                <p>Yes, including Business Central, Sales and Customer Service implementations and support.</p>
              </details>
              <details>
                <summary>What is low-code development?</summary>
                <p>Building apps with visual tools like Power Apps, which is faster than traditional coding for many business needs.</p>
              </details>
              <details>
                <summary>Can you add Copilot to our apps?</summary>
                <p>Yes. Copilot Studio lets us build AI assistants that use your own content and data.</p>
              </details>
              <details>
                <summary>Who maintains the solutions?</summary>
                <p>We can support them, or train your team to make simple changes themselves.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Microsoft Product Development</h2>
          <p>{"Talk to our Microsoft & Licensing team about microsoft product development for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Microsoft+Product+Development">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
