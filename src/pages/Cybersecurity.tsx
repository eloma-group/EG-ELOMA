import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RelatedReading from '../components/RelatedReading'

const meta = {
  "title": "Cyber Security Services Melbourne | EG Eloma",
  "description": "Essential Eight-aligned cyber security for Australian businesses: Microsoft Defender, 24/7 monitoring and incident response from a Melbourne team.",
  "crumb": "Cybersecurity",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Cybersecurity",
        "description": "ASD Essential Eight aligned security, Microsoft Defender and 24/7 monitoring.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "serviceType": "Cybersecurity",
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
        "url": "https://egeloma.com.au/cybersecurity"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the ASD Essential Eight?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A set of eight mitigation strategies from the Australian Signals Directorate to protect against cyber threats."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with businesses outside Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We apply the same best-practice controls for clients in the US, Canada, the UK and New Zealand."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help after a cyber incident?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Contact us immediately and our team will help contain and recover."
            }
          },
          {
            "@type": "Question",
            "name": "Are you certified to the Essential Eight?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Essential Eight is a framework, not a certification. We align controls to it and report your maturity."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide security training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, short practical sessions for staff."
            }
          },
          {
            "@type": "Question",
            "name": "Can you help with cyber insurance questionnaires?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We help you answer technical questions accurately."
            }
          }
        ]
      }
    ]
  },
  "path": "/cybersecurity"
}

export default function Cybersecurity() {
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
            <Link to="/products#cloud">{"Cloud, Security & Support"}</Link>
          </p>
          <h1>Cyber Security Services for Melbourne Businesses</h1>
          <p className="lead">Zero threats allowed.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Cybersecurity?</h2>
            </div>
            <div>
              <p>
                Cyber attacks target businesses of every size. We protect your people, devices, email and data with layered security aligned to the ASD Essential Eight, using Microsoft Defender XDR, Zero Trust access and continuous monitoring.
              </p>
              <p>We block an average of 178+ threats a day across our clients.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Cybersecurity problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Staff clicking phishing emails</b>
              <p>Email protection plus short awareness training.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>No multi-factor authentication</b>
              <p>MFA rolled out across every account.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Laptops missing updates</b>
              <p>Automated patching and device management.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Not sure where you stand</b>
              <p>An Essential Eight gap assessment with clear next steps.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Cybersecurity</h2>
            </div>
            <Link className="more" to="/contact?service=Cybersecurity">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Security assessment</b>
              <p>Find gaps against the Essential Eight.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Microsoft Defender XDR</b>
              <p>Endpoint, email and identity protection.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>{"Zero Trust & MFA"}</b>
              <p>Secure sign-in and conditional access.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Email security</b>
              <p>Phishing and spam protection.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>24/7 monitoring</b>
              <p>Threats detected and responded to.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>{"Backup & recovery"}</b>
              <p>Daily backups and tested recovery.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Cybersecurity is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Businesses holding sensitive data</h3>
              <p>Protect client, health and financial records.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Companies after a scare</h3>
              <p>Strengthen security after phishing or account compromise.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Organisations needing evidence</h3>
              <p>Show customers and insurers your security controls.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Cybersecurity works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Essential Eight assessment</b>
              <p>Measure where you are today.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Quick wins</b>
              <p>Turn on MFA, email protection and backups first.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Harden</b>
              <p>Device management, patching and admin controls.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Monitor</b>
              <p>Ongoing detection, response and reporting.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Cybersecurity</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Reduced risk</b>
                    <small>Fewer breaches and less downtime.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Compliance</b>
                    <small>Aligned with recognised frameworks.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Peace of mind</b>
                    <small>Experts watching around the clock.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Staff awareness</b>
                    <small>Training to spot phishing.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/cloud-maintenance">Cloud Maintenance</Link>
                <Link to="/server-maintenance">Server Maintenance</Link>
                <Link to="/support-services">Support Services</Link>
                <Link to="/microsoft-licensing">Microsoft Licensing</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="sh">
            <div>
              <p className="ey">Example project</p>
              <h2>What this looks like in practice for cybersecurity</h2>
            </div>
          </div>
          <div className="case">
            <div className="cl">
              <span className="tag2">Example scenario</span>
              <h3>A 40-person accounting practice</h3>
              <p className="res">Far stronger security, tested recovery and peace of mind before tax season.</p>
            </div>
            <div className="cr">
              <div>
                <b>The challenge</b>
                <p>No MFA, unpatched laptops and backups that had never been tested.</p>
              </div>
              <div>
                <b>What we did</b>
                <p>We enabled MFA and Defender, automated patching, set up Azure backups and trained staff on phishing.</p>
              </div>
              <div>
                <b>The outcome</b>
                <p>Far stronger security, tested recovery and peace of mind before tax season.</p>
              </div>
              <p className="note2">Illustrative example of a typical project.</p>
            </div>
          </div>
        </section>
        <RelatedReading posts={['/blog-notifiable-data-breaches', '/blog-essential-eight-guide', '/blog-choose-it-support']} />
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Cybersecurity questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>What is the ASD Essential Eight?</summary>
                <p>A set of eight mitigation strategies from the Australian Signals Directorate to protect against cyber threats.</p>
              </details>
              <details>
                <summary>Do you work with businesses outside Australia?</summary>
                <p>Yes. We apply the same best-practice controls for clients in the US, Canada, the UK and New Zealand.</p>
              </details>
              <details>
                <summary>Can you help after a cyber incident?</summary>
                <p>Yes. Contact us immediately and our team will help contain and recover.</p>
              </details>
              <details>
                <summary>Are you certified to the Essential Eight?</summary>
                <p>The Essential Eight is a framework, not a certification. We align controls to it and report your maturity.</p>
              </details>
              <details>
                <summary>Do you provide security training?</summary>
                <p>Yes, short practical sessions for staff.</p>
              </details>
              <details>
                <summary>Can you help with cyber insurance questionnaires?</summary>
                <p>Yes. We help you answer technical questions accurately.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Cybersecurity</h2>
          <p>{"Talk to our Cloud, Security & Support team about cybersecurity for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Cybersecurity">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
