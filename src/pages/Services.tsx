import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Products & Services | EG Eloma",
  "description": "Explore 23 EG Eloma products: Microsoft, websites, software, SaaS, apps, SEO, ads, business phone numbers, IVR, customer care, cloud and cybersecurity.",
  "crumb": "Products",
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://egeloma.com.au/microsoft",
            "name": "Microsoft Products"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "url": "https://egeloma.com.au/microsoft-licensing",
            "name": "Microsoft Licensing"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "url": "https://egeloma.com.au/microsoft-development",
            "name": "Microsoft Product Development"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "url": "https://egeloma.com.au/social-media",
            "name": "Social Media Management"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "url": "https://egeloma.com.au/seo",
            "name": "Search Engine Optimisation (SEO)"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "url": "https://egeloma.com.au/local-listing",
            "name": "Local Listing (Google Business Profile)"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "url": "https://egeloma.com.au/google-meta-ads",
            "name": "Google & Meta Ads"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "url": "https://egeloma.com.au/ppc",
            "name": "PPC (Pay-Per-Click)"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "url": "https://egeloma.com.au/design",
            "name": "Designing (Design Hub)"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "url": "https://egeloma.com.au/website-development",
            "name": "Website Development"
          },
          {
            "@type": "ListItem",
            "position": 11,
            "url": "https://egeloma.com.au/software-development",
            "name": "Software Development"
          },
          {
            "@type": "ListItem",
            "position": 12,
            "url": "https://egeloma.com.au/saas-development",
            "name": "SaaS Development"
          },
          {
            "@type": "ListItem",
            "position": 13,
            "url": "https://egeloma.com.au/app-development",
            "name": "App Development"
          },
          {
            "@type": "ListItem",
            "position": 14,
            "url": "https://egeloma.com.au/api-integrations",
            "name": "API Integrations"
          },
          {
            "@type": "ListItem",
            "position": 15,
            "url": "https://egeloma.com.au/toll-free-number",
            "name": "Toll-Free Number"
          },
          {
            "@type": "ListItem",
            "position": 16,
            "url": "https://egeloma.com.au/virtual-mobile-number",
            "name": "Virtual Mobile Number"
          },
          {
            "@type": "ListItem",
            "position": 17,
            "url": "https://egeloma.com.au/landline-number",
            "name": "Landline Number"
          },
          {
            "@type": "ListItem",
            "position": 18,
            "url": "https://egeloma.com.au/ivr-system",
            "name": "IVR System"
          },
          {
            "@type": "ListItem",
            "position": 19,
            "url": "https://egeloma.com.au/virtual-customer-care",
            "name": "Virtual Customer Care Support"
          },
          {
            "@type": "ListItem",
            "position": 20,
            "url": "https://egeloma.com.au/cybersecurity",
            "name": "Cybersecurity"
          },
          {
            "@type": "ListItem",
            "position": 21,
            "url": "https://egeloma.com.au/cloud-maintenance",
            "name": "Cloud Maintenance"
          },
          {
            "@type": "ListItem",
            "position": 22,
            "url": "https://egeloma.com.au/server-maintenance",
            "name": "Server Maintenance"
          },
          {
            "@type": "ListItem",
            "position": 23,
            "url": "https://egeloma.com.au/support-services",
            "name": "Support Services"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I combine products from different groups?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Most clients use several products, such as a website, SEO, Microsoft 365 and security, all managed by one team."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with sole traders through to large organisations and government."
            }
          },
          {
            "@type": "Question",
            "name": "Is support included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every client has access to our 24/7 support team and the client portal."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work outside Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes: Australia, the US, Canada, the UK and New Zealand."
            }
          }
        ]
      }
    ]
  },
  "path": "/services"
}

