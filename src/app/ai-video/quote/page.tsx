import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { creativePackages } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "AI Video Advertising Quotation Request",
  description:
    "Request a quotation for an AI-assisted video advertisement. Tell us the product, audience, platform and deadline.",
  alternates: { canonical: "/ai-video/quote" },
};

export default function AiVideoQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="AI Video · Quotation"
        title={<>Request a video quotation.</>}
        description="The more you tell us about the objective, the more useful our quotation will be. We respond with a written concept direction and itemised pricing."
        image="/images/division-ai.jpg"
        crumbs={[{ label: "AI Video Advertising", href: "/ai-video" }, { label: "Get a Quote" }]}
      />

      <div className="shell py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="rounded-2xl border border-midnight/10 bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl">Project brief</h2>
            <p className="mt-2 text-sm text-midnight/55">
              All fields help us quote accurately. If you do not know an answer, select "Not sure" — we will advise.
            </p>
            <div className="mt-7">
              <EnquiryForm
                enquiryType="AI Video"
                referencePrefix="CGI-AV"
                submitLabel="Request quotation"
                tone="light"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "brand", label: "Business / brand", required: true },
                  { name: "email", label: "Email address", type: "email", required: true },
                  { name: "phone", label: "WhatsApp number", type: "tel", required: true },
                  { name: "service", label: "Type of advertisement", type: "select", required: true, options: ["Product commercial", "Social media video ads", "Corporate promotional video", "Real estate promotional film", "Fashion promotional film", "AI spokesperson video", "AI voice-over advertisement", "Explainer video", "Cinematic brand storytelling"] },
                  { name: "product", label: "Product or service promoted", required: true },
                  { name: "audience", label: "Target audience", placeholder: "Age, location, interests" },
                  { name: "duration", label: "Desired duration", type: "select", options: ["5–10 seconds", "15 seconds", "30 seconds", "45–60 seconds", "Over 60 seconds", "Multiple lengths"] },
                  { name: "style", label: "Preferred style", type: "select", options: ["Cinematic and premium", "Clean and minimal", "Bold and energetic", "Documentary / authentic", "Playful", "Not sure — advise me"] },
                  { name: "platform", label: "Intended platform", type: "select", options: ["Instagram Reels", "TikTok", "YouTube", "Facebook", "In-store screens", "TV", "Multiple platforms"] },
                  { name: "script", label: "Do you have a script?", type: "select", options: ["Yes, complete", "Yes, rough notes", "No — write it for us"] },
                  { name: "voiceover", label: "Voice-over requirement", type: "select", options: ["English", "Yoruba", "Igbo", "Hausa", "French", "No voice-over needed"] },
                  { name: "budget", label: "Budget range", type: "select", required: true, options: ["Under ₦300,000", "₦300,000 – ₦750,000", "₦750,000 – ₦1.5m", "₦1.5m – ₦3m", "Above ₦3m"] },
                  { name: "deadline", label: "Deadline", type: "date" },
                  { name: "message", label: "Anything else we should know?", type: "textarea" },
                  { name: "file", label: "Upload product images, logo or reference video", type: "file" },
                ]}
              />
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-midnight/10 bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">Packages</p>
              <ul className="mt-4 space-y-4">
                {creativePackages.map((p) => (
                  <li key={p.name} className="border-b border-midnight/10 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-medium text-midnight">{p.name}</p>
                      <p className="whitespace-nowrap text-xs text-gold-dark">{p.price}</p>
                    </div>
                    <p className="mt-0.5 text-[11px] text-midnight/45">{p.note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-midnight/10 bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-dark">What happens next</p>
              <ol className="mt-3 space-y-2.5 text-sm text-midnight/60">
                <li>1. Acknowledgement within one business day.</li>
                <li>2. A short scoping call — 15 minutes is usually enough.</li>
                <li>3. Written concept direction and itemised quotation.</li>
                <li>4. 50% to schedule production, balance on delivery.</li>
              </ol>
            </div>
            <div className="rounded-2xl bg-midnight p-6 text-ivory">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Prefer to talk?</p>
              <p className="mt-2 text-sm leading-relaxed text-ivory/60">
                Send a WhatsApp voice note with your idea. It is often faster than a form.
              </p>
              <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Clinton Global, I have an AI video project I would like to discuss.")}`} target="_blank" rel="noopener noreferrer" className="btn-gold mt-4 w-full">
                Message on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
