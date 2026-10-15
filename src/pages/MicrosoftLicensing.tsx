import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Microsoft Licensing | EG Eloma",
  "description": "Pay only for the Microsoft licences you actually need. The right Microsoft licences at the right price, with billing and renewals handled.",
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://egeloma.com.au/#org",
        "name": "EG Eloma",
        "url": "https://egeloma.com.au/",
        "logo": "https://egeloma.com.au/logo.png",
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
        "name": "Microsoft Licensing",
        "description": "The right Microsoft licences at the right price, with billing and renewals handled.",
        "provider": {
          "@id": "https://egeloma.com.au/#org"
        },
        "serviceType": "Microsoft Licensing",
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
        "url": "https://egeloma.com.au/microsoft-licensing"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you move our existing licences to EG Eloma?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can transfer your existing Microsoft subscriptions to us with no downtime and review them at the same time."
            }
          },
          {
            "@type": "Question",
            "name": "Do you supply licences outside Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We support clients in Australia, the US, Canada, the UK and New Zealand."
            }
          },
          {
            "@type": "Question",
            "name": "Which products can you license?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Microsoft 365, Office apps, Exchange, Teams, Copilot, Azure, Dynamics 365, Power Platform, Windows, Visio, Project and security add-ons."
            }
          },
          {
            "@type": "Question",
            "name": "What is Microsoft CSP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Cloud Solution Provider program lets a Microsoft partner supply, bill and support your Microsoft licences."
            }
          },
          {
            "@type": "Question",
            "name": "Can we reduce licences mid-term?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the term you choose. Monthly terms are more flexible; annual terms usually cost less. We explain the options in your quote."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle nonprofit licensing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We help eligible nonprofits apply for Microsoft's nonprofit grants and discounts."
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
            "item": "https://egeloma.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://egeloma.com.au/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Microsoft Licensing",
            "item": "https://egeloma.com.au/microsoft-licensing"
          }
        ]
      }
    ]
  },
  "path": "/microsoft-licensing"
}

export default function MicrosoftLicensing() {
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
            <Link to="/services#microsoft">{"Microsoft & Licensing"}</Link>
          </p>
          <h1>Microsoft Licensing</h1>
          <p className="lead">Pay only for the Microsoft licences you actually need.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Microsoft Licensing?</h2>
            </div>
            <div>
              <p>
                Microsoft licensing is confusing: Business vs Enterprise, monthly vs annual, add-ons and bundles. Buy the wrong mix and you overpay every month or miss features your team needs.
              </p>
              <p>
                EG Eloma reviews how your people work, recommends the right plan for each user, supplies the licences and manages billing, changes and renewals from one place.
              </p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Microsoft Licensing problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Paying for licences nobody uses</b>
              <p>We find inactive and oversized licences and remove or downgrade them.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Everyone on the same expensive plan</b>
              <p>We match each person to the plan that fits how they work.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Renewals catching you by surprise</b>
              <p>We track renewal dates and review your licences before they renew.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Licences bought from several places</b>
              <p>We bring them together under one account and one clear invoice.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Microsoft Licensing</h2>
            </div>
            <Link className="more" to="/contact?service=Microsoft+Licensing">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Licence review</b>
              <p>We audit current licences and find savings and gaps.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Right-sized plans</b>
              <p>Business Basic, Standard, Premium, E3, E5 and add-ons matched per user.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Monthly or annual</b>
              <p>Flexible terms that suit your cash flow.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>One invoice</b>
              <p>All Microsoft licences billed together, clearly itemised.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Add or remove users</b>
              <p>Changes made the same day as staff join or leave.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Renewal management</b>
              <p>No surprise expiries. We remind, review and renew.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Microsoft Licensing is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Businesses renewing soon</h3>
              <p>Review your licences before renewal and avoid paying for another year of the wrong plans.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Fast-growing teams</h3>
              <p>Add and remove users quickly as staff join and leave.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Organisations with mixed plans</h3>
              <p>Bring licences from several sources onto one clear invoice.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Microsoft Licensing works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Export your current licences</b>
              <p>We pull a list of every user, plan and add-on in your account.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Usage review</b>
              <p>We check who uses which apps and features.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Right-size and quote</b>
              <p>A written recommendation showing the plan for each person.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Transfer and manage</b>
              <p>We move licences across and manage changes from then on.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Microsoft Licensing</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Lower monthly spend</b>
                    <small>Stop paying for unused or oversized licences.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Compliance</b>
                    <small>Stay correctly licensed and audit-ready.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Less admin</b>
                    <small>One partner for licences, billing and support.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Expert advice</b>
                    <small>Plain-English recommendations, not sales jargon.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/microsoft">Microsoft Products</Link>
                <Link to="/microsoft-development">Microsoft Product Development</Link>
                <Link to="/support-services">Support Services</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="sh">
            <div>
              <p className="ey">Example project</p>
              <h2>What this looks like in practice for microsoft licensing</h2>
            </div>
          </div>
          <div className="case">
            <div className="cl">
              <span className="tag2">Example scenario</span>
              <h3>A 25-person professional services firm</h3>
              <p className="res">Lower monthly licence costs, one place for files, and a much stronger security baseline.</p>
            </div>
            <div className="cr">
              <div>
                <b>The challenge</b>
                <p>Paying for mixed, oversized licences, with files spread across a shared drive and personal OneDrives.</p>
              </div>
              <div>
                <b>What we did</b>
                <p>We right-sized licences per user, moved files into SharePoint and Teams, and turned on MFA and Defender.</p>
              </div>
              <div>
                <b>The outcome</b>
                <p>Lower monthly licence costs, one place for files, and a much stronger security baseline.</p>
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
                Microsoft Licensing questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Can you move our existing licences to EG Eloma?</summary>
                <p>Yes. We can transfer your existing Microsoft subscriptions to us with no downtime and review them at the same time.</p>
              </details>
              <details>
                <summary>Do you supply licences outside Australia?</summary>
                <p>Yes. We support clients in Australia, the US, Canada, the UK and New Zealand.</p>
              </details>
              <details>
                <summary>Which products can you license?</summary>
                <p>
                  Microsoft 365, Office apps, Exchange, Teams, Copilot, Azure, Dynamics 365, Power Platform, Windows, Visio, Project and security add-ons.
                </p>
              </details>
              <details>
                <summary>What is Microsoft CSP?</summary>
                <p>The Cloud Solution Provider program lets a Microsoft partner supply, bill and support your Microsoft licences.</p>
              </details>
              <details>
                <summary>Can we reduce licences mid-term?</summary>
                <p>
                  It depends on the term you choose. Monthly terms are more flexible; annual terms usually cost less. We explain the options in your quote.
                </p>
              </details>
              <details>
                <summary>Do you handle nonprofit licensing?</summary>
                <p>Yes. We help eligible nonprofits apply for Microsoft's nonprofit grants and discounts.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Microsoft Licensing</h2>
          <p>{"Talk to our Microsoft & Licensing team about microsoft licensing for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Microsoft+Licensing">Get a quote</Link>
            <Link className="btn d" to="/services">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
