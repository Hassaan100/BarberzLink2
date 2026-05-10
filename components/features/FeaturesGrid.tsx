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
  ClipboardList,
  Scissors,
  Camera,
  ShoppingBag,
  CalendarDays,
  BookOpen,
  Megaphone,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Verified identity",
    desc: "ID verification helps create a trusted and safer community.",
    icon: ShieldCheck,
  },
  {
    title: "Industry search",
    desc: "Find jobs and businesses in barbering, retail, hospitality, and more.",
    icon: Search,
  },
  {
    title: "Mobile first",
    desc: "Built for mobile devices with a smooth and modern experience.",
    icon: Smartphone,
  },
  {
    title: "Proof first profiles",
    desc: "Show real work and videos instead of only written resumes.",
    icon: BadgeCheck,
  },
  {
    title: "Post Job",
    desc: "Create job posts quickly and reach skilled professionals fast.",
    icon: Briefcase,
  },
  {
    title: "Track Job Applications",
    desc: "Manage applications and track every candidate easily.",
    icon: ClipboardList,
  },
  {
    title: "Hire Skillful Barberz",
    desc: "Connect with talented barbers ready to work and grow.",
    icon: Scissors,
  },
  {
    title: "Showcase Your Skills",
    desc: "Upload videos and photos to highlight your real experience.",
    icon: Camera,
  },
  {
    title: "List Products",
    desc: "Sell grooming products and showcase items for your customers.",
    icon: ShoppingBag,
  },
  {
    title: "List Events",
    desc: "Promote barber events, workshops, and community meetups.",
    icon: CalendarDays,
  },
  {
    title: "Business Resource",
    desc: "Access helpful tools and resources to grow your business.",
    icon: BookOpen,
  },
  {
    title: "Promote Your Business",
    desc: "Increase visibility and attract more customers online.",
    icon: Megaphone,
  },
  {
    title: "Connect with Barberz",
    desc: "Build connections with barbers, shops, and industry professionals.",
    icon: Users,
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
