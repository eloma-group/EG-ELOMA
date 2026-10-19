import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogTeamsPhone() {
  return (
    <BlogPost path="/blog-teams-phone">
      <p>If your team already uses Microsoft Teams for chat and meetings, Teams Phone lets them make and take regular phone calls from the same app on a laptop, mobile or desk phone.</p>
      <h2>What you need</h2>
      <ul>
        <li>A Teams Phone licence for each user who makes calls.</li>
        <li>A calling plan or a connection to a phone carrier.</li>
        <li>Phone numbers, either new or ported from your current provider.</li>
        <li>Optional: compatible desk phones and headsets.</li>
      </ul>
      <h2>Keep your numbers</h2>
      <p>Most existing landline, 1300 and 1800 numbers can be ported, so customers keep calling the same numbers.</p>
      <h2>Add call flows</h2>
      <ul>
        <li>Auto attendants (IVR menus) to route callers.</li>
        <li>Call queues for sales or support teams.</li>
        <li>Business hours and holiday routing.</li>
      </ul>
      <p>{"See our "}<Link to="/landline-number">Landline Number</Link>{" and "}<Link to="/ivr-system">IVR System</Link>{" services."}</p>
    </BlogPost>
  )
}
