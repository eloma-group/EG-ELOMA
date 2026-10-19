import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RelatedReading from '../components/RelatedReading'

const meta = {
  "title": "Google Ads & Facebook Ads Agency Melbourne | EG Eloma",
  "description": "Ads that bring enquiries, not just clicks. Google Search, Performance Max, Facebook and Instagram ads managed for leads.",
  "crumb": "Google & Meta Ads",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Google & Meta Ads",
        "description": "Google Search, Performance Max, Facebook and Instagram ads managed for leads.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "serviceType": "Google & Meta Ads",
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
        "url": "https://egeloma.com.au/google-meta-ads"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What budget do I need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your industry and area. We'll recommend a starting budget in your free consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Is ad spend included in the plan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Ad spend is paid directly to Google and Meta; our plan covers management."
            }
          },
          {
            "@type": "Question",
            "name": "Which plan includes ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ad Power and All-in-One plans."
            }
          },
          {
            "@type": "Question",
            "name": "Who owns the ad accounts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You do. We work inside accounts in your business name."
            }
          },
          {
            "@type": "Question",
            "name": "How often do you optimise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At least weekly, with a monthly report and review."
            }
          },
          {
            "@type": "Question",
            "name": "Do you design the ad images and videos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Creative is included in our ads management."
            }
          }
        ]
      }
    ]
  },
  "path": "/google-meta-ads"
}

export default function GoogleMetaAds() {
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
            <Link to="/products#marketing">{"Marketing & Growth"}</Link>
          </p>
          <h1>{"Google Ads & Facebook Ads Management Melbourne"}</h1>
          <p className="lead">Ads that bring enquiries, not just clicks.</p>
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
              <h2 style={{ marginTop: "10px" }}>{"What is Google & Meta Ads?"}</h2>
              <p className="inc">
                {"Available in: "}
                <b>All-in-One Plan, Ad Power</b>
                .
              </p>
            </div>
            <div>
              <p>
                Google and Meta (Facebook and Instagram) ads put you in front of buyers today. We plan your campaigns, write and design the ads, set up conversion tracking and optimise every week to lower your cost per lead.
              </p>
              <p>AI-assisted targeting and creative testing are included in our All-in-One plan.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>{"Google & Meta Ads problems we solve"}</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Clicks but no enquiries</b>
              <p>We improve targeting, ad copy and landing pages, and track real conversions.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Ads stopped after a policy warning</b>
              <p>We review and fix policy issues so campaigns can run.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Budget spent too fast</b>
              <p>We set bid strategies, schedules and limits that match your goals.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Can't tell which ads work</b>
              <p>Conversion tracking shows cost per lead for every campaign.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>{"What's included in Google & Meta Ads"}</h2>
            </div>
            <Link className="more" to="/contact?service=Google+&+Meta+Ads">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Campaign strategy</b>
              <p>Goals, audiences and budgets planned with you.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Google Ads</b>
              <p>Search, Performance Max, Display and YouTube.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Meta Ads</b>
              <p>Facebook and Instagram lead and sales campaigns.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>{"Ad copy & creative"}</b>
              <p>Words, images and videos that convert.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Conversion tracking</b>
              <p>Calls, forms and sales tracked accurately.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Weekly optimisation</b>
              <p>Bids, keywords and audiences improved continuously.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>{"Who Google & Meta Ads is for"}</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Businesses needing leads now</h3>
              <p>Search ads that put you in front of people searching today.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Brands launching offers</h3>
              <p>Facebook and Instagram campaigns for promotions and events.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Advertisers unhappy with results</h3>
              <p>An audit and rebuild of underperforming accounts.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>{"How Google & Meta Ads works"}</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Account audit or setup</b>
              <p>Review existing campaigns or build the account properly.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Tracking</b>
              <p>Set up conversion tracking for calls, forms and sales.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Launch</b>
              <p>Ads, audiences and budgets go live.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Optimise weekly</b>
              <p>Adjust bids, keywords, audiences and creative.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">{"Benefits of Google & Meta Ads"}</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Fast results</b>
                    <small>Leads from day one of launch.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Full control</b>
                    <small>Set your budget and scale what works.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Transparent</b>
                    <small>You own the ad accounts and see every dollar.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Lower cost per lead</b>
                    <small>Continuous testing improves results.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/ppc">PPC</Link>
                <Link to="/social-media">Social Media Management</Link>
                <Link to="/design">Designing</Link>
                <Link to="/local-listing">Local Listing (Google Business Profile)</Link>
              </div>
            </div>
          </div>
        </section>
        <RelatedReading posts={['/blog-local-seo-checklist', '/blog-google-vs-meta-ads']} />
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                {"Google & Meta Ads questions"}
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>What budget do I need?</summary>
                <p>It depends on your industry and area. We'll recommend a starting budget in your free consultation.</p>
              </details>
              <details>
                <summary>Is ad spend included in the plan?</summary>
                <p>No. Ad spend is paid directly to Google and Meta; our plan covers management.</p>
              </details>
              <details>
                <summary>Which plan includes ads?</summary>
                <p>Ad Power and All-in-One plans.</p>
              </details>
              <details>
                <summary>Who owns the ad accounts?</summary>
                <p>You do. We work inside accounts in your business name.</p>
              </details>
              <details>
                <summary>How often do you optimise?</summary>
                <p>At least weekly, with a monthly report and review.</p>
              </details>
              <details>
                <summary>Do you design the ad images and videos?</summary>
                <p>Yes. Creative is included in our ads management.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>{"Get started with Google & Meta Ads"}</h2>
          <p>{"Talk to our Marketing & Growth team about google & meta ads for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Google+&+Meta+Ads">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
