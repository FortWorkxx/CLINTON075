import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[] };

export default function LegalPage({
  title,
  intro,
  updated,
  sections,
  image = "/images/division-realestate.jpg",
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  image?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal & policies"
        title={title}
        description={intro}
        image={image}
        crumbs={[{ label: "Legal" }, { label: title }]}
      />

      <div className="shell py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_15rem] lg:gap-16">
          <article className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.14em] text-midnight/40">Last updated: {updated}</p>
            <div className="mt-8 space-y-8">
              {sections.map((s, i) => (
                <section key={s.heading} id={`s-${i}`}>
                  <h2 className="font-display text-2xl leading-snug">{s.heading}</h2>
                  {s.paragraphs && (
                    <div className="mt-3 space-y-3">
                      {s.paragraphs.map((p, k) => (
                        <p key={k} className="text-[15px] leading-[1.8] text-midnight/70">{p}</p>
                      ))}
                    </div>
                  )}
                  {s.list && (
                    <ul className="mt-3 space-y-2">
                      {s.list.map((l) => (
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

            <div className="mt-10 rounded-xl border border-gold/40 bg-gold/[0.07] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark">Important</p>
              <p className="mt-2 text-sm leading-relaxed text-midnight/70">
                This is draft template wording provided to structure the website. Have final legal documents reviewed
                by a qualified Nigerian legal professional before launch. Contact{" "}
                <a href={`mailto:${site.email}`} className="underline decoration-gold/50">{site.email}</a> with any
                questions.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-dark">Contact us</Link>
              <Link href="/faqs" className="btn-outline">Read FAQs</Link>
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-xl border border-midnight/10 bg-white p-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-midnight/40">On this page</p>
              <ul className="mt-3 space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a href={`#s-${i}`} className="text-midnight/60 transition hover:text-gold-dark">{s.heading}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
