import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { engines } from "@/data/services";

export const metadata: Metadata = {
  title: "Outboard Engine Catalogue — Yamaha, Suzuki, Mercury",
  description:
    "Outboard engines from 25HP to 400HP supplied, rigged and sea-trialled in Port Harcourt. New and certified pre-owned with warranty.",
  alternates: { canonical: "/marine/engines" },
};

const included = [
  "Engine supplied with manufacturer warranty documentation",
  "Correct rigging: controls, harness, gauges and fuel line",
  "Propeller matched to your hull and typical load",
  "Installation on your transom, to manufacturer spec",
  "Sea trial with an engineer present",
  "Operator handover and first-service guidance",
];

export default function EnginesPage() {
  return (
    <>
      <PageHero
        eyebrow="Marine · Catalogue"
        title={<>Outboard engine range.</>}
        description="From 25HP tender engines to 400HP twin installations. We size engines against your hull rating and typical load, then quote the full rigged cost — not just the head."
        image="/images/division-marine.jpg"
        crumbs={[{ label: "Marine Services", href: "/marine" }, { label: "Engines" }]}
      />

      <div className="shell py-14 lg:py-20">
        <div className="overflow-x-auto rounded-2xl border border-midnight/10 bg-white">
          <table className="w-full min-w-[48rem] text-left text-sm">
            <thead>
              <tr className="border-b border-midnight/10 bg-ivory/60 text-[10px] uppercase tracking-[0.14em] text-midnight/45">
                <th className="px-5 py-4 font-medium">Model</th>
                <th className="px-5 py-4 font-medium">Brand</th>
                <th className="px-5 py-4 font-medium">Power</th>
                <th className="px-5 py-4 font-medium">Stroke</th>
                <th className="px-5 py-4 font-medium">Weight</th>
                <th className="px-5 py-4 font-medium">Typical use</th>
                <th className="px-5 py-4 font-medium">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-midnight/10">
              {engines.map((e) => (
                <tr key={e.name} className="transition hover:bg-ivory/40">
                  <td className="px-5 py-4">
                    <span className="font-medium text-midnight">{e.name}</span>
                    {e.tag && (
                      <span className="ml-2 rounded-full bg-gold/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-gold-dark">
                        {e.tag}
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-midnight/60">{e.brand}</td>
                  <td className="px-5 py-4 text-midnight/60">{e.hp}</td>
                  <td className="px-5 py-4 text-midnight/60">{e.stroke}</td>
                  <td className="px-5 py-4 text-midnight/60">{e.weight}</td>
                  <td className="px-5 py-4 text-midnight/50">{e.use}</td>
                  <td className="px-5 py-4 font-medium text-gold-dark">{e.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[11px] leading-relaxed text-midnight/45">
          Models shown are representative of the range we supply. Availability, specification and price are confirmed
          on quotation, as shipping and exchange rates affect landed cost. We do not publish a price we cannot honour.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">What a quote includes</p>
            <h2 className="display-md mt-3">The full rigged cost</h2>
            <p className="mt-3 text-sm leading-relaxed text-midnight/60">
              An engine price on its own is not the cost of getting on the water. Our quotations itemise the engine
              and everything needed to run it correctly.
            </p>
            <ul className="mt-6 space-y-3">
              {included.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-midnight/65">
                  <span className="mt-0.5 text-gold-dark">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-xl border border-gold/40 bg-gold/[0.07] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                Not sure what horsepower you need?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-midnight/65">
                Send your boat model, transom height and typical load. We will recommend two or three suitable
                engines and explain the trade-offs — no obligation.
              </p>
              <Link href="#enquire" className="btn-dark mt-4">Request sizing advice</Link>
            </div>
          </div>

          <div id="enquire" className="scroll-mt-24 rounded-2xl border border-midnight/10 bg-white p-6 sm:p-8">
            <h2 className="font-display text-2xl">Engine enquiry</h2>
            <p className="mt-2 text-sm text-midnight/55">
              Tell us the boat and we will come back with suitable models and a full rigged quotation.
            </p>
            <div className="mt-6">
              <EnquiryForm
                enquiryType="Marine"
                referencePrefix="CGI-MR"
                submitLabel="Request engine quote"
                tone="light"
                fields={[
                  { name: "name", label: "Full name", required: true },
                  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "boat", label: "Boat make and length", required: true, placeholder: "E.g. 24ft cabin cruiser" },
                  { name: "transom", label: "Transom height", type: "select", options: ['Short (15")', 'Long (20")', 'Extra long (25")', "Not sure"] },
                  { name: "hp", label: "Horsepower sought", type: "select", options: ["25–60 HP", "60–115 HP", "115–200 HP", "200–300 HP", "300 HP and above", "Advise me"] },
                  { name: "condition", label: "New or pre-owned", type: "select", options: ["New", "Certified pre-owned", "Either"] },
                  { name: "message", label: "Additional information", type: "textarea", placeholder: "Current engine, fuel tank capacity, typical load and use." },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
