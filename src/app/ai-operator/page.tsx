import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { aiCapabilities, aiEngagements, aiFaqs } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Operator — Intelligent Digital Operations",
  description:
    "Clinton Global Investment's proposed AI Operator division: business assistants, process automation, content operations, integrations and practical training. Scope confirmed in writing before any work begins.",
  alternates: { canonical: "/ai-operator" },
};

const icons: Record<string, React.ReactNode> = {
  assistant: (
    <>
      <path d="M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.4l-1.9-5.6L4.5 10.9 10.1 9 12 3.5Z" />
      <path d="M18.5 16.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </>
  ),
  workflow: (
    <>
      <rect x="3.5" y="3.5" width="6" height="6" rx="1.4" />
      <rect x="14.5" y="14.5" width="6" height="6" rx="1.4" />
      <path d="M9.5 6.5h5a2 2 0 0 1 2 2v7M6.5 9.5v5a2 2 0 0 0 2 2h3" />
    </>
  ),
  content: (
    <>
      <path d="M6 3.5h8l4.5 4.5v12.5H6V3.5Z" />
      <path d="M14 3.5V8h4.5M9 12h6M9 15.5h6" />
    </>
  ),
  integration: (
    <>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 6.8 12.7 5a3.4 3.4 0 0 1 4.8 4.8l-1.8 1.8" />
      <path d="M13 17.2 11.3 19a3.4 3.4 0 0 1-4.8-4.8l1.8-1.8" />
    </>
  ),
  training: (
    <>
      <path d="M12 6.5C10 5 7.2 4.6 4 5v12c3.2-.4 6 0 8 1.5 2-1.5 4.8-1.9 8-1.5V5c-3.2-.4-6 0-8 1.5Z" />
      <path d="M12 6.5v12" />
    </>
  ),
};

const process = [
  {
    t: "Discover",
    d: "A working session on how enquiries, admin and follow-up happen today. We look for volume, repetition and delay — not for a place to fit AI.",
  },
  {
    t: "Scope",
    d: "We write down the workflow, the approved information, the escalation rules and what success looks like. Anything we cannot support is stated plainly.",
  },
  {
    t: "Pilot",
    d: "One workflow, live, with staff reviewing output and a defined review point. No organisation-wide rollout on an untested assumption.",
  },
  {
    t: "Operate",
    d: "Once the pilot holds, we document it, train the team and either hand it over or support it on a monthly basis.",
  },
];

const guardrails = [
  {
    t: "Approved information only",
    d: "Assistants answer from content the company has signed off — services, prices where published, locations and policies. They do not improvise commitments.",
  },
  {
    t: "A stated limit",
    d: "Every automated response identifies itself as automated and gives a direct route to a human being.",
  },
  {
    t: "Human escalation",
    d: "Complaints, pricing negotiations, legal questions and unusual requests are routed to staff, not improvised.",
  },
  {
    t: "Data minimisation",
    d: "Projects are scoped around the Nigeria Data Protection Act 2023: collect only what the workflow needs, keep it no longer than necessary and say where it is processed.",
  },
];

