import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing use of the Clinton Global Investment website and our services.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="The terms that apply when you use this website or engage any Clinton Global division."
      updated="13 November 2025"
      sections={[
        {
          heading: "1. About these terms",
          paragraphs: [
            `These terms govern your use of this website and any services supplied by ${site.name}. By using the site or engaging us, you accept them.`,
          ],
        },
        {
          heading: "2. Quotations and orders",
          list: [
            "Quotations are valid for 14 days unless stated otherwise, and may be revised if the scope changes.",
            "A quotation is not an acceptance of your order; a contract is formed when we confirm acceptance in writing.",
            "Order confirmations are issued in writing. Please check the details and notify us of errors immediately.",
            "Prices are in Nigerian naira and may change without notice until a quotation is accepted or an order confirmed.",
          ],
        },
        {
          heading: "3. Payments",
          paragraphs: [
            "Online payments are processed by our payment provider. Where payment is by bank transfer, work or dispatch begins only after funds are confirmed. We may require a deposit for bespoke, implementation or marine work.",
          ],
        },
        {
          heading: "4. Delivery",
          paragraphs: [
            "Fashion delivery timelines are estimates and may be affected by courier delays outside our control. Risk passes on delivery. See the delivery and returns policy for detail.",
          ],
        },
        {
          heading: "5. Marine services",
          list: [
            "Marine work is quoted after inspection and may be revised if additional faults are found, with your approval.",
            "Owners are responsible for confirming a vessel is seaworthy and adequately insured; a sea trial does not constitute a survey.",
            "Safety-critical work must be carried out in line with manufacturer guidance; we will not carry out modifications we consider unsafe.",
          ],
        },
        {
          heading: "6. Property services",
          paragraphs: [
            "Property information is supplied by vendors and is subject to change. We do not provide legal advice or title guarantees. You should obtain independent legal advice and a land registry search before payment. Agency fees and terms are disclosed before inspection.",
          ],
        },
        {
          heading: "7. Video production and intellectual property",
          list: [
            "On full payment, you receive the agreed deliverables and a licence to use them as specified in your brief. For AI Operator work, the scope of any automated system, its limits and its data handling are set out in the proposal.",
            "We may retain the right to display work in our portfolio unless you request otherwise in writing.",
            "Third-party music, fonts or stock assets are licensed for the uses specified in the quotation; additional uses may require further licences.",
          ],
        },
        {
          heading: "8. Liability",
          paragraphs: [
            "Nothing in these terms excludes liability that cannot lawfully be excluded. Otherwise, our liability is limited to the value of the specific service or product concerned, and we are not liable for indirect or consequential loss.",
          ],
        },
        {
          heading: "9. Governing law",
          paragraphs: [
            "These terms are governed by the laws of the Federal Republic of Nigeria, and the courts of Rivers State have jurisdiction.",
          ],
        },
      ]}
    />
  );
}
