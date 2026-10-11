import { Link } from 'react-router-dom'

const STAR = 'M0 -7l1.6 3.5 3.8.4-2.9 2.5.9 3.7L0 1.2-3.4 3.1l.9-3.7-2.9-2.5 3.8-.4z'
const STARS = ['translate(60 42) scale(1.05)', 'translate(47 58) scale(.9)', 'translate(74 56) scale(.9)', 'translate(60 76) scale(1.1)', 'translate(67 66) scale(.55)']
const COUNTRIES = ['Australia', 'United States', 'Canada', 'United Kingdom', 'New Zealand']
const AFFILIATIONS = [
  { name: 'Australian Signals Directorate', note: 'Business Partner', small: true, long: true },
  { name: 'UN', note: 'Global Compact participant' },
  { name: 'WEPs', note: 'Signatory' },
  { name: 'Australian Red Cross Lifeblood', note: 'Proud Member', small: true, long: true },
]

export default function Credentials({ className }: { className: string }) {
  return (
    <section className={className} aria-label="Credentials">
      <div className="cred-s">
        <div className="own">
          <svg className="seal" viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <path id="sp" d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1-90 0" />
            </defs>
            <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="60" cy="60" r="34" fill="none" stroke="currentColor" strokeWidth="1" opacity=".55" />
            <text>
              <textPath href="#sp" textLength="280" lengthAdjust="spacing">AUSTRALIAN OWNED · AUSTRALIAN OPERATED ·</textPath>
            </text>
            <g fill="currentColor">
              {STARS.map(t => <path key={t} transform={t} d={STAR} />)}
            </g>
          </svg>
          <div>
            <h2>{'Australian owned & operated'}</h2>
            <p>Headquartered in Australia, delivering for clients across five countries.</p>
            <p className="ctry">
              {COUNTRIES.map(c => <span key={c}>{c}</span>)}
            </p>
          </div>
        </div>
        <span className="vr" aria-hidden="true" />
        <div className="aff">
          <p className="k">{'Memberships & commitments'}</p>
          <ul>
            {AFFILIATIONS.map(a => (
              <li key={a.name}>
                <b className={a.small ? (a.long ? 'sm long' : 'sm') : undefined}>{a.name}</b>
                <small>{a.note}</small>
              </li>
            ))}
          </ul>
          <p className="affn">
            {'Memberships and support do not imply endorsement of our services. '}
            <Link to="/about#commitments">About our memberships</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