export default function Services() {
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
            <span>Products</span>
          </p>
          <h1>Every product your business needs</h1>
          <p className="lead">
            23 products across Microsoft, marketing, development, communications, cloud and security, from one Australian-owned partner.
          </p>
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
          <div className="sh">
            <div>
              <p className="ey">Getting started</p>
              <h2>Three ways to get started</h2>
            </div>
          </div>
          <div className="stg cards c3">
            <div className="card num-card" style={{ transitionDelay: "0ms" }}>
              <span className="n">01</span>
              <h3>Start with a plan</h3>
              <p>Bundle social media, SEO, local listing, website, ads and design into one monthly plan.</p>
              <Link className="go" to="/pricing">
                {"Compare plans "}
                <span>→</span>
              </Link>
            </div>
            <div className="card num-card" style={{ transitionDelay: "70ms" }}>
              <span className="n">02</span>
              <h3>Choose a single service</h3>
              <p>Need one thing done well? Every product is available on its own.</p>
              <a className="go" href="#microsoft">
                {"Browse products "}
                <span>→</span>
              </a>
            </div>
            <div className="card num-card" style={{ transitionDelay: "140ms" }}>
              <span className="n">03</span>
              <h3>Ask for advice</h3>
              <p>Not sure? We will review your business and recommend the right mix.</p>
              <Link className="go" to="/contact">
                {"Book a consultation "}
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="s first rv" id="microsoft">
          <div className="sh">
            <div>
              <p className="ey">3 products</p>
              <h2>{"Microsoft & Licensing"}</h2>
              <p className="sub">
                Microsoft runs the modern workplace: email, files, meetings, security and business apps. Set up well, it saves hours every week and protects your data. Set up badly, it costs money and creates risk. We make sure you get the full value of every licence you pay for.
              </p>
            </div>
          </div>
          <div className="stg cards c3">
            <Link className="card" to="/microsoft" style={{ transitionDelay: "0ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                  <rect x="4" y="4" width="7" height="7" rx="1" />
                  <rect x="13" y="4" width="7" height="7" rx="1" />
                  <rect x="4" y="13" width="7" height="7" rx="1" />
                  <rect x="13" y="13" width="7" height="7" rx="1" />
                </svg>
              </span>
              <h3>Microsoft Products</h3>
              <p>Microsoft 365, Azure, Dynamics 365, Power Platform, Copilot, security and more, supplied and supported.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/microsoft-licensing" style={{ transitionDelay: "70ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="3" width="16" height="18" rx="1" />
                  <path d="M8 8h8M8 12h8M8 16h4" />
                  <circle cx="16.5" cy="16.5" r="2" />
                </svg>
              </span>
              <h3>Microsoft Licensing</h3>
              <p>The right Microsoft licences at the right price, with billing and renewals handled.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/microsoft-development" style={{ transitionDelay: "140ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4z" />
                  <path d="M16.5 13.5v6M13.5 16.5h6" />
                </svg>
              </span>
              <h3>Microsoft Product Development</h3>
              <p>Custom solutions on Power Apps, SharePoint, Teams, Dynamics 365 and Copilot.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
          </div>
        </section>
        <section className="s  rv" id="marketing">
          <div className="sh">
            <div>
              <p className="ey">6 products</p>
              <h2>{"Marketing & Growth"}</h2>
              <p className="sub">
                Customers search, scroll and compare before they buy. If you are not visible on Google, Maps and social media, they choose a competitor. Our marketing team combines strategy, content and data so you show up in the right places and turn attention into enquiries.
              </p>
            </div>
          </div>
          <div className="stg cards c3">
            <Link className="card" to="/social-media" style={{ transitionDelay: "0ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="16.8" cy="7.2" r=".8" />
                </svg>
              </span>
              <h3>Social Media Management</h3>
              <p>Content, design, posting and community management across every platform.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/seo" style={{ transitionDelay: "70ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-4-4M8 12l2-2 2 2 2-3" />
                </svg>
              </span>
              <h3>Search Engine Optimisation (SEO)</h3>
              <p>Rank higher on Google for the searches that bring you customers.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/local-listing" style={{ transitionDelay: "140ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <h3>Local Listing (Google Business Profile)</h3>
              <p>Appear in 'near me' searches and on Google Maps with a fully managed listing.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/google-meta-ads" style={{ transitionDelay: "210ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10v4h3l6 4V6L7 10zM16.5 9a4 4 0 0 1 0 6M19 6.5a7.5 7.5 0 0 1 0 11" />
                </svg>
              </span>
              <h3>{"Google & Meta Ads"}</h3>
              <p>Google Search, Performance Max, Facebook and Instagram ads managed for leads.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/ppc" style={{ transitionDelay: "280ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3l14 7-6 2-2 6z" />
                  <path d="M13 12l6 6" />
                </svg>
              </span>
              <h3>PPC (Pay-Per-Click)</h3>
              <p>Pay-per-click campaigns on Google, Microsoft Ads, LinkedIn, YouTube and Shopping.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/design" style={{ transitionDelay: "350ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.8 2-2 0-.6-.3-1-.6-1.4-.3-.4-.6-.8-.6-1.4 0-1.1.9-2 2-2h2.2A5 5 0 0 0 21 9.5C21 5.9 17 3 12 3z" />
                  <circle cx="7.5" cy="11" r="1" />
                  <circle cx="10" cy="7" r="1" />
                  <circle cx="15" cy="7" r="1" />
                </svg>
              </span>
              <h3>Designing (Design Hub)</h3>
              <p>Logos, branding, social graphics, flyers, brochures and ad creative.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
          </div>
        </section>
        <section className="s  rv" id="development">
          <div className="sh">
            <div>
              <p className="ey">5 products</p>
              <h2>Development</h2>
              <p className="sub">
                The right software removes manual work, connects your systems and gives customers a better experience. We design and build websites, apps, SaaS platforms and integrations that are fast, secure and built to grow with you, and we support them after launch.
              </p>
            </div>
          </div>
          <div className="stg cards c3">
            <Link className="card" to="/website-development" style={{ transitionDelay: "0ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="1" />
                  <path d="M3 9h18M7 13h6M7 16h4" />
                </svg>
              </span>
              <h3>Website Development</h3>
              <p>Fast, mobile-first websites and online stores built to rank and convert.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/software-development" style={{ transitionDelay: "70ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />
                </svg>
              </span>
              <h3>Software Development</h3>
              <p>Custom business software, portals and automation built around your workflow.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/saas-development" style={{ transitionDelay: "140ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5z" />
                  <path d="M9 14h6M12 11v6" />
                </svg>
              </span>
              <h3>SaaS Development</h3>
              <p>Multi-tenant SaaS platforms with subscriptions, user management and cloud hosting.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/app-development" style={{ transitionDelay: "210ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2.5" width="10" height="19" rx="2" />
                  <path d="M11 18.5h2" />
                </svg>
              </span>
              <h3>App Development</h3>
              <p>iOS, Android and cross-platform mobile apps, designed, built and published.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/api-integrations" style={{ transitionDelay: "280ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="12" r="2.5" />
                  <circle cx="18" cy="6" r="2.5" />
                  <circle cx="18" cy="18" r="2.5" />
                  <path d="M8.3 11l7.4-4M8.3 13l7.4 4" />
                </svg>
              </span>
              <h3>API Integrations</h3>
              <p>Connect your CRM, accounting, eCommerce, payments and Microsoft systems.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
          </div>
        </section>
        <section className="s  rv" id="communications">
          <div className="sh">
            <div>
              <p className="ey">5 products</p>
              <h2>Business Communications</h2>
              <p className="sub">
                Every missed call is a missed customer. The right numbers, call flows and customer care make your business easy to reach and professional on every call, wherever your team works.
              </p>
            </div>
          </div>
          <div className="stg cards c3">
            <Link className="card" to="/toll-free-number" style={{ transitionDelay: "0ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </span>
              <h3>Toll-Free Number</h3>
              <p>1300, 1800, 1-800 and 0800 numbers that make it easy for customers to call.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/virtual-mobile-number" style={{ transitionDelay: "70ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2.5" width="10" height="19" rx="2" />
                  <path d="M10 6h4M12 13v-3M10.5 11.5L12 10l1.5 1.5" />
                </svg>
              </span>
              <h3>Virtual Mobile Number</h3>
              <p>Business mobile numbers that ring on any phone or app, with SMS included.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/landline-number" style={{ transitionDelay: "140ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="9" width="16" height="11" rx="2" />
                  <path d="M7 9V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3M9 13h1M14 13h1M9 16h1M14 16h1" />
                </svg>
              </span>
              <h3>Landline Number</h3>
              <p>Local landline numbers on cloud phone systems, with no copper line needed.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/ivr-system" style={{ transitionDelay: "210ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 6h10M4 12h7M4 18h10" />
                  <circle cx="18" cy="6" r="2" />
                  <circle cx="15" cy="12" r="2" />
                  <circle cx="18" cy="18" r="2" />
                </svg>
              </span>
              <h3>IVR System</h3>
              <p>Professional phone menus that route every caller to the right person, fast.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/virtual-customer-care" style={{ transitionDelay: "280ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
                  <rect x="3" y="14" width="4" height="6" rx="1" />
                  <rect x="17" y="14" width="4" height="6" rx="1" />
                  <path d="M19 20a4 4 0 0 1-4 2h-2" />
                </svg>
              </span>
              <h3>Virtual Customer Care Support</h3>
              <p>Trained virtual agents answering calls, chats and emails in your business name.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
          </div>
        </section>
        <section className="s  rv" id="cloud">
          <div className="sh">
            <div>
              <p className="ey">4 products</p>
              <h2>{"Cloud, Security & Support"}</h2>
              <p className="sub">
                Downtime and cyber attacks cost businesses time, money and trust. We keep your cloud, servers and devices secure, updated and backed up, and our support team is there 24/7 when you need help.
              </p>
            </div>
          </div>
          <div className="stg cards c3">
            <Link className="card" to="/cybersecurity" style={{ transitionDelay: "0ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <h3>Cybersecurity</h3>
              <p>ASD Essential Eight aligned security, Microsoft Defender and 24/7 monitoring.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/cloud-maintenance" style={{ transitionDelay: "70ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5z" />
                </svg>
              </span>
              <h3>Cloud Maintenance</h3>
              <p>Azure and Microsoft 365 environments monitored, updated, optimised and backed up.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/server-maintenance" style={{ transitionDelay: "140ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="7" rx="1" />
                  <rect x="4" y="13" width="16" height="7" rx="1" />
                  <path d="M8 7.5h.01M8 16.5h.01M12 7.5h5M12 16.5h5" />
                </svg>
              </span>
              <h3>Server Maintenance</h3>
              <p>On-premise and cloud servers patched, monitored, backed up and supported.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
            <Link className="card" to="/support-services" style={{ transitionDelay: "210ms" }}>
              <span className="pi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6" />
                </svg>
              </span>
              <h3>Support Services</h3>
              <p>24/7 helpdesk and managed IT support with an average response under 15 minutes.</p>
              <span className="go">
                {"Learn more "}
                <span>→</span>
              </span>
            </Link>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Compare</p>
              <h2>Doing it alone vs. working with EG Eloma</h2>
            </div>
          </div>
          <div className="cmp">
            <table>
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">On your own</th>
                  <th scope="col">With EG Eloma</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                    Expertise
                  </th>
                  <td>Learn it yourself, or hire several specialists</td>
                  <td>A full team of specialists from day one</td>
                </tr>
                <tr>
                  <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                    Time
                  </th>
                  <td>Hours every week taken from your business</td>
                  <td>We do the work; you approve and stay in control</td>
                </tr>
                <tr>
                  <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                    Suppliers
                  </th>
                  <td>Separate providers for each service</td>
                  <td>One partner, one account manager, one portal</td>
                </tr>
                <tr>
                  <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                    Reporting
                  </th>
                  <td>Scattered data, hard to measure</td>
                  <td>Monthly plain-English reports and live portal</td>
                </tr>
                <tr>
                  <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                    Support
                  </th>
                  <td>Wait for business hours or forums</td>
                  <td>24/7 support, under 15 minutes on average</td>
                </tr>
                <tr>
                  <th scope="row" style={{ font: "400 15.5px var(--sans)", letterSpacing: "0", textTransform: "none", color: "#fff", background: "none" }}>
                    Security
                  </th>
                  <td>Easy to miss settings and updates</td>
                  <td>Security best practice built in</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Frequently asked questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Can I combine products from different groups?</summary>
                <p>Yes. Most clients use several products, such as a website, SEO, Microsoft 365 and security, all managed by one team.</p>
              </details>
              <details>
                <summary>Do you work with small businesses?</summary>
                <p>Yes. We work with sole traders through to large organisations and government.</p>
              </details>
              <details>
                <summary>Is support included?</summary>
                <p>Every client has access to our 24/7 support team and the client portal.</p>
              </details>
              <details>
                <summary>Do you work outside Australia?</summary>
                <p>Yes: Australia, the US, Canada, the UK and New Zealand.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Want everything managed together?</h2>
          <p>Our plans bundle services into one simple monthly price.</p>
          <div className="cta">
            <Link className="btn w" to="/pricing">View plans</Link>
            <Link className="btn d" to="/contact">Book a consultation</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
