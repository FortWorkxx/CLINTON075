import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Operator — Project Brief & Quotation",
  description:
    "Submit a requirements brief for the proposed AI Operator division: automation, assistants, integrations or training. Scope and pricing are confirmed in writing after review.",
  alternates: { canonical: "/ai-operator/quote" },
};

const steps = [
  { t: "Brief received", d: "You get a reference and an acknowledgement within one business day." },
  { t: "Scoping call", d: "A 30-minute conversation about the current process, volumes and constraints." },
  { t: "Written proposal", d: "Scope, approach, timeline, fees and what is explicitly out of scope." },
  { t: "Pilot, if it fits", d: "Work starts only when the proposal is accepted in writing." },
];

const notOffered = [
  "Claims of completed client campaigns — none are published until the division is operating",
  "Unlimited autonomous decision-making by an assistant",
  "Guaranteed revenue, lead volume or ranking outcomes",
  "Processing of customer data the client has not approved",
];

export default function AiQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="AI Operator · Requirements brief"
        title={
          <>
            Describe the process.
            <br />
            <span className="italic text-gold">We will scope it honestly.</span>
          </>
        }
        description="This form is the starting point for a scoping conversation. It is not an order, and no fee is committed until you accept a written proposal."
        image="/images/division-ai.jpg"
        crumbs={[
          { label: "Divisions", href: "/services" },
          { label: "AI Operator", href: "/ai-operator" },
          { label: "Project brief" },
        ]}
      />

      <div className="shell grid gap-10 py-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <div className="rounded-2xl border border-gold/40 bg-gold/[0.07] p-5 text-sm leading-relaxed text-midnight/70">
            <strong className="text-midnight">Proposed division.</strong> AI Operator&rsquo;s scope is
            still being confirmed. Submitting this brief records your requirements; it does not create
            a contract or reserve a service that is not yet approved.
          </div>

          <div className="mt-6 rounded-2xl border border-midnight/10 bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl text-midnight">Project brief</h2>
            <p className="mt-2 text-sm leading-relaxed text-midnight/55">
              The more concrete the description, the more useful our reply. Volumes and frequency
              matter more than job titles.
            </p>
            <div className="mt-7">
              <EnquiryForm
                tone="light"
                enquiryType="AI Operator"
                referencePrefix="CGI-AI"
                submitLabel="Submit project brief"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "role", label: "Your role" },
                  { name: "company", label: "Company / organisation" },
                  { name: "email", label: "Email address", type: "email", required: true },
                  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                  { name: "location", label: "Operating location", placeholder: "e.g. Port Harcourt, Rivers State" },
                  {
                    name: "area",
                    label: "Primary area",
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
                    name: "systems",
                    label: "Systems already in use",
                    type: "select",
                    options: [
                      "WhatsApp only",
                      "Email and spreadsheets",
                      "Website enquiry forms",
                      "A CRM or ERP",
                      "A mix of several",
                      "No system yet",
                    ],
                  },
                  {
                    name: "volume",
                    label: "Enquiries per week",
                    type: "select",
                    options: ["Under 20", "20–100", "100–500", "500+", "Not measured"],
                  },
                  {
                    name: "budget",
                    label: "Indicative budget",
                    type: "select",
                    options: [
                      "Under ₦250,000",
                      "₦250,000 – ₦1m",
                      "₦1m – ₦5m",
                      "Above ₦5m",
                      "Need guidance",
                    ],
                  },
                  {
                    name: "timeline",
                    label: "Preferred start",
                    type: "select",
                    options: ["Immediately", "Within 1 month", "1–3 months", "Exploring options"],
                  },
                  {
                    name: "message",
                    label: "Describe the workflow or problem",
                    type: "textarea",
                    required: true,
                    placeholder:
                      "What happens today, who does it, how long it takes, what goes wrong and what you would like to change.",
                  },
                  { name: "file", label: "Attach a process document or screenshots (optional)", type: "file" },
                ]}
              />
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-midnight/10 bg-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
              What happens next
            </p>
            <ol className="mt-4 space-y-4">
              {steps.map((s, i) => (
                <li key={s.t} className="flex gap-3">
                  <span className="font-display text-sm text-gold-dark">0{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-midnight">{s.t}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-midnight/55">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-midnight/10 bg-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
              What we will not promise
            </p>
            <ul className="mt-4 space-y-3">
              {notOffered.map((n) => (
                <li key={n} className="flex gap-2.5 text-sm leading-relaxed text-midnight/60">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-midnight/10 bg-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">
              Customer data
            </p>
            <p className="mt-2 text-sm leading-relaxed text-midnight/55">
              Anything you send here is used to respond to this enquiry. If your project involves
              customer personal data, processing is agreed in writing before any pilot begins, in line
              with the Nigeria Data Protection Act 2023.
            </p>
            <Link
              href="/legal/privacy"
              className="mt-3 inline-flex text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-dark hover:underline"
            >
              Privacy policy →
            </Link>
          </div>

          <div className="rounded-2xl bg-midnight p-6 text-ivory">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              Prefer to talk?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ivory/60">
              A five-minute conversation is usually faster than a long form for a complex process.
            </p>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hello Clinton Global, I would like to discuss an AI operations project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-4 w-full"
            >
              Message on WhatsApp
            </a>
            <a href={`tel:${site.phoneHref}`} className="btn-light mt-2 w-full">
              Call {site.phone}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
