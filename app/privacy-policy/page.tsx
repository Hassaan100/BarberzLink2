import type { Metadata } from "next";

import InfoPage from "@/components/content/InfoPage";
import { privacyPage } from "@/components/content/infoPages";

export const metadata: Metadata = {
  title: "Privacy Policy | BarberzLink",
  description:
    "Read the BarberzLink privacy policy for information collection, platform use, sharing, text messages, choices, and privacy contact details.",
};

export default function PrivacyPolicyPage() {
  return <InfoPage {...privacyPage} variant="privacy" />;
}
