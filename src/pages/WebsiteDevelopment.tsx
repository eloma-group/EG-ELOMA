import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Website Development Melbourne | EG Eloma",
  "description": "A website that wins customers, not just looks good. Fast, mobile-first websites and online stores built to rank and convert.",
  "crumb": "Website Development",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Website Development",
        "description": "Fast, mobile-first websites and online stores built to rank and convert.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "serviceType": "Website Development",
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
        "url": "https://egeloma.com.au/website-development"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a website take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most business websites take 2 to 6 weeks, depending on pages and features."
            }
          },
          {
            "@type": "Question",
            "name": "Can you redesign my current site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can redesign and migrate your existing content and keep your SEO."
            }
          },
          {
            "@type": "Question",
            "name": "Which plans include a website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "My Website, Business and All-in-One plans."
            }
          },
          {
            "@type": "Question",
            "name": "Will I own my website and domain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Your domain and website content stay in your name."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build an online store?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, including payments, shipping and stock integrations."
            }
          },
          {
            "@type": "Question",
            "name": "Do you write the website content?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We can write it for you, or polish what you already have."
            }
          }
        ]
      }
    ]
  },
  "path": "/website-development"
}

export default function WebsiteDevelopment() {
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
          <h1>Website Development Melbourne</h1>
          <p className="lead">A website that wins customers, not just looks good.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Website Development?</h2>
              <p className="inc">
                {"Available in: "}
                <b>All-in-One Plan, Business Plan, My Website</b>
                .
              </p>
            </div>
            <div>
              <p>
                Your website is your hardest-working salesperson. We design and build fast, secure, mobile-first websites with clear messaging, strong calls to action and SEO built in from day one.
              </p>
              <p>Business websites, eCommerce stores, booking sites and landing pages, hosted on Microsoft Azure and maintained by our team.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Website Development problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>A slow, outdated website</b>
              <p>A fast, modern site that works beautifully on phones.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Visitors leave without contacting you</b>
              <p>Clear messaging and calls to action on every page.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Hard to update yourself</b>
              <p>An easy editor, or simply ask us to make changes.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Not found on Google</b>
              <p>SEO structure, speed and schema built in from launch.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Website Development</h2>
            </div>
            <Link className="more" to="/contact?service=Website+Development">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Custom design</b>
              <p>Unique to your brand, not a template.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>{"Mobile-first & fast"}</b>
              <p>Built for phones and top speed scores.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>SEO-ready</b>
              <p>Structure, speed and schema built in.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>eCommerce</b>
              <p>Online stores, payments and bookings.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Easy to update</b>
              <p>Edit content yourself, or ask us.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>{"Hosting & maintenance"}</b>
              <p>Azure hosting, backups and updates.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Website Development is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Businesses without a website</h3>
              <p>Get a professional online presence fast.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Owners of an outdated site</h3>
              <p>A modern redesign that keeps your Google rankings.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Online sellers</h3>
              <p>An eCommerce store with secure payments.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Website Development works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Sitemap and content plan</b>
              <p>Agree pages, messaging and calls to action.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Design</b>
              <p>Homepage and key page designs for approval.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Build</b>
              <p>Develop, connect forms and set up SEO basics.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Launch</b>
              <p>Test on every device, go live and hand over.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Website Development</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>More enquiries</b>
                    <small>Designed around calls, forms and sales.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Found on Google</b>
                    <small>SEO foundations from launch.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Secure</b>
                    <small>SSL, backups and security updates.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>One partner</b>
                    <small>Design, build, host and support in one place.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/seo">Search Engine Optimisation</Link>
                <Link to="/cloud-maintenance">Cloud Maintenance</Link>
                <Link to="/design">Designing</Link>
                <Link to="/local-listing">Local Listing (Google Business Profile)</Link>
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
                Website Development questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>How long does a website take?</summary>
                <p>Most business websites take 2 to 6 weeks, depending on pages and features.</p>
              </details>
              <details>
                <summary>Can you redesign my current site?</summary>
                <p>Yes. We can redesign and migrate your existing content and keep your SEO.</p>
              </details>
              <details>
                <summary>Which plans include a website?</summary>
                <p>My Website, Business and All-in-One plans.</p>
              </details>
              <details>
                <summary>Will I own my website and domain?</summary>
                <p>Yes. Your domain and website content stay in your name.</p>
              </details>
              <details>
                <summary>Can you build an online store?</summary>
                <p>Yes, including payments, shipping and stock integrations.</p>
              </details>
              <details>
                <summary>Do you write the website content?</summary>
                <p>We can write it for you, or polish what you already have.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Website Development</h2>
          <p>Talk to our Development team about website development for your organisation.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Website+Development">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
