export const site = {
  name: "Clinton Global Investment",
  shortName: "Clinton Global",
  legalName: "Clinton Global Investment",
  logoMark: "C",
  logoSuffix: "GLOBAL",
  tagline: "Expanding Possibilities. Delivering Excellence.",
  description:
    "A Nigerian multi-service company operating four divisions: marine services and outboard engines, contemporary fashion, real estate, and an AI Operator division.",
  url: "https://clintonglobalinvestment.com",
  phone: "0814 611 1799",
  phoneHref: "+2348146111799",
  whatsapp: "2348146111799",
  email: "godpowerclinton075@gmail.com",
  salesEmail: "godpowerclinton075@gmail.com",
  address: "18 Creek Road, Port Harcourt, Rivers State, Nigeria",
  hours: "Mon – Fri, 8:30am – 6:00pm · Sat, 9:00am – 3:00pm",
  rc: "Registration number to be supplied",
  socials: [
    { label: "Instagram", href: "https://instagram.com", handle: "@clintonglobal" },
    { label: "Facebook", href: "https://facebook.com", handle: "/clintonglobalinvestment" },
    { label: "TikTok", href: "https://tiktok.com", handle: "@clintonglobal" },
    { label: "LinkedIn", href: "https://linkedin.com", handle: "/company/clinton-global-investment" },
    { label: "YouTube", href: "https://youtube.com", handle: "@clintonglobal" },
  ],
};

export type DivisionSlug = "marine" | "fashion" | "real-estate" | "ai-operator";

export type Division = {
  slug: DivisionSlug;
  number: string;
  name: string;
  shortName: string;
  tagline: string;
  blurb: string;
  image: string;
  highlights: string[];
  cta: string;
  href: string;
};

export const divisions: Division[] = [
  {
    slug: "marine",
    number: "01",
    name: "Marine Services",
    shortName: "Marine",
    tagline: "Power on the water",
    blurb:
      "Outboard engine sales, installation, diagnostics and maintenance for boat owners, operators and fleet managers across Port Harcourt, Rivers State and the coastal states.",
    image: "/images/division-marine.jpg",
    highlights: ["Outboard engine sales", "Repairs & maintenance", "Genuine spare parts"],
    cta: "Explore Marine",
    href: "/marine",
  },
  {
    slug: "fashion",
    number: "02",
    name: "Fashion",
    shortName: "Fashion",
    tagline: "Contemporary African style",
    blurb:
      "Ready-to-wear, bespoke tailoring and accessories — a considered wardrobe built on Nigerian craftsmanship and modern silhouettes.",
    image: "/images/division-fashion.jpg",
    highlights: ["Ready-to-wear", "Bespoke tailoring", "Bags & accessories"],
    cta: "Enter the Store",
    href: "/fashion",
  },
  {
    slug: "real-estate",
    number: "03",
    name: "Real Estate",
    shortName: "Real Estate",
    tagline: "Property, handled properly",
    blurb:
      "Residential and commercial sales, rentals, land and advisory — with documented listings, transparent fees and coordinated inspections.",
    image: "/images/division-realestate.jpg",
    highlights: ["Homes & apartments", "Land & commercial", "Inspection booking"],
    cta: "Browse Properties",
    href: "/real-estate",
  },
  {
    slug: "ai-operator",
    number: "04",
    name: "AI Operator",
    shortName: "AI Operator",
    tagline: "Intelligent digital operations",
    blurb:
      "Practical automation of enquiry handling, administration and content — proposed around existing processes, with the scope of every engagement confirmed in writing.",
    image: "/images/division-ai.jpg",
    highlights: ["AI assistants", "Workflow automation", "Digital solutions"],
    cta: "View Our Work",
    href: "/ai-operator",
  },
];

export const nav: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Divisions", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Shop", href: "/fashion" },
  { label: "Properties", href: "/real-estate" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const trustPoints = [
  {
    title: "Four divisions, one standard",
    body: "A single corporate identity with dedicated teams, processes and accountability for each line of business.",
  },
  {
    title: "Written quotations",
    body: "Every job is scoped and quoted in writing before work begins. No verbal estimates, no surprise line items.",
  },
  {
    title: "Documented processes",
    body: "Service reports, listing documentation and production briefs are shared with the client at each stage.",
  },
  {
    title: "Reachable after the sale",
    body: "WhatsApp, phone and email support across all divisions, with named contacts for active projects.",
  },
];

export const stats: { value: number; suffix: string; label: string }[] = [];

export const testimonials: { quote: string; name: string; role: string; division: string }[] = [];

export const faqs = [
  {
    q: "Are you four separate companies?",
    a: "No. Clinton Global Investment is one company with four operating divisions. Each division has its own team, service catalogue and booking process, but they share one corporate identity, one accounts function and one standard of service.",
  },
  {
    q: "Do you work outside Port Harcourt?",
    a: "Yes. Our head office is in Port Harcourt, with marine work concentrated in Rivers State and the coastal states, and real estate listings available in Port Harcourt and Lagos. Fashion delivery and our fashion and property services are available as described on their respective pages. AI Operator service details are being confirmed.",
  },
  {
    q: "How do quotations work?",
    a: "Submit an enquiry through the relevant division or the general quote form. We acknowledge within one business day, ask any clarifying questions, then issue a written quotation with scope, timeline and payment terms.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "Bank transfer, card and USSD through our Nigerian payment gateway, and direct bank transfer for invoiced jobs. Card payments are verified before an order is marked as paid.",
  },
  {
    q: "Can I track an order or booking?",
    a: "Yes. Create a customer account and you can view orders, bookings, quotations and saved properties in one dashboard. Updates are also sent by email and WhatsApp.",
  },
  {
    q: "Do you verify property listings?",
    a: "We inspect each listing and collect the documentation the vendor provides before advertising it. We only use the word 'verified' on a listing where that documentation review has actually been completed, and we always advise independent legal checks before payment.",
  },
];
