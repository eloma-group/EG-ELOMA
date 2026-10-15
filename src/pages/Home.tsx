import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header, { PORTAL_URL } from '../components/Header'
import Footer from '../components/Footer'
import Credentials from '../components/Credentials'
import HeroStudio from '../components/HeroStudio'
import CountUp from '../components/CountUp'

const meta = {
  "title": "EG Eloma | Microsoft, Software, Marketing & Cybersecurity",
  "description": "Australian-owned EG Eloma: Microsoft 365, websites, software, SEO, ads, toll-free numbers, cloud and cybersecurity for businesses in AU, US, CA, UK and NZ.",
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
        "@type": "WebSite",
        "@id": "https://egeloma.com.au/#website",
        "url": "https://egeloma.com.au/",
        "name": "EG Eloma",
        "publisher": {
          "@id": "https://egeloma.com.au/#org"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does EG Eloma do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are an Australian-owned technology partner. We supply and support Microsoft products, build websites, software and apps, run digital marketing, provide business phone numbers and customer care, and keep your cloud and systems secure."
            }
          },
          {
            "@type": "Question",
            "name": "Which countries do you work in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Australia, the United States, Canada, the United Kingdom and New Zealand."
            }
          },
          {
            "@type": "Question",
            "name": "Which industries do you work with?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every industry, from retail, hospitality and trades to healthcare, government, logistics and startups."
            }
          },
          {
            "@type": "Question",
            "name": "How much do your services cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pricing depends on your needs. Our marketing plans are quoted monthly, and other services are quoted after a free consultation."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Existing clients can raise tickets in the client portal, by email or by phone, 24/7."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get started?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Book a free consultation. We learn about your business and recommend the right products and plan."
            }
          }
        ]
      }
    ]
  },
  "path": "/"
}

