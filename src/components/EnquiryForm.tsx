"use client";

import { useState } from "react";
import { useStore } from "@/components/store/StoreProvider";
import { site } from "@/data/site";

export type EnquiryField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "time" | "number" | "textarea" | "select" | "file";
  options?: string[];
  required?: boolean;
  placeholder?: string;
  half?: boolean;
};

export default function EnquiryForm({
  fields,
  submitLabel = "Submit enquiry",
  tone = "dark",
  enquiryType = "General",
  referencePrefix = "CGI",
  summaryLabel = "Enquiry submitted from website",
  compact = false,
}: {
  fields: EnquiryField[];
  submitLabel?: string;
  tone?: "dark" | "light";
  enquiryType?: "Marine" | "Real Estate" | "AI Operator" | "General" | "Quotation";
  referencePrefix?: string;
  summaryLabel?: string;
  compact?: boolean;
}) {
  const { addEnquiry } = useStore();
  const [submitted, setSubmitted] = useState<{ ref: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<Record<string, string>>({});

  const isDark = tone === "dark";
  const fieldClass = isDark ? "field-dark" : "field";
  const labelClass = isDark ? "label-dark" : "label";

  const update = (name: string, value: string) => {
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    fields.forEach((f) => {
      if (f.required && !String(form[f.name] ?? "").trim()) next[f.name] = "This field is required.";
    });
    const emailField = fields.find((f) => f.type === "email");
    if (emailField && form[emailField.name] && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form[emailField.name])) {
      next[emailField.name] = "Enter a valid email address.";
    }
    const phoneField = fields.find((f) => f.type === "tel");
    if (phoneField && form[phoneField.name] && form[phoneField.name].replace(/\D/g, "").length < 10) {
      next[phoneField.name] = "Enter a valid phone number.";
    }
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    const ref = `${referencePrefix}-${Math.floor(100000 + Math.random() * 900000)}`;
    const summaryFields = fields
      .filter((f) => form[f.name])
      .slice(0, 3)
      .map((f) => form[f.name])
      .join(" · ");
    addEnquiry({
      type: enquiryType,
      reference: ref,
      summary: summaryFields || summaryLabel,
    });
    setSubmitted({ ref });
    setForm({});
  };

  if (submitted) {
    return (
      <div
        className={`rounded-2xl border p-8 text-center sm:p-10 ${
          isDark ? "border-gold/30 bg-white/[0.04]" : "border-gold/40 bg-white"
        }`}
        role="status"
      >
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-2xl text-gold">
          ✓
        </div>
        <h3 className={`mt-5 font-display text-2xl ${isDark ? "text-ivory" : "text-midnight"}`}>
          Enquiry received
        </h3>
        <p className={`mx-auto mt-3 max-w-md text-sm leading-relaxed ${isDark ? "text-ivory/55" : "text-midnight/60"}`}>
          Your reference is <strong className={isDark ? "text-gold" : "text-gold-dark"}>{submitted.ref}</strong>.
          Our team acknowledges new enquiries within one business day. If it is urgent, message us on WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
              `Hello Clinton Global, I just submitted enquiry ${submitted.ref}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Message on WhatsApp
          </a>
          <button
            onClick={() => setSubmitted(null)}
            className={isDark ? "btn-light" : "btn-dark"}
          >
            Submit another
          </button>
        </div>
        <p className={`mt-5 text-[11px] ${isDark ? "text-ivory/30" : "text-midnight/35"}`}>
          This demo stores enquiries in your browser. Connect an email or CRM integration to deliver them live.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-4" : "space-y-5"} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((f) => {
          const id = `f-${f.name}`;
          const span = f.half === false || f.type === "textarea" || f.type === "file" ? "sm:col-span-2" : "";
          const common = {
            id,
            name: f.name,
            value: form[f.name] ?? "",
            onChange: (
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
            ) => update(f.name, e.target.value),
            className: fieldClass,
            "aria-invalid": Boolean(errors[f.name]),
            "aria-describedby": errors[f.name] ? `${id}-err` : undefined,
          };
          return (
            <div key={f.name} className={span}>
              <label htmlFor={id} className={labelClass}>
                {f.label} {f.required && <span className="text-gold">*</span>}
              </label>
              {f.type === "textarea" ? (
                <textarea {...common} rows={4} placeholder={f.placeholder} />
              ) : f.type === "select" ? (
                <select {...common}>
                  <option value="">Select…</option>
                  {f.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : f.type === "file" ? (
                <input
                  {...common}
                  type="file"
                  accept="image/*,video/*,.pdf"
                  className={`${fieldClass} file:mr-4 file:rounded-full file:border-0 file:bg-gold/15 file:px-4 file:py-1.5 file:text-xs file:font-semibold file:text-gold`}
                  value={undefined}
                />
              ) : (
                <input {...common} type={f.type ?? "text"} placeholder={f.placeholder} />
              )}
              {errors[f.name] && (
                <p id={`${id}-err`} className="mt-1.5 text-xs text-red-400">
                  {errors[f.name]}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <button type="submit" className="btn-gold w-full sm:w-auto">
        {submitLabel}
        <span>→</span>
      </button>
      <p className={`text-[11px] leading-relaxed ${isDark ? "text-ivory/30" : "text-midnight/40"}`}>
        By submitting this form you consent to us contacting you about your enquiry in line with our{" "}
        <a href="/legal/privacy" className="underline decoration-gold/40 hover:text-gold">
          privacy policy
        </a>
        . We do not sell your data.
      </p>
    </form>
  );
}
