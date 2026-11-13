export type Project = {
  id: string;
  title: string;
  division: "Marine" | "Fashion" | "Real Estate" | "AI Operator";
  client: string;
  year: string;
  image: string;
  summary: string;
  objective?: string;
  deliverables?: string;
  platforms?: string;
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "pr1",
    title: "Fleet Engine Overhaul — Lagos Charter Company",
    division: "Marine",
    client: "Private charter operator",
    year: "2025",
    image: "/images/division-marine.jpg",
    summary:
      "Eight twin-installation outboards brought back to service on a rolling schedule without taking the whole fleet offline.",
    objective: "Restore reliability across an eight-engine charter fleet before peak season.",
    deliverables: "Full service, lower-unit repairs, two engine replacements, quarterly stock held.",
    platforms: "Lagos Lagoon and Lekki operations",
    metrics: [
      { label: "Engines serviced", value: "8" },
      { label: "Downtime per boat", value: "4 days" },
      { label: "Breakdowns after 6 months", value: "0" },
    ],
  },
  {
    id: "pr2",
    title: "Resort Tender Engine Installation",
    division: "Marine",
    client: "Island resort",
    year: "2025",
    image: "/images/boat-cruise.jpg",
    summary:
      "Two 90HP four-stroke engines supplied, rigged and sea-trialled for a resort tender operating around Ilashe.",
    objective: "Replace ageing two-stroke engines with quieter, more economical four-strokes.",
    deliverables: "Engine supply, rigging, prop matching, sea trial and operator handover.",
    platforms: "Ilashe Island, Lagos",
    metrics: [
      { label: "Units installed", value: "2" },
      { label: "Fuel saving", value: "~30%" },
      { label: "Sea trials", value: "Passed first time" },
    ],
  },
  {
    id: "pr3",
    title: "Signature Agbada Collection",
    division: "Fashion",
    client: "Clinton Global Fashion",
    year: "2025",
    image: "/images/division-fashion.jpg",
    summary:
      "A fourteen-piece made-to-measure collection in navy cashmere blend, delivered to clients across Lagos, Abuja and London.",
    objective: "Launch a house signature agbada line with a consistent fit standard.",
    deliverables: "Pattern development, sampling, fourteen finished sets, lookbook shoot.",
    platforms: "Direct client orders and private appointments",
    metrics: [
      { label: "Pieces produced", value: "14" },
      { label: "Fit returns", value: "0" },
      { label: "Average lead time", value: "10 days" },
    ],
  },
  {
    id: "pr4",
    title: "Bridal Party Wardrobe — 24 Outfits",
    division: "Fashion",
    client: "Private wedding commission",
    year: "2024",
    image: "/images/property-2.jpg",
    summary:
      "Coordinated outfits for a bridal party of twelve, with individual fittings and a shared colour palette.",
    objective: "Deliver a coordinated family wardrobe on a fixed wedding date.",
    deliverables: "Twelve outfits, six matching accessories, two rounds of fittings.",
    platforms: "Lagos",
    metrics: [
      { label: "Outfits", value: "24" },
      { label: "Fittings", value: "2 rounds" },
      { label: "Delivered", value: "On schedule" },
    ],
  },
  {
    id: "pr5",
    title: "Serviced Land Estate Launch",
    division: "Real Estate",
    client: "Estate developer",
    year: "2025",
    image: "/images/property-3.jpg",
    summary:
      "Marketing and sales support for a 46-plot serviced estate in Ibeju-Lekki, including listing documentation and buyer inspection scheduling.",
    objective: "Sell the first phase of a serviced land estate with clean documentation.",
    deliverables: "Listing pack, site inspections, buyer documentation review, payment plans.",
    platforms: "Ibeju-Lekki, Lagos",
    metrics: [
      { label: "Plots in phase one", value: "46" },
      { label: "Inspections coordinated", value: "120+" },
      { label: "Documentation", value: "Survey + deed" },
    ],
  },
  {
    id: "pr6",
    title: "Lekki Duplex Sale & Handover",
    division: "Real Estate",
    client: "Private vendor",
    year: "2024",
    image: "/images/property-1.jpg",
    summary:
      "A four-bedroom terrace duplex marketed, inspected and sold with legal review completed before exchange.",
    objective: "Sell a newly completed duplex without disputes over title documentation.",
    deliverables: "Photography, listing, buyer screening, inspection management, legal coordination.",
    platforms: "Lekki, Lagos",
    metrics: [
      { label: "Days to offer", value: "19" },
      { label: "Inspections", value: "7" },
      { label: "Post-sale disputes", value: "None" },
    ],
  },
  {
    id: "pr7",
    title: "Enquiry Triage — Internal Concept",
    division: "AI Operator",
    client: "Internal concept build",
    year: "2025",
    image: "/images/division-ai.jpg",
    summary:
      "A concept workflow that classifies website enquiries by division, extracts the key details and routes each one to the right team. Built as an internal demonstration, not a delivered client system.",
    objective: "Test whether routine enquiry sorting could be handled before it reaches staff.",
    deliverables: "Classification rules, extraction template, routing logic and human handover paths.",
    platforms: "Website enquiry forms",
    metrics: [
      { label: "Divisions routed", value: "4" },
      { label: "Handover rules", value: "6" },
      { label: "Status", value: "Concept" },
    ],
  },
  {
    id: "pr8",
    title: "Contract Renewal Reminder — Prototype",
    division: "AI Operator",
    client: "Internal prototype",
    year: "2025",
    image: "/images/property-2.jpg",
    summary:
      "A prototype reminder sequence for recurring service contracts: scheduled prompts, a documented check before sending and a named staff member accountable for each release.",
    objective: "Reduce missed renewal dates without automating the client relationship away.",
    deliverables: "Trigger logic, approval step, message templates and audit log.",
    platforms: "Email and staff dashboard",
    metrics: [
      { label: "Reminder steps", value: "3" },
      { label: "Human approval", value: "Required" },
      { label: "Status", value: "Prototype" },
    ],
  },
];

export const divisionFilters = ["All", "Marine", "Fashion", "Real Estate", "AI Operator"] as const;