export default function Home() {
  return (
    <>
      <PageMeta {...meta} />
      <section className="lhero navy portal" id="hero" aria-labelledby="hero-title">
        <div className="orbits" aria-hidden="true">
          <svg viewBox="-600 -530 1200 1060" preserveAspectRatio="xMidYMid meet">
            <g id="o1">
              <ellipse rx="580" ry="175" />
            </g>
            <g transform="rotate(60)">
              <ellipse rx="580" ry="175" />
            </g>
            <g transform="rotate(-60)">
              <ellipse rx="580" ry="175" />
            </g>
            <circle r="6">
              <animateMotion dur="26s" repeatCount="indefinite" path="M580 0A580 175 0 1 1 -580 0A580 175 0 1 1 580 0" />
            </circle>
            <g transform="rotate(60)">
              <circle r="5.5">
                <animateMotion dur="32s" repeatCount="indefinite" path="M-580 0A580 175 0 1 1 580 0A580 175 0 1 1 -580 0" />
              </circle>
            </g>
            <g transform="rotate(-60)">
              <circle r="6">
                <animateMotion dur="38s" begin="-12s" repeatCount="indefinite" path="M580 0A580 175 0 1 0 -580 0A580 175 0 1 0 580 0" />
              </circle>
            </g>
            <g transform="rotate(60)">
              <circle r="4.5" opacity=".85">
                <animateMotion dur="32s" begin="-16s" repeatCount="indefinite" path="M-580 0A580 175 0 1 1 580 0A580 175 0 1 1 -580 0" />
              </circle>
            </g>
            <g transform="rotate(-60)">
              <circle r="4" opacity=".7">
                <animateMotion dur="38s" begin="-31s" repeatCount="indefinite" path="M580 0A580 175 0 1 0 -580 0A580 175 0 1 0 580 0" />
              </circle>
            </g>
          </svg>
        </div>
        <Header active="/" />
        <div className="wrap">
          <HeroStudio />
        </div>
      </section>
      <main className="wrap">
        <Credentials className="s first rv" />
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Proof</p>
              <h2>Results our clients can measure</h2>
              <p className="sub">Real numbers from real work across Microsoft, security, marketing and support.</p>
            </div>
          </div>
          <div className="statband stg">
            <div style={{ transitionDelay: "0ms" }}>
              <CountUp to={25} suf="+" />
              <span>Microsoft deployments</span>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <CountUp to={178} suf="+" />
              <span>Threats blocked every day</span>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <CountUp to={1} pre="#" />
              <span>{" Bivry on Google, up from #13 in 6 months"}</span>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <CountUp to={15} pre="<" suf=" min" />
              <span>Average support response, 24/7</span>
            </div>
          </div>
        </section>
        <section className="s  rv" id="products">
          <div className="sh">
            <div>
              <p className="ey">Our products</p>
              <h2>Everything your business runs on</h2>
              <p className="sub">
                23 products in five groups, delivered and supported by one team. Pick one service or let us manage everything.
              </p>
            </div>
            <Link className="more" to="/services">
              {"All products "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="stg cards c3">
            <div className="card hov" style={{ transitionDelay: "0ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                  <rect x="4" y="4" width="7" height="7" rx="1" />
                  <rect x="13" y="4" width="7" height="7" rx="1" />
                  <rect x="4" y="13" width="7" height="7" rx="1" />
                  <rect x="13" y="13" width="7" height="7" rx="1" />
                </svg>
              </span>
              <h3>
                <Link to="/services#microsoft">{"Microsoft & Licensing"}</Link>
              </h3>
              <p>Every Microsoft product, licensed, built on and supported.</p>
              <div className="pl">
                <Link to="/microsoft">Microsoft Products</Link>
                <Link to="/microsoft-licensing">Microsoft Licensing</Link>
                <Link to="/microsoft-development">Microsoft Product Development</Link>
              </div>
            </div>
            <div className="card hov" style={{ transitionDelay: "70ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-4-4M8 12l2-2 2 2 2-3" />
                </svg>
              </span>
              <h3>
                <Link to="/services#marketing">{"Marketing & Growth"}</Link>
              </h3>
              <p>Get found, get chosen and keep customers coming back.</p>
              <div className="pl">
                <Link to="/social-media">Social Media Management</Link>
                <Link to="/seo">Search Engine Optimisation</Link>
                <Link to="/local-listing">Local Listing</Link>
                <Link to="/google-meta-ads">{"Google & Meta Ads"}</Link>
                <Link to="/ppc">PPC</Link>
                <Link to="/design">Designing</Link>
              </div>
            </div>
            <div className="card hov" style={{ transitionDelay: "140ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />
                </svg>
              </span>
              <h3>
                <Link to="/services#development">Development</Link>
              </h3>
              <p>Websites, apps, SaaS and integrations, built to scale.</p>
              <div className="pl">
                <Link to="/website-development">Website Development</Link>
                <Link to="/software-development">Software Development</Link>
                <Link to="/saas-development">SaaS Development</Link>
                <Link to="/app-development">App Development</Link>
                <Link to="/api-integrations">API Integrations</Link>
              </div>
            </div>
            <div className="card hov" style={{ transitionDelay: "210ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </span>
              <h3>
                <Link to="/services#communications">Business Communications</Link>
              </h3>
              <p>Numbers, call flows and customer care that never miss a call.</p>
              <div className="pl">
                <Link to="/toll-free-number">Toll-Free Number</Link>
                <Link to="/virtual-mobile-number">Virtual Mobile Number</Link>
                <Link to="/landline-number">Landline Number</Link>
                <Link to="/ivr-system">IVR System</Link>
                <Link to="/virtual-customer-care">Virtual Customer Care Support</Link>
              </div>
            </div>
            <div className="card hov" style={{ transitionDelay: "280ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <h3>
                <Link to="/services#cloud">{"Cloud, Security & Support"}</Link>
              </h3>
              <p>Protected, maintained and supported around the clock.</p>
              <div className="pl">
                <Link to="/cybersecurity">Cybersecurity</Link>
                <Link to="/cloud-maintenance">Cloud Maintenance</Link>
                <Link to="/server-maintenance">Server Maintenance</Link>
                <Link to="/support-services">Support Services</Link>
              </div>
            </div>
            <div className="card cta-card" style={{ transitionDelay: "350ms" }}>
              <h3>Not sure what you need?</h3>
              <p>Tell us about your business and we will recommend the right mix.</p>
              <Link className="btn w" to="/contact">Book a free consultation</Link>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Why us</p>
              <h2>Why businesses choose EG Eloma</h2>
              <p className="sub">One accountable partner instead of five suppliers, with the support to back it up.</p>
            </div>
          </div>
          <div className="stg cards c3 reasons">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="12" r="2.5" />
                  <circle cx="18" cy="6" r="2.5" />
                  <circle cx="18" cy="18" r="2.5" />
                  <path d="M8.3 11l7.4-4M8.3 13l7.4 4" />
                </svg>
              </span>
              <h3>One partner, every service</h3>
              <p>Microsoft, development, marketing, phones and security from one team that talks to each other.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <h3>Australian owned</h3>
              <p>Headquartered in Australia, serving clients in the US, Canada, the UK and New Zealand.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6" />
                </svg>
              </span>
              <h3>24/7 support</h3>
              <p>Real people, an average response under 15 minutes, any time of day.</p>
            </div>
            <div className="card" style={{ transitionDelay: "210ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <h3>Security first</h3>
              <p>Everything we build follows ASD Essential Eight aligned best practice.</p>
            </div>
            <div className="card" style={{ transitionDelay: "280ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="1" />
                  <path d="M3 9h18M7 13h6M7 16h4" />
                </svg>
              </span>
              <h3>Your client portal</h3>
              <p>Track every product, task, invoice and ticket in one place.</p>
            </div>
            <div className="card" style={{ transitionDelay: "350ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="3" width="16" height="18" rx="1" />
                  <path d="M8 8h8M8 12h8M8 16h4" />
                  <circle cx="16.5" cy="16.5" r="2" />
                </svg>
              </span>
              <h3>Plain English</h3>
              <p>Clear advice and fixed quotes, without the jargon.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="pf">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                Client portal
              </p>
              <h2 style={{ marginTop: "10px", font: "400 clamp(26px,2.7vw,39px)/1.1 var(--sans)", letterSpacing: "-.035em" }}>
                Everything in one place, running smoothly.
              </h2>
              <p style={{ marginTop: "16px", color: "var(--dim)", fontSize: "clamp(15px,1.25vw,18px)", maxWidth: "52ch" }}>
                Every EG Eloma client gets a secure portal to see their products, tasks, invoices and support tickets, with a dedicated account manager one click away.
              </p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Live status of every product and renewal date</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Tasks and project progress in real time</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Invoices and payments in one place</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Create support tickets 24/7</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Message or call your account manager</span>
                </li>
              </ul>
              <div className="cta" style={{ justifyContent: "flex-start", marginTop: "28px" }}>
                <Link className="btn w" to="/contact">Become a client</Link>
                <a className="btn d" href={PORTAL_URL} rel="noopener">Client login</a>
              </div>
            </div>
            <div className="pm" aria-hidden="true">
              <div className="pm-h">
                <b>EG ELOMA</b>
                <span>PORTAL · ILLUSTRATIVE EXAMPLE</span>
              </div>
              <div className="pm-t">
                <p>WELCOME BACK</p>
                <h3>Everything's running smoothly.</h3>
              </div>
              <div className="pm-k">
                <div>
                  <small>ACCOUNT HEALTH</small>
                  <b>98%</b>
                </div>
                <div>
                  <small>ACTIVE PRODUCTS</small>
                  <b>11</b>
                </div>
                <div>
                  <small>ACTIVE TASKS</small>
                  <b>8</b>
                </div>
              </div>
              <div className="pm-r">
                <div>
                  <span>Website Maintenance</span>
                  <em>Active</em>
                  <i style={{ "--w": "92%" } as CSSProperties} />
                </div>
                <div>
                  <span>Search Engine Optimisation</span>
                  <em>Active</em>
                  <i style={{ "--w": "86%" } as CSSProperties} />
                </div>
                <div>
                  <span>Azure Hosting</span>
                  <em>Active</em>
                  <i style={{ "--w": "95%" } as CSSProperties} />
                </div>
                <div>
                  <span>Social Media Management</span>
                  <em>Active</em>
                  <i style={{ "--w": "78%" } as CSSProperties} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="npw" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.3fr) auto", gap: "28px", alignItems: "center" }}>
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                Microsoft for Nonprofits
              </p>
              <h2 style={{ marginTop: "10px", font: "400 clamp(22px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Are you a charity or not-for-profit?
              </h2>
              <p style={{ marginTop: "12px", color: "var(--dim)", fontSize: "clamp(15px,1.25vw,18px)", maxWidth: "60ch" }}>
                You may qualify for free Microsoft 365 Business Basic, discounted Business Premium and an annual Azure credit grant. We handle eligibility, registration and setup.
              </p>
            </div>
            <Link className="btn w" to="/microsoft#nonprofit">Explore nonprofit offers</Link>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Plans</p>
              <h2>Simple plans for growth</h2>
              <p className="sub">Bundle marketing services into one monthly plan, or choose a single service.</p>
            </div>
            <Link className="more" to="/pricing">
              {"Compare all plans "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="stg cards c4 plan-cards">
            <Link className="card feat-c" to="/pricing" style={{ transitionDelay: "0ms" }}>
              <p className="k">Plan 01 · Most complete</p>
              <h3>All-in-One Plan</h3>
              <p>Social Media · SEO · Local Listing · Website · Google Ads · Meta Ads · Designing · AI Ads</p>
              <span className="go">
                {"Compare plans "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/pricing" style={{ transitionDelay: "70ms" }}>
              <p className="k">Plan 02</p>
              <h3>Business Plan</h3>
              <p>Social Media · SEO · Local Listing · Website · Designing</p>
              <span className="go">
                {"Compare plans "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/pricing" style={{ transitionDelay: "140ms" }}>
              <p className="k">Plan 03</p>
              <h3>Growth Plan</h3>
              <p>Social Media · SEO · Local Listing</p>
              <span className="go">
                {"Compare plans "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/pricing" style={{ transitionDelay: "210ms" }}>
              <p className="k">Plan 04</p>
              <h3>Starter Plan</h3>
              <p>Social Media · SEO</p>
              <span className="go">
                {"Compare plans "}
                <span>→</span>
              </span>
            </Link>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Process</p>
              <h2>How we work</h2>
              <p className="sub">A simple, transparent process from first call to ongoing growth.</p>
            </div>
          </div>
          <div className="proc proc-anim" style={{ "--n": "5" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Free consultation</b>
              <p>We learn about your business, goals and current setup.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>{"Plan & quote"}</b>
              <p>A clear scope, timeline and fixed price.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>{"Build & launch"}</b>
              <p>We design, build, test and go live.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>{"Train & hand over"}</b>
              <p>Your team learns the tools, and you get portal access.</p>
            </div>
            <div>
              <i>STEP 05</i>
              <b>{"Manage & grow"}</b>
              <p>Ongoing support, reporting and improvements.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="sh">
            <div>
              <p className="ey">Industries</p>
              <h2>We serve every industry</h2>
              <p className="sub">From cafés and clinics to governments and global exporters, in five countries.</p>
            </div>
            <Link className="more" to="/industries">
              {"All industries "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="marq" aria-hidden="true">
            <div className="track">
              <span>{"Retail & eCommerce"}</span>
              <span>{"Hospitality, Cafés & Restaurants"}</span>
              <span>{"Trades & Construction"}</span>
              <span>{"Real Estate & Property"}</span>
              <span>Legal</span>
              <span>{"Accounting & Finance"}</span>
              <span>{"Insurance & Mortgage Broking"}</span>
              <span>{"Healthcare & Medical"}</span>
              <span>{"Dental & Allied Health"}</span>
              <span>Pharmacy</span>
              <span>{"Aged Care & NDIS"}</span>
              <span>{"Education & Training"}</span>
              <span>Childcare</span>
              <span>{"Not-for-Profit & Charities"}</span>
              <span>{"Government & Public Sector"}</span>
              <span>{"Logistics & Transport"}</span>
              <span>{"Import & Export"}</span>
              <span>Manufacturing</span>
              <span>{"Retail & eCommerce"}</span>
              <span>{"Hospitality, Cafés & Restaurants"}</span>
              <span>{"Trades & Construction"}</span>
              <span>{"Real Estate & Property"}</span>
              <span>Legal</span>
              <span>{"Accounting & Finance"}</span>
              <span>{"Insurance & Mortgage Broking"}</span>
              <span>{"Healthcare & Medical"}</span>
              <span>{"Dental & Allied Health"}</span>
              <span>Pharmacy</span>
              <span>{"Aged Care & NDIS"}</span>
              <span>{"Education & Training"}</span>
              <span>Childcare</span>
              <span>{"Not-for-Profit & Charities"}</span>
              <span>{"Government & Public Sector"}</span>
              <span>{"Logistics & Transport"}</span>
              <span>{"Import & Export"}</span>
              <span>Manufacturing</span>
            </div>
          </div>
          <div className="marq rev" aria-hidden="true">
            <div className="track">
              <span>{"Wholesale & Distribution"}</span>
              <span>Automotive</span>
              <span>{"Beauty, Salons & Spas"}</span>
              <span>{"Fitness & Wellness"}</span>
              <span>{"Travel & Tourism"}</span>
              <span>{"Events & Entertainment"}</span>
              <span>{"Agriculture & Farming"}</span>
              <span>{"Mining & Resources"}</span>
              <span>{"Energy & Utilities"}</span>
              <span>{"IT & Technology"}</span>
              <span>Startups</span>
              <span>Professional Services</span>
              <span>{"Media & Marketing Agencies"}</span>
              <span>{"Cleaning & Facility Services"}</span>
              <span>Security Services</span>
              <span>{"Religious & Community Groups"}</span>
              <span>{"Food & Beverage Production"}</span>
              <span>Telecommunications</span>
              <span>{"Wholesale & Distribution"}</span>
              <span>Automotive</span>
              <span>{"Beauty, Salons & Spas"}</span>
              <span>{"Fitness & Wellness"}</span>
              <span>{"Travel & Tourism"}</span>
              <span>{"Events & Entertainment"}</span>
              <span>{"Agriculture & Farming"}</span>
              <span>{"Mining & Resources"}</span>
              <span>{"Energy & Utilities"}</span>
              <span>{"IT & Technology"}</span>
              <span>Startups</span>
              <span>Professional Services</span>
              <span>{"Media & Marketing Agencies"}</span>
              <span>{"Cleaning & Facility Services"}</span>
              <span>Security Services</span>
              <span>{"Religious & Community Groups"}</span>
              <span>{"Food & Beverage Production"}</span>
              <span>Telecommunications</span>
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
                Questions we hear often
              </h2>
              <p style={{ marginTop: "14px", color: "var(--dim)" }}>
                {"Still have a question? "}
                <Link to="/contact" style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  Talk to our team
                </Link>
                .
              </p>
            </div>
            <div className="faq2">
              <details>
                <summary>What does EG Eloma do?</summary>
                <p>
                  We are an Australian-owned technology partner. We supply and support Microsoft products, build websites, software and apps, run digital marketing, provide business phone numbers and customer care, and keep your cloud and systems secure.
                </p>
              </details>
              <details>
                <summary>Which countries do you work in?</summary>
                <p>Australia, the United States, Canada, the United Kingdom and New Zealand.</p>
              </details>
              <details>
                <summary>Which industries do you work with?</summary>
                <p>Every industry, from retail, hospitality and trades to healthcare, government, logistics and startups.</p>
              </details>
              <details>
                <summary>How much do your services cost?</summary>
                <p>
                  Pricing depends on your needs. Our marketing plans are quoted monthly, and other services are quoted after a free consultation.
                </p>
              </details>
              <details>
                <summary>How do I get support?</summary>
                <p>Existing clients can raise tickets in the client portal, by email or by phone, 24/7.</p>
              </details>
              <details>
                <summary>How do I get started?</summary>
                <p>Book a free consultation. We learn about your business and recommend the right products and plan.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Ready to see your business, upgraded?</h2>
          <p>Book a free consultation. A specialist will recommend the right products for you.</p>
          <div className="cta">
            <Link className="btn w" to="/contact">Book a free consultation</Link>
            <Link className="btn d" to="/pricing">View plans</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
