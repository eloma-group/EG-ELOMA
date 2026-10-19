import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

const iconProps = { viewBox: '0 0 48 48', fill: 'none', stroke: 'currentColor', strokeWidth: '2.4', strokeLinecap: 'round', strokeLinejoin: 'round' } as const
const icon = (...d: string[]) => <svg aria-hidden="true" {...iconProps}>{d.map(p => <path key={p} d={p} />)}</svg>

interface IndustryCopy {
  label: string
  icon: ReactNode
  acc: string
  acc2: string
  noun: string
  head: string
  line: string
  cta: string
  t: [string, string, string]
  s: [string, string]
  gd: string
  app: string
  m: [string, string, string, string]
}

// Same industries, in the same order, as the contact form. Each one drives the live preview copy, colours and icon.
const IND = {
  retail: { label: 'Retail & eCommerce', icon: icon('M10 16h28l-2 24H12z', 'M18 16v-3a6 6 0 0 1 12 0v3'), acc: '#A3305C', acc2: '#F9E1EA', noun: 'store', head: 'New season. Just landed.', line: 'Shop online or visit us in {sub}.', cta: 'Shop now', t: ['New arrivals', 'Gift cards', 'Visit the store'], s: ['Just landed this week', 'For any occasion'], gd: 'Shop the latest collection online with fast local delivery.', app: 'Shop', m: ['Orders today', '312', 'Repeat buyers', '48%'] },
  hospitality: { label: 'Hospitality, Cafés & Restaurants', icon: icon('M8 18h26v10a10 10 0 0 1-10 10h-6A10 10 0 0 1 8 28z', 'M34 21h3a5 5 0 0 1 0 10h-3', 'M16 6c0 3-3 3-3 6M23 6c0 3-3 3-3 6M30 6c0 3-3 3-3 6'), acc: '#984819', acc2: '#F8E6D8', noun: 'bakery', head: 'Fresh bread, baked every morning.', line: 'Your local favourite in {sub}.', cta: 'Order online', t: ['Daily specials', 'Catering', 'Find us'], s: ['Updated each morning', 'Events & offices'], gd: 'Fresh bread and pastries baked daily. Open 7 days.', app: 'Orders', m: ['Orders today', '128', 'Avg. prep time', '6 min'] },
  trades: { label: 'Trades & Construction', icon: icon('M30 6a9 9 0 0 0-8.5 12L7 32.5a4 4 0 0 0 5.7 5.7L27.2 23.7A9 9 0 0 0 39 13l-5 5-5-1-1-5z'), acc: '#855A07', acc2: '#FBF0D2', noun: 'plumber', head: 'Fast, licensed and on time.', line: 'Trusted local service across {sub}.', cta: 'Book a job', t: ['Emergency call-outs', 'Free quotes', 'Service area'], s: ['24/7 for urgent jobs', 'No-obligation pricing'], gd: 'Licensed plumbing and gas fitting. Same-day call-outs.', app: 'Jobs', m: ['Jobs booked', '24', 'Quotes sent', '37'] },
  realestate: { label: 'Real Estate & Property', icon: icon('M6 22L24 7l18 15', 'M11 19v20h26V19', 'M20 39V28h8v11'), acc: '#37506B', acc2: '#E4EAF1', noun: 'real estate agent', head: 'Sell for more, sooner.', line: 'Local property experts in {sub}.', cta: 'Book an appraisal', t: ['For sale', 'Free appraisal', 'Our office'], s: ['New listings weekly', "Know your home's value"], gd: 'Homes for sale and rent, plus free market appraisals.', app: 'Listings', m: ['Active listings', '64', 'Open-home leads', '218'] },
  legal: { label: 'Legal', icon: icon('M24 6v34M14 40h20M10 12h28', 'M10 12l-6 13a6 6 0 0 0 12 0zM38 12l-6 13a6 6 0 0 0 12 0z'), acc: '#2F4B8F', acc2: '#E3E9F6', noun: 'lawyer', head: 'Clear advice. Real results.', line: 'Experienced lawyers in {sub}.', cta: 'Book a consult', t: ['Practice areas', 'Our team', 'Contact'], s: ['Family, property, wills', 'Meet the partners'], gd: 'Practical legal advice for families and businesses.', app: 'Client Portal', m: ['Active matters', '46', 'Docs signed', '112'] },
  accounting: { label: 'Accounting & Finance', icon: icon('M13 5h22a4 4 0 0 1 4 4v30a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4z', 'M16 12h16v7H16z', 'M16 27h3M23 27h3M30 27h3M16 34h3M23 34h3M30 34h3'), acc: '#1F5A7A', acc2: '#DDEDF5', noun: 'accountant', head: 'Tax done right, on time.', line: 'Accountants and advisers in {sub}.', cta: 'Book a meeting', t: ['Tax returns', 'Bookkeeping', 'Business advice'], s: ['Individuals & companies', 'Xero & MYOB'], gd: 'Tax, BAS, bookkeeping and business advice for small business.', app: 'Client Hub', m: ['Returns lodged', '284', 'BAS on time', '100%'] },
  insurance: { label: 'Insurance & Mortgage Broking', icon: icon('M24 5l15 6v11c0 10-6.5 16-15 20-8.5-4-15-10-15-20V11z', 'M17 24l5 5 9-10'), acc: '#3B4CA8', acc2: '#E4E8F8', noun: 'mortgage broker', head: 'The right cover. The right loan.', line: 'Insurance and lending experts in {sub}.', cta: 'Get a quote', t: ['Home loans', 'Insurance', 'Calculators'], s: ['Compare lenders', 'Business & personal'], gd: 'Home loans, refinancing and insurance from local brokers.', app: 'Deals', m: ['Applications', '58', 'Approved', '91%'] },
  healthcare: { label: 'Healthcare & Medical', icon: icon('M24 41s-15-8.6-15-20A8.5 8.5 0 0 1 24 15a8.5 8.5 0 0 1 15 6c0 11.4-15 20-15 20z', 'M14 25h6l3-5 4 9 3-4h4'), acc: '#0B7262', acc2: '#DDF4EF', noun: 'medical clinic', head: 'Care that fits your day.', line: 'Book online with our team in {sub}.', cta: 'Book now', t: ['Services', 'Practitioners', 'Opening hours'], s: ['GP and allied health', 'Find your clinician'], gd: 'GP and allied health appointments. Book online in seconds.', app: 'Bookings', m: ['Bookings today', '86', 'No-shows', '−42%'] },
  dental: { label: 'Dental & Allied Health', icon: icon('M15 8c-5 0-8 4-8 9 0 6 3 8 4 14 .8 5 2 9 5 9s3-6 4-10c.5-2 2-3 4-3s3.5 1 4 3c1 4 1 10 4 10s4.2-4 5-9c1-6 4-8 4-14 0-5-3-9-8-9-4 0-6 2-9 2s-5-2-9-2z'), acc: '#0A6E8A', acc2: '#DDF1F7', noun: 'dentist', head: 'Healthy smiles start here.', line: 'Gentle dental care in {sub}.', cta: 'Book now', t: ['Check-ups', 'Cosmetic', 'Emergency'], s: ['Clean & check', 'Whitening & veneers'], gd: 'Family dental care, check-ups and same-day emergencies.', app: 'Bookings', m: ['Patients today', '42', 'Recalls sent', '310'] },
  pharmacy: { label: 'Pharmacy', icon: icon('M10.5 37.5a9 9 0 0 1 0-12.7l14.3-14.3a9 9 0 0 1 12.7 12.7L23.2 37.5a9 9 0 0 1-12.7 0z', 'M17.6 17.6l12.8 12.8'), acc: '#2E7D32', acc2: '#E3F2E4', noun: 'pharmacy', head: 'Your health, close to home.', line: 'Your local pharmacy in {sub}.', cta: 'Order scripts', t: ['Scripts', 'Vaccinations', 'Health advice'], s: ['Order ahead online', 'Flu & travel'], gd: 'Order prescriptions online and collect in store.', app: 'Scripts', m: ['Scripts filled', '186', 'Ready in', '15 min'] },
  agedcare: { label: 'Aged Care & NDIS', icon: icon('M24 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z', 'M14 42V31a10 10 0 0 1 20 0v11', 'M36 30h4v12'), acc: '#6B3FA0', acc2: '#EFE6F8', noun: 'aged care provider', head: 'Care with dignity and heart.', line: 'Aged care and NDIS support in {sub}.', cta: 'Enquire now', t: ['Home care', 'NDIS support', 'Our carers'], s: ['Help at home', 'Plan and self-managed'], gd: 'Home care, residential care and NDIS support services.', app: 'Care', m: ['Visits today', '148', 'Care plans', '92'] },
  education: { label: 'Education & Training', icon: icon('M4 18l20-9 20 9-20 9z', 'M12 22v9c0 3 5.4 6 12 6s12-3 12-6v-9', 'M44 18v12'), acc: '#B5530F', acc2: '#FCE9DA', noun: 'training provider', head: 'Learn skills that matter.', line: 'Courses and training in {sub}.', cta: 'Enrol now', t: ['Courses', 'Timetable', 'Student portal'], s: ['Short & accredited', 'Day and evening'], gd: 'Practical courses and training with flexible study options.', app: 'Learn', m: ['Students enrolled', '1,420', 'Completion', '94%'] },
  childcare: { label: 'Childcare', icon: icon('M6 24h16v16H6z', 'M26 24h16v16H26z', 'M16 6h16v16H16z'), acc: '#9C2E8C', acc2: '#F7E1F3', noun: 'childcare centre', head: 'Where little ones thrive.', line: 'Early learning and care in {sub}.', cta: 'Book a tour', t: ['Our rooms', 'Enrolments', 'Parent app'], s: ['Babies to pre-school', 'Places available'], gd: 'Early learning and childcare with daily updates for parents.', app: 'Family', m: ['Children today', '76', 'Parent updates', '412'] },
  nonprofit: { label: 'Not-for-Profit & Charities', icon: icon('M24 34s-12-7-12-15a6.5 6.5 0 0 1 12-3.5A6.5 6.5 0 0 1 36 19c0 8-12 15-12 15z', 'M6 42c5-4 10-5 15-3l3 1 3-1c5-2 10-1 15 3'), acc: '#1F6B4F', acc2: '#DDF2EA', noun: 'charity', head: 'Together we do more good.', line: 'Supporting our community in {sub}.', cta: 'Donate', t: ['Our work', 'Volunteer', 'Donate'], s: ['Programs & impact', 'Join our team'], gd: 'Support our programs by donating or volunteering.', app: 'Donors', m: ['Donations', '$48k', 'Volunteers', '260'] },
  government: { label: 'Government & Public Sector', icon: icon('M6 18L24 8l18 10z', 'M10 22v14M18 22v14M30 22v14M38 22v14M6 40h36'), acc: '#37506B', acc2: '#E4EAF1', noun: 'council', head: 'Services for our community.', line: 'Serving residents of {sub}.', cta: 'Request a service', t: ['Pay & apply', 'Report an issue', 'Services'], s: ['Rates, permits, pets', '24/7 online'], gd: 'Pay rates, apply for permits and report issues online.', app: 'Requests', m: ['Requests today', '312', 'Resolved', '87%'] },
  logistics: { label: 'Logistics & Transport', icon: icon('M4 12h24v20H4zM28 20h9l7 7v5H28z', 'M8 35a4 4 0 1 0 8 0 4 4 0 1 0-8 0M32 35a4 4 0 1 0 8 0 4 4 0 1 0-8 0'), acc: '#4347D6', acc2: '#E6E7FF', noun: 'freight company', head: 'Delivered on time, every time.', line: 'Road freight and warehousing from {sub}.', cta: 'Get a quote', t: ['Road freight', 'Warehousing', 'Track a delivery'], s: ['Australia-wide', 'Secure storage'], gd: 'Reliable road freight, warehousing and distribution Australia-wide.', app: 'Track', m: ['Deliveries today', '1,240', 'On time', '98.6%'] },
  importexport: { label: 'Import & Export', icon: icon('M7 24a17 17 0 1 0 34 0 17 17 0 1 0-34 0', 'M7 24h34M24 7c5 5 7 11 7 17s-2 12-7 17c-5-5-7-11-7-17s2-12 7-17z'), acc: '#0E5E78', acc2: '#DCEFF5', noun: 'import export company', head: 'Global trade made simple.', line: 'Import and export from {sub}.', cta: 'Get a quote', t: ['Import', 'Export', 'Customs'], s: ['Sea & air freight', 'Paperwork handled'], gd: 'Sea and air freight, customs clearance and global sourcing.', app: 'Shipments', m: ['Containers', '86', 'Cleared', '99%'] },
  manufacturing: { label: 'Manufacturing', icon: icon('M5 41V21l10 6v-6l10 6v-6l10 6V9h7v32z', 'M5 41h37'), acc: '#3D4451', acc2: '#E7E9EE', noun: 'manufacturer', head: 'Built to spec. Made to last.', line: 'Australian manufacturing in {sub}.', cta: 'Request a quote', t: ['Capabilities', 'Industries', 'Quality'], s: ['CNC & fabrication', 'Tested every batch'], gd: 'Precision manufacturing and fabrication for every industry.', app: 'Production', m: ['Units today', '2,480', 'Defect rate', '0.3%'] },
  wholesale: { label: 'Wholesale & Distribution', icon: icon('M8 22h14v18H8zM26 22h14v18H26zM17 6h14v16H17z'), acc: '#5C6B12', acc2: '#EEF2D8', noun: 'wholesaler', head: 'Stock up. Ship fast.', line: 'Wholesale supply from {sub}.', cta: 'Open an account', t: ['Catalogue', 'Trade pricing', 'Delivery'], s: ['Thousands of products', 'For trade customers'], gd: 'Wholesale supply with trade pricing and next-day delivery.', app: 'Orders', m: ['Orders today', '438', 'Fill rate', '99.2%'] },
  automotive: { label: 'Automotive', icon: icon('M6 30l4-11a4 4 0 0 1 4-3h20a4 4 0 0 1 4 3l4 11v8H6z', 'M6 30h36', 'M11 38a3 3 0 1 0 6 0 3 3 0 1 0-6 0M31 38a3 3 0 1 0 6 0 3 3 0 1 0-6 0'), acc: '#B23A3A', acc2: '#F8E2E2', noun: 'mechanic', head: 'Service you can trust.', line: 'Car servicing and repairs in {sub}.', cta: 'Book a service', t: ['Logbook service', 'Repairs', 'Tyres'], s: ['Keeps your warranty', 'All makes & models'], gd: 'Logbook servicing, repairs and tyres for all makes.', app: 'Workshop', m: ['Cars in today', '18', 'Ready on time', '96%'] },
  beauty: { label: 'Beauty, Salons & Spas', icon: icon('M8 35a5 5 0 1 0 10 0 5 5 0 1 0-10 0M30 35a5 5 0 1 0 10 0 5 5 0 1 0-10 0', 'M17 31L36 8M31 31L12 8'), acc: '#A3305C', acc2: '#F9E1EA', noun: 'salon', head: 'Look good. Feel better.', line: 'Hair, beauty and spa in {sub}.', cta: 'Book now', t: ['Hair', 'Beauty', 'Gift vouchers'], s: ['Cuts, colour, styling', 'Nails, brows, facials'], gd: 'Hair, beauty and spa treatments. Book online 24/7.', app: 'Bookings', m: ['Bookings today', '54', 'Rebooked', '72%'] },
  fitness: { label: 'Fitness & Wellness', icon: icon('M14 14v20M34 14v20M8 18v12M40 18v12M14 24h20'), acc: '#C2410C', acc2: '#FDE8DC', noun: 'gym', head: 'Stronger every week.', line: 'Training and classes in {sub}.', cta: 'Start free trial', t: ['Classes', 'Personal training', 'Memberships'], s: ['Classes every day', '1-on-1 coaching'], gd: 'Classes, personal training and flexible memberships.', app: 'Members', m: ['Check-ins today', '364', 'Retention', '88%'] },
  travel: { label: 'Travel & Tourism', icon: icon('M42 6L5 21l15 6 6 15z', 'M20 27L42 6'), acc: '#0A6E8A', acc2: '#DDF1F7', noun: 'travel agent', head: 'Your next trip, sorted.', line: 'Holidays and tours from {sub}.', cta: 'Plan my trip', t: ['Holidays', 'Tours', 'Travel deals'], s: ['Flights & stays', 'Small-group tours'], gd: 'Holidays, tours and flights planned by local experts.', app: 'Trips', m: ['Trips booked', '128', 'Traveller rating', '4.9★'] },
  events: { label: 'Events & Entertainment', icon: icon('M6 14h36v6a4 4 0 0 0 0 8v6H6v-6a4 4 0 0 0 0-8z', 'M28 16v4M28 24v4M28 32v2'), acc: '#9C2E8C', acc2: '#F7E1F3', noun: 'event venue', head: 'Moments worth remembering.', line: 'Events and entertainment in {sub}.', cta: 'Get tickets', t: ["What's on", 'Private events', 'Tickets'], s: ['Shows & live music', 'Weddings & parties'], gd: 'Live shows, private events and functions for every occasion.', app: 'Tickets', m: ['Tickets sold', '2,140', 'Sell-through', '93%'] },
  agriculture: { label: 'Agriculture & Farming', icon: icon('M24 42V20', 'M24 24c0-8-6-12-14-12 0 8 6 12 14 12zM24 20c0-7 5-12 14-12 0 8-5 12-14 12z'), acc: '#4D7C0F', acc2: '#ECF4DC', noun: 'farm', head: 'Grown with care.', line: 'Fresh produce from {sub}.', cta: 'Shop produce', t: ['Our produce', 'Farm gate', 'Wholesale'], s: ['Picked this week', 'Open weekends'], gd: 'Fresh local produce direct from the farm.', app: 'Farm', m: ['Orders this week', '312', 'Hectares', '420'] },
  mining: { label: 'Mining & Resources', icon: icon('M4 40L18 14l8 14 5-8 13 20z'), acc: '#92400E', acc2: '#FBEADB', noun: 'mining services company', head: 'Safe. Reliable. Productive.', line: 'Mining and resources services from {sub}.', cta: 'Talk to us', t: ['Services', 'Safety', 'Projects'], s: ['Contract mining', 'Zero-harm focus'], gd: 'Contract mining, equipment and site services.', app: 'Site Ops', m: ['Tonnes moved', '18.2k', 'Days LTI-free', '412'] },
  energy: { label: 'Energy & Utilities', icon: icon('M27 4L10 27h12l-3 17 19-24H26z'), acc: '#B45309', acc2: '#FDF0D5', noun: 'solar installer', head: 'Power that pays for itself.', line: 'Solar and energy solutions in {sub}.', cta: 'Get a quote', t: ['Solar', 'Batteries', 'EV chargers'], s: ['Cut your power bills', 'Store and save'], gd: 'Solar panels, batteries and EV chargers installed by licensed electricians.', app: 'Energy', m: ['kWh generated', '1,840', 'Bill savings', '62%'] },
  it: { label: 'IT & Technology', icon: icon('M8 8h32a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3z', 'M17 42h14M24 34v8', 'M19 17l-5 4 5 4M29 17l5 4-5 4'), acc: '#4347D6', acc2: '#E6E7FF', noun: 'IT company', head: 'Tech that just works.', line: 'IT support and solutions in {sub}.', cta: 'Get support', t: ['Managed IT', 'Cloud', 'Cybersecurity'], s: ['24/7 helpdesk', 'Microsoft 365 & Azure'], gd: 'Managed IT, cloud and cybersecurity for growing teams.', app: 'Helpdesk', m: ['Tickets closed', '212', 'First response', '9 min'] },
  startups: { label: 'Startups', icon: icon('M24 4c8 6 11 15 9 26H15C13 19 16 10 24 4z', 'M20 18a4 4 0 1 0 8 0 4 4 0 1 0-8 0', 'M15 30l-5 8h8M33 30l5 8h-8M20 34l4 8 4-8'), acc: '#6B3FA0', acc2: '#EFE6F8', noun: 'startup', head: "Built for what's next.", line: 'A fast-growing team from {sub}.', cta: 'Join the waitlist', t: ['Product', 'Pricing', 'Early access'], s: ['See how it works', 'Plans for every team'], gd: 'The simple platform for modern teams. Join the waitlist.', app: 'Dashboard', m: ['Sign-ups this week', '1,280', 'Activation', '64%'] },
  professional: { label: 'Professional Services', icon: icon('M8 14h32a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V17a3 3 0 0 1 3-3z', 'M17 14v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M5 25h38'), acc: '#2F4B8F', acc2: '#E3E9F6', noun: 'consultant', head: 'Expert advice, real outcomes.', line: 'Trusted consultants in {sub}.', cta: 'Book a call', t: ['Services', 'Case studies', 'Team'], s: ['Strategy & delivery', 'Results we deliver'], gd: 'Strategy, operations and advisory for growing businesses.', app: 'Projects', m: ['Active projects', '34', 'On schedule', '97%'] },
  media: { label: 'Media & Marketing Agencies', icon: icon('M6 20v8h7l17 10V10L13 20z', 'M36 18a8 8 0 0 1 0 12', 'M13 28l3 12h5l-2-10'), acc: '#BE185D', acc2: '#FBE3EE', noun: 'marketing agency', head: 'Ideas that get noticed.', line: 'A creative agency in {sub}.', cta: 'Start a project', t: ['Our work', 'Services', 'Contact'], s: ["Brands we've built", 'Strategy, content, ads'], gd: 'Branding, content and campaigns that grow businesses.', app: 'Campaigns', m: ['Campaigns live', '28', 'Avg. ROAS', '4.6x'] },
  cleaning: { label: 'Cleaning & Facility Services', icon: icon('M24 6l3 9 9 3-9 3-3 9-3-9-9-3 9-3z', 'M38 30l1.5 4.5L44 36l-4.5 1.5L38 42l-1.5-4.5L32 36l4.5-1.5z'), acc: '#0F766E', acc2: '#DDF3F1', noun: 'cleaning company', head: 'Spotless, every single time.', line: 'Commercial and home cleaning in {sub}.', cta: 'Get a quote', t: ['Office cleaning', 'Home cleaning', 'End of lease'], s: ['After-hours service', 'Weekly or one-off'], gd: 'Commercial, home and end-of-lease cleaning by vetted teams.', app: 'Jobs', m: ['Jobs today', '64', 'Re-book rate', '91%'] },
  security: { label: 'Security Services', icon: icon('M13 21h22a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V24a3 3 0 0 1 3-3z', 'M16 21v-6a8 8 0 0 1 16 0v6M24 29v6'), acc: '#3D4451', acc2: '#E7E9EE', noun: 'security company', head: 'Protecting what matters.', line: 'Licensed security services in {sub}.', cta: 'Request a quote', t: ['Guarding', 'Alarms & CCTV', 'Patrols'], s: ['Static & event', '24/7 monitoring'], gd: 'Licensed guards, alarm monitoring and mobile patrols.', app: 'Patrol', m: ['Sites covered', '120', 'Response time', '7 min'] },
  religious: { label: 'Religious & Community Groups', icon: icon('M19 14a5 5 0 1 0 10 0 5 5 0 1 0-10 0M7 19a4 4 0 1 0 8 0 4 4 0 1 0-8 0M33 19a4 4 0 1 0 8 0 4 4 0 1 0-8 0', 'M15 40v-6a9 9 0 0 1 18 0v6M4 40v-4a7 7 0 0 1 9-6.7M44 40v-4a7 7 0 0 0-9-6.7'), acc: '#7C5A1E', acc2: '#F6EBD7', noun: 'community group', head: 'Everyone is welcome here.', line: 'Bringing people together in {sub}.', cta: 'Get involved', t: ['Gatherings', 'Events', 'Support us'], s: ['Every week', 'Community programs'], gd: 'Weekly gatherings, community programs and events for all.', app: 'Members', m: ['Members', '640', 'Events this month', '14'] },
  foodbev: { label: 'Food & Beverage Production', icon: icon('M19 4h10M20 4v8l-6 8v20a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V20l-6-8V4', 'M14 26h20'), acc: '#9A3412', acc2: '#FCE7DA', noun: 'food producer', head: 'Made fresh. Shipped fast.', line: 'Food and drink made in {sub}.', cta: 'Shop now', t: ['Our range', 'Stockists', 'Wholesale'], s: ['Small-batch quality', 'Find us near you'], gd: 'Small-batch food and drinks, made locally and sold nationwide.', app: 'Production', m: ['Batches today', '36', 'On-time dispatch', '98%'] },
  telco: { label: 'Telecommunications', icon: icon('M24 22v20M18 42h12', 'M21 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0', 'M16 10a11 11 0 0 0 0 16M32 10a11 11 0 0 1 0 16M10 5a19 19 0 0 0 0 26M38 5a19 19 0 0 1 0 26'), acc: '#3B4CA8', acc2: '#E4E8F8', noun: 'telco provider', head: 'Stay connected, everywhere.', line: 'Business phone and internet in {sub}.', cta: 'Compare plans', t: ['NBN & fibre', 'Business phones', 'Mobile'], s: ['Fast, reliable internet', 'Cloud phones & VoIP'], gd: 'Business internet, phone systems and mobile plans.', app: 'Network', m: ['Services active', '4,860', 'Uptime', '99.98%'] },
  other: { label: 'Other', icon: icon('M10 7h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3zM30 7h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3zM10 27h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3zM30 27h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z'), acc: '#475569', acc2: '#E8ECF1', noun: 'business', head: 'Built around your customers.', line: 'Proudly serving {sub}.', cta: 'Get in touch', t: ['Services', 'About us', 'Contact'], s: ['What we do best', 'Our story'], gd: 'Quality products and services from a trusted local business.', app: 'Portal', m: ['Enquiries today', '48', 'Repeat customers', '63%'] },
} satisfies Record<string, IndustryCopy>

