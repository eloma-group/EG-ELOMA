import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Marketing Plans & Microsoft 365 Quotes | EG Eloma",
  "description": "Compare EG Eloma marketing plans and Microsoft 365 licences, from single services to All-in-One. Every plan is tailored and quoted in writing.",
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
        "@type": "OfferCatalog",
        "name": "EG Eloma marketing plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "All-in-One Plan",
            "description": "Social Media + SEO + Local Listing + Website + Google Ads + Meta Ads + Designing + AI Ads",
            "seller": {
              "@id": "https://egdigital.com.au/#org"
            }
          },
          {
            "@type": "Offer",
            "name": "Business Plan",
            "description": "Social Media + SEO + Local Listing + Website + Designing",
            "seller": {
              "@id": "https://egdigital.com.au/#org"
            }
          },
          {
            "@type": "Offer",
            "name": "Growth Plan",
            "description": "Social Media + SEO + Local Listing",
            "seller": {
              "@id": "https://egdigital.com.au/#org"
            }
          },
          {
            "@type": "Offer",
            "name": "Starter Plan",
            "description": "Social Media + SEO",
            "seller": {
              "@id": "https://egdigital.com.au/#org"
            }
          },
          {
            "@type": "Offer",
            "name": "Post & Grow",
            "description": "Social Media",
            "seller": {
              "@id": "https://egdigital.com.au/#org"
            }
          },
          {
            "@type": "Offer",
            "name": "Rank Up",
            "description": "SEO",
            "seller": {
              "@id": "https://egdigital.com.au/#org"
            }
          },
          {
            "@type": "Offer",
            "name": "Near Me",
            "description": "Local Listing",
            "seller": {
              "@id": "https://egdigital.com.au/#org"
            }
          },
          {
            "@type": "Offer",
            "name": "My Website",
            "description": "Website",
            "seller": {
              "@id": "https://egdigital.com.au/#org"
            }
          },
          {
            "@type": "Offer",
            "name": "Ad Power",
            "description": "Google Ads + Meta Ads",
            "seller": {
              "@id": "https://egdigital.com.au/#org"
            }
          },
          {
            "@type": "Offer",
            "name": "Design Hub",
            "description": "Designing",
            "seller": {
              "@id": "https://egdigital.com.au/#org"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do you quote instead of listing prices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every business is different. The cost depends on your goals, location, competition and how many services you choose. We give you a clear fixed monthly quote after a free consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Does my quote include advertising budget?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Advertising budget goes straight to the ad platforms and is listed separately. Your quote covers our strategy, creative and campaign management."
            }
          },
          {
            "@type": "Question",
            "name": "Can I upgrade or change plans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can move between plans as your business grows."
            }
          },
          {
            "@type": "Question",
            "name": "What are AI Ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI-assisted ad targeting and creative testing that improves results over time, included in the All-in-One plan."
            }
          },
          {
            "@type": "Question",
            "name": "Do plans work outside Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Plans are available in Australia, the US, Canada, the UK and New Zealand."
            }
          },
          {
            "@type": "Question",
            "name": "How do I pay?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Plans are invoiced monthly and you can see every invoice in your client portal."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get a quote for Microsoft licences?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tell us how many users you have and how they work. We review your needs and send a clear written quote for licences, setup and support."
            }
          },
          {
            "@type": "Question",
            "name": "Do you help nonprofits with Microsoft?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We help eligible nonprofits register for Microsoft's nonprofit grants and discounts, then set up and secure Microsoft 365."
            }
          }
        ]
      }
    ]
  },
  "path": "/pricing"
}

