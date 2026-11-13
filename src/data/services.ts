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

export type CreativeService = {
  title: string;
  body: string;
  icon: string;
};

export const creativeServices: CreativeService[] = [
  { title: "AI Product Commercials", body: "Studio-grade product films generated and edited for launch campaigns, with considered lighting, motion and sound design.", icon: "film" },
  { title: "Social Video Ads", body: "Vertical-first paid social creative in 9:16, delivered in the hook-first structure that performs on Instagram, TikTok and Reels.", icon: "phone" },
  { title: "Brand Storytelling", body: "Cinematic brand films that explain what you do, who you do it for and why it matters — scripted and produced end to end.", icon: "sparkle" },
  { title: "AI Spokesperson Videos", body: "Presentable, on-brand virtual presenters for explainers, training content and product walkthroughs in multiple languages.", icon: "person" },
  { title: "AI Voice-Over", body: "Clean studio-quality voice-over in English, Yoruba, Igbo, Hausa and French, with timing matched precisely to picture.", icon: "mic" },
  { title: "Real Estate & Fashion Films", body: "Property walkthroughs and fashion lookbook films produced inside our own divisions, then adapted for your campaign.", icon: "camera" },
];

export const creativePackages: Package[] = [
  {
    name: "Starter",
    price: "from ₦280,000",
    note: "1 video · 5–15 seconds",
    features: [
      "One short promotional video",
      "Script and concept included",
      "Two revisions",
      "9:16 and 1:1 exports",
      "Delivery in 5 working days",
    ],
  },
  {
    name: "Professional",
    price: "from ₦750,000",
    note: "3 videos · up to 30 seconds",
    highlight: true,
    features: [
      "Three videos, up to 30 seconds each",
      "AI voice-over in English",
      "Sound design and licensed music",
      "Three revisions per video",
      "9:16, 1:1 and 16:9 exports",
      "Delivery in 10 working days",
    ],
  },
  {
    name: "Premium",
    price: "Quotation based",
    note: "Campaign package",
    features: [
      "Cinematic campaign concept",
      "Multiple scenes and AI spokesperson",
      "Multilingual voice-over",
      "Platform-specific adaptations",
      "Performance reporting on request",
      "Dedicated creative director",
    ],
  },
];
