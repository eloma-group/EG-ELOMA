import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Orb from '../components/Orb'

const meta = {
  "title": "IT, Web & Marketing Services Australia | EG Eloma",
  "description": "Australian-owned EG Eloma: websites, SEO, Microsoft 365 licensing, cybersecurity, IT support and 1300/1800 numbers Australia-wide. Call 1800 054 555.",
  "crumb": "Australia",
  "parent": {
    "name": "Countries",
    "path": "/#countries"
  },
  "locale": "en-AU",
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "IT, web and marketing services in Australia",
        "serviceType": "IT, web development, digital marketing and business communications",
        "description": "Australian-owned EG Eloma: websites, SEO, Microsoft 365 licensing, cybersecurity, IT support and 1300/1800 numbers Australia-wide. Call 1800 054 555.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "url": "https://egeloma.com.au/australia",
        "availableLanguage": "en",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "AUD",
          "url": "https://egeloma.com.au/plans"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you work outside Sydney and Melbourne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We work with businesses in every state and territory, online by default and in person where practical."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between 1300 and 1800 numbers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "1800 numbers are free for callers. 1300 numbers cost callers a local-call rate. 13 numbers are a shorter, premium version of 1300."
            }
          },
          {
            "@type": "Question",
            "name": "Do you help with the Essential Eight?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our security work follows ASD Essential Eight aligned best practice, and we can assess where your business stands today."
            }
          },
          {
            "@type": "Question",
            "name": "Do you quote in Australian dollars?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Plans and project quotes for Australian clients are in AUD."
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
  "path": "/australia"
}

