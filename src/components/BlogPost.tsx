import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from './PageMeta'
import Header from './Header'
import Footer from './Footer'
import Orb from './Orb'
import GeoNote from './GeoNote'
import { POST_CTAS, formatDate, postByPath } from '../blog'
import { BUSINESS, SITE } from '../siteInfo'

const TRUST = ['Australian owned', 'Microsoft Partner', 'ASD Essential Eight aligned', '24/7 support', 'Fixed written quotes', '5 countries']

// Layout of a blog article: title, date and reading time come from src/blog.ts; the page passes the article text.
// geoNote shows the "Microsoft licensing is Australia only" note under the intro.
export default function BlogPost({ path, geoNote, children }: { path: string; geoNote?: boolean; children: ReactNode }) {
  const post = postByPath(path)
  const cta = POST_CTAS[post.cta]
  const meta = {
    title: `${post.short} | EG Eloma`,
    description: post.description,
    path,
    crumb: post.title,
    parent: { name: 'Blog', path: '/blog' },
    jsonLd: {
      '@graph': [
        {
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          author: { '@type': 'Organization', name: BUSINESS.name, url: SITE + '/' },
          publisher: { '@id': SITE + '/#organization' },
          image: SITE + '/og-image.png',
          mainEntityOfPage: SITE + path,
        },
      ],
    },
  }
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
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </p>
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          {geoNote && <GeoNote />}
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
          <p className="ameta">
            <span>By {BUSINESS.name}</span>
            <span>{formatDate(post.date)}</span>
            <span>{post.minutes} min read</span>
          </p>
        </section>
      </div>
      <main className="wrap">
        <section className="s first">
          <div className="bart">
            <article className="prose rv">{children}</article>
            <aside className="aside">
              <div className="card">
                <h3>{cta.aside[0]}</h3>
                <p>{cta.aside[1]}</p>
                <Link className="btn w" to="/contact" style={{ alignSelf: 'flex-start' }}>Book a consultation</Link>
              </div>
            </aside>
          </div>
        </section>
        <p className="rv" style={{ marginTop: '48px' }}>
          <Link className="more" to="/blog">← All articles</Link>
        </p>
        <section className="final rv">
          <h2>{cta.final[0]}</h2>
          <p>{cta.final[1]}</p>
          <div className="cta">
            <Link className="btn w" to="/contact">Book a consultation</Link>
            <Link className="btn d" to={cta.service}>Related service</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
