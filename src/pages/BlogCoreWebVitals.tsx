import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogCoreWebVitals() {
  return (
    <BlogPost path="/blog-core-web-vitals">
      <p>Core Web Vitals are three measurements Google uses to judge real-world user experience. Good scores help visitors stay, and they form part of how Google evaluates pages.</p>
      <p>{"They are not a magic ranking switch. Google has been clear that relevant, helpful content comes first, and page experience is one signal among many. But a slow or jumpy site loses enquiries regardless of where it ranks, because people give up and go back to the search results. That makes Core Web Vitals worth understanding even if SEO isn't your main concern."}</p>

      <h2>The three measures</h2>
      <ul>
        <li><b>Largest Contentful Paint (LCP):</b>{" how quickly the main content appears. Aim for 2.5 seconds or less."}</li>
        <li><b>Interaction to Next Paint (INP):</b>{" how quickly the page responds when someone taps or clicks. Aim for 200 milliseconds or less."}</li>
        <li><b>Cumulative Layout Shift (CLS):</b>{" how much the layout jumps while loading. Aim for 0.1 or less."}</li>
      </ul>
      <p>{"Google rates each metric as good, needs improvement or poor. As a rough guide, LCP over 4 seconds, INP over 500 milliseconds or CLS over 0.25 is rated poor. A page passes when at least 75% of real visits meet the good threshold, measured separately for mobile and desktop."}</p>

      <h3>What each one means in practice</h3>
      <p><b>LCP</b>{" is usually your hero image, a large heading or a banner. If a visitor on a phone waits four seconds staring at a blank space where your main photo should be, that is a poor LCP."}</p>
      <p><b>INP</b>{" replaced the older First Input Delay (FID) metric in 2024. FID only measured the first tap. INP looks at the responsiveness of interactions across the whole visit, such as opening a menu, ticking a box on a form or pressing \"Add to cart\". A page can load quickly and still feel sluggish if heavy scripts keep the browser busy."}</p>
      <p><b>CLS</b>{" is the annoying jump when you go to tap a button and a banner loads above it, pushing everything down. It often comes from images without set dimensions, late-loading ads, cookie notices and web fonts swapping in."}</p>

      <h2>Common fixes</h2>
      <ul>
        <li>Compress and correctly size images.</li>
        <li>Remove unused scripts and plugins.</li>
        <li>{"Reserve space for images and embeds so the layout doesn't jump."}</li>
        <li>Use good hosting and caching.</li>
      </ul>

      <h3>Improving LCP</h3>
      <ul>
        <li>{"Serve images in modern formats such as WebP or AVIF, at the size they are actually displayed. A 4000-pixel photo shrunk to fit a phone screen is a common culprit."}</li>
        <li>{"Don't lazy-load the main hero image. Lazy loading is great for images further down the page, but the first image should load straight away."}</li>
        <li>{"Check server response time. Cheap shared hosting, no caching and slow database queries all delay everything else. A content delivery network (CDN) helps if you have visitors in several countries."}</li>
        <li>{"Avoid sliders and carousels at the top of the page. They usually load several large images and scripts before anything useful appears."}</li>
      </ul>

      <h3>Improving INP</h3>
      <ul>
        <li>{"Audit third-party scripts: chat widgets, tracking tags, review badges, heat maps and social feeds. Each one competes for the browser's attention. Keep the ones you actually use."}</li>
        <li>{"Break up long JavaScript tasks so the browser can respond to taps in between."}</li>
        <li>{"On WordPress and similar platforms, be wary of page builders and plugin stacks that load code on every page, even where it isn't needed."}</li>
      </ul>

      <h3>Improving CLS</h3>
      <ul>
        <li>Set width and height (or an aspect ratio) on every image and video.</li>
        <li>Give ad slots, embeds and cookie banners a fixed space, or show banners as an overlay rather than pushing content down.</li>
        <li>{"Load web fonts sensibly and choose a fallback font of similar size, so text doesn't reflow when the font arrives."}</li>
      </ul>

      <h2>How to check yours</h2>
      <p>Use Google PageSpeed Insights or the Core Web Vitals report in Google Search Console.</p>
      <ol>
        <li>{"Open PageSpeed Insights and enter your home page and one or two key pages, such as a main service page."}</li>
        <li>{"Look first at the top section, which shows real-user (field) data collected from Chrome users over the previous 28 days. This is what Google uses."}</li>
        <li>{"The lower section is a lab test from Lighthouse. It is useful for diagnosing problems, but it is a single simulated visit, so the score can vary between runs. Lighthouse can't measure INP directly, so it shows Total Blocking Time as a rough stand-in."}</li>
        <li>{"In Search Console, open the Core Web Vitals report to see which groups of pages are good, need improvement or are poor, and which metric is the problem."}</li>
      </ol>
      <p>{"Smaller sites often don't have enough traffic for field data. In that case, rely on the lab results and test on a real mid-range phone over mobile data, not just your office computer on fast broadband."}</p>

      <h2>Common mistakes</h2>
      <ul>
        <li>{"Chasing a perfect 100 lab score instead of fixing what real visitors experience."}</li>
        <li>{"Installing yet another \"speed plugin\" on top of a bloated site, rather than removing what slows it down."}</li>
        <li>{"Testing only the home page. Service pages, blog posts and landing pages used for ads matter just as much."}</li>
        <li>{"Adding new tracking scripts for a marketing campaign without checking the effect on speed."}</li>
        <li>{"Expecting instant results. Field data covers a rolling 28 days, so improvements take a few weeks to show fully."}</li>
      </ul>

      <h2>Quick checklist</h2>
      <ul>
        <li>Hero image compressed, correctly sized and not lazy-loaded.</li>
        <li>Unused plugins and third-party scripts removed.</li>
        <li>All images and embeds have reserved space.</li>
        <li>Caching enabled and hosting responds quickly.</li>
        <li>Key pages tested on mobile in PageSpeed Insights.</li>
        <li>Search Console Core Web Vitals report reviewed monthly.</li>
      </ul>
      <p>{"Speed works best alongside clear content and solid "}<Link to="/seo">search engine optimisation</Link>{". If you rely on local customers, our "}<Link to="/blog-local-seo-checklist">local SEO checklist</Link>{" covers the other half of getting found."}</p>

      <h2>Frequently asked questions</h2>
      <h3>{"Will fixing Core Web Vitals push my site to the top of Google?"}</h3>
      <p>{"Not on its own. Relevance and content quality matter more. Good Core Web Vitals help in close contests and, more importantly, stop you losing visitors who arrive and leave because the page is slow."}</p>
      <h3>{"Why does my PageSpeed score change every time I test?"}</h3>
      <p>{"The lab score is a single simulated visit, so network and server conditions cause variation. Focus on the field data section and on trends over time rather than one result."}</p>
      <h3>Is it better to fix my current site or rebuild it?</h3>
      <p>{"Many sites improve a lot with image optimisation, plugin clean-up and better hosting. If the site relies on a heavy theme or page builder that loads lots of code everywhere, a rebuild with a lean "}<Link to="/design">website design</Link>{" can be more cost-effective long term."}</p>
      <h3>Does hosting really make a difference?</h3>
      <p>{"Yes. A slow server delays every metric, especially LCP. Reliable hosting, caching and regular "}<Link to="/cloud-maintenance">cloud maintenance</Link>{" keep response times steady as your site grows."}</p>

      <p>{"Our "}<Link to="/website-development">websites</Link>{" are built for speed from day one."}</p>
    </BlogPost>
  )
}