export default function Australia() {
  return (
    <>
      <PageMeta {...meta} />
      <div className="phero">
        <Orb />
        <Header country="AU" />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/#countries">Countries</Link>
            <span>/</span>
            <span>Australia</span>
          </p>
          <h1>{"Websites, SEO, Microsoft 365 & 1800 numbers for Australian businesses"}</h1>
          <p className="lead">An Australian-owned team helping businesses in every state and territory get found, stay secure and never miss a call.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?country=Australia">Book a free consultation</Link>
            <Link className="btn d" to="/plans">View plans</Link>
          </div>
          <div className="tbar">
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Australian owned</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Microsoft Partner</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>ASD Essential Eight</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>24/7 support</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Quotes in AUD</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Fixed written quotes</span>
          </div>
        </section>
      </div>
      <main className="wrap">
        <section className="s first rv">
          <div className="ov">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>EG Eloma in Australia</p>
              <h2 style={{ marginTop: "10px" }}>One technology partner for Australian businesses</h2>
            </div>
            <div>
              <p>EG Eloma is an Australian-owned technology partner serving businesses in Australia. We supply and support Microsoft 365, build websites, software and apps, run search engine optimisation and paid ads, provide toll-free and local phone numbers, and keep your cloud and systems secure.</p>
              <p>Instead of managing five suppliers, you get one accountable team, one client portal and support 24/7, with every quote in AUD.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Services in Australia</p>
              <h2>Everything your business runs on</h2>
              <p className="sub">23 products in five groups, delivered and supported by one team. Pick one service or let us manage everything.</p>
            </div>
            <Link className="more" to="/products">{"All products "}<span aria-hidden="true">→</span></Link>
          </div>
          <div className="stg cards c3">
            <div className="card hov" style={{ transitionDelay: "0ms" }}>
              <span className="pi">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                  <rect x="4" y="4" width="7" height="7" rx="1" />
                  <rect x="13" y="4" width="7" height="7" rx="1" />
                  <rect x="4" y="13" width="7" height="7" rx="1" />
                  <rect x="13" y="13" width="7" height="7" rx="1" />
                </svg>
              </span>
              <h3>{"Microsoft & Licensing"}</h3>
              <p>Microsoft 365 licensing, setup, migration and custom development.</p>
              <div className="pl">
                <Link to="/microsoft">Microsoft Products</Link>
                <Link to="/microsoft-licensing">Microsoft Licensing</Link>
                <Link to="/microsoft-development">Microsoft Product Development</Link>
              </div>
            </div>
            <div className="card hov" style={{ transitionDelay: "70ms" }}>
              <span className="pi">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-4-4M8 12l2-2 2 2 2-3" />
                </svg>
              </span>
              <h3>{"Marketing & Growth"}</h3>
              <p>Search engine optimisation, local listings and ads that reach customers in Australia.</p>
              <div className="pl">
                <Link to="/seo">Search Engine Optimisation</Link>
                <Link to="/local-listing">Local Listing</Link>
                <Link to="/google-meta-ads">{"Google & Meta Ads"}</Link>
                <Link to="/ppc">PPC</Link>
                <Link to="/social-media">Social Media Management</Link>
                <Link to="/design">Designing</Link>
              </div>
            </div>
            <div className="card hov" style={{ transitionDelay: "140ms" }}>
              <span className="pi">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />
                </svg>
              </span>
              <h3>Development</h3>
              <p>Websites, software, SaaS, apps and integrations, built to scale.</p>
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
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </span>
              <h3>Business Communications</h3>
              <p>1800 numbers, IVR and customer care for Australia.</p>
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
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <h3>{"Cloud, Security & Support"}</h3>
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
              <p>Tell us about your business and we will recommend the right mix for Australia.</p>
              <Link className="btn w" to="/contact?country=Australia">Book a free consultation</Link>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Business numbers</p>
              <h2>Phone numbers for Australia</h2>
              <p className="sub">Look established and easy to reach, with calls routed to any mobile, landline or Microsoft Teams.</p>
            </div>
            <Link className="more" to="/toll-free-number">{"Toll-free numbers "}<span aria-hidden="true">→</span></Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>1800 numbers</b>
              <p>Free for callers anywhere in Australia.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>{"1300 & 13 numbers"}</b>
              <p>One national number at local-call rates.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Vanity numbers</b>
              <p>Memorable words like 1800 YOURBIZ, subject to availability.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Microsoft Teams calling</b>
              <p>Answer your 1300 or 1800 number in Teams.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Working with us from Australia</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Quotes in AUD</b>
                    <small>Plans and project quotes for Australian clients are in AUD.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Hours</b>
                    <small>AEST/AEDT business hours, plus 24/7 support.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>How we work</b>
                    <small>Head office in Australia. We meet online by default and in person where practical.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Security</b>
                    <small>Security setups follow ASD Essential Eight aligned best practice: MFA, patching, application control, backups and more.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "280ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Privacy</b>
                    <small>Websites and systems set up with Privacy Act 1988 and the Notifiable Data Breaches scheme in mind.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "350ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Contact us</b>
                    <small>Call 1800 054 555 or email connect@egeloma.com.au.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "420ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Microsoft for Nonprofits</b>
                    <small>Eligible Australian charities may qualify for free or discounted Microsoft 365 and Azure credits. We handle registration and setup.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Where we work in Australia</h2>
              <p style={{ color: "var(--dim)", margin: "6px 0 18px" }}>We work with businesses nationwide, including:</p>
              <div className="chipset">
                <span>Sydney</span>
                <span>Melbourne</span>
                <span>Brisbane</span>
                <span>Perth</span>
                <span>Adelaide</span>
                <span>Canberra</span>
                <span>Hobart</span>
                <span>Darwin</span>
                <span>Gold Coast</span>
                <span>Newcastle</span>
                <span>Geelong</span>
                <span>Sunshine Coast</span>
                <span>Wollongong</span>
                <span>Regional Australia</span>
              </div>
              <h2 className="t" style={{ marginTop: "36px" }}>Other countries we serve</h2>
              <div className="pl" style={{ marginTop: "12px" }}>
                <Link to="/australia">Australia</Link>
                <Link to="/united-states">United States</Link>
                <Link to="/canada">Canada</Link>
                <Link to="/united-kingdom">United Kingdom</Link>
                <Link to="/new-zealand">New Zealand</Link>
                <Link to="/">All countries</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>FAQ</p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>Questions from Australian businesses</h2>
              <p style={{ marginTop: "14px", color: "var(--dim)" }}>{"Still have a question? "}<Link to="/contact?country=Australia" style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "3px" }}>Talk to our team</Link>.</p>
            </div>
            <div className="faq2">
              <details>
                <summary>Do you work outside Sydney and Melbourne?</summary>
                <p>Yes. We work with businesses in every state and territory, online by default and in person where practical.</p>
              </details>
              <details>
                <summary>What is the difference between 1300 and 1800 numbers?</summary>
                <p>1800 numbers are free for callers. 1300 numbers cost callers a local-call rate. 13 numbers are a shorter, premium version of 1300.</p>
              </details>
              <details>
                <summary>Do you help with the Essential Eight?</summary>
                <p>Yes. Our security work follows ASD Essential Eight aligned best practice, and we can assess where your business stands today.</p>
              </details>
              <details>
                <summary>Do you quote in Australian dollars?</summary>
                <p>Yes. Plans and project quotes for Australian clients are in AUD.</p>
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
          <p>Book a free consultation. A specialist will recommend the right products for your business in Australia, with a quote in AUD.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?country=Australia">Book a free consultation</Link>
            <a className="btn d" href="tel:1800054555">Call 1800 054 555</a>
          </div>
        </section>
      </main>
      <Footer country="AU" />
    </>
  )
}
