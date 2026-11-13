import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { getPost, posts } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, images: [{ url: post.image }] },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug && p.division === post.division).slice(0, 2);
  const fallback = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow={`${post.division} · ${post.readTime}`}
        title={post.title}
        description={post.excerpt}
        image={post.image}
        crumbs={[{ label: "Insights", href: "/blog" }, { label: post.division }]}
        tall
      />

      <article className="shell py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_16rem] lg:gap-16">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 border-b border-midnight/10 pb-5 text-[11px] uppercase tracking-[0.12em] text-midnight/45">
              <span>{post.author}</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-NG", { day: "numeric", month: "long", year: "numeric" })}
              </time>
            </div>

            <div className="mt-8 space-y-7">
              {post.body.map((block, i) => (
                <section key={i}>
                  {block.heading && <h2 className="font-display text-2xl leading-snug">{block.heading}</h2>}
                  <div className={`${block.heading ? "mt-3" : ""} space-y-4`}>
                    {block.paragraphs.map((p, k) => (
                      <p key={k} className="text-[15px] leading-[1.8] text-midnight/70">{p}</p>
                    ))}
                  </div>
                  {block.list && (
                    <ul className="mt-4 space-y-2.5 rounded-xl bg-white p-5">
                      {block.list.map((l) => (
                        <li key={l} className="flex gap-3 text-sm text-midnight/65">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-midnight p-7 text-ivory">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-3 font-display text-2xl">
                Have a question this did not answer?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ivory/55">
                Our {post.division.toLowerCase()} team answers technical questions without obligation.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-gold">Contact the team</Link>
                <Link href="/quote" className="btn-light">Request a quote</Link>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl">Keep reading</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {(related.length ? related : fallback).map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-xl border border-midnight/10 bg-white p-4">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-gold-dark">{p.division}</p>
                    <h3 className="mt-1.5 font-display text-lg leading-snug group-hover:text-gold-dark">{p.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-midnight/55">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              <div className="rounded-xl border border-midnight/10 bg-white p-5">
                <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">In this guide</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {post.body.filter((b) => b.heading).map((b) => (
                    <li key={b.heading} className="text-midnight/60">{b.heading}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-midnight p-5 text-ivory">
                <p className="text-[10px] uppercase tracking-[0.16em] text-gold">Division</p>
                <p className="mt-2 text-sm text-ivory/70">{post.division}</p>
                <Link href={post.division === "Marine" ? "/marine" : post.division === "Fashion" ? "/fashion" : post.division === "Real Estate" ? "/real-estate" : "/ai-operator"} className="btn-gold mt-4 w-full !px-4 !py-2.5 !text-[10px]">
                  Explore division
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
