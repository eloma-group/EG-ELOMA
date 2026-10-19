import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function Blog1300Vs1800Numbers() {
  return (
    <BlogPost path="/blog-1300-vs-1800-numbers">
      <p>A national number makes your business easy to remember and easy to reach, wherever your team is. In Australia the two main options are 1300 and 1800 numbers.</p>
      <h2>1800 numbers: free for your callers</h2>
      <p>1800 numbers are free for callers from most Australian phones. The business pays for the call. They are ideal for sales, support and any campaign where you want to remove every barrier to calling.</p>
      <h2>1300 numbers: shared cost</h2>
      <p>1300 numbers are generally charged to callers at a local-call style rate, with the business covering the rest. They usually cost the business less than an 1800 number.</p>
      <h2>Overseas equivalents</h2>
      <ul>
        <li><b>United States and Canada:</b>{" toll-free numbers such as 1-800, 1-888 and 1-877."}</li>
        <li><b>United Kingdom:</b>{" 0800 freephone numbers."}</li>
        <li><b>New Zealand:</b>{" 0800 freephone numbers."}</li>
      </ul>
      <h2>Make the number work harder</h2>
      <ul>
        <li>Route calls by time of day, location or team.</li>
        <li>Add an IVR menu so callers reach the right person first time.</li>
        <li>Answer in Microsoft Teams, on mobiles or desk phones.</li>
        <li>Track calls from each marketing campaign.</li>
      </ul>
      <p><Link to="/toll-free-number">See our toll-free number service</Link>{" or "}<Link to="/ivr-system">learn about IVR</Link>.</p>
    </BlogPost>
  )
}