type Industry = keyof typeof IND

// The demo alternates these names and cities while stepping through every industry in IND.
const DEMOS: [string, string][] = [['Eloma Group', 'Sydney'], ['Bivry', 'Melbourne']]
const INDUSTRIES = Object.keys(IND) as Industry[]

const slug = (s: string) => (s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '') || 'yourbusiness').slice(0, 28)
const initials = (s: string) => {
  const w = s.trim().split(/\s+/).filter(Boolean)
  return ((w[0] || 'Y')[0] + (w[1] ? w[1][0] : (w[0] || 'B')[1] || '')).toUpperCase()
}
const cap = (s: string) => s[0].toUpperCase() + s.slice(1)
const tollFree = (name: string) => {
  const w = name.toUpperCase().replace(/[^A-Z ]/g, '').split(' ').filter(Boolean)
  let v = w[0] || 'CALLNOW'
  if (v.length < 4 && w[1]) v += w[1]
  return '1800 ' + v.slice(0, 7)
}

const searchIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  </svg>
)

// Home hero: the "type your business name" form and its live mock-up preview.
export default function HeroStudio() {
  // biz/sub hold what the visitor typed; the demo only types into the placeholders.
  const [biz, setBiz] = useState('')
  const [sub, setSub] = useState('')
  const [demoBiz, setDemoBiz] = useState(DEMOS[0][0])
  const [demoSub, setDemoSub] = useState(DEMOS[0][1])
  const [ind, setInd] = useState<Industry>(INDUSTRIES[0])
  const edited = useRef(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const demo = useRef<{ pause: () => void; resumeSoon: () => void } | null>(null)
  const reduce = useRef(false)

  const name = biz.trim() || demoBiz.trim() || 'Your Business'
  const area = sub.trim() || demoSub.trim() || 'your area'
  const d = IND[ind]
  const sl = slug(name)
  const ini = initials(name)

  // Re-trigger the staggered "pop" animation on every preview window.
  const pop = () => {
    if (reduce.current || !stageRef.current) return
    stageRef.current.querySelectorAll('.win').forEach((w, i) => {
      w.classList.remove('pop')
      void (w as HTMLElement).offsetWidth
      setTimeout(() => w.classList.add('pop'), i * 50)
    })
  }

  // Auto-typing demo that cycles through example businesses in the field placeholders. It pauses while the
  // visitor edits the form and starts again after they have been idle for a few seconds (and are not typing in a text field).
  // Once the visitor has typed anything, the demo stops changing the industry and preview.
  useEffect(() => {
    reduce.current = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce.current) return
    const IDLE = 7000
    let timers: number[] = []
    let paused = false
    const later = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms))
    const clear = () => { timers.forEach(clearTimeout); timers = [] }
    let di = 1
    const typeDemo = () => {
      if (paused) return
      const [n, nSub] = DEMOS[di % DEMOS.length]
      const nInd = INDUSTRIES[di++ % INDUSTRIES.length]
      setDemoSub(nSub)
      if (!edited.current) {
        setInd(nInd)
        pop()
      }
      let i = 0
      setDemoBiz('')
      const type = () => {
        if (paused) return
        setDemoBiz(n.slice(0, ++i))
        if (i < n.length) later(type, 65)
        else later(typeDemo, 4200)
      }
      type()
    }
    const typing = () => document.activeElement instanceof HTMLInputElement && !!document.activeElement.closest('#maker')
    const resume = () => {
      if (typing()) return void later(resume, IDLE)
      paused = false
      typeDemo()
    }
    demo.current = {
      pause: () => { paused = true; clear() },
      resumeSoon: () => { paused = true; clear(); later(resume, IDLE) },
    }
    later(typeDemo, 4000)
    return () => { clear(); demo.current = null }
  }, [])

  const pause = () => demo.current?.pause()
  const resumeSoon = () => demo.current?.resumeSoon()

  return (
    <div className="g">
      <div>
        <span className="eyebrow">
          <b>Live</b>
          Try It With Your Business Name
        </span>
        <h1 id="hero-title" className="h1k">{'Melbourne IT, Microsoft & Digital Marketing Partner'}</h1>
        <p className="htag">
          {'See Your Business, '}
          <span className="hl">Upgraded.</span>
        </p>
        <p className="lead">
          Type your business name and see the website, Google listing, software and phone number we would build for you.
        </p>
        <form className="maker" id="maker" noValidate onSubmit={e => e.preventDefault()}>
          <div className="row">
            <label htmlFor="biz">
              Business name
              <input id="biz" name="business" autoComplete="organization" maxLength={40} value={biz} placeholder={demoBiz} onFocus={pause} onBlur={resumeSoon} onChange={e => { edited.current = true; setBiz(e.target.value) }} />
            </label>
            <label htmlFor="ind">
              Industry
              <select id="ind" name="industry" value={ind} onFocus={pause} onBlur={resumeSoon} onChange={e => { edited.current = true; setInd(e.target.value as Industry); pop(); resumeSoon() }}>
                {INDUSTRIES.map(k => <option key={k} value={k}>{IND[k].label}</option>)}
              </select>
            </label>
          </div>
          <label htmlFor="sub">
            City or suburb
            <input id="sub" name="suburb" autoComplete="address-level2" maxLength={30} value={sub} placeholder={demoSub} onFocus={pause} onBlur={resumeSoon} onChange={e => { edited.current = true; setSub(e.target.value) }} />
          </label>
          <div className="ctas">
            <Link className="lbtn a" to="/contact" id="go">
              {'Get my free consultation '}
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link className="lbtn b" to="/plans">View plans</Link>
          </div>
        </form>
        <div className="trust">
          <span>
            <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 3l1.3 2.8 3 .3-2.3 2 .7 3-2.7-1.6-2.7 1.6.7-3-2.3-2 3-.3zM7 12l1 2.1 2.3.2-1.7 1.5.5 2.2L7 16.8 4.9 18l.5-2.2-1.7-1.5 2.3-.2zM25 13l1 2.1 2.3.2-1.7 1.5.5 2.2-2.1-1.2-2.1 1.2.5-2.2-1.7-1.5 2.3-.2zM16 22l1.1 2.3 2.5.3-1.9 1.6.6 2.5-2.3-1.3-2.3 1.3.6-2.5-1.9-1.6 2.5-.3z" />
            </svg>
            Australian owned
          </span>
          <span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12.5l2.7 2.7L16 10" />
            </svg>
            Microsoft Partner
          </span>
          <span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            ASD Essential Eight
          </span>
        </div>
      </div>
      <div className="preview" data-nosnippet="">
        <div className="pvh">
          <span className="lv">
            <i />
            Live preview
          </span>
          <span>Illustrative concept, not a final design</span>
        </div>
        <div className="stage" id="stage" aria-hidden="true" ref={stageRef} style={{ '--acc': d.acc, '--acc2': d.acc2 } as CSSProperties}>
          <div className="win w-site">
            <div className="bar">
              <i />
              <i />
              <i />
              <span className="url">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
                <span>{sl}.com.au</span>
              </span>
              <span className="speed">
                <i>99</i>
                Speed
              </span>
            </div>
            <div className="site-nav">
              <span className="lg">{ini}</span>
              <b>{name}</b>
              <span>Services</span>
              <span>About</span>
              <span className="c">{d.cta}</span>
            </div>
            <div className="site-hero">
              <div>
                <div className="sh">{d.head}</div>
                <p>{d.line.replace('{sub}', area)}</p>
                <span className="b1">{d.cta}</span>
              </div>
              <div className="art" id="art">{d.icon}</div>
            </div>
            <div className="site-tiles">
              <div>
                <b>{d.t[0]}</b>
                <span>{d.s[0]}</span>
              </div>
              <div>
                <b>{d.t[1]}</b>
                <span>{d.s[1]}</span>
              </div>
              <div>
                <b>{d.t[2]}</b>
                <span>{area}</span>
              </div>
            </div>
          </div>
          <div className="win w-goog">
            <span className="lab">
              {searchIcon}
              Google search
            </span>
            <div className="gq">
              {searchIcon}
              <span>{d.noun} near {area}</span>
            </div>
            <div className="gr">
              <span className="top">#1</span>
              <div className="u">{sl}.com.au</div>
              <div className="t">{name} | {cap(d.noun)} in {area}</div>
              <div className="d">{d.gd}</div>
            </div>
          </div>
          <div className="win w-mail">
            <span className="lab">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              Microsoft 365
            </span>
            <div className="mrow">
              <span className="ic">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <div style={{ minWidth: '0' }}>
                <b>hello@{sl}.com.au</b>
                <span>Business email, ready</span>
              </div>
            </div>
            <div className="apps">
              <span>Outlook</span>
              <span>Teams</span>
              <span>OneDrive</span>
              <span>SharePoint</span>
            </div>
          </div>
          <div className="win w-app">
            <span className="lab">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />
              </svg>
              Custom software
            </span>
            <div className="ap">
              <div className="ap-side">
                <span className="lg">{ini}</span>
                <i />
                <i />
                <i />
              </div>
              <div className="ap-main">
                <div className="ap-h">
                  <b>{name} {d.app}</b>
                  <span>{'Web & mobile app'}</span>
                </div>
                <div className="ap-k">
                  <small>{d.m[0]}</small>
                  <b>{d.m[1]}</b>
                </div>
                <div className="ap-k">
                  <small>{d.m[2]}</small>
                  <b>{d.m[3]}</b>
                </div>
                <div className="bars">
                  {['38%', '52%', '44%', '66%', '58%', '80%', '100%'].map(h => <i key={h} style={{ '--h': h } as CSSProperties} />)}
                </div>
              </div>
            </div>
          </div>
          <div className="win w-tf">
            <span className="lab">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
              Toll-free number
            </span>
            <b className="num">{tollFree(name)}</b>
            <span className="ring">
              <i />
              Calls routed to your team
            </span>
            <div className="cc">
              <span>AU 1300/1800</span>
              <span>US·CA 1-800</span>
              <span>UK·NZ 0800</span>
            </div>
          </div>
        </div>
        <p className="note-c">Example mock-ups generated from the details you enter.</p>
      </div>
    </div>
  )
}
