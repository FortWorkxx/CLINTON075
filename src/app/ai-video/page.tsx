import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { creativeServices, creativePackages } from "@/data/services";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "AI Video Advertising — Commercials & Social Campaigns",
  description:
    "AI-assisted video advertising for Nigerian and international brands: product commercials, social video ads, brand films, AI spokespeople and multilingual voice-over.",
  alternates: { canonical: "/ai-video" },
};

const creativeProjects = projects.filter((p) => p.division === "AI Video");

const process = [
  { t: "Brief", d: "We take your objective, audience, platform and deadline — and push back if the brief will not work." },
  { t: "Concept & script", d: "A written concept and shot list before any generation starts. You approve the direction first." },
  { t: "Production", d: "AI generation, real footage where needed, editing, sound design and voice-over." },
  { t: "Delivery", d: "Platform-specific exports with your revisions applied and files you own outright." },
];

export default function AiVideoPage() {
  return (
    <>
      <PageHero
        eyebrow="Division 04 · AI Video Advertising"
        title={
          <>
            Commercials at<br />
            <span className="italic text-gold">cinematic speed.</span>
          </>
        }
        description="AI-assisted video production for brands that need premium commercials without a full crew. Concept, script, generation, edit and voice-over — delivered in days, not months."
        image="/images/division-ai.jpg"
        crumbs={[{ label: "Divisions", href: "/services" }, { label: "AI Video Advertising" }]}
        tall
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/ai-video/quote" className="btn-gold">Request a quote</Link>
          <Link href="/ai-video/work" className="btn-light">See the work</Link>
        </div>
      </PageHero>

      <section className="border-b border-midnight/10 bg-white">
        <div className="shell grid divide-y divide-midnight/10 py-6 text-center text-[11px] uppercase tracking-[0.14em] text-midnight/50 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <p className="py-2">Concept-led, not tool-led</p>
          <p className="py-2">Multilingual voice-over</p>
          <p className="py-2">Platform-native exports</p>
          <p className="py-2">You own the files</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell">
          <SectionHeading
            align="between"
            eyebrow="What we produce"
            title="Six production services"
            description="AI does not replace direction. The difference between a good AI commercial and a bad one is the script, the lighting logic and the edit — that is the part we are paid for."
            link={{ label: "Request a quote", href: "/ai-video/quote" }}
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-midnight/10 bg-midnight/10 sm:grid-cols-2 lg:grid-cols-3">
            {creativeServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="h-full bg-white p-7">
                  <span className="font-display text-sm text-gold-dark">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-midnight/55">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-midnight py-16 text-ivory lg:py-24">
        <div className="pointer-events-none absolute inset-0 grain opacity-40" />
        <div className="shell relative">
          <SectionHeading tone="light" align="between" eyebrow="Selected campaigns" title="Recent work" description="Visual design references and campaign work. Performance figures are reported by the client where available." link={{ label: "Full portfolio", href: "/ai-video/work" }} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {creativeProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[1100ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-gold px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-midnight">
                      {p.year} · AI Video
                    </span>
                    <button className="absolute inset-0 grid place-items-center" aria-label={`Play ${p.title}`}>
                      <span className="grid h-14 w-14 place-items-center rounded-full border border-white/40 bg-midnight/40 text-ivory backdrop-blur transition group-hover:border-gold group-hover:text-gold">
                        ▶
                      </span>
                    </button>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-ivory/40">{p.client}</p>
                    <h3 className="mt-2 font-display text-xl text-ivory">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/55">{p.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-4 border-t border-white/10 pt-4">
                      {p.metrics?.slice(0, 3).map((m) => (
                        <div key={m.label}>
                          <p className="font-display text-lg text-gold">{m.value}</p>
                          <p className="text-[10px] uppercase tracking-[0.1em] text-ivory/35">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-[11px] text-ivory/30">
            Demo portfolio: video previews are placeholders pending final campaign files. Metrics shown are illustrative.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our process" title="Brief to delivery in four steps" />
            <ol className="mt-8 space-y-5">
              {process.map((p, i) => (
                <li key={p.t} className="flex gap-4 border-t border-midnight/10 pt-5">
                  <span className="font-display text-lg text-gold-dark">0{i + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-midnight">{p.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-midnight/55">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-xl border border-midnight/10 bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark">You own the output</p>
              <p className="mt-2 text-sm leading-relaxed text-midnight/60">
                On final payment you receive the finished files in every agreed format, plus the voice-over licence
                terms in writing. No renewal fees, no platform lock-in.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Packages" title="Indicative pricing" description="Quotation-based, because scope varies. These packages show what is typically included." />
            <div className="mt-8 space-y-4">
              {creativePackages.map((pkg) => (
                <div key={pkg.name} className={`rounded-2xl border p-6 ${pkg.highlight ? "border-gold bg-gold/[0.06]" : "border-midnight/10 bg-white"}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl">
                      {pkg.name}
                      {pkg.highlight && <span className="ml-2 rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-midnight">Popular</span>}
                    </h3>
                    <p className="font-display text-lg text-gold-dark">{pkg.price}</p>
                  </div>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-midnight/40">{pkg.note}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-2 text-xs text-midnight/60">
                        <span className="text-gold-dark">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link href="/ai-video/quote" className="btn-gold mt-6 w-full">Get a project quote</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-midnight/10 bg-white py-16 lg:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Where AI helps" title="Faster, not cheaper-looking" />
            <div className="mt-7 space-y-5">
              {[
                { t: "Versioning", d: "One master edit becomes six platform cuts without a second shoot day." },
                { t: "Languages", d: "English, Yoruba, Igbo, Hausa and French voice-over from the same script." },
                { t: "Concept testing", d: "Test three directions before committing budget to a full production." },
                { t: "Product beauty", d: "Clean studio-grade product shots that would otherwise need a full crew and studio." },
              ].map((b) => (
                <div key={b.t} className="border-l-2 border-gold/50 pl-4">
                  <p className="text-sm font-semibold text-midnight">{b.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-midnight/55">{b.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[11px] leading-relaxed text-midnight/45">
              We are transparent about the method: where a real camera, a real face or a real location serves the
              campaign better, we say so — and quote accordingly.
            </p>
          </div>
          <div className="rounded-2xl border border-midnight/10 bg-ivory/60 p-6 sm:p-8">
            <p className="eyebrow">Project brief</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl">Start with a short brief</h2>
            <p className="mt-2 text-sm leading-relaxed text-midnight/55">
              Five fields is enough to begin. We will ask the rest on a call and come back with a written concept
              and quotation.
            </p>
            <div className="mt-6">
              <EnquiryForm
                enquiryType="AI Video"
                referencePrefix="CGI-AV"
                submitLabel="Send brief"
                tone="light"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "brand", label: "Business / brand name", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "WhatsApp number", type: "tel", required: true },
                  { name: "type", label: "Type of advertisement", type: "select", required: true, options: ["Product commercial", "Social media video ads", "Corporate promotional video", "AI spokesperson video", "Real estate film", "Fashion film", "Explainer video", "Brand storytelling"] },
                  { name: "budget", label: "Budget range", type: "select", options: ["Under ₦300,000", "₦300,000 – ₦750,000", "₦750,000 – ₦1.5m", "₦1.5m – ₦3m", "Above ₦3m", "Advise me"] },
                  { name: "message", label: "What are we promoting?", type: "textarea", required: true, placeholder: "Product, audience, platform, deadline and any references." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
