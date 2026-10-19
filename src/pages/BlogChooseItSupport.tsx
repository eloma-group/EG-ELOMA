import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogChooseItSupport() {
  return (
    <BlogPost path="/blog-choose-it-support">
      <p>The right IT provider prevents problems instead of just fixing them. Use these questions when comparing providers.</p>
      <h2>Ten questions</h2>
      <ol>
        <li>What are your average response and resolution times, and are they reported?</li>
        <li>Is support available after hours and on weekends?</li>
        <li>How do we raise and track tickets?</li>
        <li>What security controls do you put in place as standard?</li>
        <li>How do you back up our data, and how often do you test restores?</li>
        <li>Who is our main contact?</li>
        <li>How do you document our systems?</li>
        <li>What happens if we leave? Do we keep our accounts and data?</li>
        <li>Can you support staff working remotely or overseas?</li>
        <li>How do you charge, and what is not included?</li>
      </ol>
      <h2>Red flags</h2>
      <ul>
        <li>Admin passwords only the provider knows.</li>
        <li>No written scope or reporting.</li>
        <li>Long lock-in contracts with unclear exit terms.</li>
      </ul>
      <p>{"See how our "}<Link to="/support-services">Support Services</Link>{" work."}</p>
    </BlogPost>
  )
}
