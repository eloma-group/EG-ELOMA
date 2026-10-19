// Blog articles, newest first. Each article's page is src/pages/Blog<Name>.tsx (path "/blog-<name>").
// `short` is the page title (before " | EG Eloma") and the link text in "Related reading" lists.

export type Post = {
  path: string
  title: string
  short: string
  description: string
  category: string
  date: string
  minutes: number
  cta: keyof typeof POST_CTAS
}

// The side card and closing call to action shown on articles, by topic.
export const POST_CTAS = {
  phone: { aside: ['Choosing a business number?', "We'll help you pick a number and set up call routing."], final: ['Make your business easy to call', 'Get a memorable number with routing that suits your team.'], service: '/toll-free-number' },
  support: { aside: ['Need better IT support?', 'Ask how our 24/7 helpdesk and client portal work.'], final: ['Get IT support that prevents problems', 'Book a call about managed support for your team.'], service: '/support-services' },
  microsoft: { aside: ['Unsure which plan fits?', 'We review your users and recommend the right Microsoft 365 mix.'], final: ['Get your Microsoft licences right', 'A licence review often finds savings and security gaps in the same hour.'], service: '/microsoft-licensing' },
  product: { aside: ['Have a product idea?', 'Talk through your idea and get a scoped first version.'], final: ['Plan your first release', 'Book a product workshop to define your MVP.'], service: '/saas-development' },
  security: { aside: ['Want an Essential Eight check?', 'We assess your current controls and show what to fix first.'], final: ['Close your biggest security gaps', 'Start with an Essential Eight assessment of your systems.'], service: '/cybersecurity' },
  marketing: { aside: ['Want more local enquiries?', "We'll review your Google presence and suggest quick wins."], final: ['Turn searches into customers', 'Ask for a marketing review of your website and listings.'], service: '/seo' },
} as const

export const POSTS: Post[] = [
  { path: '/blog-notifiable-data-breaches', title: 'The Notifiable Data Breaches scheme: what Australian businesses need to know', short: 'Notifiable Data Breaches Scheme Explained', description: 'Who the NDB scheme applies to, what counts as an eligible data breach, and how to prepare before something goes wrong.', category: 'Cybersecurity', date: '2026-10-09', minutes: 6, cta: 'security' },
  { path: '/blog-microsoft-365-plans-compared', title: 'Microsoft 365 Business Basic vs Standard vs Premium: which plan is right for you?', short: 'Microsoft 365 Basic vs Standard vs Premium', description: 'A plain-English comparison of Microsoft 365 business plans, and how to choose the right mix for each user.', category: 'Microsoft', date: '2026-10-06', minutes: 6, cta: 'microsoft' },
  { path: '/blog-copilot-readiness', title: 'Getting your business ready for Microsoft 365 Copilot', short: 'Getting Ready for Microsoft 365 Copilot', description: 'Copilot works with the files and emails your people can already access, so tidy permissions and good data habits come first.', category: 'Microsoft', date: '2026-10-02', minutes: 5, cta: 'microsoft' },
  { path: '/blog-essential-eight-guide', title: 'The ASD Essential Eight explained for small business', short: 'ASD Essential Eight Explained for Business', description: "What the Australian Signals Directorate's Essential Eight is, the eight strategies in plain English, and where to start.", category: 'Cybersecurity', date: '2026-09-29', minutes: 7, cta: 'security' },
  { path: '/blog-choose-it-support', title: 'Choosing a managed IT support provider: 10 questions to ask', short: 'How to Choose a Managed IT Support Provider', description: 'The questions that separate a reliable IT partner from one that only answers the phone.', category: 'Support', date: '2026-09-25', minutes: 6, cta: 'support' },
  { path: '/blog-1300-vs-1800-numbers', title: "1300 vs 1800 numbers: what's the difference and which should you choose?", short: '1300 vs 1800 Numbers: Which Should You Choose?', description: 'How 1300 and 1800 numbers work in Australia, who pays for the call, and how 1-800 and 0800 numbers work overseas.', category: 'Communications', date: '2026-09-22', minutes: 5, cta: 'phone' },
  { path: '/blog-core-web-vitals', title: 'Is your website fast enough? Core Web Vitals explained', short: 'Core Web Vitals Explained: Is Your Site Fast?', description: "Google's Core Web Vitals measure loading speed, responsiveness and visual stability. Here's what they mean and how to improve them.", category: 'Development', date: '2026-09-18', minutes: 5, cta: 'product' },
  { path: '/blog-local-seo-checklist', title: "Local SEO checklist: 10 steps to show up in 'near me' searches", short: 'Local SEO Checklist: 10 Steps for Near Me', description: 'A practical checklist to help your business appear in Google Maps and local search results.', category: 'Marketing', date: '2026-09-15', minutes: 6, cta: 'marketing' },
  { path: '/blog-teams-phone', title: 'Moving your business phones to Microsoft Teams', short: 'Moving Business Phones to Microsoft Teams', description: 'How Teams Phone works, what you need, and how to keep your existing numbers.', category: 'Communications', date: '2026-09-11', minutes: 5, cta: 'phone' },
  { path: '/blog-saas-mvp-planning', title: 'Planning a SaaS product? How to scope a minimum viable product (MVP)', short: 'How to Scope a SaaS MVP', description: 'How to decide what goes into the first version of your software-as-a-service product, and what can wait.', category: 'Development', date: '2026-09-08', minutes: 6, cta: 'product' },
  { path: '/blog-microsoft-nonprofit', title: 'Microsoft for nonprofits: what you can get and how to register', short: 'Microsoft for Nonprofits: Offers & Registration', description: "An overview of Microsoft's grants and discounts for eligible not-for-profits, and the steps to register.", category: 'Microsoft', date: '2026-09-04', minutes: 5, cta: 'microsoft' },
  { path: '/blog-google-vs-meta-ads', title: 'Google Ads vs Meta Ads: where should your budget go?', short: 'Google Ads vs Meta Ads: Where to Spend?', description: 'When to use Google Ads, when to use Facebook and Instagram ads, and how to use both together.', category: 'Marketing', date: '2026-09-01', minutes: 5, cta: 'marketing' },
]

export const postByPath = (path: string) => POSTS.find(p => p.path === path)!

// "9 October 2026"
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${MONTHS[m - 1]} ${y}`
}
