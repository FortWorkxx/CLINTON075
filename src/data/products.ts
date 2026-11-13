export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "men" | "women" | "unisex" | "traditional" | "accessories" | "shoes";
  price: number;
  compareAt?: number;
  image: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  stock: number;
  sku: string;
  badge?: "New" | "Best seller" | "Limited";
  description: string;
  details: string[];
  fabric: string;
};

export const categories: { id: Product["category"] | "all"; label: string }[] = [
  { id: "all", label: "All pieces" },
  { id: "women", label: "Women" },
  { id: "men", label: "Men" },
  { id: "traditional", label: "Traditional" },
  { id: "unisex", label: "Unisex" },
  { id: "accessories", label: "Accessories" },
  { id: "shoes", label: "Shoes" },
];

const img = {
  fashion: "/images/division-fashion.jpg",
  marine: "/images/division-marine.jpg",
  ai: "/images/division-ai.jpg",
  property1: "/images/property-1.jpg",
  property2: "/images/property-2.jpg",
  cruise: "/images/boat-cruise.jpg",
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "adire-silk-blouse",
    name: "Adire Silk Blouse",
    category: "women",
    price: 78000,
    compareAt: 95000,
    image: img.fashion,
    images: [img.fashion, img.property2],
    colors: [
      { name: "Indigo", hex: "#253746" },
      { name: "Ivory", hex: "#F4F2ED" },
      { name: "Ochre", hex: "#C08A3E" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 14,
    sku: "CF-W-1042",
    badge: "Best seller",
    description:
      "A sharply tailored blouse cut from hand-dyed adire silk, finished with a structured shoulder and a concealed placket. Designed to move between boardroom and dinner without a change of outfit.",
    details: [
      "Hand-dyed adire silk, 100% mulberry",
      "Structured shoulder with light padding",
      "Concealed button placket",
      "Dry clean only",
    ],
    fabric: "Adire silk",
  },
  {
    id: "p2",
    slug: "lagos-tailored-agbada",
    name: "Lagos Tailored Agbada Set",
    category: "traditional",
    price: 245000,
    image: img.fashion,
    images: [img.fashion, img.ai],
    colors: [
      { name: "Midnight navy", hex: "#101820" },
      { name: "Stone", hex: "#B9B2A5" },
    ],
    sizes: ["M", "L", "XL", "XXL"],
    stock: 8,
    sku: "CF-T-2210",
    badge: "Limited",
    description:
      "A modern agbada in deep navy with gold thread embroidery at the neckline and cuffs. Cut slim through the shoulder with a generous drape, and made to order from your measurements.",
    details: [
      "Navy cashmere-blend fabric",
      "Hand-finished gold embroidery",
      "Three-piece set: top, trouser, cap",
      "Made to order — 10 working days",
    ],
    fabric: "Cashmere blend",
  },
  {
    id: "p3",
    slug: "ivory-linen-shirt",
    name: "Ivory Linen Shirt",
    category: "men",
    price: 52000,
    image: img.property2,
    images: [img.property2, img.fashion],
    colors: [
      { name: "Ivory", hex: "#F4F2ED" },
      { name: "Sky", hex: "#9FB6C7" },
      { name: "Charcoal", hex: "#3B3F42" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 32,
    sku: "CF-M-3310",
    description:
      "A breathable Irish linen shirt with a soft camp collar, cut for Lagos heat. Wear it open over a tee or buttoned for a dinner reservation.",
    details: ["100% Irish linen", "Camp collar", "Mother-of-pearl buttons", "Machine wash cold"],
    fabric: "Irish linen",
  },
  {
    id: "p4",
    slug: "gold-cuff-bracelet",
    name: "Gold Cuff Bracelet",
    category: "accessories",
    price: 64500,
    image: img.ai,
    images: [img.ai, img.fashion],
    colors: [{ name: "Brushed gold", hex: "#D6B46A" }],
    sizes: ["One size"],
    stock: 21,
    sku: "CF-A-4402",
    badge: "New",
    description:
      "A substantial open cuff in brushed gold-plated brass. Weighted enough to read as fine jewellery, simple enough to wear every day.",
    details: ["18k gold-plated brass", "Open cuff, adjustable", "Gift box included"],
    fabric: "Gold-plated brass",
  },
  {
    id: "p5",
    slug: "leather-weekender-bag",
    name: "Leather Weekender Bag",
    category: "accessories",
    price: 168000,
    compareAt: 195000,
    image: img.cruise,
    images: [img.cruise, img.marine],
    colors: [
      { name: "Cognac", hex: "#8B5A2B" },
      { name: "Black", hex: "#0F0F10" },
    ],
    sizes: ["One size"],
    stock: 9,
    sku: "CF-A-4518",
    description:
      "Full-grain leather weekender with a canvas-lined interior, brass hardware and a detachable shoulder strap. Sized to the domestic cabin allowance.",
    details: ["Full-grain leather", "45 × 28 × 24 cm", "Detachable strap", "Lifetime repair service"],
    fabric: "Full-grain leather",
  },
  {
    id: "p6",
    slug: "structured-wool-blazer",
    name: "Structured Wool Blazer",
    category: "unisex",
    price: 132000,
    image: img.property1,
    images: [img.property1, img.fashion],
    colors: [
      { name: "Slate", hex: "#777F85" },
      { name: "Navy", hex: "#253746" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 12,
    sku: "CF-U-5120",
    description:
      "A single-breasted blazer in Italian wool with a clean shoulder line and a half-canvas front. The jacket that quietly fixes an outfit.",
    details: ["Italian wool, 98% / 2% elastane", "Half-canvas construction", "Full lining", "Dry clean only"],
    fabric: "Italian wool",
  },
  {
    id: "p7",
    slug: "hand-finished-loafers",
    name: "Hand-Finished Leather Loafers",
    category: "shoes",
    price: 112000,
    image: img.marine,
    images: [img.marine, img.cruise],
    colors: [
      { name: "Tan", hex: "#A9873F" },
      { name: "Black", hex: "#0F0F10" },
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    stock: 16,
    sku: "CF-S-6014",
    badge: "Best seller",
    description:
      "Penny loafers in hand-finished calf leather with a blake-stitched sole. Made in a small workshop run by two brothers in Aba.",
    details: ["Hand-finished calf leather", "Blake-stitched sole", "Leather insole", "Made in Aba, Nigeria"],
    fabric: "Calf leather",
  },
  {
    id: "p8",
    slug: "ankara-wrap-dress",
    name: "Ankara Wrap Dress",
    category: "women",
    price: 96000,
    image: img.fashion,
    images: [img.fashion, img.ai],
    colors: [
      { name: "Indigo print", hex: "#1E3A5F" },
      { name: "Clay print", hex: "#9B5B3F" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 18,
    sku: "CF-W-1077",
    badge: "New",
    description:
      "A true wrap dress in crisp ankara cotton, with a tied waist and a midi-length skirt. Printed in limited runs of forty metres per colourway.",
    details: ["Ankara cotton wax print", "True wrap closure", "Midi length", "Machine wash cold, inside out"],
    fabric: "Ankara cotton",
  },
  {
    id: "p9",
    slug: "cashmere-scarf",
    name: "Cashmere Travel Scarf",
    category: "accessories",
    price: 42000,
    image: img.property2,
    images: [img.property2, img.cruise],
    colors: [
      { name: "Camel", hex: "#C2A07A" },
      { name: "Ivory", hex: "#F4F2ED" },
      { name: "Charcoal", hex: "#3B3F42" },
    ],
    sizes: ["One size"],
    stock: 27,
    sku: "CF-A-4622",
    description:
      "A generously sized cashmere scarf that doubles as a wrap on night flights. Light enough for Lagos mornings, warm enough for London layovers.",
    details: ["100% two-ply cashmere", "180 × 70 cm", "Hand-finished edges", "Gift box included"],
    fabric: "Cashmere",
  },
  {
    id: "p10",
    slug: "corporate-shirt-dress",
    name: "Corporate Shirt Dress",
    category: "women",
    price: 88000,
    image: img.property1,
    images: [img.property1, img.fashion],
    colors: [
      { name: "Bone", hex: "#E8E2D6" },
      { name: "Navy", hex: "#253746" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 15,
    sku: "CF-W-1104",
    description:
      "A tailored shirt dress in stretch cotton poplin, with a belted waist and a deep side slit. Built for a full working day.",
    details: ["Stretch cotton poplin", "Removable belt", "Side pockets", "Machine wash cold"],
    fabric: "Cotton poplin",
  },
  {
    id: "p11",
    slug: "silk-head-wrap",
    name: "Printed Silk Head Wrap",
    category: "women",
    price: 28500,
    image: img.ai,
    images: [img.ai, img.fashion],
    colors: [
      { name: "Gold leaf", hex: "#D6B46A" },
      { name: "Deep teal", hex: "#1F4A4A" },
    ],
    sizes: ["One size"],
    stock: 40,
    sku: "CF-A-4701",
    description:
      "A long silk head wrap printed in our house gold-leaf motif. Long enough for a full turban, light enough for a simple headband.",
    details: ["100% silk twill", "200 × 50 cm", "Hand-rolled hem"],
    fabric: "Silk twill",
  },
  {
    id: "p12",
    slug: "weekend-polo",
    name: "Weekend Knit Polo",
    category: "men",
    price: 58000,
    image: img.cruise,
    images: [img.cruise, img.property2],
    colors: [
      { name: "Sand", hex: "#CFC3AE" },
      { name: "Olive", hex: "#5A6047" },
      { name: "Black", hex: "#0F0F10" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 24,
    sku: "CF-M-3388",
    description:
      "A fine-gauge knitted polo with a soft ribbed collar. Wears like a tee, photographs like a shirt.",
    details: ["Cotton-merino blend", "Fine 14-gauge knit", "Ribbed collar and cuffs", "Hand wash"],
    fabric: "Cotton-merino",
  },
];

export const formatNaira = (n: number) =>
  `₦${n.toLocaleString("en-NG", { maximumFractionDigits: 0 })}`;

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