export default function AiOperatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Division 04 · AI Operator"
        title={
          <>
            Intelligent operations.<br />
            <span className="italic text-gold">Introduced carefully.</span>
          </>
        }
        description="The proposed fourth division: practical automation of enquiry handling, administration and content — built around existing business processes rather than replacing them."
        image="/images/division-ai.jpg"
        crumbs={[{ label: "Divisions", href: "/services" }, { label: "AI Operator" }]}
        tall
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/ai-operator/quote" className="btn-gold">
            Submit a requirements brief
          </Link>
          <Link href="#capabilities" className="btn-light">
            See the proposed scope
          </Link>
        </div>
      </PageHero>

      {/* Status notice — kept above the capability catalogue on purpose */}
      <section className="border-b border-midnight/10 bg-white">
        <div className="shell flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold/50 text-[11px] text-gold-dark">
              i
            </span>
            <p className="text-sm leading-relaxed text-midnight/65">
              <strong className="font-semibold text-midnight">Division status: proposed.</strong>{" "}
              The areas below are the blueprint&rsquo;s proposed scope. They are not a confirmed
              catalogue, a live platform or a claim of completed client work.
            </p>
          </div>
          <Link
            href="#talk-to-us"
            className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark hover:underline"
          >
            Discuss a requirement →
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-16 lg:py-24">
        <div className="shell">
          <SectionHeading
            align="between"
            eyebrow="Proposed capability areas"
            title={
              <>
                Five areas of work,
                <br />
                <span className="italic text-gold-dark">one principle: usefulness first.</span>
              </>
            }
            description="Automation only earns its place if it removes real administration or answers a real question. Each area below is offered as a starting point for a scoping conversation."
            link={{ label: "Request a quote", href: "/ai-operator/quote" }}
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <article className="group flex h-full flex-col rounded-2xl border border-midnight/10 bg-white p-7 transition duration-300 hover:border-gold/50 hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-gold/[0.10] text-gold-dark">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {icons[c.icon]}
                      </svg>
                    </span>
                    <span className="font-display text-sm text-midnight/25">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl text-midnight">{c.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-midnight/55">{c.summary}</p>
                  <ul className="mt-5 space-y-2 border-t border-midnight/10 pt-4">
                    {c.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-midnight/60">
                        <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}

            <Reveal delay={300}>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-midnight p-7 text-ivory">
                <Image
                  src="/images/division-ai.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 object-cover opacity-25"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-midnight/85 to-midnight/40" />
                <div className="relative">
                  <p className="eyebrow">Something else?</p>
                  <h3 className="mt-3 font-display text-2xl leading-snug text-ivory">
                    The most useful project usually is not on a list.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                    Tell us where the time goes — enquiries, quotes, follow-up, records. We will tell
                    you honestly whether automation helps or whether a process fix would serve you better.
                  </p>
                </div>
                <Link
                  href="/ai-operator/quote"
                  className="relative mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold"
                >
                  Start a conversation
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-navy py-16 text-ivory lg:py-24">
        <div className="pointer-events-none absolute inset-0 grain opacity-40" />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
        <div className="shell relative">
          <SectionHeading
            tone="light"
            eyebrow="How a project runs"
            title={
              <>
                Small, measured steps.
                <br />
                <span className="italic text-gold">No leap of faith.</span>
              </>
            }
            description="Automation work fails when it starts with a tool rather than a process. Our sequence is deliberately conservative."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.t} className="bg-midnight/60 p-7 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm text-gold">0{i + 1}</span>
                  <span className="h-px w-8 bg-gold/40" />
                </div>
                <h3 className="mt-4 font-display text-xl text-ivory">{p.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ivory/55">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-16 lg:py-24">
        <div className="shell">
          <SectionHeading
            align="between"
            eyebrow="Engagement models"
            title="Scoped, then quoted."
            description="We publish the shape of each engagement, not a price list. Rates depend on the workflow, the systems involved and the volume of enquiries."
            link={{ label: "Ask for a scoping call", href: "/contact" }}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {aiEngagements.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-7 ${
                    p.highlight
                      ? "border-gold bg-white shadow-gold"
                      : "border-midnight/10 bg-white"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl text-midnight">{p.name}</h3>
                    {p.highlight && (
                      <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                        Typical start
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-midnight/40">
                    {p.note}
                  </p>
                  <p className="mt-4 font-display text-lg text-gold-dark">{p.price}</p>
                  <ul className="mt-5 flex-1 space-y-3 border-t border-midnight/10 pt-5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-midnight/60">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/ai-operator/quote"
                    className={`mt-6 ${p.highlight ? "btn-gold w-full" : "btn-outline w-full"}`}
                  >
                    Request this
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-midnight/40">
            No figure on this page is a quotation. Fees, timelines and deliverables are confirmed in
            a written proposal after scoping.
          </p>
        </div>
      </section>

      {/* Guardrails + brief form */}
      <section id="talk-to-us" className="border-y border-midnight/10 bg-white py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="eyebrow">Responsible automation</p>
            <h2 className="display-lg mt-4">
              Four rules we build to.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-midnight/60">
              An automated assistant represents your business. These limits are not optional extras —
              they are the reason a project is worth doing at all.
            </p>
            <div className="mt-8 space-y-px overflow-hidden rounded-xl border border-midnight/10 bg-midnight/10">
              {guardrails.map((g, i) => (
                <div key={g.t} className="flex gap-4 bg-white p-5">
                  <span className="font-display text-sm text-gold-dark">0{i + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-midnight">{g.t}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-midnight/55">{g.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-gold/40 bg-gold/[0.08] p-5 text-sm leading-relaxed text-midnight/70">
              <strong className="text-midnight">About the assistant on this site.</strong> The Clinton
              AI Assistant is a guided navigation preview, not a live model. It demonstrates how an
              approved-information assistant would behave; it does not answer open questions.
            </div>
          </div>

          <div className="rounded-2xl border border-midnight/10 bg-ivory/60 p-6 sm:p-8">
            <h2 className="font-display text-2xl text-midnight">Tell us where the time goes</h2>
            <p className="mt-2 text-sm leading-relaxed text-midnight/55">
              A short brief is enough to start. We will reply with what is feasible, what it would
              cost and what we would need from you — or say clearly if the answer is no.
            </p>
            <div className="mt-7">
              <EnquiryForm
                tone="light"
                enquiryType="AI Operator"
                referencePrefix="CGI-AI"
                submitLabel="Submit requirements brief"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "company", label: "Company" },
                  { name: "email", label: "Email address", type: "email", required: true },
                  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                  {
                    name: "area",
                    label: "Area of interest",
                    type: "select",
                    required: true,
                    options: [
                      "AI business assistants",
                      "Business process automation",
                      "AI content operations",
                      "AI integration",
                      "Consulting and training",
                      "Not sure yet",
                    ],
                  },
                  {
                    name: "size",
                    label: "Business size",
                    type: "select",
                    options: ["Sole trader", "2–10 staff", "11–50 staff", "51–200 staff", "200+ staff"],
                  },
                  {
                    name: "message",
                    label: "What would you like to automate or improve?",
                    type: "textarea",
                    required: true,
                    placeholder:
                      "Describe the task, how often it happens, who does it now and what a good outcome would look like.",
                  },
                  { name: "file", label: "Attach a process document (optional)", type: "file" },
                ]}
              />
            </div>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hello Clinton Global, I would like to discuss an AI operations project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark hover:underline"
            >
              Or message the team on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">AI Operator FAQs</p>
            <h2 className="display-lg mt-4">
              The honest answers.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-midnight/60">
              If something is not covered here, ask. We would rather answer a difficult question now
              than correct an expectation later.
            </p>
            <Link href="/faqs" className="btn-outline mt-7">
              All company FAQs
            </Link>
          </div>
          <div className="divide-y divide-midnight/10 border-y border-midnight/10">
            {aiFaqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left">
                  <span className="font-display text-lg leading-snug text-midnight">{f.q}</span>
                  <span className="mt-1 shrink-0 text-gold-dark transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-sm leading-relaxed text-midnight/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-20">
        <div className="shell overflow-hidden rounded-2xl bg-midnight p-8 text-ivory sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Division 04</p>
              <h2 className="display-md mt-3">
                A conversation first.
                <br />
                <span className="italic text-gold">A proposal only if it makes sense.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ivory/55">
                Bring one repetitive process. We will show you what a controlled pilot would involve,
                what we would need to know and how it would be measured.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/ai-operator/quote" className="btn-gold w-full">
                Submit a project brief
              </Link>
              <Link href="/contact" className="btn-light w-full">
                Contact the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
