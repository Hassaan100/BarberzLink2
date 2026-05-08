import Action from "@/components/home/Action";
import HeroSection from "@/components/home/Hero";
import HowWorks from "@/components/home/HowWork";
import ProfessionalTalk from "@/components/home/ProfessionalTalk";
import Employers from "@/components/home/Employers";
import Services from "@/components/home/Services";
import PricingPreview from "@/components/home/PricingPreview";
import FaqPreview from "@/components/home/FaqPreview";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Action/>
      <HowWorks/>
      <ProfessionalTalk/>
      <Employers/>
      <Services/>
      <PricingPreview/>
      <FaqPreview/>
      <ContactSection/>
    </div>
  );
}
