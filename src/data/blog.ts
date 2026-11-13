export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  division: "Marine" | "Fashion" | "Real Estate" | "AI Video";
  date: string;
  readTime: string;
  author: string;
  image: string;
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "outboard-engine-maintenance-calendar",
    title: "The outboard engine maintenance calendar every Nigerian boat owner should keep",
    excerpt:
      "Most engine failures we see on Lagos waters are preventable. Here is the servicing rhythm that keeps an outboard reliable across a full season.",
    division: "Marine",
    date: "2025-10-14",
    readTime: "6 min read",
    author: "Marine Services Team",
    image: "/images/division-marine.jpg",
    body: [
      {
        paragraphs: [
          "An outboard engine fails for one of three reasons: fuel, cooling or corrosion. All three are manageable with a servicing calendar, and almost none of them announce themselves before they become expensive.",
          "This is the schedule we use for private boats and small fleets on Lagos waters. It assumes a four-stroke engine used at least twice a month in brackish or salt water.",
        ],
      },
      {
        heading: "Every trip",
        paragraphs: [
          "Before you leave the jetty, check the tell-tale water stream, inspect the fuel line for cracks, and confirm the engine starts cleanly from cold. After you return, flush the engine with fresh water. Flushing takes four minutes and is the single most effective corrosion control available to you.",
        ],
      },
      {
        heading: "Every 50 hours or monthly",
        paragraphs: [
          "Change the engine oil and filter, inspect spark plugs, and check the anodes. In Lagos, anodes can be consumed noticeably faster than the manufacturer's schedule assumes, so physical inspection matters more than the calendar.",
        ],
        list: [
          "Engine oil and filter change",
          "Spark plug inspection and gap check",
          "Anode condition and replacement",
          "Fuel filter and water separator drain",
          "Propeller inspection for damage or fishing line",
        ],
      },
      {
        heading: "Every 100 hours or annually",
        paragraphs: [
          "This is the service that prevents the roadside-equivalent breakdown at sea. The impeller is the critical item: a degraded impeller starves the engine of cooling water, and overheating can warp a cylinder head in minutes.",
        ],
        list: [
          "Impeller and water pump housing replacement",
          "Gear oil change and lower unit inspection",
          "Fuel system cleaning",
          "Computer diagnostics scan and fault code review",
          "Thermostat and cooling passage check",
        ],
      },
      {
        heading: "Annual, regardless of hours",
        paragraphs: [
          "Engines that sit unused corrode faster than engines that run. Even a low-hours engine should be serviced annually, and should be stored with stabilised fuel and the engine trimmed down so water drains.",
          "If you keep a written log of hours, services and parts, resale value improves and diagnostics get faster. We provide a written service report after every visit for exactly this reason — ask for one from whoever services your engine.",
        ],
      },
    ],
  },
  {
    slug: "choosing-the-right-outboard-engine",
    title: "Choosing the right outboard engine: a practical sizing guide",
    excerpt:
      "Horsepower is only part of the decision. Weight, hull rating, fuel economy and service support decide whether an engine actually suits your boat.",
    division: "Marine",
    date: "2025-09-22",
    readTime: "7 min read",
    author: "Marine Services Team",
    image: "/images/boat-cruise.jpg",
    body: [
      {
        paragraphs: [
          "Buying an outboard is usually framed as a horsepower decision. In practice, the wrong engine is more often the wrong weight, the wrong shaft length or a model nobody locally stocks parts for.",
        ],
      },
      {
        heading: "Start with the hull plate, not the brochure",
        paragraphs: [
          "Every boat has a manufacturer's maximum horsepower rating. Never exceed it, and be careful about going far below it: an underpowered boat struggles to plane, burns more fuel at displacement speed and handles badly in a following sea.",
        ],
      },
      {
        heading: "Shaft length and transom height",
        paragraphs: [
          "A short-shaft engine on a tall transom will ventilate; a long-shaft engine on a low transom will drag. Measure the transom height rather than estimating it, and confirm the mounting bolt pattern before you commit.",
        ],
      },
      {
        heading: "Four-stroke versus two-stroke",
        paragraphs: [
          "For most leisure and charter use in Nigeria, a modern four-stroke is the better long-term proposition: quieter, more economical and easier to live with at the jetty. Two-strokes remain relevant where weight is critical.",
        ],
        list: [
          "Four-stroke: better fuel economy, quieter, no oil mixing",
          "Two-stroke: lighter, simpler, cheaper to rebuild",
          "Consider service support before brand loyalty",
          "Check parts availability for your specific model",
        ],
      },
      {
        heading: "The part nobody quotes for",
        paragraphs: [
          "Budget for rigging, controls, gauges, a propeller matched to your load, and the first service. A quote that covers only the engine head is not the price of getting on the water.",
          "If you send us your boat model, transom height and typical load, we will recommend two or three suitable engines and explain the trade-offs in writing.",
        ],
      },
    ],
  },
  {
    slug: "buying-property-in-nigeria-checklist",
    title: "Buying property in Nigeria: the documentation checklist to insist on",
    excerpt:
      "Before any payment, these are the documents and checks that separate a straightforward purchase from a decade of litigation.",
    division: "Real Estate",
    date: "2025-10-02",
    readTime: "8 min read",
    author: "Real Estate Team",
    image: "/images/property-1.jpg",
    body: [
      {
        paragraphs: [
          "In Nigerian real estate, documentation is the product. The building is secondary — if the title is defective, the most beautiful duplex in Lekki is a liability.",
          "This is the checklist we work through with buyers, and the same order we recommend they follow independently with their own lawyer.",
        ],
      },
      {
        heading: "1. Confirm who actually owns it",
        paragraphs: [
          "Ask for the root of title and confirm the seller's identity matches the documents. Where the seller is a company, confirm the signatory is authorised to sell. Where the property is family land, confirm all necessary family consent.",
        ],
      },
      {
        heading: "2. Search the title",
        paragraphs: [
          "Conduct a search at the relevant land registry. A search will reveal encumbrances, prior assignments and whether the title is genuinely registered in the seller's name.",
        ],
        list: [
          "Certificate of Occupancy or registered deed of assignment",
          "Registered survey plan",
          "Land registry search result",
          "Building approval, where the property is developed",
          "Evidence of tax and development levies paid",
        ],
      },
      {
        heading: "3. Physically inspect, twice",
        paragraphs: [
          "Inspect once with the agent and once unannounced, ideally on a weekday. Check for occupants, boundary disputes with neighbours, drainage and access roads. For land, confirm the beacons against the survey plan.",
        ],
      },
      {
        heading: "4. Get the agreement reviewed before you pay",
        paragraphs: [
          "Never pay on the basis of a receipt alone. A deed of assignment prepared or reviewed by your own lawyer should set out the parties, the consideration, the property description and the warranties.",
          "We disclose agency fees before inspection, provide the documentation the vendor supplies, and recommend independent legal review on every transaction. We do not describe a listing as verified unless that review has actually been carried out.",
        ],
      },
    ],
  },
  {
    slug: "ai-video-advertising-small-business",
    title: "How AI video is changing advertising for small Nigerian businesses",
    excerpt:
      "A full production crew used to be the barrier to a premium commercial. That barrier has largely gone — here is what changed and what it means for your budget.",
    division: "AI Video",
    date: "2025-09-08",
    readTime: "5 min read",
    author: "Creative Team",
    image: "/images/division-ai.jpg",
    body: [
      {
        paragraphs: [
          "Two years ago, a 30-second product commercial meant a crew, a studio, a lighting package, a voice artist and a week of post-production. For a small Nigerian business, the budget rarely justified it.",
          "AI-assisted production has changed the economics without changing the standard. The difference between a good AI commercial and a bad one is not the tool — it is the direction, the script and the edit.",
        ],
      },
      {
        heading: "What AI genuinely does well",
        paragraphs: [
          "Product beauty shots, clean studio lighting, brand-consistent environments, multilingual voice-over, and rapid versioning for multiple platforms. Where a shoot would take a day per setup, generated scenes take minutes.",
        ],
        list: [
          "Multiple platform formats from one master edit",
          "Voice-over in English, Yoruba, Igbo, Hausa and French",
          "Concept testing before committing to a full shoot",
          "Consistent brand environments across a campaign",
        ],
      },
      {
        heading: "Where a real camera still wins",
        paragraphs: [
          "Human faces delivering specific emotional performances, real premises that must be shown accurately, and anything where a customer needs to see the actual product in real hands. For property and fashion, we usually combine real footage with generated elements.",
        ],
      },
      {
        heading: "What to ask for in a quote",
        paragraphs: [
          "Ask for the concept in writing before production starts, the number of revisions, the exact export formats and durations, and who owns the finished files and the voice-over licence. A professional quote will specify all four.",
        ],
      },
    ],
  },
  {
    slug: "building-a-wardrobe-that-works",
    title: "Building a wardrobe that actually works in Lagos",
    excerpt:
      "Heat, humidity and a calendar that moves between boardroom and owambe. A practical approach to dressing well without overbuying.",
    division: "Fashion",
    date: "2025-08-19",
    readTime: "5 min read",
    author: "Fashion Team",
    image: "/images/division-fashion.jpg",
    body: [
      {
        paragraphs: [
          "Most wardrobes fail for the same reason: they were bought for an imagined life rather than the actual one. In Lagos, the actual life involves 32°C, humidity that ruins poor fabric, and a week that can include a board meeting, a wedding and a Saturday beach.",
        ],
      },
      {
        heading: "Start with fabric, not colour",
        paragraphs: [
          "Cotton, linen, silk and lightweight wool move heat and hold their shape. Polyester blends photograph well and wear badly in humidity. This single decision affects comfort more than any other.",
        ],
        list: [
          "Linen and cotton for daytime",
          "Silk and fine wool for evening",
          "Avoid heavy synthetic blends in the heat",
          "Give anything structured a proper hanger",
        ],
      },
      {
        heading: "Build in three layers",
        paragraphs: [
          "A base of well-fitting everyday pieces, a middle layer of things that make an outfit (a blazer, a good shirt), and a small set of occasion pieces. Most people over-invest in the occasion layer and under-invest in the base.",
        ],
      },
      {
        heading: "Buy fewer, tailor more",
        paragraphs: [
          "A ₦50,000 shirt tailored to your measurements will look better than a ₦200,000 shirt that does not fit. We take measurements in person or from a video call, and keep them on file for future orders.",
        ],
      },
    ],
  },
  {
    slug: "property-investment-guide-lagos",
    title: "A first-timer's guide to property investment in Lagos",
    excerpt:
      "Rental yield, capital appreciation, service charges and the exit. The questions to answer before committing capital to a Lagos property.",
    division: "Real Estate",
    date: "2025-07-30",
    readTime: "9 min read",
    author: "Real Estate Team",
    image: "/images/property-4.jpg",
    body: [
      {
        paragraphs: [
          "Lagos property can be an excellent store of value, but the market rewards specificity. 'Buy land' is not an investment strategy; a serviced plot with a road, drainage and a documented title in a growing corridor is.",
        ],
      },
      {
        heading: "Yield versus appreciation",
        paragraphs: [
          "Rental yield in prime Lagos areas is often lower than investors expect relative to purchase price, while appreciation in developing corridors can be higher but slower to realise. Be clear which one you are buying.",
        ],
        list: [
          "Gross yield = annual rent ÷ purchase price",
          "Deduct service charge, agent fees and void periods",
          "Assess realistic exit routes before buying",
          "Consider who your future buyer or tenant is",
        ],
      },
      {
        heading: "The cost lines people forget",
        paragraphs: [
          "Agency and legal fees, consent and registration costs, service charges, and the cost of finishing an uncompleted unit. These routinely add 10–20% to the headline price and should be in your budget from day one.",
        ],
      },
      {
        heading: "Land is a different asset",
        paragraphs: [
          "Land has no rental income and no maintenance, but it also has no income protection if the title is bad. For land, the search and the survey are the investment. Everything else is timing.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
