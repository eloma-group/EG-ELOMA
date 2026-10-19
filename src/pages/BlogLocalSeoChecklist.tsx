import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogLocalSeoChecklist() {
  return (
    <BlogPost path="/blog-local-seo-checklist">
      <p>{"When customers search for a service 'near me', Google shows a map with a short list of businesses before the regular results. Getting into that list can transform enquiries for local businesses."}</p>
      <p>{"Google decides which businesses to show based on three broad factors: relevance (how well your profile matches the search), distance (how far you are from the searcher or the location they typed) and prominence (how well known and well reviewed you are). You can't change your distance, but most of this checklist improves relevance and prominence."}</p>

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

      <h2>Working through each step</h2>

      <h3>1. Claim and verify your profile</h3>
      <p>{"Search for your business on Google Maps. If a profile already exists, claim it rather than creating a duplicate. Google will ask you to verify, which may be by video, phone, email or another method depending on your business. Keep the login under a company account, not a staff member's personal Gmail, so you don't lose access when people leave."}</p>

      <h3>2. Pick the right categories</h3>
      <p>{"Your primary category has a big influence on which searches you appear for. Choose the one that best describes your main business, such as \"Plumber\" rather than \"Contractor\". Add secondary categories only for services you genuinely offer."}</p>

      <h3>3. Keep your details consistent</h3>
      <p>{"Your name, address and phone number (often called NAP) should match across your website, Google, Facebook, directories and industry listings. Use your real business name. Google's guidelines don't allow extra keywords or locations in the name, and stuffing them in can get a profile suspended."}</p>

      <h3>4. Services, areas and hours</h3>
      <p>{"If you visit customers rather than having them come to you, set yourself up as a service-area business and hide your street address. List the suburbs or regions you actually cover. Keep opening hours current, and add special hours for public holidays so customers don't turn up to a closed door."}</p>

      <h3>5. Real photos</h3>
      <p>{"Add photos of your shopfront, so people recognise it, plus your team, vehicles and finished work. Real photos build trust far better than stock images. Add new ones every so often rather than uploading fifty on day one."}</p>

      <h3>6. Regular posts</h3>
      <p>{"Profile posts let you share news, offers and events. They won't transform rankings on their own, but an active profile looks cared for. A short post every week or two, with a photo and a clear call to action, is plenty."}</p>

      <h3>7. Reviews and replies</h3>
      <p>{"Reviews influence both rankings and whether people choose you. Ask customers at the moment they are happiest, such as when a job is finished, and send a direct review link by text or email. Reply to every review, positive or negative, calmly and briefly. Don't offer discounts or gifts in exchange for reviews, and don't only ask customers you think will be positive, as both go against Google's policies."}</p>

      <h3>8. Service and location pages</h3>
      <p>{"Your Google profile links to your website, and Google reads that site to understand what you do. Create a separate page for each main service, and for key locations if you genuinely serve them. Each page needs useful, specific content: what the service includes, who it suits, the areas you cover and how to get in touch. Avoid copying the same page and only swapping the suburb name."}</p>

      <h3>9. Fast, mobile-friendly website</h3>
      <p>{"Most 'near me' searches happen on phones. If your site is slow or awkward on mobile, people tap back and call the next business. Our guide to "}<Link to="/blog-core-web-vitals">Core Web Vitals</Link>{" explains how to check your site's speed, and good "}<Link to="/website-development">website development</Link>{" makes it the default rather than an afterthought."}</p>

      <h3>10. Reputable directories</h3>
      <p>{"Focus on quality, not quantity. Apple Maps, Bing Places, the main local directories and your industry association listings are worth having. Hundreds of low-quality directory submissions are not."}</p>

      <h2>Common mistakes</h2>
      <ul>
        <li>Creating a second profile instead of claiming the existing one.</li>
        <li>Adding keywords or suburbs to the business name.</li>
        <li>Using a virtual office or PO box as your address, which is against the guidelines.</li>
        <li>{"Letting hours, phone numbers or website links go out of date after a move."}</li>
        <li>Ignoring negative reviews, or arguing with reviewers in public.</li>
        <li>{"Setting up the profile once and never touching it again."}</li>
      </ul>

      <h2>Measure what matters</h2>
      <p>Track calls, direction requests and website clicks from your profile each month, not just rankings.</p>
      <p>{"The Performance section of your Business Profile shows these interactions. Add tracking tags to your website link so you can see profile visits separately in your analytics. Rankings vary depending on where each searcher is standing, so a single ranking check from your office tells you little. Enquiries and calls tell you whether it is working."}</p>
      <p>{"Local SEO builds over months. For faster results while it grows, "}<Link to="/google-meta-ads">Google and Meta ads</Link>{" can put you in front of local searchers straight away, and broader "}<Link to="/seo">SEO services</Link>{" help your website rank beyond the map."}</p>

      <h2>Frequently asked questions</h2>
      <h3>{"Can I appear in the map results if I work from home?"}</h3>
      <p>{"Yes. Set up as a service-area business, hide your home address and list the areas you serve. You still need to verify the business, but your address won't be shown publicly."}</p>
      <h3>How long does local SEO take to work?</h3>
      <p>{"It varies with competition and how established your business is. Fixing basic profile errors can help fairly quickly, while reviews, content and reputation build over several months."}</p>
      <h3>Can I have a profile for each suburb I serve?</h3>
      <p>{"No. Google only allows a profile for each real location where you serve customers in person or are staffed during business hours. Use service areas and website pages to cover the suburbs you travel to."}</p>
      <h3>{"Should I reply to old reviews I've never answered?"}</h3>
      <p>{"Yes, especially negative ones. A late, polite reply still shows future customers that you listen and care."}</p>

      <p>{"Our "}<Link to="/local-listing">Local Listing</Link>{" service and Near Me plan handle all of this for you."}</p>
    </BlogPost>
  )
}
