export type MarineService = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  items: string[];
};

export const marineServices: MarineService[] = [
  {
    slug: "outboard-engine-sales",
    title: "Outboard Engine Sales",
    summary:
      "New and certified pre-owned outboard engines from 2.5HP to 425HP, supplied with correct rigging and a written warranty.",
    icon: "engine",
    items: [
      "New engines — Yamaha, Suzuki, Mercury, Honda",
      "Certified pre-owned engines with inspection report",
      "Horsepower sizing advice for your hull",
      "Supply with controls, gauges and harness",
      "Installation and sea trial included",
    ],
  },
  {
    slug: "installation",
    title: "Engine Installation & Rigging",
    summary:
      "Transom assessment, mounting, fuel and electrical rigging, prop matching and sea trial — done to manufacturer specification.",
    icon: "tools",
    items: [
      "Transom height and strength assessment",
      "Correct mounting height and bolt pattern",
      "Fuel line, primer bulb and filter installation",
      "Battery, harness and gauge wiring",
      "Propeller selection and sea trial",
    ],
  },
  {
    slug: "maintenance",
    title: "Servicing & Maintenance",
    summary:
      "Scheduled servicing for private owners and fleets, with a written service report after every visit.",
    icon: "wrench",
    items: [
      "100-hour and annual service packages",
      "Gear oil and impeller replacement",
      "Spark plugs, filters and anodes",
      "Fuel system cleaning",
      "Fleet maintenance contracts",
    ],
  },
  {
    slug: "repairs",
    title: "Repairs & Diagnostics",
    summary:
      "Mechanical and electrical fault-finding, from no-start conditions and overheating to lower-unit damage.",
    icon: "diagnostics",
    items: [
      "Computer diagnostics and fault codes",
      "Compression and leak-down testing",
      "Lower unit and gearbox repair",
      "Electrical and charging system repair",
      "Overheating and cooling system repair",
    ],
  },
  {
    slug: "spare-parts",
    title: "Genuine Spare Parts",
    summary:
      "Genuine and OEM-compatible parts sourced against your engine's model and serial number.",
    icon: "parts",
    items: [
      "Impellers, water pumps and seals",
      "Carbs, injectors and fuel pumps",
      "Propellers and hub kits",
      "Powerhead components",
      "Model and serial number verification",
    ],
  },
  {
    slug: "marine-equipment",
    title: "Marine Equipment & Accessories",
    summary:
      "Safety, navigation and comfort equipment for leisure boats, workboats and patrol craft.",
    icon: "boat",
    items: [
      "Life jackets and safety kits",
      "Navigation lights and electronics",
      "Anchors, ropes and fenders",
      "Fuel tanks and lines",
      "Boat covers and upholstery",
    ],
  },
];

export type Engine = {
  name: string;
  brand: string;
  hp: string;
  stroke: string;
  weight: string;
  price: string;
  use: string;
  tag?: string;
};

export const engines: Engine[] = [
  { name: "F25", brand: "Yamaha", hp: "25 HP", stroke: "4-stroke", weight: "57 kg", price: "On request", use: "Tenders & small fishing boats" },
  { name: "DF60", brand: "Suzuki", hp: "60 HP", stroke: "4-stroke", weight: "104 kg", price: "On request", use: "Leisure runabouts", tag: "Popular" },
  { name: "F90", brand: "Yamaha", hp: "90 HP", stroke: "4-stroke", weight: "162 kg", price: "On request", use: "Mid-size leisure boats" },
  { name: "DF140", brand: "Suzuki", hp: "140 HP", stroke: "4-stroke", weight: "179 kg", price: "On request", use: "Ski and sport boats" },
  { name: "F150", brand: "Yamaha", hp: "150 HP", stroke: "4-stroke", weight: "220 kg", price: "On request", use: "Charter and crew boats", tag: "Fleet favourite" },
  { name: "F225", brand: "Yamaha", hp: "225 HP", stroke: "4-stroke", weight: "265 kg", price: "On request", use: "Large leisure craft" },
  { name: "DF300AP", brand: "Suzuki", hp: "300 HP", stroke: "4-stroke", weight: "280 kg", price: "On request", use: "Sport and patrol craft" },
  { name: "Verado 400", brand: "Mercury", hp: "400 HP", stroke: "4-stroke", weight: "317 kg", price: "On request", use: "Performance and twin installations", tag: "Flagship" },
];

export type Package = {
  name: string;
  price: string;
  note: string;
  features: string[];
  highlight?: boolean;
};

export const marinePackages: Package[] = [
  {
    name: "Essential Service",
    price: "from ₦85,000",
    note: "Engines up to 100HP",
    features: [
      "Engine oil and filter change",
      "Spark plug inspection",
      "Impeller check",
      "Anode inspection",
      "Written service report",
    ],
  },
  {
    name: "Full Service",
    price: "from ₦145,000",
    note: "Engines 100HP – 250HP",
    highlight: true,
    features: [
      "Everything in Essential",
      "Impeller replacement",
      "Gear oil change",
      "Fuel system inspection",
      "Computer diagnostics scan",
      "Sea trial after service",
    ],
  },
  {
    name: "Fleet Contract",
    price: "Custom",
    note: "Three engines or more",
    features: [
      "Quarterly scheduled servicing",
      "Priority breakdown response",
      "Parts stock held for your models",
      "Named technician assigned",
      "Monthly fleet condition report",
    ],
  },
];

