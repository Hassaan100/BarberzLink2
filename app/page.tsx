import Action from "@/components/home/Action";
import HeroSection from "@/components/home/Hero";
import HowWorks from "@/components/home/HowWork";
import ProfessionalTalk from "@/components/home/ProfessionalTalk";
import Employers from "@/components/home/Employers";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Action/>
      <HowWorks/>
      <ProfessionalTalk/>
      <Employers/>
    </div>
  );
}
