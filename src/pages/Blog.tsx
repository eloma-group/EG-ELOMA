import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Orb from '../components/Orb'
import { POSTS, formatDate } from '../blog'
import { SITE } from '../siteInfo'

const meta = {
  "title": "Blog: Microsoft, Security & Marketing Tips | EG Eloma",
  "description": "Practical guides on Microsoft 365, cybersecurity, SEO, ads, business phone numbers and software development from the EG Eloma team.",
  "crumb": "Blog",
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "name": "EG Eloma Blog",
        "url": "https://egeloma.com.au/blog",
        "publisher": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "blogPost": POSTS.map(p => ({ "@type": "BlogPosting", "headline": p.title, "url": SITE + p.path, "datePublished": p.date }))
      }
    ]
  },
  "path": "/blog"
}

const TRUST = ['Australian owned', 'Microsoft Partner', 'ASD Essential Eight aligned', '24/7 support', 'Fixed written quotes', '5 countries']
const CATEGORIES = [...new Set(POSTS.map(p => p.category))].sort()
const [featured] = POSTS

export default function Blog() {
  return (
    <>
      <PageMeta {...meta} />
      <div className="phero">
        <Orb />
        <Header active="/blog" />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </p>
          <h1>{"Insights & guides"}</h1>
          <p className="lead">Practical, plain-English advice on Microsoft, security, marketing, communications and software.</p>
          <div className="tbar">
            {TRUST.map(t => (
              <span key={t}>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
      <main className="wrap">
        <section className="s first rv">
          <div className="bfeat">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                Featured · {featured.category}
              </p>
              <h2 style={{ marginTop: "10px" }}>{featured.title}</h2>
              <p>{featured.description}</p>
              <div className="cta" style={{ justifyContent: "flex-start", marginTop: "22px" }}>
                <Link className="btn w" to={featured.path}>Read article</Link>
              </div>
            </div>
            <div className="chipset">
              {CATEGORIES.map(c => <span key={c}>{c}</span>)}
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="sh">
            <div>
              <p className="ey">Blog</p>
              <h2>Latest articles</h2>
              <p className="sub">{POSTS.length} practical guides, newest first.</p>
            </div>
          </div>
          <div className="stg cards c3 bcards">
            {POSTS.map((p, i) => (
              <Link key={p.path} className="card" to={p.path} style={{ transitionDelay: Math.min(i, 10) * 70 + "ms" }}>
                <p className="meta">
                  <span>{p.category}</span>
                  <span>{formatDate(p.date)}</span>
                  <span>{p.minutes} min read</span>
                </p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="go">
                  {"Read article "}
                  <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section className="final rv">
          <h2>Have a question we haven't covered?</h2>
          <p>Book a free consultation and talk to a specialist.</p>
          <div className="cta">
            <Link className="btn w" to="/contact">Book a consultation</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
