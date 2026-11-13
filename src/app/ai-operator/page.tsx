import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "AI Operator — Intelligent Digital Operations",
  description: "Explore the AI Operator division at Clinton Global Investment. Service scope is being confirmed; contact us to discuss your requirements.",
  alternates: { canonical: "/ai-operator" },
};

const possibilities = [
  ["AI assistants", "Customer-facing or internal assistants, if included in the confirmed service offering."],
  ["Workflow automation", "Business process and workflow support, subject to the final scope of services."],
  ["Digital solutions", "Technology enablement and integrations may be considered after a requirements discussion."],
];

export default function AiOperatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Division 04 · AI Operator"
        title={<>Intelligent operations.<br /><span className="italic text-gold">A clearer way forward.</span></>}
        description="AI Operator is the proposed name and direction for Clinton Global Investment's fourth division. Its exact services are being confirmed, so we do not present proposed capabilities as established services."
        image="/images/division-ai.jpg"
        crumbs={[{ label: "Divisions", href: "/services" }, { label: "AI Operator" }]}
        tall
      >
        <Link href="/contact" className="btn-gold">Discuss your requirements</Link>
      </PageHero>

      <section className="py-16 lg:py-24">
        <div className="shell">
          <SectionHeading eyebrow="A proposed direction" title="Built around the needs you bring." description="The blueprint describes AI assistants, automation, workflow management and digital solutions as possible areas. These examples are not a confirmed catalogue; the company should approve its actual offer before publication or sale." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {possibilities.map(([title, body], i) => (
              <article key={title} className="rounded-2xl border border-midnight/10 bg-white p-7">
                <span className="font-display text-sm text-gold-dark">0{i + 1}</span>
                <h2 className="mt-3 font-display text-xl">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-midnight/60">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/[0.08] p-6 text-sm leading-relaxed text-midnight/70">
            <strong className="text-midnight">Service details pending confirmation.</strong> Tell us what you are trying to achieve. Our team can record your interest, but this page does not represent a live AI service, integration or automated support system.
          </div>
        </div>
      </section>
    </>
  );
}
