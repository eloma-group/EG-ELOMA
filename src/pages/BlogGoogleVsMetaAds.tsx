import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogGoogleVsMetaAds() {
  return (
    <BlogPost path="/blog-google-vs-meta-ads">
      <p>Google Ads and Meta Ads (Facebook and Instagram) both bring customers, but in different ways. Choosing the right mix depends on how people buy what you sell.</p>
      <p>{"There's no single right answer for every business. A plumber, a café and a software company will each get different results from the same budget. This guide explains how each platform works, which types of business tend to suit each one, and how to test and compare them without guessing."}</p>

      <h2>Google Ads: capture demand</h2>
      <p>Google Ads show when someone is actively searching. They suit urgent or high-intent services such as plumbers, lawyers, clinics and B2B services.</p>
      <p>{"The key advantage is timing. Someone typing \"emergency electrician Collingwood\" already knows what they need. Your ad appears at the moment they're ready to call. You choose the keywords you want to appear for, write ads that match those searches, and generally pay when someone clicks."}</p>
      <h3>Google campaign types worth knowing</h3>
      <ul>
        <li><b>Search campaigns:</b> text ads on Google search results. The usual starting point for service businesses.</li>
        <li><b>Performance Max:</b> {"an automated campaign type that uses Google's AI to show ads across Search, YouTube, Display, Gmail, Maps and Discover from one campaign. It can work well once you have reliable conversion tracking, but gives you less control over where ads appear."}</li>
        <li><b>Display and YouTube:</b> visual and video ads, often used for remarketing to people who visited your site.</li>
      </ul>
      <p>{"The limitation of Google Search is that it can only reach people who are already searching. If few people search for what you sell, because it's new or not something people look for, there's not much demand to capture."}</p>

      <h2>Meta Ads: create demand</h2>
      <p>Meta Ads reach people based on interests, location and behaviour before they search. They suit visual products, local offers, events and building awareness.</p>
      <p>{"Instead of waiting for a search, your ad appears in someone's Facebook or Instagram feed, Stories or Reels while they scroll. That makes creative, meaning the image or video and the first line of text, far more important than on Google. People aren't looking for you yet, so the ad has to stop them and make the offer clear in a second or two."}</p>
      <h3>How targeting works now</h3>
      <p>{"Meta has moved heavily towards automation. Its Advantage+ options use AI to decide audience, placements and budget across sales, leads and app campaigns, and in many cases these are now the default for new campaigns. Detailed interest targeting still exists, but in practice the strength of your creative, your offer and your conversion tracking matters more than picking the perfect interests."}</p>

      <h2>Which suits your business?</h2>
      <ul>
        <li><b>Lean towards Google</b> if people search for your service when they need it, the job is urgent, or the purchase is considered and researched (legal, medical, trades, IT support, B2B).</li>
        <li><b>Lean towards Meta</b> if your product is visual, impulse-friendly or new, you run events or seasonal offers, or you want to stay in front of a local community.</li>
        <li><b>Use both</b> if you have enough budget to run each properly and a sales cycle with more than one step.</li>
      </ul>

      <h2>Using both together</h2>
      <ul>
        <li>Use Google Search to capture people ready to buy.</li>
        <li>Use Meta to build awareness and retarget website visitors.</li>
        <li>Track every call and form so you can compare cost per lead.</li>
      </ul>
      <p>{"Here's a worked example. A physiotherapy clinic runs Google Search ads for \"physio near me\" and injury-related searches to capture people booking now. On Instagram, it runs short videos showing the clinic and team to people within a few kilometres, plus retargeting ads reminding website visitors to book. Some patients see the Instagram ad first, then later search on Google. Both platforms played a part, which is why tracking matters."}</p>

      <h2>How to test and compare fairly</h2>
      <ol>
        <li><b>Set up tracking first.</b> Use Google Analytics, the Google Ads conversion tag and the Meta pixel with the Conversions API, so form submissions and bookings are recorded.</li>
        <li><b>Track phone calls.</b> {"Many local customers call rather than fill in a form. A dedicated tracking number, such as a "}<Link to="/virtual-mobile-number">virtual mobile number</Link>{", shows which calls came from which campaign."}</li>
        <li><b>Send traffic to a relevant landing page.</b> A specific page with one clear call to action usually converts better than your home page.</li>
        <li><b>Give each test enough time.</b> Automated campaigns need time and data to learn. Judging results after a few days often leads to the wrong decision.</li>
        <li><b>Compare cost per lead and lead quality.</b> Cheap leads that never become customers are not a win. Check with your sales team which leads actually converted.</li>
      </ol>

      <h2>Common mistakes</h2>
      <ul>
        <li><b>No conversion tracking.</b> Without it, both platforms optimise for clicks rather than customers.</li>
        <li><b>Broad keywords with no negatives.</b> On Google, add negative keywords to stop ads showing for irrelevant searches such as jobs or free advice.</li>
        <li><b>Running the same Meta creative for months.</b> Ads fatigue. Refresh images and videos regularly.</li>
        <li><b>Splitting a small budget too thin.</b> {"A small budget spread across five campaigns gives no campaign enough data. It's often better to do one thing well first."}</li>
        <li><b>Ignoring free channels.</b> {"A complete "}<Link to="/local-listing">Google Business Profile</Link>{" and solid "}<Link to="/seo">SEO</Link>{" support your paid ads and keep bringing enquiries when you pause spending."}</li>
      </ul>

      <h2>Frequently asked questions</h2>
      <h3>Which is cheaper, Google Ads or Meta Ads?</h3>
      <p>{"Costs vary widely by industry, location and competition, so there's no general answer. Meta clicks are often cheaper, but searchers on Google may be closer to buying. Compare cost per lead and cost per customer, not cost per click."}</p>
      <h3>How much should a small business spend to start?</h3>
      <p>{"Enough to get meaningful data on one platform. Start with the platform that best matches how your customers buy, run it properly with tracking in place, and expand once you can see what a lead or sale costs you."}</p>
      <h3>Should I boost Facebook posts or run proper ads?</h3>
      <p>{"Boosting is simple but offers limited control. Campaigns built in Meta Ads Manager let you choose objectives, track conversions and test different creative, which usually gives you clearer results. Our "}<Link to="/social-media">social media</Link>{" team can help with organic content alongside ads."}</p>
      <h3>Do I need a separate landing page?</h3>
      <p>{"It usually helps. A page that matches the ad and has one clear next step tends to convert better than a general page."}</p>

      <p>{"Our "}<Link to="/google-meta-ads">{"Google & Meta Ads"}</Link>{" service and Ad Power plan manage both."}</p>
    </BlogPost>
  )
}
