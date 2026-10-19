import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Orb from '../components/Orb'

const meta = {
  "title": "IT, Web & Marketing Services UK | EG Eloma",
  "description": "Websites, SEO, Microsoft development, cyber security, IT support and 0800 freephone numbers for UK businesses, with 24/7 support and quotes in GBP.",
  "crumb": "United Kingdom",
  "parent": {
    "name": "Countries",
    "path": "/#countries"
  },
  "locale": "en-GB",
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "IT, web and marketing services in United Kingdom",
        "serviceType": "IT, web development, digital marketing and business communications",
        "description": "Websites, SEO, Microsoft development, cyber security, IT support and 0800 freephone numbers for UK businesses, with 24/7 support and quotes in GBP.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United Kingdom"
        },
        "url": "https://egeloma.com.au/united-kingdom",
        "availableLanguage": "en",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "GBP",
          "url": "https://egeloma.com.au/plans"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you work with UK businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We deliver remotely to businesses across the UK, with calls scheduled in UK hours and 24/7 support."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between 0800 and 03 numbers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "0800 and 0808 numbers are free to call. 03 numbers cost the same as a standard geographic call and are often included in call bundles."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with Cyber Essentials?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We can set up the core controls, such as MFA, patching and secure configuration, and help you prepare for assessment."
            }
          },
          {
            "@type": "Question",
            "name": "Do you quote in pounds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Plans and project quotes for UK clients are in GBP."
            }
          },
          {
            "@type": "Question",
            "name": "Can you supply Microsoft 365 licences in the United Kingdom?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Microsoft licensing is supplied to Australian businesses only. In the United Kingdom, we build custom apps, automation and integrations on the Microsoft 365, Power Platform and Azure licences you already have."
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
  "path": "/united-kingdom"
}

