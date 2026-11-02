import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogGoogleAiAnswersGuide() {
  return (
    <BlogPost path="/blog-google-ai-answers-guide">
      <h2>The short answer</h2>
      <p>{"You do not need a new tool, a special file or a secret technique to appear in "}<a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener">{"Google's AI Overviews and AI Mode"}</a>{". In May 2026 Google published its own guide for website owners, and its message is simple: these AI features are built on the same ranking and quality systems as normal Google Search. If your pages are findable, useful and say something other sites do not, you are doing most of what matters."}</p>

      <h2>What are AI Overviews and AI Mode?</h2>
      <p>{"AI Overviews are the written summaries that sometimes appear at the top of Google results. AI Mode lets people ask longer, more detailed questions and get a longer answer. Both show links to the pages the answer is based on. For a business, being one of those links is a new way to be found."}</p>

      <h2>What Google says matters</h2>
      <p>{"Based on Google's guide, these are the points that apply to a small or mid-sized business."}</p>
      <ol>
        <li><b>Your pages must be in Google's index.</b>{" A page can only be used as a source if Google can crawl it, has indexed it and is allowed to show a snippet from it. This is the first thing to check. If a page is not indexed, nothing else matters."}</li>
        <li><b>{"Content that only repeats what everyone says will not stand out."}</b>{" Google talks about 'non-commodity' content: pages with a real point of view or first-hand experience, not a generic list anyone could write. Think of the things only your business knows: real timeframes, real costs, the questions customers actually ask you, and how things work in Melbourne or Victoria."}</li>
        <li><b>Make it easy to read.</b>{" Clear headings, short paragraphs and important information written as text, not hidden in images. This helps both people and search systems."}</li>
        <li><b>No special markup is needed.</b>{" Google says you do not need new machine-readable files, AI text files or special schema just to appear in these features. You can keep structured data for other reasons, but it is not a requirement for AI answers."}</li>
        <li><b>Do not mass-produce pages.</b>{" Creating a separate page for every way a question might be phrased, mainly to influence rankings or AI answers, can fall under Google's spam policies. More pages do not mean more relevance."}</li>
      </ol>

      <h2>Our advice: a 30-minute check you can do today</h2>
      <p>These steps are our practical suggestions based on the guide.</p>
      <ol>
        <li><b>Check indexing.</b>{" In Google Search Console, open the Pages report. Are your main service pages indexed? Use URL Inspection on any that are not."}</li>
        <li><b>Check you are not blocking Google.</b>{" Open yoursite.com.au/robots.txt. It should not block the pages you want found."}</li>
        <li><b>Read your top service page like a customer.</b>{" Does the first paragraph answer the main question? Is the price range, timeframe or process stated, or is it all general?"}</li>
        <li><b>Add one thing only you know.</b>{" A real example, a typical timeframe, or a common mistake you see."}</li>
        <li><b>Answer the follow-up questions.</b>{" If someone asks about a service, what would they ask next? Cost? How long? Who is it for? Add short answers on the page."}</li>
        <li><b>Keep your business details the same everywhere.</b>{" Name, address and phone should match across your website, Google Business Profile and directory listings. Our "}<Link to="/local-listing">Local Listing</Link>{" service keeps these consistent for you."}</li>
      </ol>

      <h2>What you can safely ignore</h2>
      <ul>
        <li>{"A file called llms.txt is not required for Google's AI features."}</li>
        <li>Special schema just for AI answers does not exist.</li>
        <li>{"Anyone promising guaranteed AI citations. Google says no third-party tool can see its internal ranking systems."}</li>
      </ul>

      <h2>What this means for your business</h2>
      <p>{"AI answers have not replaced good SEO. They have raised the value of it. Pages that are indexed, clear, honest and specific are the ones with a chance of being used. The work is familiar: fix the technical basics, write for real customer questions and keep your content useful. If your site itself is slow or hard to crawl, "}<Link to="/website-development">website development</Link>{" is the place to start."}</p>

      <h2>How EG Eloma can help</h2>
      <p>{"EG Eloma is a Melbourne IT and digital agency. We can review whether your key pages are indexed, check your robots.txt and Search Console settings, and suggest practical changes to your service pages. We do not promise citations or rankings. We help you get the basics right. "}<Link to="/contact">Talk to us</Link>{" about your website or learn more about our "}<Link to="/seo">SEO services</Link>{"."}</p>

      <h2>Frequently asked questions</h2>
      <h3>Do I need special markup to appear in AI Overviews?</h3>
      <p>{"No. Google says there is no special schema or markup required for its AI features. Standard structured data can still be useful for other reasons."}</p>
      <h3>{"Does llms.txt help with Google's AI features?"}</h3>
      <p>{"Google's guide says you do not need AI text files to appear in generative AI search."}</p>
      <h3>Do I need to rank first to be used in an AI answer?</h3>
      <p>{"Not necessarily. A page can be linked if it is a clear source for one of the specific questions behind the main search."}</p>
      <h3>Should I write a page for every question my customers might ask?</h3>
      <p>{"No. Writing many near-identical pages for each phrasing can fall under Google's spam policies. Write fewer, better pages and answer related questions on them."}</p>
      <h3>How can I see if it is working?</h3>
      <p>{"Use Search Console for indexing and performance, and look for new visits in Google Analytics. Reporting for AI features changes over time, so check Google's current documentation."}</p>

      <p style={{ marginTop: '32px' }}>
        <Link className="btn w" to="/contact">Contact us</Link>
      </p>
    </BlogPost>
  )
}
