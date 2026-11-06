import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

const TIMELINE = [
  ['Now to 13 Nov', 'Decide the offer. Fix the website and tracking.'],
  ['14 to 26 Nov', 'Launch creative. Build your audience. Raise budgets in steps.'],
  ['27 to 30 Nov', 'Capture sales. Check daily. Fix problems quickly.'],
  ['1 to 10 Dec', 'Follow up visitors who did not buy. Reset targets. Review results.'],
]

const CHECKLIST = [
  'Offer, dates and conditions written down',
  'Landing page matches the ad',
  'Checked on a phone',
  'Checkout or form tested',
  'Conversion tracking tested',
  'Holiday ads uploaded and approved',
  'Meta budgets raised in steps',
  'Google budgets checked for the busy days',
  'Daily check booked for 27 to 30 November',
  'Plan to follow up non-buyers in December',
]

export default function BlogBlackFridayAdsPlan() {
  return (
    <BlogPost path="/blog-black-friday-ads-plan">
      <h2>In brief</h2>
      <p>{"Black Friday is on 27 November and Cyber Monday is on 30 November. The businesses that do best are rarely the ones that spend the most in the final week. They are the ones that settle their offer early, get their website ready, start building their audience in November and leave enough budget room to capture sales when people are ready to buy. This plan covers what to do in each phase for Google Ads and Meta Ads."}</p>

      <h2>Your timeline at a glance</h2>
      <table className="ptable">
        <thead>
          <tr>
            <th>When</th>
            <th>Focus</th>
          </tr>
        </thead>
        <tbody>
          {TIMELINE.map(([when, focus]) => (
            <tr key={when}>
              <td>{when}</td>
              <td>{focus}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>1. Decide the offer first</h2>
      <p>{"Every ad, email and landing page depends on one decision: what exactly are you offering, to whom and for how long? Settle it before you build anything."}</p>
      <ul>
        <li>Keep it simple and easy to explain in one line.</li>
        <li>State the start and end dates, and any conditions, in plain words.</li>
        <li>{"Be honest about prices. Australian Consumer Law applies to sales, so do not advertise a discount from a price you did not really charge, and do not claim limited stock or a countdown that is not real. Read the "}<a href="https://www.accc.gov.au/publications/advertising-selling/advertising-and-selling-guide/pricing/two-price-comparison-advertising" target="_blank" rel="noopener">ACCC guidance on advertising prices and sales</a>{" if you are unsure."}</li>
      </ul>

      <h2>2. Get your website ready</h2>
      <p>{"Ads only bring people to the door. Your site has to do the rest. A slow page or a broken checkout wastes the budget you are about to spend."}</p>
      <ul>
        <li>Make sure the landing page matches the ad: same offer, same dates, same price.</li>
        <li>Test on a phone. Most Black Friday browsing happens on mobile.</li>
        <li>{"Check page speed. Slow pages lose visitors, and "}<Link to="/blog-core-web-vitals">Core Web Vitals</Link>{" show where the problems are."}</li>
        <li>Test the checkout, the booking form or the enquiry form from start to finish.</li>
        <li>{"Confirm conversion tracking works before you spend. If a sale or lead is not being recorded, you will be bidding blind."}</li>
      </ul>
      <p>{"If your site needs work, our "}<Link to="/website-development">website development</Link>{" team can help, but start early. Changes made in the sale week are risky."}</p>

      <h2>3. Start building your audience before the sale</h2>
      <p>{"People who buy on Black Friday often first met you weeks earlier. If you only start advertising on the day, you are competing for the same shoppers as every other business at its most expensive time."}</p>
      <ul>
        <li><b>Meta Ads:</b>{" Begin reaching new people in early November. Raise budgets gradually rather than in big jumps. Meta says ad sets need roughly 50 results after a significant edit to leave the "}<a href="https://www.facebook.com/business/help/112167992830700" target="_blank" rel="noopener">learning phase</a>{", and big changes can send them back into it. Aim to finish your edits before the sale starts."}</li>
        <li><b>Launch creative early.</b>{" Upload your holiday ads days before Black Friday so approval and learning are finished before traffic peaks. Google also asks for new assets to be uploaded ahead of time so they can be approved."}</li>
        <li><b>Not sure which platform to start with?</b>{" Read "}<Link to="/blog-google-vs-meta-ads">our guide to Google Ads vs Meta Ads</Link>{"."}</li>
      </ul>

      <h2>4. Set up Google Ads for the busy days</h2>
      <ul>
        <li><b>Protect your brand search.</b>{" People who already know you will search for your name and the offer. Make sure those ads are running and not limited by budget."}</li>
        <li><b>Leave budget room.</b>{" Google can spend up to twice your daily budget on a single day, but over a month it will not go beyond about 30.4 times your daily budget. A budget set for an ordinary day can run out on the busiest day, so check it in advance."}</li>
        <li><b>Consider a seasonality adjustment.</b>{" If you expect conversion rates to jump sharply for a few days, Google's "}<a href="https://support.google.com/google-ads/answer/10369906" target="_blank" rel="noopener">seasonality adjustment</a>{" lets you tell Smart Bidding about it ahead of time. It is meant for short windows and for campaigns with conversion history. For longer promotions, adjust your targets manually and remember to set them back."}</li>
        <li><b>Do not make big changes in the middle of the sale.</b></li>
      </ul>
      <p>{"If you would rather have an expert set this up, see our "}<Link to="/ppc">PPC management</Link>{" service."}</p>

      <h2>5. During Black Friday to Cyber Monday</h2>
      <ul>
        <li>Check spend, conversions and tracking every morning and evening.</li>
        <li>{"Fix broken things first: a disapproved ad, a price that does not match the page, a form that stopped working, tracking that stopped recording."}</li>
        <li>{"Keep reaching new people. Reporting can look worse during peak days because costs rise and the final sale often gets credited to branded search or retargeting. The people you reached earlier still matter."}</li>
        <li>Do not panic over one bad day. Higher costs and uneven daily results are common in peak week.</li>
        <li>Put extra budget where sales are actually happening, usually branded search and retargeting.</li>
      </ul>

      <h2>6. After Cyber Monday</h2>
      <ul>
        <li><b>Follow up visitors who did not buy.</b>{" They are now your warmest audience. For retail, lead with delivery or booking deadlines before Christmas instead of a deeper discount. Check your carriers' cut-off dates."}</li>
        <li><b>Reset your targets and budgets</b>{" to where they were before the sale, and give them a few days to settle."}</li>
        <li><b>End the promotion everywhere:</b>{" ad copy, countdown text, landing pages, product prices and email banners."}</li>
        <li><b>Review early December:</b>{" how many new customers came from the audience you built in November? That is your real measure of success."}</li>
      </ul>

      <h2>Five mistakes to avoid</h2>
      <ol>
        <li>Deciding the offer at the last minute.</li>
        <li>Sending ad traffic to a slow or confusing page.</li>
        <li>Making big budget or ad changes in sale week.</li>
        <li>Advertising a discount from a price you never charged.</li>
        <li>Forgetting to turn the promotion off afterwards.</li>
      </ol>

      <h2>Your one-page checklist</h2>
      <ul>
        {CHECKLIST.map(item => <li key={item}>{item}</li>)}
      </ul>

      <h2>Frequently asked questions</h2>
      <h3>When should I start preparing Black Friday ads?</h3>
      <p>{"The first week of November at the latest. Ad approval, learning and budget changes all need lead time. If you are reading this late, focus on the offer, the landing page and tracking first."}</p>
      <h3>Do I have to cut my prices to take part?</h3>
      <p>{"No. You can offer a bonus, free delivery, a bundle or a service upgrade instead. Whatever you offer, state it clearly and honestly."}</p>
      <h3>Should I use Google Ads or Meta Ads?</h3>
      <p>{"Google reaches people already searching. Meta reaches people on Facebook and Instagram based on their interests. Many businesses use both: Meta to build interest early and Google to capture buyers."}</p>
      <h3>How much budget do I need?</h3>
      <p>{"There is no single number. It depends on your margins, your market and what a customer is worth. Start with what you can afford to test, watch the results and keep some room to increase spend on the best days."}</p>
      <h3>Can EG Eloma help?</h3>
      <p>{"Yes. We provide "}<Link to="/google-meta-ads">Google Ads and Meta Ads management</Link>{" for Melbourne and Australian businesses and can review your plan. We do not promise sales results, but we do give clear advice and report on what the numbers show."}</p>

      <h2>Need a hand before Black Friday?</h2>
      <p>{"If you want a second pair of eyes on your offer, website or ad accounts, "}<Link to="/contact">talk to our Melbourne team</Link>{"."}</p>

      <p style={{ marginTop: '32px' }}>
        <Link className="btn w" to="/contact">Contact us</Link>
      </p>
    </BlogPost>
  )
}
