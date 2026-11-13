import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Payment & Refund Policy",
  description: "Accepted payment methods, verification and refund terms for Clinton 075 Group.",
  alternates: { canonical: "/legal/payments" },
};

export default function PaymentsPage() {
  return (
    <LegalPage
      title="Payment & Refund Policy"
      intro="How payments are accepted and verified, and the circumstances in which refunds are issued."
      updated="13 November 2025"
      sections={[
        {
          heading: "1. Accepted methods",
          list: [
            "Card payment (Visa, Mastercard, Verve) through our Nigerian payment gateway.",
            "Bank transfer to the account stated on your invoice or order confirmation.",
            "USSD payment through the gateway where supported.",
            "Direct bank transfer for invoiced corporate and marine work.",
          ],
        },
        {
          heading: "2. Verification",
          paragraphs: [
            "Card and gateway payments are verified before an order is marked as paid. Transfer payments are marked paid only when funds are confirmed in our account. Never send payment to an account not stated on your written invoice or order confirmation.",
          ],
        },
        {
          heading: "3. Deposits",
          paragraphs: [
            "Bespoke fashion, marine repairs and video production may require a deposit to schedule work. Deposits cover materials, parts or production time already committed.",
          ],
        },
        {
          heading: "4. Refunds — fashion",
          list: [
            "Unworn items with tags may be returned within 14 days of delivery for a refund or exchange.",
            "Return delivery is at the customer's cost unless the item was faulty or incorrect.",
            "Bespoke and made-to-measure items are not refundable solely on the basis of a change of mind, as they are made to your specification.",
            "Refunds are processed to the original payment method within 5–10 business days of an approved return.",
          ],
        },
        {
          heading: "5. Refunds — services",
          paragraphs: [
            "Marine, property and production services are quoted and delivered on written terms. Where a service is cancelled before work begins, deposits are refunded less any costs already incurred. Once parts are ordered or production has begun, those costs are not refundable.",
          ],
        },
        {
          heading: "6. Charges and disputes",
          paragraphs: [
            "If you believe you have been charged incorrectly, contact us within 30 days with your order or invoice reference. We will investigate and respond in writing. If we are unable to resolve a dispute, we will confirm the next step available to you.",
          ],
        },
        {
          heading: "7. Failed or reversed payments",
          paragraphs: [
            "Where a payment fails, is reversed or charged back, we may suspend delivery or work until the position is resolved. Gateway fees and bank charges incurred on reversed payments may be deducted from any refund.",
          ],
        },
      ]}
      image="/images/division-fashion.jpg"
    />
  );
}
