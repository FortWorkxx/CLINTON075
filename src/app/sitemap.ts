import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { products } from "@/data/products";
import { properties } from "@/data/properties";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/fashion",
    "/real-estate",
    "/ai-operator",
    "/ai-operator/quote",
    "/marine",
    "/blog",
    "/contact",
    "/quote",
    "/testimonials",
    "/careers",
    "/faqs",
    "/account",
    "/track",
    "/cart",
    "/search",
    "/wishlist",
    "/marine/booking",
    "/marine/engines",
    "/marine/services",
    "/legal/privacy",
    "/legal/terms",
    "/legal/payments",
    "/legal/delivery",
    "/legal/cookies",
    "/legal/property-disclaimer",
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: r === "" ? 1 : 0.7,
    })),
    ...products.map((p) => ({
      url: `${base}/fashion/product/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...properties.map((p) => ({
      url: `${base}/real-estate/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
