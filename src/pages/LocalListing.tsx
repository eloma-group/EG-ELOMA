import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Local Listing (Google Business Profile) | EG Eloma",
  "description": "Be the first business customers see on Google Maps. Appear in 'near me' searches and on Google Maps with a fully managed listing.",
  "crumb": "Local Listing (Google Business Profile)",
  "parent": {
    "name": "Products",
    "path": "/services"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Local Listing (Google Business Profile)",
        "description": "Appear in 'near me' searches and on Google Maps with a fully managed listing.",
        "provider": {
          "@id": "https://egeloma.com.au/#org"
        },
        "serviceType": "Local Listing (Google Business Profile)",
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
        "url": "https://egeloma.com.au/local-listing"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I need a physical address?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Service-area businesses can hide their address and list the areas they serve."
            }
          },
          {
            "@type": "Question",
            "name": "Can you fix a suspended listing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In many cases, yes. We'll review the issue and handle the reinstatement process."
            }
          },
          {
            "@type": "Question",
            "name": "Which plans include local listing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Near Me, Growth, Business and All-in-One plans."
            }
          },
          {
            "@type": "Question",
            "name": "How long until I appear in the map pack?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many businesses see improvement within a few weeks, but it depends on competition and location."
            }
          },
          {
            "@type": "Question",
            "name": "Can I have listings for several locations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Each location can have its own optimised profile."
            }
          },
          {
            "@type": "Question",
            "name": "Do you write review replies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, in your voice and approved by you."
            }
          }
        ]
      }
    ]
  },
  "path": "/local-listing"
}

export default function LocalListing() {
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
            <Link to="/services#marketing">{"Marketing & Growth"}</Link>
          </p>
          <h1>Local Listing (Google Business Profile)</h1>
          <p className="lead">Be the first business customers see on Google Maps.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Local Listing?</h2>
              <p className="inc">
                {"Available in: "}
                <b>All-in-One Plan, Business Plan, Growth Plan, Near Me</b>
                .
              </p>
            </div>
            <div>
              <p>
                When someone searches 'near me', Google shows the map pack first. We set up, verify and optimise your Google Business Profile and other directory listings so local customers find and call you.
              </p>
              <p>We also keep your hours, photos, posts and reviews up to date every month.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Local Listing problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Not appearing in the Google Maps pack</b>
              <p>We optimise your profile, categories and services for local searches.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Wrong hours or phone number online</b>
              <p>We correct and keep your details consistent across Google and directories.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Few or old reviews</b>
              <p>We set up a simple process to request and respond to reviews.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>A suspended or duplicate listing</b>
              <p>We work through Google's process to fix or merge listings.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Local Listing</h2>
            </div>
            <Link className="more" to="/contact?service=Local+Listing+(Google+Business+Profile)">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>{"Profile setup & verification"}</b>
              <p>Google Business Profile done properly.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>{"Category & service optimisation"}</b>
              <p>Show up for the right local searches.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>{"Photos & posts"}</b>
              <p>Fresh content that keeps your listing active.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Review management</b>
              <p>Request, monitor and respond to reviews.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Directory listings</b>
              <p>Consistent details on Bing, Apple Maps and directories.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Local reporting</b>
              <p>Calls, direction requests and views each month.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Local Listing is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Single-location businesses</h3>
              <p>Own the map results in your suburb or town.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Multi-location brands</h3>
              <p>Consistent, optimised profiles for every branch.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Service-area businesses</h3>
              <p>Show up across the areas you travel to, without a shopfront.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Local Listing works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Claim or recover</b>
              <p>Verify ownership of your Google Business Profile.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Optimise</b>
              <p>Categories, services, photos, hours and description.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Citations</b>
              <p>Fix your details across Apple Maps, Bing and directories.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Reviews and posts</b>
              <p>Ongoing review replies and regular profile posts.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Local Listing</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>More calls</b>
                    <small>Direct calls and directions from Maps.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Local trust</b>
                    <small>Reviews and photos win the click.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Consistent details</b>
                    <small>Correct name, address and phone everywhere.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Low cost</b>
                    <small>One of the highest-return marketing channels.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/seo">Search Engine Optimisation</Link>
                <Link to="/social-media">Social Media Management</Link>
                <Link to="/website-development">Website Development</Link>
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
                Local Listing questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Do I need a physical address?</summary>
                <p>No. Service-area businesses can hide their address and list the areas they serve.</p>
              </details>
              <details>
                <summary>Can you fix a suspended listing?</summary>
                <p>In many cases, yes. We'll review the issue and handle the reinstatement process.</p>
              </details>
              <details>
                <summary>Which plans include local listing?</summary>
                <p>Near Me, Growth, Business and All-in-One plans.</p>
              </details>
              <details>
                <summary>How long until I appear in the map pack?</summary>
                <p>Many businesses see improvement within a few weeks, but it depends on competition and location.</p>
              </details>
              <details>
                <summary>Can I have listings for several locations?</summary>
                <p>Yes. Each location can have its own optimised profile.</p>
              </details>
              <details>
                <summary>Do you write review replies?</summary>
                <p>Yes, in your voice and approved by you.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Local Listing</h2>
          <p>{"Talk to our Marketing & Growth team about local listing for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Local+Listing+(Google+Business+Profile)">Get a quote</Link>
            <Link className="btn d" to="/services">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
