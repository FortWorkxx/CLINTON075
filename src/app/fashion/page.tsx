import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ShopBrowser from "@/components/shop/ShopBrowser";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Fashion Store — Contemporary Nigerian Ready-to-Wear",
  description:
    "Shop ready-to-wear, traditional tailoring, shoes and accessories from Clinton Global Fashion. Made in Nigeria, delivered nationwide.",
  alternates: { canonical: "/fashion" },
};

const collections = [
  { title: "The Signature Collection", desc: "Tailoring built on a consistent house fit.", image: "/images/division-fashion.jpg", href: "/fashion?c=traditional" },
  { title: "Everyday Essentials", desc: "Linen, cotton and knitwear for Lagos heat.", image: "/images/property-2.jpg", href: "/fashion?c=women" },
  { title: "Accessories", desc: "Leather, silk and gold-plated finishing.", image: "/images/division-ai.jpg", href: "/fashion?c=accessories" },
];

export default function FashionPage() {
  const newArrivals = products.filter((p) => p.badge === "New").slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Division 02 · Fashion"
        title={
          <>
            Contemporary African style,<br />
            <span className="italic text-gold">made to last.</span>
          </>
        }
        description="Ready-to-wear, traditional tailoring, shoes and accessories — cut from quality fabric and finished by Nigerian hands. Delivered nationwide with a documented returns policy."
        image="/images/division-fashion.jpg"
        crumbs={[{ label: "Divisions", href: "/services" }, { label: "Fashion" }]}
        tall
      >
        <div className="flex flex-wrap gap-3">
          <Link href="#shop" className="btn-gold">Shop the collection</Link>
          <Link href="/fashion/lookbook" className="btn-light">View lookbook</Link>
        </div>
      </PageHero>

      <section className="border-b border-midnight/10 bg-white">
        <div className="shell grid divide-y divide-midnight/10 py-6 text-center text-[11px] uppercase tracking-[0.14em] text-midnight/50 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <p className="py-2">Free delivery over ₦150,000</p>
          <p className="py-2">Made in Nigeria</p>
          <p className="py-2">14-day returns</p>
          <p className="py-2">Bespoke fitting available</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Collections</p>
              <h2 className="display-md mt-3">Shop by edit</h2>
            </div>
            <Link href="/fashion/lookbook" className="btn-ghost">Open lookbook <span>→</span></Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {collections.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <Link href={c.href} className="group relative block overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3]">
                    <Image src={c.image} alt={c.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-[1000ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/25 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-xl text-ivory">{c.title}</h3>
                    <p className="mt-1 text-xs text-ivory/60">{c.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                      Shop edit <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-midnight/10 bg-white py-16 lg:py-20">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Just landed</p>
              <h2 className="display-md mt-3">New arrivals</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {newArrivals.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <Link href={`/fashion/product/${p.slug}`} className="group grid grid-cols-[7rem_1fr] items-center gap-4 rounded-xl border border-midnight/10 p-3 transition hover:border-gold/50 hover:bg-ivory/40">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-ivory">
                    <Image src={p.image} alt={p.name} fill sizes="120px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-gold-dark">{p.badge}</p>
                    <h3 className="mt-1 text-sm font-medium text-midnight">{p.name}</h3>
                    <p className="mt-1 text-xs text-midnight/50">{p.fabric}</p>
                    <p className="mt-2 text-sm font-medium text-midnight">₦{p.price.toLocaleString("en-NG")}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="scroll-mt-24 py-16 lg:py-20">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">The store</p>
              <h2 className="display-md mt-3">All pieces</h2>
            </div>
          </div>
          <div className="mt-10">
            <ShopBrowser />
          </div>
        </div>
      </section>
    </>
  );
}