export default function Pricing() {
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
        <Header active="/pricing" />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>{"Plans & quotes"}</span>
          </p>
          <h1>Plans that grow with you</h1>
          <p className="lead">Marketing plans and Microsoft 365 licences, tailored to your business and quoted in writing.</p>
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
        <nav className="pnav" aria-label="Plan sections">
          <a href="#marketing">Marketing plans</a>
          <a href="#microsoft">Microsoft licences</a>
          <a href="#compare">Compare</a>
          <a href="#other">Other services</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div id="marketing" />
        <section className="s first rv">
          <div className="sh">
            <div>
              <p className="ey">Bundles</p>
              <h2>Bundled plans</h2>
              <p className="sub">Our most popular way to grow: several services, one monthly plan.</p>
            </div>
          </div>
          <div className="plans-g stg">
            <article className="panel plan feat-p" style={{ transitionDelay: "0ms" }}>
              <span className="badge">Most complete</span>
              <p className="no">PLAN 01</p>
              <h3>All-in-One Plan</h3>
              <p className="for">Everything, fully managed: the complete growth package.</p>
              <p className="price">
                Custom quote
                <small>Monthly plan, tailored to you</small>
              </p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Social Media
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  SEO
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Local Listing
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Website
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Google Ads
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Meta Ads
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Designing
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  AI Ads
                </li>
              </ul>
              <span className="sp" />
              <Link className="btn w" to="/contact?plan=All-in-One+Plan">Get a quote</Link>
            </article>
            <article className="panel plan" style={{ transitionDelay: "70ms" }}>
              <p className="no">PLAN 02</p>
              <h3>Business Plan</h3>
              <p className="for">Your full online presence: website, search, social and design.</p>
              <p className="price">
                Custom quote
                <small>Monthly plan, tailored to you</small>
              </p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Social Media
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  SEO
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Local Listing
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Website
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Designing
                </li>
              </ul>
              <span className="sp" />
              <Link className="btn d" to="/contact?plan=Business+Plan">Get a quote</Link>
            </article>
            <article className="panel plan" style={{ transitionDelay: "140ms" }}>
              <p className="no">PLAN 03</p>
              <h3>Growth Plan</h3>
              <p className="for">Grow visibility on Google, Maps and social media.</p>
              <p className="price">
                Custom quote
                <small>Monthly plan, tailored to you</small>
              </p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Social Media
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  SEO
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Local Listing
                </li>
              </ul>
              <span className="sp" />
              <Link className="btn d" to="/contact?plan=Growth+Plan">Get a quote</Link>
            </article>
            <article className="panel plan" style={{ transitionDelay: "210ms" }}>
              <p className="no">PLAN 04</p>
              <h3>Starter Plan</h3>
              <p className="for">Get found and stay active: social plus SEO.</p>
              <p className="price">
                Custom quote
                <small>Monthly plan, tailored to you</small>
              </p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Social Media
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  SEO
                </li>
              </ul>
              <span className="sp" />
              <Link className="btn d" to="/contact?plan=Starter+Plan">Get a quote</Link>
            </article>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Single services</p>
              <h2>Single-service plans</h2>
              <p className="sub">Need just one thing done well? Start here.</p>
            </div>
          </div>
          <div className="stg cards c3">
            <Link className="card" to="/contact?plan=Post+&+Grow" style={{ transitionDelay: "0ms" }}>
              <p className="k">Plan 05</p>
              <h3>{"Post & Grow"}</h3>
              <p>Social media managed for you.</p>
              <span className="go">
                {"Get a quote "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/contact?plan=Rank+Up" style={{ transitionDelay: "70ms" }}>
              <p className="k">Plan 06</p>
              <h3>Rank Up</h3>
              <p>SEO to climb Google rankings.</p>
              <span className="go">
                {"Get a quote "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/contact?plan=Near+Me" style={{ transitionDelay: "140ms" }}>
              <p className="k">Plan 07</p>
              <h3>Near Me</h3>
              <p>Local listing for 'near me' searches.</p>
              <span className="go">
                {"Get a quote "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/contact?plan=My+Website" style={{ transitionDelay: "210ms" }}>
              <p className="k">Plan 08</p>
              <h3>My Website</h3>
              <p>A professional website, built and maintained.</p>
              <span className="go">
                {"Get a quote "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/contact?plan=Ad+Power" style={{ transitionDelay: "280ms" }}>
              <p className="k">Plan 09</p>
              <h3>Ad Power</h3>
              <p>Google and Meta ads managed for leads.</p>
              <span className="go">
                {"Get a quote "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/contact?plan=Design+Hub" style={{ transitionDelay: "350ms" }}>
              <p className="k">Plan 10</p>
              <h3>Design Hub</h3>
              <p>On-demand professional design.</p>
              <span className="go">
                {"Get a quote "}
                <span>→</span>
              </span>
            </Link>
          </div>
        </section>
        <section className="s  rv" id="microsoft">
          <div className="sh">
            <div>
              <p className="ey">Microsoft licences</p>
              <h2>Microsoft 365 licences</h2>
              <p className="sub">We help you pick the right plan for each user and quote licences, setup and support together.</p>
            </div>
            <Link className="more" to="/contact?service=Microsoft+Licensing">
              {"Free licence review "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="cards c4 msp stg">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <p className="k">{"Web & mobile apps"}</p>
              <h3>Microsoft 365 Business Basic</h3>
              <p className="qt">Price on quote · monthly or annual</p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Outlook, Word, Excel, PowerPoint on web and mobile</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Business email (50 GB mailbox)</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Microsoft Teams</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>1 TB OneDrive storage per user</span>
                </li>
              </ul>
              <Link className="btn d" to="/contact?service=Microsoft+Licensing">Get a quote</Link>
            </div>
            <div className="card feat-c" style={{ transitionDelay: "70ms" }}>
              <span className="badge2">Most popular</span>
              <p className="k">Desktop apps + Copilot</p>
              <h3>Microsoft 365 Business Standard with Copilot</h3>
              <p className="qt">Price on quote · monthly or annual</p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Everything in Business Basic</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Desktop Office apps</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Microsoft 365 Copilot included</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Webinars and collaborative workspaces</span>
                </li>
              </ul>
              <Link className="btn w" to="/contact?service=Microsoft+Licensing">Get a quote</Link>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <p className="k">Productivity + advanced security</p>
              <h3>Microsoft 365 Business Premium with Copilot</h3>
              <p className="qt">Price on quote · monthly or annual</p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Everything in Business Standard</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Microsoft Defender for Business</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Intune device management</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Entra ID identity and access protection</span>
                </li>
              </ul>
              <Link className="btn d" to="/contact?service=Microsoft+Licensing">Get a quote</Link>
            </div>
            <div className="card" style={{ transitionDelay: "210ms" }}>
              <p className="k">Office apps only, no email</p>
              <h3>Microsoft 365 Apps for business</h3>
              <p className="qt">Price on quote · monthly or annual</p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Desktop Word, Excel, PowerPoint, Outlook</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>1 TB OneDrive storage per user</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Install on up to 5 PCs/Macs, 5 tablets, 5 phones</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>No business email or Teams</span>
                </li>
              </ul>
              <Link className="btn d" to="/contact?service=Microsoft+Licensing">Get a quote</Link>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Microsoft</p>
              <h2>More Microsoft products</h2>
              <p className="sub">Enterprise plans, Copilot, Teams calling and email-only plans, all quoted to your needs.</p>
            </div>
          </div>
          <div className="mtab stg">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>{"Business & productivity"}</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Microsoft 365 Business Basic (no Teams)</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Microsoft 365 Business Standard with Copilot (no Teams)</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Microsoft 365 Business Premium with Copilot (no Teams)</td>
                    <td>Quote</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Enterprise (300+ users)</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Microsoft 365 E3</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Microsoft 365 E3 (no Teams)</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Microsoft 365 E5</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Microsoft 365 E5 (no Teams)</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Microsoft 365 E7</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Microsoft 365 E7 (no Teams)</td>
                    <td>Quote</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>{"AI & Copilot"}</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Microsoft 365 Copilot Business add-on</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Microsoft 365 Copilot add-on (enterprise)</td>
                    <td>Quote</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card" style={{ transitionDelay: "210ms" }}>
              <h3>{"Teams & calling"}</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Microsoft Teams Essentials</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Microsoft Teams Premium (add-on)</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Teams Phone Standard (add-on)</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Teams Phone with domestic calling</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>{"Teams Phone with domestic & international calling"}</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Teams Rooms Pro (per room)</td>
                    <td>Quote</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card" style={{ transitionDelay: "280ms" }}>
              <h3>Email only</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Exchange Online (Plan 1)</td>
                    <td>Quote</td>
                  </tr>
                  <tr>
                    <td>Exchange Online (Plan 2)</td>
                    <td>Quote</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mnotes">
            <p>
              {"Microsoft licences are quoted in your local currency (AUD, USD, CAD, GBP or NZD), on monthly or annual terms, together with any setup, migration and support. Eligible nonprofits can access Microsoft grants and discounts. "}
              <Link to="/microsoft#nonprofit">Learn about Microsoft nonprofit offers</Link>
              .
            </p>
          </div>
        </section>
        <section className="s  rv" id="compare">
          <div className="sh">
            <div>
              <p className="ey">At a glance</p>
              <h2>Compare plans</h2>
            </div>
            <Link className="more" to="/contact">
              {"Help me choose "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="tbl">
            <table>
              <thead>
                <tr>
                  <th scope="col">Plan</th>
                  <th scope="col">Social Media</th>
                  <th scope="col">SEO</th>
                  <th scope="col">Local Listing</th>
                  <th scope="col">Website</th>
                  <th scope="col">Google Ads</th>
                  <th scope="col">Meta Ads</th>
                  <th scope="col">Designing</th>
                  <th scope="col">AI Ads</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>All-in-One Plan</td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                </tr>
                <tr>
                  <td>Business Plan</td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                </tr>
                <tr>
                  <td>Growth Plan</td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                </tr>
                <tr>
                  <td>Starter Plan</td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                </tr>
                <tr>
                  <td>{"Post & Grow"}</td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                </tr>
                <tr>
                  <td>Rank Up</td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                </tr>
                <tr>
                  <td>Near Me</td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                </tr>
                <tr>
                  <td>My Website</td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                </tr>
                <tr>
                  <td>Ad Power</td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                </tr>
                <tr>
                  <td>Design Hub</td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                  <td>
                    <span className="y" aria-label="Included">●</span>
                  </td>
                  <td>
                    <span className="n" aria-label="Not included">—</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Always included</p>
              <h2>Every plan includes</h2>
              <p className="sub">No matter which plan you choose, you get the full EG Eloma support experience.</p>
            </div>
          </div>
          <div className="stg cards c4">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6" />
                </svg>
              </span>
              <h3>A named contact</h3>
              <p>Someone who knows your account and answers your questions.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="1" />
                  <path d="M3 9h18M7 13h6M7 16h4" />
                </svg>
              </span>
              <h3>Client portal access</h3>
              <p>Track products, tasks, invoices and tickets.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-4-4M8 12l2-2 2 2 2-3" />
                </svg>
              </span>
              <h3>Monthly reporting</h3>
              <p>Clear, plain-English results every month.</p>
            </div>
            <div className="card" style={{ transitionDelay: "210ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
                  <rect x="3" y="14" width="4" height="6" rx="1" />
                  <rect x="17" y="14" width="4" height="6" rx="1" />
                  <path d="M19 20a4 4 0 0 1-4 2h-2" />
                </svg>
              </span>
              <h3>24/7 support</h3>
              <p>Help whenever you need it, under 15 minutes on average.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Getting started</p>
              <h2>How it works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "5" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Free consultation</b>
              <p>Tell us about your business and goals.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Recommendation</b>
              <p>We suggest the right plan and explain why.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Fixed quote</b>
              <p>A clear monthly price with no surprises.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Onboarding</b>
              <p>We set up accounts, access and your portal.</p>
            </div>
            <div>
              <i>STEP 05</i>
              <b>Results</b>
              <p>Monthly reporting and continuous improvement.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Quotes</p>
              <h2>Our quote promise</h2>
              <p className="sub">Clear, fair and in writing, before any work starts.</p>
            </div>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Itemised</b>
              <p>Every licence, service and one-off cost listed separately.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Valid for 30 days</b>
              <p>Time to compare and decide without pressure.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Local currency</b>
              <p>Quoted in AUD, USD, CAD, GBP or NZD.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>No lock-in surprises</b>
              <p>Terms and notice periods spelled out up front.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Third-party costs shown</b>
              <p>Ad spend and provider fees shown separately from our fees.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Easy to change</b>
              <p>Add or remove services as your needs change.</p>
            </div>
          </div>
        </section>
        <section className="s  rv" id="other">
          <div className="sh">
            <div>
              <p className="ey">More services</p>
              <h2>Other products, quoted on request</h2>
              <p className="sub">Microsoft, development, communications, cloud and security services are quoted to your needs.</p>
            </div>
            <Link className="more" to="/contact">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="pl">
            <Link to="/microsoft">Microsoft Products</Link>
            <Link to="/microsoft-licensing">Microsoft Licensing</Link>
            <Link to="/microsoft-development">Microsoft Product Development</Link>
            <Link to="/website-development">Website Development</Link>
            <Link to="/software-development">Software Development</Link>
            <Link to="/saas-development">SaaS Development</Link>
            <Link to="/app-development">App Development</Link>
            <Link to="/api-integrations">API Integrations</Link>
            <Link to="/toll-free-number">Toll-Free Number</Link>
            <Link to="/virtual-mobile-number">Virtual Mobile Number</Link>
            <Link to="/landline-number">Landline Number</Link>
            <Link to="/ivr-system">IVR System</Link>
            <Link to="/virtual-customer-care">Virtual Customer Care Support</Link>
            <Link to="/cybersecurity">Cybersecurity</Link>
            <Link to="/cloud-maintenance">Cloud Maintenance</Link>
            <Link to="/server-maintenance">Server Maintenance</Link>
            <Link to="/support-services">Support Services</Link>
          </div>
        </section>
        <div id="faq" />
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "500 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "600 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                {"Plans & quote questions"}
              </h2>
              <p style={{ marginTop: "14px", color: "var(--dim)" }}>
                {"Can't find your answer? "}
                <Link to="/contact" style={{ color: "var(--ink)", textDecoration: "underline" }}>Talk to us</Link>
                .
              </p>
            </div>
            <div className="faq2">
              <details>
                <summary>Why do you quote instead of listing prices?</summary>
                <p>
                  Every business is different. The cost depends on your goals, location, competition and how many services you choose. We give you a clear fixed monthly quote after a free consultation.
                </p>
              </details>
              <details>
                <summary>Does my quote include advertising budget?</summary>
                <p>
                  Advertising budget goes straight to the ad platforms and is listed separately. Your quote covers our strategy, creative and campaign management.
                </p>
              </details>
              <details>
                <summary>Can I upgrade or change plans?</summary>
                <p>Yes. You can move between plans as your business grows.</p>
              </details>
              <details>
                <summary>What are AI Ads?</summary>
                <p>AI-assisted ad targeting and creative testing that improves results over time, included in the All-in-One plan.</p>
              </details>
              <details>
                <summary>Do plans work outside Australia?</summary>
                <p>Yes. Plans are available in Australia, the US, Canada, the UK and New Zealand.</p>
              </details>
              <details>
                <summary>How do I pay?</summary>
                <p>Plans are invoiced monthly and you can see every invoice in your client portal.</p>
              </details>
              <details>
                <summary>How do I get a quote for Microsoft licences?</summary>
                <p>
                  Tell us how many users you have and how they work. We review your needs and send a clear written quote for licences, setup and support.
                </p>
              </details>
              <details>
                <summary>Do you help nonprofits with Microsoft?</summary>
                <p>
                  Yes. We help eligible nonprofits register for Microsoft's nonprofit grants and discounts, then set up and secure Microsoft 365.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get your tailored quote</h2>
          <p>Tell us about your business and we'll recommend the right plan.</p>
          <div className="cta">
            <Link className="btn w" to="/contact">Get a quote</Link>
            <Link className="btn d" to="/services">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
