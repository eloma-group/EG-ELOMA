import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Custom Software Development Melbourne | EG Eloma",
  "description": "Software built around how your business actually works. Custom business software, portals and automation built around your workflow.",
  "crumb": "Software Development",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Software Development",
        "description": "Custom business software, portals and automation built around your workflow.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "serviceType": "Software Development",
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
        "url": "https://egeloma.com.au/software-development"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does custom software cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on scope. After a free consultation we give a clear, fixed quote for each phase."
            }
          },
          {
            "@type": "Question",
            "name": "Who owns the code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You do. Ownership and source code are handed over as agreed in your contract."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide support after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer support and maintenance plans for all software we build."
            }
          },
          {
            "@type": "Question",
            "name": "How do you keep projects on budget?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We scope in phases with fixed quotes and demo progress every one to two weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Will the software be secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We follow secure development practices and test before launch."
            }
          },
          {
            "@type": "Question",
            "name": "Can you integrate with our existing systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, through APIs and integrations."
            }
          }
        ]
      }
    ]
  },
  "path": "/software-development"
}

export default function SoftwareDevelopment() {
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
          <h1>Custom Software Development Melbourne</h1>
          <p className="lead">Software built around how your business actually works.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Software Development?</h2>
            </div>
            <div>
              <p>
                Off-the-shelf software forces you to change how you work. We design and build custom software, from internal tools and customer portals to complete business platforms, so your systems fit your process.
              </p>
              <p>Our team handles the full lifecycle: discovery, design, development, testing, launch and ongoing support.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Software Development problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Hours lost to manual data entry</b>
              <p>Software that captures data once and uses it everywhere.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Off-the-shelf tools that don't fit</b>
              <p>Custom software built around how your team works.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Customers emailing for updates</b>
              <p>A client portal where they can see status themselves.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Old systems nobody can maintain</b>
              <p>We modernise legacy systems step by step.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Software Development</h2>
            </div>
            <Link className="more" to="/contact?service=Software+Development">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>{"Discovery & planning"}</b>
              <p>Requirements, scope and roadmap agreed up front.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>{"UX & UI design"}</b>
              <p>Easy-to-use screens your team will like.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Custom development</b>
              <p>Modern, secure and scalable code.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>{"Portals & dashboards"}</b>
              <p>Client portals, admin panels and reporting.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Automation</b>
              <p>Remove manual, repetitive tasks.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>{"Support & upgrades"}</b>
              <p>Maintenance and new features after launch.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Software Development is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Service companies</h3>
              <p>Job, booking and scheduling systems built for your workflow.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Distributors and manufacturers</h3>
              <p>Order, stock and production tools.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Professional firms</h3>
              <p>Secure client portals for documents and updates.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Software Development works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Discovery</b>
              <p>Interview users and define requirements.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Scope and quote</b>
              <p>A phased plan with a fixed quote for phase one.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Sprints</b>
              <p>Build and demo working software every one to two weeks.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Go live</b>
              <p>Launch, train users and move to support.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Software Development</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Fits your process</b>
                    <small>No more workarounds.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Saves time</b>
                    <small>Automate hours of manual work.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>You own it</b>
                    <small>Your software, your data.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Grows with you</b>
                    <small>Built to scale as you grow.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/saas-development">SaaS Development</Link>
                <Link to="/api-integrations">API Integrations</Link>
                <Link to="/app-development">App Development</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="sh">
            <div>
              <p className="ey">Example project</p>
              <h2>What this looks like in practice for software development</h2>
            </div>
          </div>
          <div className="case">
            <div className="cl">
              <span className="tag2">Example scenario</span>
              <h3>A growing distribution business</h3>
              <p className="res">Orders flow automatically, with fewer errors and hours saved every week.</p>
            </div>
            <div className="cr">
              <div>
                <b>The challenge</b>
                <p>Orders arrived by email and were re-typed into accounting and shipping systems, causing delays and errors.</p>
              </div>
              <div>
                <b>What we did</b>
                <p>We built an order portal and connected it to accounting and shipping through APIs.</p>
              </div>
              <div>
                <b>The outcome</b>
                <p>Orders flow automatically, with fewer errors and hours saved every week.</p>
              </div>
              <p className="note2">Illustrative example of a typical project.</p>
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
                Software Development questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>How much does custom software cost?</summary>
                <p>It depends on scope. After a free consultation we give a clear, fixed quote for each phase.</p>
              </details>
              <details>
                <summary>Who owns the code?</summary>
                <p>You do. Ownership and source code are handed over as agreed in your contract.</p>
              </details>
              <details>
                <summary>Do you provide support after launch?</summary>
                <p>Yes. We offer support and maintenance plans for all software we build.</p>
              </details>
              <details>
                <summary>How do you keep projects on budget?</summary>
                <p>We scope in phases with fixed quotes and demo progress every one to two weeks.</p>
              </details>
              <details>
                <summary>Will the software be secure?</summary>
                <p>Yes. We follow secure development practices and test before launch.</p>
              </details>
              <details>
                <summary>Can you integrate with our existing systems?</summary>
                <p>Yes, through APIs and integrations.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Software Development</h2>
          <p>Talk to our Development team about software development for your organisation.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Software+Development">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
