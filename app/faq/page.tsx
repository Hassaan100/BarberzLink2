import type { Metadata } from "next";

import InfoPage from "@/components/content/InfoPage";
import { faqPage } from "@/components/content/infoPages";

export const metadata: Metadata = {
  title: "FAQ | BarberzLink",
  description:
    "Find answers to common BarberzLink questions about booking, profiles, hiring, nationwide availability, messaging, and support.",
};

export default function FaqPage() {
  return <InfoPage {...faqPage} variant="faq" />;
}
