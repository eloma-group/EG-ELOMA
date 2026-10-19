import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogLocalSeoChecklist() {
  return (
    <BlogPost path="/blog-local-seo-checklist">
      <p>When customers search for a service 'near me', Google shows a map with a short list of businesses before the regular results. Getting into that list can transform enquiries for local businesses.</p>
      <h2>The checklist</h2>
      <ol>
        <li>Claim and verify your Google Business Profile.</li>
        <li>Choose the most accurate primary category, plus relevant secondary ones.</li>
        <li>Use the same business name, address and phone everywhere online.</li>
        <li>Add your services, service areas and opening hours.</li>
        <li>Upload real photos of your team, premises and work.</li>
        <li>Post updates and offers regularly.</li>
        <li>Ask happy customers for reviews, and reply to every review.</li>
        <li>Create a page on your website for each main service and location.</li>
        <li>Make sure your website is fast and works well on mobiles.</li>
        <li>List your business in reputable directories for your industry.</li>
      </ol>
      <h2>Measure what matters</h2>
      <p>Track calls, direction requests and website clicks from your profile each month, not just rankings.</p>
      <p>{"Our "}<Link to="/local-listing">Local Listing</Link>{" service and Near Me plan handle all of this for you."}</p>
    </BlogPost>
  )
}
