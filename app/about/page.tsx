import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight,
  FaCircleCheck,
  FaPeopleGroup,
  FaScissors,
  FaShieldHalved,
} from "react-icons/fa6";
import { MdOutlineSchool, MdStorefront } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";

export const metadata: Metadata = {
  title: "About Us | BarberzLink",
  description:
    "Learn how BarberzLink connects barbers, beauty professionals, shops, schools, employers, events, and industry businesses across the United States.",
};

const audienceCards = [
  {
    title: "Professionals",
    description:
      "Barbers, stylists, and beauty professionals can show verified profiles, skills, media, and career intent with more context than a resume alone.",
    icon: FaScissors,
  },
  {
    title: "Shops & Employers",
    description:
      "Barbershops, salons, and hiring teams can discover talent, review proof of skill, post opportunities, and reduce hiring guesswork.",
    icon: MdStorefront,
  },
  {
    title: "Schools & Events",
    description:
      "Schools, educators, and event organizers can reach the industry with programs, showcases, events, and professional development resources.",
    icon: MdOutlineSchool,
  },
];

const values = [
  "Make professional credibility easier to see.",
  "Help businesses hire with better context and confidence.",
  "Create nationwide access to opportunities, resources, and industry connections.",
  "Support respectful, professional communication between clients, talent, and businesses.",
];

const stats = [
  { value: "50", label: "States served" },
  { value: "24/7", label: "Digital access" },
  { value: "1", label: "Industry network" },
];

export default function AboutPage() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-5 py-1.5 text-[11px] font-bold uppercase text-foreground">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#e8a020]" />
              About BarberzLink
            </div>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Built for the people moving the barber and beauty industry
              forward.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              BarberzLink is a professional networking and marketplace platform
              created to connect clients, barbers, beauty professionals,
              barbershops, salons, schools, employers, event organizers, and
              product businesses in one modern ecosystem.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our focus is simple: help talent become more visible, help
              businesses make smarter decisions, and give the industry a more
              organized way to discover services, hiring opportunities,
              resources, and real proof of skill.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-amber-400 px-7 text-sm font-bold text-black transition-colors hover:bg-amber-300"
              >
                Explore Plans
                <FaArrowRight />
              </Link>
              <Link
                href="/support"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-7 text-sm font-bold text-foreground transition-colors hover:border-amber-400 hover:text-amber-400"
              >
                Contact Support
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-background p-5 text-center"
                >
                  <p className="text-4xl font-black text-amber-400">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-2xl text-amber-400">
                  <RiMapPin2Line />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Nationwide by design</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    BarberzLink is positioned for professionals and businesses
                    across all 50 United States, creating access beyond local
                    word of mouth while keeping industry relationships at the
                    center.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {audienceCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-2xl border border-border bg-card p-6 text-card-foreground transition-colors hover:border-amber-400/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-2xl text-amber-400">
                  <Icon />
                </div>
                <h2 className="mt-5 text-2xl font-bold">{card.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-3xl text-amber-400">
              <FaShieldHalved />
            </div>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Our mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To give the barber and beauty industry a trusted digital home
              where talent, opportunity, business growth, and professional
              credibility can meet without friction.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 text-card-foreground sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="flex gap-3">
                  <FaCircleCheck className="mt-1 shrink-0 text-amber-400" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card p-6 text-card-foreground sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-amber-400">
                <FaPeopleGroup className="text-2xl" />
                <span className="text-xs font-bold uppercase tracking-[0.25em]">
                  Why it matters
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Better visibility creates better decisions.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              A haircut, hire, event, or business connection should not depend
              only on scattered social posts or incomplete resumes. BarberzLink
              brings profiles, proof, communication, listings, and resources
              closer together so the right people can find each other faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
