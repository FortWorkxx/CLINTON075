import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Insights — Guides from Our Teams",
  description:
    "Practical guides on outboard engine maintenance, Nigerian property documentation, wardrobe building and AI video production.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Guides, written<br /><span className="italic text-gold">by the people doing the work.</span></>}
        description="No filler. Each article is written by the division that handles the work — engine servicing schedules, property documentation, fabric choices and video production economics."
        image="/images/division-ai.jpg"
        crumbs={[{ label: "Insights" }]}
      />

      <section className="py-14 lg:py-20">
        <div className="shell">
          <Link href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-2xl border border-midnight/10 bg-white lg:grid-cols-2">
            <div className="relative min-h-[16rem]">
              <Image src={featured.image} alt={featured.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-[1100ms] group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-7 lg:p-10">
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-gold-dark">
                Featured · {featured.division}
              </p>
              <h2 className="mt-3 font-display text-2xl leading-snug sm:text-3xl group-hover:text-gold-dark">{featured.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-midnight/60">{featured.excerpt}</p>
              <p className="mt-5 text-[11px] uppercase tracking-[0.12em] text-midnight/40">
                {featured.author} · {featured.readTime}
              </p>
            </div>
          </Link>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-xl border border-midnight/10 bg-white">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-midnight/40">
                    {post.division} <span className="h-1 w-1 rounded-full bg-gold" /> {post.readTime}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-snug group-hover:text-gold-dark">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-midnight/55">{post.excerpt}</p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-gold-dark">Read article →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
