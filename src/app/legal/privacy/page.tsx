import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Clinton Global Investment collects, uses and protects personal data under the Nigeria Data Protection Act 2023.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How we collect, use and protect personal data when you use this website or engage our services."
      updated="13 November 2025"
      sections={[
        {
          heading: "1. Who we are",
          paragraphs: [
            `${site.name} is a Nigerian company operating marine, fashion, real estate and AI video advertising divisions. For questions about this policy, contact us at ${site.email}.`,
            "We process personal data in line with the Nigeria Data Protection Act 2023 (NDPA) and applicable guidance from the Nigeria Data Protection Commission (NDPC).",
          ],
        },
        {
          heading: "2. What we collect",
          list: [
            "Contact details you submit: name, phone number, email address and delivery address.",
            "Enquiry and order details: the services you request, product selections, sizes, colours and quantities.",
            "Property enquiry data: the property of interest, preferred inspection date and any message you provide.",
            "Payment references: we do not store full card details. Card data is handled by our payment processor.",
            "Technical data: browser type, device type and pages visited, collected through analytics where you consent.",
          ],
        },
        {
          heading: "3. Why we use it",
          list: [
            "To respond to enquiries, prepare quotations and deliver services you have requested.",
            "To process orders, arrange delivery and manage returns.",
            "To schedule service bookings and property inspections.",
            "To send transactional updates by email, SMS or WhatsApp.",
            "To send marketing communications where you have opted in — you can withdraw consent at any time.",
            "To meet our legal, tax and accounting obligations.",
          ],
        },
        {
          heading: "4. Legal bases",
          paragraphs: [
            "We rely on contract performance for order and service delivery, consent for marketing and non-essential cookies, legitimate interest for fraud prevention and service improvement, and legal obligation for record-keeping and tax.",
          ],
        },
        {
          heading: "5. Sharing",
          paragraphs: [
            "We share the minimum data necessary with delivery partners, payment processors, service providers who host or support this website, and professional advisers where required by law.",
            "We do not sell personal data.",
          ],
        },
        {
          heading: "6. Retention",
          paragraphs: [
            "Enquiry records are kept for up to 24 months. Order and transaction records are kept for the period required by Nigerian tax and accounting rules. Marketing preferences are kept until you withdraw consent.",
          ],
        },
        {
          heading: "7. Your rights",
          paragraphs: [
            "Under the NDPA you have rights to access, rectification, erasure, restriction, objection and data portability, and to lodge a complaint with the NDPC.",
            `To exercise any of these rights, email ${site.email}. We respond within the period required by law.`,
          ],
        },
        {
          heading: "8. Cookies",
          paragraphs: [
            "We use essential cookies to operate the cart and account features, and analytics cookies only where consent is given. See our cookie policy for detail.",
          ],
        },
        {
          heading: "9. Changes",
          paragraphs: [
            "We may update this policy from time to time. The revision date at the top of the page shows when it last changed.",
          ],
        },
      ]}
      image="/images/hero-marina.jpg"
    />
  );
}