export default function UnitedKingdom() {
  return (
    <>
      <PageMeta {...meta} />
      <div className="phero">
        <Orb />
        <Header country="UK" />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/#countries">Countries</Link>
            <span>/</span>
            <span>United Kingdom</span>
          </p>
          <h1>{"Websites, SEO, Microsoft development & 0800 numbers for UK businesses"}</h1>
          <p className="lead">One technology partner for businesses across England, Scotland, Wales and Northern Ireland, with 24/7 support and quotes in pounds sterling.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?country=United+Kingdom">Book a free consultation</Link>
            <Link className="btn d" to="/plans">View plans</Link>
          </div>
          <div className="tbar">
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Australian owned</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Microsoft Partner</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Cyber Essentials ready</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>24/7 support</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Quotes in GBP</span>
            <span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>Fixed written quotes</span>
          </div>
        </section>
      </div>
      <main className="wrap">
        <section className="s first rv">
          <div className="ov">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>EG Eloma in United Kingdom</p>
              <h2 style={{ marginTop: "10px" }}>One technology partner for UK businesses</h2>
            </div>
            <div>
              <p>EG Eloma is an Australian-owned technology partner serving businesses in the United Kingdom. We build custom solutions on Microsoft 365, Power Platform and Azure, build websites, software and apps, run search engine optimisation and paid ads, provide toll-free and local phone numbers, and keep your cloud and systems secure.</p>
              <p>Instead of managing five suppliers, you get one accountable team, one client portal and support 24/7, with every quote in GBP.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Services in United Kingdom</p>
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
              <h3>Microsoft Development</h3>
              <p>Custom apps, automation and integrations on Microsoft 365, Power Platform and Azure, built on the licences you already hold. Microsoft licensing is supplied in Australia only.</p>
              <div className="pl">
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
              <p>Search engine optimisation, local listings and ads that reach customers in the UK.</p>
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
              <p>{"0800 & 0808 freephone, IVR and customer care for the UK."}</p>
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
              <p>Tell us about your business and we will recommend the right mix for the UK.</p>
              <Link className="btn w" to="/contact?country=United+Kingdom">Book a free consultation</Link>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Business numbers</p>
              <h2>Phone numbers for the United Kingdom</h2>
              <p className="sub">Look established and easy to reach, with calls routed to any mobile, landline or Microsoft Teams.</p>
            </div>
            <Link className="more" to="/toll-free-number">{"Toll-free numbers "}<span aria-hidden="true">→</span></Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>{"0800 & 0808 freephone"}</b>
              <p>Free to call from UK landlines and mobiles.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>03 numbers</b>
              <p>One national number, charged like a standard geographic call.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Local numbers</b>
              <p>01 and 02 numbers for a presence in the cities you serve.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Microsoft Teams calling</b>
              <p>Answer your freephone number in Teams, anywhere.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Working with us from the United Kingdom</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Quotes in GBP</b>
                    <small>Plans and project quotes for UK clients are in GBP.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Hours</b>
                    <small>UK business hours by arrangement (GMT/BST), plus 24/7 support.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>How we work</b>
                    <small>Remote delivery across the UK, with calls scheduled in UK hours.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Security</b>
                    <small>We build a practical security baseline for MFA, patching, backups and monitoring, and can help you prepare for Cyber Essentials.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "280ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Privacy</b>
                    <small>Websites and systems set up with UK GDPR and the Data Protection Act 2018 in mind.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "350ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Contact us</b>
                    <small>Email connect@egeloma.com.au. We reply within one business day and book calls in your time zone.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "420ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Selling into Australia?</b>
                    <small>UK companies expanding to Australia or New Zealand can get local 1800 or 0800 numbers and local SEO from the same team.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Where we work in the United Kingdom</h2>
              <p style={{ color: "var(--dim)", margin: "6px 0 18px" }}>We work with businesses nationwide, including:</p>
              <div className="chipset">
                <span>London</span>
                <span>Manchester</span>
                <span>Birmingham</span>
                <span>Leeds</span>
                <span>Glasgow</span>
                <span>Edinburgh</span>
                <span>Bristol</span>
                <span>Liverpool</span>
                <span>Sheffield</span>
                <span>Cardiff</span>
                <span>Belfast</span>
                <span>Newcastle</span>
                <span>Nottingham</span>
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
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>Questions from UK businesses</h2>
              <p style={{ marginTop: "14px", color: "var(--dim)" }}>{"Still have a question? "}<Link to="/contact?country=United+Kingdom" style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "3px" }}>Talk to our team</Link>.</p>
            </div>
            <div className="faq2">
              <details>
                <summary>Do you work with UK businesses?</summary>
                <p>Yes. We deliver remotely to businesses across the UK, with calls scheduled in UK hours and 24/7 support.</p>
              </details>
              <details>
                <summary>What is the difference between 0800 and 03 numbers?</summary>
                <p>0800 and 0808 numbers are free to call. 03 numbers cost the same as a standard geographic call and are often included in call bundles.</p>
              </details>
              <details>
                <summary>Can you help with Cyber Essentials?</summary>
                <p>We can set up the core controls, such as MFA, patching and secure configuration, and help you prepare for assessment.</p>
              </details>
              <details>
                <summary>Do you quote in pounds?</summary>
                <p>Yes. Plans and project quotes for UK clients are in GBP.</p>
              </details>
              <details>
                <summary>Can you supply Microsoft 365 licences in the United Kingdom?</summary>
                <p>Microsoft licensing is supplied to Australian businesses only. In the United Kingdom, we build custom apps, automation and integrations on the Microsoft 365, Power Platform and Azure licences you already have.</p>
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
          <p>Book a free consultation. A specialist will recommend the right products for your business in the United Kingdom, with a quote in GBP.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?country=United+Kingdom">Book a free consultation</Link>
            <a className="btn d" href="mailto:connect@egeloma.com.au">Email connect@egeloma.com.au</a>
          </div>
        </section>
      </main>
      <Footer country="UK" />
    </>
  )
}
