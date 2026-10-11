import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Designing (Design Hub) | EG Eloma",
  "description": "Professional design that makes your brand look the part. Logos, branding, social graphics, flyers, brochures and ad creative.",
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
        "name": "Designing (Design Hub)",
        "description": "Logos, branding, social graphics, flyers, brochures and ad creative.",
        "provider": {
          "@id": "https://egdigital.com.au/#org"
        },
        "serviceType": "Designing (Design Hub)",
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
        "url": "https://egdigital.com.au/design"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I own the designs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You receive the final files to use as you wish."
            }
          },
          {
            "@type": "Question",
            "name": "How fast are designs delivered?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most requests are delivered in 1 to 3 business days."
            }
          },
          {
            "@type": "Question",
            "name": "Which plans include design?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Design Hub, Business and All-in-One plans."
            }
          },
          {
            "@type": "Question",
            "name": "Can you refresh our existing logo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can modernise your logo while keeping what customers recognise."
            }
          },
          {
            "@type": "Question",
            "name": "Do you design for print?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes: flyers, brochures, business cards, signage and more."
            }
          },
          {
            "@type": "Question",
            "name": "How do I request a design?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Through your client portal or account manager."
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
            "name": "Designing (Design Hub)",
            "item": "https://egdigital.com.au/design"
          }
        ]
      }
    ]
  },
  "path": "/design"
}

export default function Design() {
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
          <h1>Designing (Design Hub)</h1>
          <p className="lead">Professional design that makes your brand look the part.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Designing?</h2>
              <p className="inc">
                {"Available in: "}
                <b>All-in-One Plan, Business Plan, Design Hub</b>
                .
              </p>
            </div>
            <div>
              <p>
                First impressions are visual. Our designers create logos, brand guidelines, social media graphics, flyers, brochures, signage, presentations and ad creative that look consistent everywhere.
              </p>
              <p>Request designs anytime through Design Hub and get fast turnarounds.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Designing problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Brand looks different everywhere</b>
              <p>A simple brand guide keeps colours, fonts and logos consistent.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Designs take weeks to arrive</b>
              <p>Most requests are delivered in a few business days.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Templates that look like everyone else's</b>
              <p>Original designs made for your business.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Files in the wrong format</b>
              <p>Print-ready and web-ready files every time.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Designing</h2>
            </div>
            <Link className="more" to="/contact?service=Designing+(Design+Hub)">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>{"Logo & brand identity"}</b>
              <p>Logos, colours, fonts and brand guides.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Social media graphics</b>
              <p>Posts, stories, covers and carousels.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Print design</b>
              <p>Flyers, brochures, business cards and signage.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Ad creative</b>
              <p>Static and video ads for Google and Meta.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Presentations</b>
              <p>Pitch decks and company profiles.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Fast revisions</b>
              <p>Changes until you are happy.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Designing is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>New businesses</h3>
              <p>A logo and brand identity to launch with confidence.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Busy marketing teams</h3>
              <p>On-demand designs without hiring in-house.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Businesses at events</h3>
              <p>Banners, flyers and signage that look professional.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Designing works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Brief</b>
              <p>Tell us what you need, where it will be used and by when.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>First concepts</b>
              <p>Initial designs in your brand style.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Revisions</b>
              <p>Refine until it's right.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Final files</b>
              <p>Print-ready and web-ready files delivered.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Designing</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Consistent brand</b>
                    <small>Everything looks like it belongs together.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Fast turnaround</b>
                    <small>Designs when you need them.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Professional quality</b>
                    <small>Experienced designers, not templates.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>All formats</b>
                    <small>Print-ready and web-ready files.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/social-media">Social Media Management</Link>
                <Link to="/website-development">Website Development</Link>
                <Link to="/google-meta-ads">{"Google & Meta Ads"}</Link>
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
              <h2 className="t" style={{ marginTop: "10px", font: "600 clamp(28px,2.8vw,40px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Designing questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Do I own the designs?</summary>
                <p>Yes. You receive the final files to use as you wish.</p>
              </details>
              <details>
                <summary>How fast are designs delivered?</summary>
                <p>Most requests are delivered in 1 to 3 business days.</p>
              </details>
              <details>
                <summary>Which plans include design?</summary>
                <p>Design Hub, Business and All-in-One plans.</p>
              </details>
              <details>
                <summary>Can you refresh our existing logo?</summary>
                <p>Yes. We can modernise your logo while keeping what customers recognise.</p>
              </details>
              <details>
                <summary>Do you design for print?</summary>
                <p>Yes: flyers, brochures, business cards, signage and more.</p>
              </details>
              <details>
                <summary>How do I request a design?</summary>
                <p>Through your client portal or account manager.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Designing</h2>
          <p>{"Talk to our Marketing & Growth team about designing for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Designing+(Design+Hub)">Get a quote</Link>
            <Link className="btn d" to="/services">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
