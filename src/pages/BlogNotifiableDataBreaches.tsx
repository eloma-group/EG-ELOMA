import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogNotifiableDataBreaches() {
  return (
    <BlogPost path="/blog-notifiable-data-breaches">
      <p>{"Under the Notifiable Data Breaches (NDB) scheme, organisations covered by the "}<i>Privacy Act 1988</i>{" must notify affected individuals and the Office of the Australian Information Commissioner (OAIC) when a data breach is likely to cause serious harm."}</p>
      <h2>Who it applies to</h2>
      <p>The scheme applies to organisations covered by the Privacy Act. That generally includes businesses and not-for-profits with annual turnover above $3 million, Australian Government agencies, and some smaller businesses, such as health service providers and businesses that trade in personal information.</p>
      <h2>What is an eligible data breach?</h2>
      <ul>
        <li>Personal information is accessed or disclosed without authorisation, or lost in a way that makes this likely.</li>
        <li>The breach is likely to result in serious harm to one or more individuals.</li>
        <li>Your remedial action has not prevented that likely harm.</li>
      </ul>
      <h2>The 30-day assessment</h2>
      <p>If you suspect an eligible breach, you must carry out a reasonable and quick assessment within 30 days. The OAIC expects most assessments to be finished much sooner.</p>
      <h2>How to prepare</h2>
      <ol>
        <li>Write a simple data breach response plan and name who does what.</li>
        <li>Know where personal information is stored, and keep less of it.</li>
        <li>Turn on multi-factor authentication and email protection.</li>
        <li>Keep tested backups and logs so you can tell what happened.</li>
        <li>Train staff to report suspicious emails and mistakes quickly.</li>
      </ol>
      <p>{"This article is general information, not legal advice. See the OAIC website for official guidance. Our "}<Link to="/cybersecurity">cybersecurity service</Link>{" can help you reduce the risk of a breach."}</p>
    </BlogPost>
  )
}
