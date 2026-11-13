import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Careers — Join Clinton Global Investment",
  description:
    "Open roles and applications across Clinton Global's marine, fashion, real estate and AI Operator divisions in Port Harcourt.",
  alternates: { canonical: "/careers" },
};

const roles = [
  { title: "Marine Technician (Four-Stroke)", division: "Marine Services", type: "Full time · Port Harcourt", detail: "Diagnostics, servicing and installation on Yamaha, Suzuki and Mercury outboards. Minimum three years' hands-on experience." },
  { title: "Fashion Production Coordinator", division: "Fashion", type: "Full time · Port Harcourt", detail: "Pattern handover, tailoring quality control and production scheduling across made-to-measure orders." },
  { title: "Property Listings Officer", division: "Real Estate", type: "Full time · Port Harcourt", detail: "Vendor onboarding, listing documentation and inspection coordination. Property experience required." },
  { title: "AI Operations Associate", division: "AI Operator", type: "Full time or contract", detail: "Workflow documentation, assistant content review and staff onboarding for automation pilots. Process-analysis experience preferred." },
  { title: "Customer Support Associate", division: "Group", type: "Full time · Port Harcourt", detail: "First-line support across all divisions — WhatsApp, email and order/booking follow-up." },
  { title: "Sales Executive", division: "Group", type: "Full time · Port Harcourt", detail: "Consultative selling across divisions, with proper CRM discipline and written follow-up." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build with us.</>}
        description="We hire people who are good at what they do and can document it. If you can show the work and explain your decisions, we want to hear from you."
        image="/images/division-fashion.jpg"
        crumbs={[{ label: "Careers" }]}
      />

      <div className="shell py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl">Open roles</h2>
            <div className="mt-6 space-y-3">
              {roles.map((r) => (
                <details key={r.title} className="group rounded-xl border border-midnight/10 bg-white p-5">
                  <summary className="flex cursor-pointer items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-midnight">{r.title}</p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-gold-dark">
                        {r.division} · {r.type}
                      </p>
                    </div>
                    <span className="shrink-0 text-lg text-gold transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-midnight/60">{r.detail}</p>
                  <a href="#apply" className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-dark hover:underline">
                    Apply for this role →
                  </a>
                </details>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-midnight p-7 text-ivory">
              <p className="eyebrow">How we hire</p>
              <ol className="mt-4 space-y-3 text-sm text-ivory/60">
                <li className="flex gap-3"><span className="font-display text-gold">1</span> Application review — CV and a short note on relevant work.</li>
                <li className="flex gap-3"><span className="font-display text-gold">2</span> Practical assessment relevant to the role.</li>
                <li className="flex gap-3"><span className="font-display text-gold">3</span> Conversation with the division lead.</li>
                <li className="flex gap-3"><span className="font-display text-gold">4</span> Reference checks and written offer.</li>
              </ol>
              <p className="mt-5 border-t border-white/10 pt-4 text-[11px] text-ivory/35">
                We do not charge candidates any fee at any stage. If anyone claiming to represent us asks for
                payment, report it to us immediately.
              </p>
            </div>
          </div>

          <div id="apply" className="scroll-mt-24 rounded-2xl border border-midnight/10 bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl">Application</h2>
            <p className="mt-2 text-sm text-midnight/55">
              Tell us the role and include a link to your portfolio or showreel where relevant.
            </p>
            <div className="mt-6">
              <EnquiryForm
                enquiryType="General"
                referencePrefix="CGI-JOB"
                submitLabel="Submit application"
                tone="light"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                  { name: "role", label: "Role applying for", type: "select", required: true, options: roles.map((r) => r.title) },
                  { name: "portfolio", label: "Portfolio / LinkedIn link" },
                  { name: "message", label: "Why this role?", type: "textarea", required: true },
                  { name: "file", label: "Attach CV (PDF)", type: "file" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
