import ContactCTA from "@/components/features/ContactCTA";
import FaqPreview from "@/components/features/FaqPreview";
import FeaturesGrid from "@/components/features/FeaturesGrid";
import FeaturesHero from "@/components/features/FeaturesHero";
import ProfessionalTalk from "@/components/features/ProfessionalTalk";

export default function Features() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <FeaturesHero />
      <FeaturesGrid />
      <ProfessionalTalk />
      <FaqPreview />
      <ContactCTA />
    </main>
  );
}