export type AiCapability = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  items: string[];
};

/**
 * Proposed capability areas for the AI Operator division.
 * Blueprint Section 8 lists these as potential services; the company's actual
 * offer must be approved before they are sold as a confirmed catalogue.
 */
export const aiCapabilities: AiCapability[] = [
  {
    slug: "ai-assistants",
    title: "AI Business Assistants",
    summary:
      "A first line of response for customer enquiries — answering approved questions, qualifying leads and handing complex cases to a person.",
    icon: "assistant",
    items: [
      "Website chat assistants",
      "FAQ and policy answering from approved content",
      "Enquiry capture and routing",
      "Lead qualification before a human call",
      "Multilingual response options",
    ],
  },
  {
    slug: "process-automation",
    title: "Business Process Automation",
    summary:
      "Removing the repetitive admin between an enquiry and a delivered job: scheduling, follow-up, reminders and record-keeping.",
    icon: "workflow",
    items: [
      "Appointment and inspection scheduling",
      "Automated acknowledgement and follow-up",
      "Internal approval workflows",
      "Document and data processing",
      "Task assignment and reminders",
    ],
  },
  {
    slug: "content-operations",
    title: "AI Content Operations",
    summary:
      "A repeatable production line for marketing content, with a human editor reviewing every asset before publication.",
    icon: "content",
    items: [
      "Marketing copy and product descriptions",
      "Social content planning and calendars",
      "Product and campaign imagery support",
      "Short-form video support",
      "Brand tone and style guidelines",
    ],
  },
  {
    slug: "integrations",
    title: "AI Integration",
    summary:
      "Connecting the tools a business already uses so information moves without being retyped by staff.",
    icon: "integration",
    items: [
      "Website chatbot and contact-form routing",
      "WhatsApp Business enquiry handling",
      "CRM and lead management connections",
      "Order and booking status lookups",
      "Notification pipelines",
    ],
  },
  {
    slug: "consulting",
    title: "AI Consulting & Training",
    summary:
      "Practical guidance on where automation is worth it, what it costs and how to introduce it without disrupting current operations.",
    icon: "training",
    items: [
      "Automation opportunity assessment",
      "Tool selection and cost review",
      "Staff training and workflow documentation",
      "Pilot design and success measures",
      "Policy guidance for customer data",
    ],
  },
];

export type Engagement = {
  name: string;
  note: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

/** Engagement models. Pricing is quoted after scoping — no invented rates. */
export const aiEngagements: Engagement[] = [
  {
    name: "Assessment",
    note: "One to two weeks",
    price: "Quoted after scoping",
    features: [
      "Review of current enquiries and admin",
      "Shortlist of automatable tasks",
      "Cost and effort estimates",
      "Written recommendation — no obligation to proceed",
    ],
  },
  {
    name: "Pilot",
    note: "One workflow or one channel",
    price: "Quoted after scoping",
    highlight: true,
    features: [
      "A single workflow built and tested",
      "Approved content and escalation rules",
      "Staff handover and documentation",
      "Defined success measures",
      "Review before any wider rollout",
    ],
  },
  {
    name: "Operate",
    note: "Ongoing support",
    price: "Monthly retainer, scoped",
    features: [
      "Monitoring and content updates",
      "Monthly performance summary",
      "Change requests and refinements",
      "Escalation to human staff retained",
      "Named account contact",
    ],
  },
];

export const aiFaqs = [
  {
    q: "What exactly is the AI Operator division?",
    a: "The blueprint describes a division offering AI-powered business operations and automation. That direction is what this page outlines, but the specific services have not yet been confirmed by the company. We present these areas as proposed so no visitor is sold a capability that is not ready.",
  },
  {
    q: "Can I buy an AI service today?",
    a: "You can submit a requirements brief and our team will respond with what is feasible, what it would cost and how long it would take. Nothing is sold until the service scope is confirmed in writing.",
  },
  {
    q: "Will an AI assistant answer customers without a human?",
    a: "Only within limits the business sets. Any assistant we build is restricted to approved information, must state that it is automated, and must hand over pricing negotiations, complaints and complex requests to a person.",
  },
  {
    q: "What about customer data?",
    a: "Automation projects are scoped around the Nigeria Data Protection Act 2023: lawful basis, minimum data collected, retention and access. We do not send customer data to a third-party model where the client has not approved that processing.",
  },
  {
    q: "Do you replace staff?",
    a: "The work we propose is aimed at removing repetitive administration, not at removing the people who make judgement calls. Most useful projects start with work a team already dislikes doing manually.",
  },
];
