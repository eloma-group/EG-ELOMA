import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogGoogleVsMetaAds() {
  return (
    <BlogPost path="/blog-google-vs-meta-ads">
      <p>Google Ads and Meta Ads (Facebook and Instagram) both bring customers, but in different ways. Choosing the right mix depends on how people buy what you sell.</p>
      <h2>Google Ads: capture demand</h2>
      <p>Google Ads show when someone is actively searching. They suit urgent or high-intent services such as plumbers, lawyers, clinics and B2B services.</p>
      <h2>Meta Ads: create demand</h2>
      <p>Meta Ads reach people based on interests, location and behaviour before they search. They suit visual products, local offers, events and building awareness.</p>
      <h2>Using both together</h2>
      <ul>
        <li>Use Google Search to capture people ready to buy.</li>
        <li>Use Meta to build awareness and retarget website visitors.</li>
        <li>Track every call and form so you can compare cost per lead.</li>
      </ul>
      <p>{"Our "}<Link to="/google-meta-ads">{"Google & Meta Ads"}</Link>{" service and Ad Power plan manage both."}</p>
    </BlogPost>
  )
}
