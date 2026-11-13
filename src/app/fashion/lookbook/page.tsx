import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { products, formatNaira } from "@/data/products";

export const metadata: Metadata = {
  title: "Lookbook — Clinton 075 Fashion",
  description: "The Clinton 075 lookbook: contemporary African tailoring, ready-to-wear and accessories.",
  alternates: { canonical: "/fashion/lookbook" },
};

const looks = [
  { title: "Look 01 — Indigo tailoring", note: "Adire silk blouse with structured wool blazer and hand-finished loafers.", image: "/images/division-fashion.jpg", items: ["adire-silk-blouse", "structured-wool-blazer", "hand-finished-loafers"] },
  { title: "Look 02 — Evening navy", note: "Tailored agbada set with a gold cuff and silk head wrap.", image: "/images/property-2.jpg", items: ["lagos-tailored-agbada", "gold-cuff-bracelet", "silk-head-wrap"] },
  { title: "Look 03 — Off duty", note: "Linen shirt, knit polo and the leather weekender for a weekend out of town.", image: "/images/boat-cruise.jpg", items: ["ivory-linen-shirt", "weekend-polo", "leather-weekender-bag"] },
];

export default function LookbookPage() {
  return (
    <>
      <PageHero
        eyebrow="Fashion · Lookbook"
        title={<>The 2025 lookbook.</>}
        description="Three edits built around fabric, fit and the way Lagos actually works: heat, movement and a calendar that changes by the hour."
        image="/images/division-fashion.jpg"
        crumbs={[{ label: "Fashion", href: "/fashion" }, { label: "Lookbook" }]}
        tall
      />

      <div className="shell py-14 lg:py-20 space-y-16">
        {looks.map((look, i) => (
          <Reveal key={look.title}>
            <section className={`grid gap-8 lg:grid-cols-2 lg:gap-14 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image src={look.image} alt={look.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div>
                <p className="eyebrow">Look {String(i + 1).padStart(2, "0")}</p>
                <h2 className="display-md mt-3">{look.title.split("—")[1]}</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-midnight/60">{look.note}</p>
                <ul className="mt-7 divide-y divide-midnight/10 border-y border-midnight/10">
                  {look.items.map((slug) => {
                    const p = products.find((x) => x.slug === slug);
                    if (!p) return null;
                    return (
                      <li key={slug}>
                        <Link href={`/fashion/product/${p.slug}`} className="group flex items-center gap-4 py-3">
                          <div className="relative h-14 w-12 shrink-0 overflow-hidden rounded bg-ivory">
                            <Image src={p.image} alt={p.name} fill sizes="48px" className="object-cover" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-midnight group-hover:text-gold-dark">{p.name}</p>
                            <p className="text-[11px] text-midnight/45">{p.fabric}</p>
                          </div>
                          <p className="text-sm text-midnight/70">{formatNaira(p.price)}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link href="/fashion#shop" className="btn-dark mt-6">Shop this look</Link>
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </>
  );
}
