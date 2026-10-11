import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Social Media Management | EG Eloma",
  "description": "Show up consistently on social, without doing it yourself. Content, design, posting and community management across every platform.",
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
        "name": "Social Media Management",
        "description": "Content, design, posting and community management across every platform.",
        "provider": {
          "@id": "https://egdigital.com.au/#org"
        },
        "serviceType": "Social Media Management",
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
        "url": "https://egdigital.com.au/social-media"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which platforms do you manage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Facebook, Instagram, LinkedIn, TikTok, YouTube, X and Google Business Profile."
            }
          },
          {
            "@type": "Question",
            "name": "Do I approve posts first?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You get a monthly calendar to review before anything is published."
            }
          },
          {
            "@type": "Question",
            "name": "Which plans include social media?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Post & Grow, Starter, Growth, Business and All-in-One plans."
            }
          },
          {
            "@type": "Question",
            "name": "How many posts per month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on your plan and goals. We agree the posting frequency with you up front."
            }
          },
          {
            "@type": "Question",
            "name": "Do you create videos and reels?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Short-form video is included in many plans; we'll recommend what suits your audience."
            }
          },
          {
            "@type": "Question",
            "name": "Can you run our paid social ads too?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, through our Google & Meta Ads service or the All-in-One plan."
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
            "name": "Social Media Management",
            "item": "https://egdigital.com.au/social-media"
          }
        ]
      }
    ]
  },
  "path": "/social-media"
}

export default function SocialMedia() {
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
          <h1>Social Media Management</h1>
          <p className="lead">Show up consistently on social, without doing it yourself.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Social Media Management?</h2>
              <p className="inc">
                {"Available in: "}
                <b>{"All-in-One Plan, Business Plan, Growth Plan, Starter Plan, Post & Grow"}</b>
                .
              </p>
            </div>
            <div>
              <p>
                Customers check your social pages before they buy. We plan, design and publish on-brand content every week, reply to comments and messages, and report on what is working.
              </p>
              <p>Facebook, Instagram, LinkedIn, TikTok, YouTube and Google Business posts, managed from one content calendar you approve.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Social Media Management problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Posting only when someone remembers</b>
              <p>A planned monthly calendar keeps your pages active every week.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Posts that look homemade</b>
              <p>Designed graphics and short videos in your brand style.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Comments and messages going unanswered</b>
              <p>We monitor and reply promptly, escalating anything important to you.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>No link between social and sales</b>
              <p>We track clicks, enquiries and bookings that come from social media.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Social Media Management</h2>
            </div>
            <Link className="more" to="/contact?service=Social+Media+Management">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Monthly content calendar</b>
              <p>Planned posts you review and approve.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>{"Custom designs & reels"}</b>
              <p>Graphics, carousels and short videos made for you.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>{"Posting & scheduling"}</b>
              <p>Published at the best times for your audience.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Community management</b>
              <p>Comments and messages answered promptly.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Profile optimisation</b>
              <p>Bios, highlights and links set up to convert.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Monthly reporting</b>
              <p>Reach, engagement and leads in plain English.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Social Media Management is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Cafés, salons and retail</h3>
              <p>Show products, offers and the people behind the business.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Trades and home services</h3>
              <p>Share before-and-after work that builds trust.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>B2B and professional firms</h3>
              <p>LinkedIn content that positions your team as experts.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Social Media Management works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Brand and audience brief</b>
              <p>We learn your voice, customers and goals.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Monthly calendar</b>
              <p>Post ideas, captions and designs sent to you for approval.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Publish and engage</b>
              <p>Scheduled posts plus replies to comments and messages.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Monthly review</b>
              <p>What performed best and what we'll do next month.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Social Media Management</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Consistent brand</b>
                    <small>Professional content every week.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>More enquiries</b>
                    <small>Content built to drive calls, bookings and sales.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Time back</b>
                    <small>No more last-minute posting.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Clear results</b>
                    <small>Know what is working each month.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/design">Designing</Link>
                <Link to="/google-meta-ads">{"Google & Meta Ads"}</Link>
                <Link to="/seo">Search Engine Optimisation</Link>
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
              <h2 className="t" style={{ marginTop: "10px", font: "600 clamp(28px,2.8vw,40px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Social Media Management questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Which platforms do you manage?</summary>
                <p>Facebook, Instagram, LinkedIn, TikTok, YouTube, X and Google Business Profile.</p>
              </details>
              <details>
                <summary>Do I approve posts first?</summary>
                <p>Yes. You get a monthly calendar to review before anything is published.</p>
              </details>
              <details>
                <summary>Which plans include social media?</summary>
                <p>{"Post & Grow, Starter, Growth, Business and All-in-One plans."}</p>
              </details>
              <details>
                <summary>How many posts per month?</summary>
                <p>It depends on your plan and goals. We agree the posting frequency with you up front.</p>
              </details>
              <details>
                <summary>Do you create videos and reels?</summary>
                <p>Yes. Short-form video is included in many plans; we'll recommend what suits your audience.</p>
              </details>
              <details>
                <summary>Can you run our paid social ads too?</summary>
                <p>{"Yes, through our Google & Meta Ads service or the All-in-One plan."}</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Social Media Management</h2>
          <p>{"Talk to our Marketing & Growth team about social media management for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Social+Media+Management">Get a quote</Link>
            <Link className="btn d" to="/services">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
