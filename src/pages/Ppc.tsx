import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RelatedReading from '../components/RelatedReading'

const meta = {
  "title": "PPC Management Melbourne: Pay-Per-Click | EG Eloma",
  "description": "Every click accountable. Every dollar tracked. Pay-per-click campaigns on Google, Microsoft Ads, LinkedIn, YouTube and Shopping.",
  "crumb": "PPC (Pay-Per-Click)",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "PPC (Pay-Per-Click)",
        "description": "Pay-per-click campaigns on Google, Microsoft Ads, LinkedIn, YouTube and Shopping.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "serviceType": "PPC (Pay-Per-Click)",
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
        "url": "https://egeloma.com.au/ppc"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is PPC different from Google & Meta Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PPC covers every pay-per-click platform, including Microsoft Ads, LinkedIn, YouTube and Shopping, plus landing pages and remarketing."
            }
          },
          {
            "@type": "Question",
            "name": "Do you set up landing pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. High-converting landing pages are part of our PPC service."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a lock-in contract?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Talk to us about terms. We'll recommend what suits your goals."
            }
          },
          {
            "@type": "Question",
            "name": "What is remarketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Showing ads to people who have already visited your website, to bring them back."
            }
          },
          {
            "@type": "Question",
            "name": "Is LinkedIn advertising worth it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For B2B services with valuable customers, often yes. We'll advise based on your goals."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage Microsoft Advertising (Bing)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, and it often costs less per click than Google."
            }
          }
        ]
      }
    ]
  },
  "path": "/ppc"
}

export default function Ppc() {
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
          <h1>PPC Management Melbourne</h1>
          <p className="lead">Every click accountable. Every dollar tracked.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is PPC?</h2>
            </div>
            <div>
              <p>
                PPC puts your business at the top of search and social results, and you only pay when someone clicks. Beyond Google and Meta, we manage Microsoft Advertising (Bing), LinkedIn, YouTube, Google Shopping and remarketing.
              </p>
              <p>Landing pages, tracking and reporting are built in, so you always know your return.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>PPC problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Only using one ad platform</b>
              <p>We find where your customers are, from Microsoft Ads to LinkedIn and YouTube.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Shopping feed errors</b>
              <p>We fix product feeds so Shopping ads show correctly.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Visitors leave and never return</b>
              <p>Remarketing brings back people who showed interest.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Landing pages that don't convert</b>
              <p>Fast, focused landing pages built for each campaign.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in PPC</h2>
            </div>
            <Link className="more" to="/contact?service=PPC+(Pay-Per-Click)">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Search campaigns</b>
              <p>Google and Microsoft Advertising.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>{"Shopping & eCommerce"}</b>
              <p>Product feeds and Shopping campaigns.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>LinkedIn Ads</b>
              <p>B2B targeting by role, industry and company.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Remarketing</b>
              <p>Bring back visitors who did not convert.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Landing pages</b>
              <p>Fast pages designed to turn clicks into leads.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>ROI reporting</b>
              <p>Cost per lead and return on ad spend.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who PPC is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>B2B companies</h3>
              <p>LinkedIn and Microsoft Advertising to reach decision-makers.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Online retailers</h3>
              <p>Google Shopping and remarketing to drive sales.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Video-led brands</h3>
              <p>YouTube campaigns that build awareness and demand.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How PPC works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Channel plan</b>
              <p>Choose the platforms that fit your audience and budget.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Landing pages</b>
              <p>Build focused pages for each campaign.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Campaign build</b>
              <p>Set up search, shopping, social or video campaigns.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Return tracking</b>
              <p>Report cost per lead and return on ad spend.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of PPC</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Instant visibility</b>
                    <small>Top of results from launch.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Precise targeting</b>
                    <small>Location, device, audience and time.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Scalable</b>
                    <small>Increase spend as returns grow.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Measurable</b>
                    <small>Every click and conversion tracked.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/google-meta-ads">{"Google & Meta Ads"}</Link>
                <Link to="/website-development">Website Development</Link>
                <Link to="/seo">Search Engine Optimisation</Link>
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
                PPC questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>{"How is PPC different from Google & Meta Ads?"}</summary>
                <p>
                  PPC covers every pay-per-click platform, including Microsoft Ads, LinkedIn, YouTube and Shopping, plus landing pages and remarketing.
                </p>
              </details>
              <details>
                <summary>Do you set up landing pages?</summary>
                <p>Yes. High-converting landing pages are part of our PPC service.</p>
              </details>
              <details>
                <summary>Is there a lock-in contract?</summary>
                <p>Talk to us about terms. We'll recommend what suits your goals.</p>
              </details>
              <details>
                <summary>What is remarketing?</summary>
                <p>Showing ads to people who have already visited your website, to bring them back.</p>
              </details>
              <details>
                <summary>Is LinkedIn advertising worth it?</summary>
                <p>For B2B services with valuable customers, often yes. We'll advise based on your goals.</p>
              </details>
              <details>
                <summary>Do you manage Microsoft Advertising (Bing)?</summary>
                <p>Yes, and it often costs less per click than Google.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with PPC</h2>
          <p>{"Talk to our Marketing & Growth team about ppc for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=PPC+(Pay-Per-Click)">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
