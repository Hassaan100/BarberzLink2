import type { Metadata } from "next";

import InfoPage from "@/components/content/InfoPage";
import { termsPage } from "@/components/content/infoPages";

export const metadata: Metadata = {
  title: "Terms & Conditions | BarberzLink",
  description:
    "Read the BarberzLink terms and conditions for platform use, profiles, bookings, account responsibilities, and legal contact information.",
};

export default function TermsAndConditionsPage() {
  return <InfoPage {...termsPage} variant="terms" />;
}
