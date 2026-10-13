import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "SaaS Development | EG Eloma",
  "description": "From idea to a subscription product your customers pay for. Multi-tenant SaaS platforms with subscriptions, user management and cloud hosting.",
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
        "name": "SaaS Development",
        "description": "Multi-tenant SaaS platforms with subscriptions, user management and cloud hosting.",
        "provider": {
          "@id": "https://egdigital.com.au/#org"
        },
        "serviceType": "SaaS Development",
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
        "url": "https://egdigital.com.au/saas-development"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you help with the product idea?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Discovery workshops help shape the idea, features and roadmap."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build mobile apps for SaaS too?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We build matching iOS and Android apps."
            }
          },
          {
            "@type": "Question",
            "name": "Where is it hosted?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically on Microsoft Azure, in the region that suits your customers."
            }
          },
          {
            "@type": "Question",
            "name": "How long does an MVP take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Often 8 to 16 weeks, depending on scope."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help us find product-market fit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We help you launch quickly, measure usage and prioritise what to build next."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support the product after launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with hosting, monitoring and ongoing development."
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
            "name": "SaaS Development",
            "item": "https://egdigital.com.au/saas-development"
          }
        ]
      }
    ]
  },
  "path": "/saas-development"
}

export default function SaasDevelopment() {
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
            <Link to="/services#development">Development</Link>
          </p>
          <h1>SaaS Development</h1>
          <p className="lead">From idea to a subscription product your customers pay for.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is SaaS Development?</h2>
            </div>
            <div>
              <p>
                Launching a software-as-a-service product takes more than code. We help founders and businesses plan, design and build secure, scalable SaaS platforms with subscriptions, user accounts and admin tools built in.
              </p>
              <p>Built and hosted on Microsoft Azure, with monitoring and support as you grow.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>SaaS Development problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>An idea but no technical co-founder</b>
              <p>We act as your product and engineering team.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>An MVP that can't scale</b>
              <p>Multi-tenant architecture designed to grow from day one.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Billing and subscriptions built by hand</b>
              <p>Subscriptions, trials and payments handled properly.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Security questions from enterprise buyers</b>
              <p>Security best practice and documentation to answer them.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in SaaS Development</h2>
            </div>
            <Link className="more" to="/contact?service=SaaS+Development">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>MVP planning</b>
              <p>Launch the right features first.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Multi-tenant architecture</b>
              <p>One platform, many secure customer accounts.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>{"Subscriptions & billing"}</b>
              <p>Plans, trials and payments with Stripe and more.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>{"User & role management"}</b>
              <p>Sign-up, single sign-on and permissions.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Admin dashboards</b>
              <p>Manage customers, usage and revenue.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Cloud scaling</b>
              <p>Azure hosting that grows with your users.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who SaaS Development is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>First-time founders</h3>
              <p>Turn an idea into a product customers can sign up for.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Agencies productising a service</h3>
              <p>Package what you do into recurring software.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Companies with an internal tool</h3>
              <p>Turn a successful internal tool into a commercial product.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How SaaS Development works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Product workshop</b>
              <p>Define the customer, problem and MVP features.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Architecture</b>
              <p>Plan multi-tenant data, security and billing.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>MVP build</b>
              <p>Develop the core product with sign-up and payments.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Launch and iterate</b>
              <p>Release to early customers and improve from usage.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of SaaS Development</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Recurring revenue</b>
                    <small>Built for subscription business models.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Faster to market</b>
                    <small>MVP first, then iterate.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>{"Secure & compliant"}</b>
                    <small>Security best practice from day one.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Scalable</b>
                    <small>Ready for your first 10 or 10,000 customers.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/software-development">Software Development</Link>
                <Link to="/app-development">App Development</Link>
                <Link to="/cloud-maintenance">Cloud Maintenance</Link>
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
                SaaS Development questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Can you help with the product idea?</summary>
                <p>Yes. Discovery workshops help shape the idea, features and roadmap.</p>
              </details>
              <details>
                <summary>Do you build mobile apps for SaaS too?</summary>
                <p>Yes. We build matching iOS and Android apps.</p>
              </details>
              <details>
                <summary>Where is it hosted?</summary>
                <p>Typically on Microsoft Azure, in the region that suits your customers.</p>
              </details>
              <details>
                <summary>How long does an MVP take?</summary>
                <p>Often 8 to 16 weeks, depending on scope.</p>
              </details>
              <details>
                <summary>Can you help us find product-market fit?</summary>
                <p>We help you launch quickly, measure usage and prioritise what to build next.</p>
              </details>
              <details>
                <summary>Do you support the product after launch?</summary>
                <p>Yes, with hosting, monitoring and ongoing development.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with SaaS Development</h2>
          <p>Talk to our Development team about saas development for your organisation.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=SaaS+Development">Get a quote</Link>
            <Link className="btn d" to="/services">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
