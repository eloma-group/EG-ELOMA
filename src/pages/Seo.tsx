import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Search Engine Optimisation (SEO) | EG Eloma",
  "description": "Get found on Google by customers who are ready to buy. Rank higher on Google for the searches that bring you customers.",
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
        "name": "Search Engine Optimisation (SEO)",
        "description": "Rank higher on Google for the searches that bring you customers.",
        "provider": {
          "@id": "https://egdigital.com.au/#org"
        },
        "serviceType": "Search Engine Optimisation (SEO)",
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
        "url": "https://egdigital.com.au/seo"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does SEO take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most businesses see movement in 2 to 3 months and stronger results in 4 to 6 months, depending on competition."
            }
          },
          {
            "@type": "Question",
            "name": "Do you guarantee number one?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No honest agency can guarantee rankings. We focus on proven work and report transparently every month."
            }
          },
          {
            "@type": "Question",
            "name": "Which plans include SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rank Up, Starter, Growth, Business and All-in-One plans."
            }
          },
          {
            "@type": "Question",
            "name": "What is technical SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fixing the behind-the-scenes things Google needs, such as speed, mobile usability, indexing and structured data."
            }
          },
          {
            "@type": "Question",
            "name": "Do you write content?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We write service pages and articles designed to rank and convert."
            }
          },
          {
            "@type": "Question",
            "name": "Will SEO work for multiple countries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can target searches in Australia, the US, Canada, the UK and New Zealand."
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
            "name": "Search Engine Optimisation (SEO)",
            "item": "https://egdigital.com.au/seo"
          }
        ]
      }
    ]
  },
  "path": "/seo"
}

export default function Seo() {
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
          <h1>Search Engine Optimisation (SEO)</h1>
          <p className="lead">Get found on Google by customers who are ready to buy.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Search Engine Optimisation?</h2>
              <p className="inc">
                {"Available in: "}
                <b>All-in-One Plan, Business Plan, Growth Plan, Starter Plan, Rank Up</b>
                .
              </p>
            </div>
            <div>
              <p>
                SEO is how customers find you without paying for every click. We research the searches your customers use, fix technical issues, improve your pages and build authority so Google ranks you higher.
              </p>
              <p>For example, we helped Bivry move from position 13 to position 1 on Google in six months.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Search Engine Optimisation problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Your website is invisible on Google</b>
              <p>We fix indexing and technical issues that stop Google ranking your pages.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Competitors outrank you for key services</b>
              <p>We target the searches your customers use and improve the pages that matter.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Traffic that never becomes enquiries</b>
              <p>We optimise pages for calls and forms, not just rankings.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>No idea if SEO is working</b>
              <p>Monthly reports show rankings, traffic and the leads SEO brings.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Search Engine Optimisation</h2>
            </div>
            <Link className="more" to="/contact?service=Search+Engine+Optimisation+(SEO)">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Keyword research</b>
              <p>Find the searches that bring real customers.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Technical SEO</b>
              <p>Speed, mobile, indexing and structured data fixed.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>On-page optimisation</b>
              <p>Titles, content and internal links improved.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Content writing</b>
              <p>Service pages and articles that rank.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Link building</b>
              <p>Quality backlinks that build authority.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>{"Rank & traffic reports"}</b>
              <p>Monthly reporting on rankings, traffic and leads.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Search Engine Optimisation is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Service businesses</h3>
              <p>Rank for '[service] in [city]' searches that bring ready-to-buy customers.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>eCommerce stores</h3>
              <p>Category and product pages optimised to rank and sell.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Businesses relaunching a website</h3>
              <p>Protect existing rankings during a redesign or migration.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Search Engine Optimisation works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Technical audit</b>
              <p>Crawl your site and fix speed, indexing and structure issues.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Keyword map</b>
              <p>Assign the right searches to each page.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>On-page and content</b>
              <p>Improve existing pages and publish new ones.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Authority building</b>
              <p>Earn quality links and track rankings monthly.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Search Engine Optimisation</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Long-term traffic</b>
                    <small>Visitors keep coming without paying per click.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Higher trust</b>
                    <small>Customers trust top organic results.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Better website</b>
                    <small>SEO improves speed and usability too.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Measurable growth</b>
                    <small>Track rankings and enquiries month by month.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/local-listing">Local Listing</Link>
                <Link to="/website-development">Website Development</Link>
                <Link to="/google-meta-ads">{"Google & Meta Ads"}</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="sh">
            <div>
              <p className="ey">Client result</p>
              <h2>Real results for search engine optimisation</h2>
            </div>
          </div>
          <div className="case">
            <div className="cl">
              <span className="tag2">Client result</span>
              <h3>Bivry, logistics</h3>
              <p className="res">Bivry reached position 1 on Google within six months.</p>
            </div>
            <div className="cr">
              <div>
                <b>The challenge</b>
                <p>
                  Bivry needed to be found by customers searching for its logistics services, but sat at position 13 on Google, off the first page.
                </p>
              </div>
              <div>
                <b>What we did</b>
                <p>We researched the right searches, fixed technical issues, improved service pages and built authority.</p>
              </div>
              <div>
                <b>The outcome</b>
                <p>Bivry reached position 1 on Google within six months.</p>
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
                Search Engine Optimisation questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>How long does SEO take?</summary>
                <p>Most businesses see movement in 2 to 3 months and stronger results in 4 to 6 months, depending on competition.</p>
              </details>
              <details>
                <summary>Do you guarantee number one?</summary>
                <p>No honest agency can guarantee rankings. We focus on proven work and report transparently every month.</p>
              </details>
              <details>
                <summary>Which plans include SEO?</summary>
                <p>Rank Up, Starter, Growth, Business and All-in-One plans.</p>
              </details>
              <details>
                <summary>What is technical SEO?</summary>
                <p>Fixing the behind-the-scenes things Google needs, such as speed, mobile usability, indexing and structured data.</p>
              </details>
              <details>
                <summary>Do you write content?</summary>
                <p>Yes. We write service pages and articles designed to rank and convert.</p>
              </details>
              <details>
                <summary>Will SEO work for multiple countries?</summary>
                <p>Yes. We can target searches in Australia, the US, Canada, the UK and New Zealand.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Search Engine Optimisation</h2>
          <p>{"Talk to our Marketing & Growth team about search engine optimisation for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Search+Engine+Optimisation+(SEO)">Get a quote</Link>
            <Link className="btn d" to="/services">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
