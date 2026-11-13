import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatsRow from "@/components/StatsRow";
import EnquiryForm from "@/components/EnquiryForm";
import { divisions, site, testimonials, trustPoints } from "@/data/site";
import { products, formatNaira } from "@/data/products";
import { properties } from "@/data/properties";
import { projects } from "@/data/projects";
import { posts } from "@/data/blog";

const featuredProducts = products.slice(0, 4);
const featuredProperties = properties.filter((p) => p.featured).slice(0, 3);
const featuredProjects = projects.slice(0, 3);
const latestPosts = posts.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate flex min-h-[calc(100svh-7rem)] items-center overflow-hidden bg-midnight text-ivory">
        <Image
          src="/images/hero-marina.jpg"
          alt="Luxury yacht marina at dusk"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight via-midnight/80 to-midnight/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-transparent to-midnight/60" />
        <div className="pointer-events-none absolute inset-0 -z-10 grain opacity-40" />

        <div className="shell relative grid w-full gap-14 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-28">
          <div className="animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <p className="eyebrow">Marine · Fashion · Real Estate · AI Video</p>
            </div>
            <h1 className="display-xl mt-6 max-w-3xl text-ivory">
              Your trusted partner<br />
              across <span className="italic text-gold">multiple industries.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/65 sm:text-lg">
              From marine engineering and contemporary fashion to real estate and AI-powered video
              advertising — four specialist divisions, one professional Nigerian brand.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/services" className="btn-gold">
                Explore Our Services
              </Link>
              <Link href="/quote" className="btn-light">
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-ivory/70 transition hover:text-gold"
              >
                Contact our team
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
              {[
                { k: "4", v: "Business divisions" },
                { k: "12+", v: "Years combined experience" },
                { k: "640+", v: "Jobs delivered" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl text-gold">{s.k}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ivory/40">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Division quick switcher */}
          <div className="animate-fade-up lg:justify-self-end" style={{ animationDelay: "160ms" }}>
            <div className="w-full rounded-2xl border border-white/15 bg-midnight/40 p-2 backdrop-blur-md lg:w-[22rem]">
              <p className="px-4 pb-3 pt-3 text-[10px] uppercase tracking-[0.22em] text-ivory/40">
                Choose your division
              </p>
              {divisions.map((d) => (
                <Link
                  key={d.slug}
                  href={d.href}
                  className="group flex items-center gap-4 rounded-xl px-4 py-3.5 transition hover:bg-white/[0.06]"
                >
                  <span className="font-display text-xs text-gold/60">{d.number}</span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium text-ivory group-hover:text-gold">
                      {d.name}
                    </span>
                    <span className="block text-[11px] text-ivory/40">{d.tagline}</span>
                  </span>
                  <span className="text-ivory/25 transition-transform group-hover:translate-x-1 group-hover:text-gold">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <div className="overflow-hidden border-y border-midnight/10 bg-ivory py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-10" aria-hidden={dup === 1}>
              {[
                "Outboard engine specialists",
                "Made-to-measure tailoring",
                "Documented property listings",
                "AI-assisted commercial production",
                "Nationwide delivery",
                "Written quotations",
                "Port Harcourt · Nigeria",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-10 text-[11px] font-medium uppercase tracking-[0.22em] text-midnight/40"
                >
                  {t}
                  <span className="h-1 w-1 rounded-full bg-gold" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- ABOUT ---------------- */}
      <section className="relative py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/division-realestate.jpg"
                  alt="Modern duplex at dusk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-midnight p-6 text-ivory shadow-card sm:block lg:-right-8">
                <p className="font-display text-4xl text-gold">01</p>
                <p className="mt-2 max-w-[9rem] text-[11px] uppercase leading-relaxed tracking-[0.14em] text-ivory/50">
                  One corporate identity
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Who we are"
              title={
                <>
                  A group built for clients who need more than{" "}
                  <span className="italic text-gold-dark">one thing done well.</span>
                </>
              }
              description="Clinton Global Investment was established to bring diverse services under one accountable brand. Rather than sending clients between unrelated vendors, each division operates with its own specialists while sharing the same standards, accounts and support function."
            />

            <div className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {[
                {
                  t: "Our mission",
                  d: "To deliver specialist services across four industries with the professionalism, documentation and accountability of a single corporate brand.",
                },
                {
                  t: "Our vision",
                  d: "To become one of Nigeria's most trusted multi-industry companies — known for doing the ordinary things properly.",
                },
                {
                  t: "Our values",
                  d: "Accuracy over speed. Written terms over verbal promises. Clients who return over transactions that close.",
                },
                {
                  t: "Who we serve",
                  d: "Individuals, entrepreneurs and corporate organisations across Port Harcourt, Nigeria and international markets.",
                },
              ].map((b) => (
                <div key={b.t} className="border-t border-midnight/10 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
                    {b.t}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-midnight/60">{b.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/about" className="btn-dark">
                More about us
              </Link>
              <Link href="/contact" className="btn-outline !text-midnight">
                Visit our office
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- DIVISIONS ---------------- */}
      <section className="relative overflow-hidden bg-midnight py-20 text-ivory lg:py-28">
        <div className="pointer-events-none absolute inset-0 grain opacity-40" />
        <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
        <div className="shell relative">
          <SectionHeading
            align="between"
            tone="light"
            eyebrow="Our four divisions"
            title={
              <>
                Four businesses.<br />
                <span className="italic text-gold">One standard of delivery.</span>
              </>
            }
            description="Each division runs its own team, catalogue and booking process — so you get specialist attention without losing the accountability of a single company."
            link={{ label: "Compare divisions", href: "/services" }}
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {divisions.map((d, i) => (
              <Reveal key={d.slug} delay={i * 90}>
                <Link
                  href={d.href}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-white/10"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/55 to-midnight/10" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-xs text-gold">{d.number}</span>
                        <span className="h-px w-6 bg-gold/40" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/45">
                          {d.tagline}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl text-ivory sm:text-3xl">{d.name}</h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory/60">{d.blurb}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {d.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-ivory/55"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                        {d.cta}
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            align="between"
            eyebrow="Why clients stay"
            title={
              <>
                The difference is in<br />
                <span className="italic text-gold-dark">how the work is handled.</span>
              </>
            }
            link={{ label: "Read our approach", href: "/about" }}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-midnight/10 bg-midnight/10 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="bg-ivory">
                <div className="flex h-full flex-col bg-white p-7 transition-colors duration-300 hover:bg-ivory/60">
                  <span className="font-display text-sm text-gold-dark">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl text-midnight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-midnight/55">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED PRODUCTS ---------------- */}
      <section className="border-y border-midnight/10 bg-white py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            align="between"
            eyebrow="From the store"
            title="Featured fashion pieces"
            description="A considered collection of ready-to-wear, traditional tailoring and accessories — delivered nationwide."
            link={{ label: "Shop all pieces", href: "/fashion" }}
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <Link href={`/fashion/product/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ivory">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {p.badge && (
                      <span className="absolute left-3 top-3 rounded-full bg-midnight/85 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-3.5">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">
                      {p.fabric}
                    </p>
                    <h3 className="mt-1 text-sm font-medium text-midnight group-hover:text-gold-dark">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 flex items-baseline gap-2 text-sm">
                      <span className="font-medium text-midnight">{formatNaira(p.price)}</span>
                      {p.compareAt && (
                        <span className="text-xs text-midnight/35 line-through">
                          {formatNaira(p.compareAt)}
                        </span>
                      )}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED PROPERTIES ---------------- */}
      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            align="between"
            eyebrow="Property listings"
            title="Currently on the market"
            description="Documented listings in Port Harcourt and Lagos, with inspections coordinated by our team and fees disclosed up front."
            link={{ label: "Search all properties", href: "/real-estate" }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredProperties.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <Link href={`/real-estate/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-midnight/85 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur">
                      For {p.purpose}
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">
                      {p.neighbourhood}, {p.city}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl leading-snug text-midnight group-hover:text-gold-dark">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-medium text-midnight">
                      {formatNaira(p.price)}
                      {p.priceUnit ? <span className="text-xs font-normal text-midnight/45">/{p.priceUnit}</span> : null}
                    </p>
                    <div className="mt-3 flex gap-4 text-[11px] uppercase tracking-[0.1em] text-midnight/45">
                      {p.bedrooms ? <span>{p.bedrooms} bed</span> : null}
                      {p.bathrooms ? <span>{p.bathrooms} bath</span> : null}
                      <span>{p.buildingSize !== "—" ? p.buildingSize : p.landSize}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="relative overflow-hidden bg-navy py-16 text-ivory lg:py-20">
        <div className="pointer-events-none absolute inset-0 grain opacity-40" />
        <div className="shell relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow">By the numbers</p>
            <h2 className="display-md mt-4 max-w-sm text-ivory">
              Track record across four industries.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/50">
              Figures reflect work completed across our divisions to date. We publish only numbers we can
              substantiate, and update them as the business grows.
            </p>
          </div>
          <StatsRow />
        </div>
      </section>

      {/* ---------------- PORTFOLIO ---------------- */}
      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            align="between"
            eyebrow="Selected work"
            title="Recent projects"
            description="A snapshot of completed work across marine, fashion, real estate and AI video production."
            link={{ label: "Full portfolio", href: "/portfolio" }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <article className="group h-full overflow-hidden rounded-xl border border-midnight/10 bg-white">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-ivory/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-midnight backdrop-blur">
                      {p.division}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">
                      {p.client} · {p.year}
                    </p>
                    <h3 className="mt-2 font-display text-xl leading-snug text-midnight">{p.title}</h3>
                    <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-midnight/55">
                      {p.summary}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="relative overflow-hidden bg-midnight py-20 text-ivory lg:py-28">
        <div className="pointer-events-none absolute inset-0 grain opacity-40" />
        <div className="shell relative">
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Client feedback"
            title={
              <>
                What clients say about<br />
                <span className="italic text-gold">working with us.</span>
              </>
            }
            description="Testimonials are published with client permission. Names are shortened where requested."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="flex gap-1 text-gold" aria-label="5 out of 5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <span key={k} aria-hidden="true">★</span>
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-ivory/85">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-sm font-medium text-ivory">{t.name}</p>
                    <p className="mt-0.5 text-[11px] text-ivory/40">
                      {t.role} · {t.division}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/testimonials" className="btn-light">
              Read all testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- INSIGHTS ---------------- */}
      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            align="between"
            eyebrow="Insights"
            title="Guides from our teams"
            description="Practical guidance on engines, property documentation, wardrobe building and AI production."
            link={{ label: "All articles", href: "/blog" }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-midnight/40">
                    {post.division}
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {post.readTime}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-snug text-midnight group-hover:text-gold-dark">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-midnight/55">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT / ENQUIRY ---------------- */}
      <section id="enquiry" className="relative overflow-hidden bg-midnight py-20 text-ivory lg:py-28">
        <Image
          src="/images/boat-cruise.jpg"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight via-midnight/95 to-midnight/70" />
        <div className="shell relative grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="display-lg mt-4 text-ivory">
              Tell us what you need<br />
              <span className="italic text-gold">and we will respond properly.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/55">
              One form for all four divisions. We acknowledge every enquiry within one business day and
              issue written quotations after a short scoping conversation.
            </p>

            <div className="mt-9 space-y-5">
              {[
                { label: "Office", value: site.address },
                { label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
                { label: "Email", value: site.email, href: `mailto:${site.email}` },
                { label: "Hours", value: site.hours },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 border-t border-white/10 pt-4">
                  <p className="w-16 shrink-0 text-[10px] uppercase tracking-[0.18em] text-ivory/35">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-ivory/75 transition hover:text-gold">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm text-ivory/75">{c.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Chat on WhatsApp
              </a>
              <Link href="/faqs" className="btn-light">
                Read FAQs
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-midnight/60 p-6 backdrop-blur-sm sm:p-8">
            <EnquiryForm
              tone="dark"
              enquiryType="General"
              referencePrefix="CGI"
              submitLabel="Send enquiry"
              fields={[
                { name: "name", label: "Full name", required: true, placeholder: "Your name" },
                { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true, placeholder: "0800 000 0000" },
                { name: "email", label: "Email address", type: "email", required: true, placeholder: "you@example.com" },
                {
                  name: "division",
                  label: "Division of interest",
                  type: "select",
                  required: true,
                  options: ["Marine Services", "Fashion", "Real Estate", "AI Video Advertising", "More than one"],
                },
                {
                  name: "subject",
                  label: "What do you need?",
                  type: "select",
                  required: true,
                  options: [
                    "Quotation request",
                    "Service booking",
                    "Product purchase",
                    "Property inspection",
                    "General enquiry",
                  ],
                },
                { name: "message", label: "Tell us more", type: "textarea", required: true, placeholder: "A few lines about what you need, timelines and any budget guidance." },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
