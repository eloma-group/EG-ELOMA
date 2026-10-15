import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "App Development | EG Eloma",
  "description": "Mobile apps your customers will actually use. iOS, Android and cross-platform mobile apps, designed, built and published.",
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
        "@type": "Service",
        "name": "App Development",
        "description": "iOS, Android and cross-platform mobile apps, designed, built and published.",
        "provider": {
          "@id": "https://egeloma.com.au/#org"
        },
        "serviceType": "App Development",
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
        "url": "https://egeloma.com.au/app-development"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Native or cross-platform?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend the best approach for your budget and features; cross-platform suits most business apps."
            }
          },
          {
            "@type": "Question",
            "name": "How long does an app take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A first version typically takes 8 to 16 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Can the app connect to my systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We integrate with your website, CRM, payments and other systems."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build for both iPhone and Android?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, usually from one shared codebase."
            }
          },
          {
            "@type": "Question",
            "name": "Can the app work offline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, where the use case needs it."
            }
          },
          {
            "@type": "Question",
            "name": "Who owns the app store listing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your business. We publish under your developer accounts."
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
            "item": "https://egeloma.com.au/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://egeloma.com.au/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "App Development",
            "item": "https://egeloma.com.au/app-development"
          }
        ]
      }
    ]
  },
  "path": "/app-development"
}

export default function AppDevelopment() {
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
            <Link to="/services#development">Development</Link>
          </p>
          <h1>App Development</h1>
          <p className="lead">Mobile apps your customers will actually use.</p>
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
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                Overview
              </p>
              <h2 style={{ marginTop: "10px" }}>What is App Development?</h2>
            </div>
            <div>
              <p>
                We design and develop mobile apps for iPhone and Android, for customers or staff: booking apps, loyalty apps, field-service apps and more.
              </p>
              <p>We handle design, development, testing, App Store and Google Play publishing, and ongoing updates.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>App Development problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Customers want an app, not a website</b>
              <p>A mobile app for bookings, orders, loyalty or self-service.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Staff using paper forms in the field</b>
              <p>A field app that works offline and syncs later.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>An existing app with poor reviews</b>
              <p>We fix performance, design and bugs.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>App store rejections</b>
              <p>We prepare and submit apps to meet store guidelines.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in App Development</h2>
            </div>
            <Link className="more" to="/contact?service=App+Development">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>{"iOS & Android"}</b>
              <p>Native or cross-platform apps.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>App design</b>
              <p>Clean, intuitive interfaces.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>{"Backend & APIs"}</b>
              <p>Secure cloud backend and integrations.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Push notifications</b>
              <p>Keep users engaged.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Store publishing</b>
              <p>App Store and Google Play submission.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>{"Updates & support"}</b>
              <p>Bug fixes, OS updates and new features.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who App Development is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Hospitality and retail</h3>
              <p>Ordering and loyalty apps that bring customers back.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Field service teams</h3>
              <p>Apps for jobs, forms, photos and signatures on site.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Health and wellness</h3>
              <p>Booking and member apps.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How App Development works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Screens and flows</b>
              <p>Map every screen and user journey.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Interactive prototype</b>
              <p>Click-through designs to test before building.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Development</b>
              <p>Build the app and its secure backend.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Store release</b>
              <p>Submit to the App Store and Google Play.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of App Development</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Closer to customers</b>
                    <small>Your brand on their home screen.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>{"Loyalty & repeat sales"}</b>
                    <small>Rewards, offers and reminders.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Efficient teams</b>
                    <small>Staff apps that replace paperwork.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>End-to-end</b>
                    <small>One team from idea to store.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/software-development">Software Development</Link>
                <Link to="/api-integrations">API Integrations</Link>
                <Link to="/saas-development">SaaS Development</Link>
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
                App Development questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Native or cross-platform?</summary>
                <p>We recommend the best approach for your budget and features; cross-platform suits most business apps.</p>
              </details>
              <details>
                <summary>How long does an app take?</summary>
                <p>A first version typically takes 8 to 16 weeks.</p>
              </details>
              <details>
                <summary>Can the app connect to my systems?</summary>
                <p>Yes. We integrate with your website, CRM, payments and other systems.</p>
              </details>
              <details>
                <summary>Do you build for both iPhone and Android?</summary>
                <p>Yes, usually from one shared codebase.</p>
              </details>
              <details>
                <summary>Can the app work offline?</summary>
                <p>Yes, where the use case needs it.</p>
              </details>
              <details>
                <summary>Who owns the app store listing?</summary>
                <p>Your business. We publish under your developer accounts.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with App Development</h2>
          <p>Talk to our Development team about app development for your organisation.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=App+Development">Get a quote</Link>
            <Link className="btn d" to="/services">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
