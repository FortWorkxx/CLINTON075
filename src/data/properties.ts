export type Property = {
  id: string;
  slug: string;
  title: string;
  type: "Duplex" | "Apartment" | "Land" | "Commercial" | "Bungalow";
  purpose: "Sale" | "Rent" | "Short stay";
  price: number;
  priceUnit?: "year" | "month";
  city: string;
  neighbourhood: string;
  state: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  buildingSize: string;
  landSize: string;
  furnished: boolean;
  status: "Available" | "Under offer" | "Sold";
  image: string;
  gallery: string[];
  featured?: boolean;
  description: string;
  features: string[];
  listingId: string;
  documentation: string;
};

const imgs = {
  p1: "/images/property-1.jpg",
  p2: "/images/property-2.jpg",
  p3: "/images/property-3.jpg",
  p4: "/images/property-4.jpg",
  re: "/images/division-realestate.jpg",
  cruise: "/images/boat-cruise.jpg",
};

export const properties: Property[] = [
  {
    id: "re1",
    slug: "4-bedroom-terrace-duplex-chevron",
    title: "4-Bedroom Terrace Duplex with BQ",
    type: "Duplex",
    purpose: "Sale",
    price: 185_000_000,
    city: "Lekki",
    neighbourhood: "Chevron Drive",
    state: "Lagos",
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    buildingSize: "320 sqm",
    landSize: "410 sqm",
    furnished: false,
    status: "Available",
    image: imgs.p1,
    gallery: [imgs.p1, imgs.p2, imgs.re],
    featured: true,
    description:
      "A newly completed terrace duplex in a serviced gated estate off Chevron Drive. The house is finished to a high specification with a fitted kitchen, en-suite bedrooms and a detached boys' quarters.",
    features: [
      "Fitted kitchen with appliances",
      "All rooms en-suite",
      "Detached BQ",
      "24-hour estate power",
      "Gated security",
      "Private parking for 3 cars",
    ],
    listingId: "CGI-RE-1001",
    documentation: "Governor's consent available on the parent title. Survey plan provided for review.",
  },
  {
    id: "re2",
    slug: "3-bedroom-penthouse-victoria-island",
    title: "3-Bedroom Penthouse with Ocean View",
    type: "Apartment",
    purpose: "Sale",
    price: 640_000_000,
    city: "Victoria Island",
    neighbourhood: "Oniru",
    state: "Lagos",
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    buildingSize: "285 sqm",
    landSize: "—",
    furnished: true,
    status: "Available",
    image: imgs.p2,
    gallery: [imgs.p2, imgs.re, imgs.p1],
    featured: true,
    description:
      "A fully furnished penthouse on the ninth floor with an uninterrupted Atlantic view. The building offers concierge service, a pool deck and full backup power.",
    features: [
      "Fully furnished",
      "Ocean-facing terrace",
      "Concierge service",
      "Pool and gym",
      "Full backup power",
      "Two dedicated parking spaces",
    ],
    listingId: "CGI-RE-1002",
    documentation: "Deed of assignment and building approval available. Service charge schedule on request.",
  },
  {
    id: "re3",
    slug: "serviced-land-ibeju-lekki",
    title: "600sqm Serviced Plot, Ibeju-Lekki",
    type: "Land",
    purpose: "Sale",
    price: 42_500_000,
    city: "Ibeju-Lekki",
    neighbourhood: "Awoyaya",
    state: "Lagos",
    landSize: "600 sqm",
    buildingSize: "—",
    furnished: false,
    status: "Available",
    image: imgs.p3,
    gallery: [imgs.p3, imgs.re],
    featured: true,
    description:
      "A dry, fenced plot in a fast-developing estate with paved internal roads, drainage and a gatehouse. Suitable for immediate residential construction.",
    features: [
      "Fenced and gated estate",
      "Paved internal roads",
      "Drainage in place",
      "Dry land, no sand filling required",
      "Flexible payment plan over 6 months",
    ],
    listingId: "CGI-RE-1003",
    documentation:
      "Registered survey and deed of assignment available. Family receipt and layout plan provided for legal review.",
  },
  {
    id: "re4",
    slug: "commercial-office-ikoyi",
    title: "Grade-A Office Floor, Ikoyi",
    type: "Commercial",
    purpose: "Rent",
    price: 28_000_000,
    priceUnit: "year",
    city: "Ikoyi",
    neighbourhood: "Awolowo Road",
    state: "Lagos",
    buildingSize: "420 sqm",
    landSize: "—",
    furnished: false,
    status: "Available",
    image: imgs.p4,
    gallery: [imgs.p4, imgs.re],
    featured: true,
    description:
      "An open-plan office floor in a professionally managed building, suitable for a corporate HQ or a financial services tenant. Includes lift access, parking and standby generator.",
    features: [
      "Open-plan, column-free floor",
      "Two lifts and a service lift",
      "Standby generator",
      "Twelve parking bays",
      "24-hour security",
      "Fibre-ready",
    ],
    listingId: "CGI-RE-1004",
    documentation: "Building approval and tenancy agreement template available on request.",
  },
  {
    id: "re5",
    slug: "2-bedroom-apartment-yaba",
    title: "2-Bedroom Apartment, Yaba",
    type: "Apartment",
    purpose: "Rent",
    price: 3_600_000,
    priceUnit: "year",
    city: "Yaba",
    neighbourhood: "Sabo",
    state: "Lagos",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    buildingSize: "94 sqm",
    landSize: "—",
    furnished: false,
    status: "Available",
    image: imgs.p1,
    gallery: [imgs.p1, imgs.p2],
    description:
      "A bright newly refurbished two-bedroom flat close to the tech cluster in Yaba. Tiled throughout, with a fitted kitchen and a small balcony.",
    features: ["Newly refurbished", "Fitted kitchen", "Prepaid meter", "Secure compound", "Balcony"],
    listingId: "CGI-RE-1005",
    documentation: "Landlord title and tenancy agreement reviewed. Agency fee disclosed before inspection.",
  },
  {
    id: "re6",
    slug: "5-bedroom-detached-duplex-ajah",
    title: "5-Bedroom Detached Duplex, Ajah",
    type: "Duplex",
    purpose: "Sale",
    price: 265_000_000,
    city: "Ajah",
    neighbourhood: "Badore",
    state: "Lagos",
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    buildingSize: "410 sqm",
    landSize: "600 sqm",
    furnished: false,
    status: "Under offer",
    image: imgs.re,
    gallery: [imgs.re, imgs.p1, imgs.p4],
    description:
      "A detached family home on a quiet close in Badore, with a large living room, a fitted kitchen, a private garden and a two-bedroom BQ.",
    features: [
      "Five bedrooms, all en-suite",
      "Two-bedroom BQ",
      "Private garden",
      "Fitted kitchen",
      "Borehole and treatment plant",
      "Gated street",
    ],
    listingId: "CGI-RE-1006",
    documentation: "Certificate of occupancy on the parent title. Survey plan available for inspection.",
  },
  {
    id: "re7",
    slug: "furnished-short-stay-ikate",
    title: "Furnished 1-Bedroom Short Stay, Ikate",
    type: "Apartment",
    purpose: "Short stay",
    price: 145_000,
    priceUnit: "month",
    city: "Lekki",
    neighbourhood: "Ikate Elegushi",
    state: "Lagos",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    buildingSize: "58 sqm",
    landSize: "—",
    furnished: true,
    status: "Available",
    image: imgs.p2,
    gallery: [imgs.p2, imgs.p1],
    description:
      "A serviced one-bedroom apartment available for short stays. Fully furnished, with daily housekeeping, unlimited Wi-Fi and 24-hour power.",
    features: ["Fully furnished", "Daily housekeeping", "Unlimited Wi-Fi", "24-hour power", "Netflix included"],
    listingId: "CGI-RE-1007",
    documentation: "Short-let terms and house rules provided before booking. Identity verification required.",
  },
  {
    id: "re8",
    slug: "bungalow-magodo",
    title: "3-Bedroom Bungalow, Magodo",
    type: "Bungalow",
    purpose: "Sale",
    price: 96_000_000,
    city: "Magodo",
    neighbourhood: "Phase 2",
    state: "Lagos",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    buildingSize: "180 sqm",
    landSize: "450 sqm",
    furnished: false,
    status: "Sold",
    image: imgs.p1,
    gallery: [imgs.p1, imgs.re],
    description:
      "A well-maintained bungalow in Magodo Phase 2, suitable for a first family home or a rental investment. Recently repainted with a new roof.",
    features: ["Recently repainted", "New roof", "Borehole", "Fenced compound", "Space for extension"],
    listingId: "CGI-RE-1008",
    documentation: "Sold. Retained on the site as a reference listing.",
  },
];

export const propertyTypes = ["Duplex", "Apartment", "Bungalow", "Land", "Commercial"] as const;
export const purposes = ["Sale", "Rent", "Short stay"] as const;
export const states = ["Lagos", "Abuja (FCT)", "Rivers", "Ogun"] as const;

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
