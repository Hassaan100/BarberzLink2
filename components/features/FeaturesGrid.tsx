// components/features/FeaturesGrid.tsx
"use client";

import {
  ShieldCheck,
  Video,
  Bell,
  Briefcase,
  Search,
  Sparkles,
  LayoutDashboard,
  Heart,
  Smartphone,
  BadgeCheck,
} from "lucide-react";

const features = [
 
  {
    title: "Verified identity",
    desc: "ID verification creates more trust and safety for everyone.",
    icon: ShieldCheck,
  },
  {
    title: "Push notifications",
    desc: "Get alerts the moment someone applies or responds.",
    icon: Bell,
  },
  
  {
    title: "Industry search",
    desc: "Built for hospitality, barbers, restaurants, retail, and more.",
    icon: Search,
  },
  {
    title: "AI matching",
    desc: "Smart matching helps connect employers and workers faster.",
    icon: Sparkles,
  },
  {
    title: "Employer dashboard",
    desc: "Track candidates, job posts, and conversations easily.",
    icon: LayoutDashboard,
  },
  {
    title: "Free for talent",
    desc: "Workers can apply and create profiles completely free.",
    icon: Heart,
  },
  {
    title: "Mobile-first",
    desc: "Designed for phones first with a smooth modern experience.",
    icon: Smartphone,
  },
  {
    title: "Proof-first profiles",
    desc: "No fake resumes. Video proof creates trust instantly.",
    icon: BadgeCheck,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative border-b border-border py-20 lg:w-7xl m-auto ">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="container relative mx-auto px-4">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-card"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
