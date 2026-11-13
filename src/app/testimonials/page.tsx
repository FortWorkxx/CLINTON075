import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonials — Client Feedback",
  description:
    "Feedback from clients across Clinton Global's marine, fashion, real estate and AI video divisions.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client feedback"
        title={<>What clients say.</>}
        description="Published with client permission. Names are shortened where requested, and no testimonial is edited to change its meaning."
        image="/images/property-2.jpg"
        crumbs={[{ label: "Testimonials" }]}
      />

      <section className="py-14 lg:py-20">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <figure className="flex h-full flex-col rounded-2xl border border-midnight/10 bg-white p-7">
                  <div className="flex gap-1 text-gold" aria-label="5 out of 5">
                    {Array.from({ length: 5 }).map((_, k) => <span key={k} aria-hidden="true">★</span>)}
                  </div>
                  <blockquote className="mt-5 flex-1 font-display text-xl leading-relaxed text-midnight/85">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-midnight/10 pt-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-midnight font-display text-sm text-gold">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-midnight">{t.name}</span>
                      <span className="block text-[11px] text-midnight/45">{t.role} · {t.division}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 rounded-xl border border-midnight/10 bg-white px-5 py-4 text-[11px] leading-relaxed text-midnight/45">
            Testimonials are illustrative in this demo build. Before launch, each quote should be confirmed in writing
            with the client, including permission to use their name, photograph or company logo.
          </p>

          <div className="mt-10 rounded-2xl bg-midnight p-8 text-ivory sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <p className="eyebrow">Start your own project</p>
                <h2 className="display-md mt-3">
                  We would rather earn<br />
                  <span className="italic text-gold">your review than ask for it.</span>
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link href="/quote" className="btn-gold">Request a quote</Link>
                <Link href="/portfolio" className="btn-light">See the work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
