import type { Metadata } from "next";
import Link from "next/link";
import { FaCalendarCheck, FaRegCircleCheck, FaScissors } from "react-icons/fa6";
import { MdBusinessCenter, MdOutlineSchool, MdStorefront } from "react-icons/md";
import { RiAdvertisementLine, RiBankCardLine } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Pricing | BarberzLink",
  description:
    "Explore BarberzLink pricing for barbers, barbershops, schools, event organizers, product advertisers, and business resources.",
};

const pricingResponse = {
  success: true,
  message: "Operation successful",
  data: [
    {
      _id: "69d48be0c19255216e3939e3",
      name: "Barber - Pro Service",
      price: 29.99,
      role: "barber",
      cycle: "month",
      description:
        "Licensed barbers focused on career growth and relocation opportunities.",
      image:
        "https://zeeshandevsinn.github.io/barberzlink/assets/assets/images/app_logo.png",
      features: [
        "Everything in Limited Access",
        "Full professional barber profile",
        "stringDirect messaging with barbershop owners Priority job visibility",
        "Nationwide job opportunities",
        "Access to business resources",
        "Event engagement tools",
      ],
      isActive: true,
      createdAt: "2026-04-07T04:45:20.123Z",
      updatedAt: "2026-04-07T04:45:20.123Z",
      __v: 0,
    },
    {
      _id: "69d48be1c19255216e3939f1",
      name: "Barbershop - Pro Service",
      price: 49.99,
      role: "barbershop",
      cycle: "month",
      description: "Barbershop owners actively hiring and growing their teams.",
      image:
        "https://zeeshandevsinn.github.io/barberzlink/assets/assets/images/app_logo.png",
      features: [
        "Create and manage a barbershop profile",
        "Post unlimited job openings",
        "Search and view barber profiles",
        "Direct messaging with barbers",
        "Nationwide talent reach",
        "Access to business resources",
      ],
      isActive: true,
      createdAt: "2026-04-07T04:45:21.510Z",
      updatedAt: "2026-04-07T04:45:21.510Z",
      __v: 0,
    },
    {
      _id: "69d48be2c19255216e3939f8",
      name: "Business Resources Access",
      price: 39.99,
      role: "business_resource",
      cycle: "month",
      description:
        "Barbers and shop owners focused on long-term financial growth.",
      image:
        "https://zeeshandevsinn.github.io/barberzlink/assets/assets/images/app_logo.png",
      features: [
        "Business and financial education resources",
        "Banking",
        "Professional development tools",
      ],
      isActive: true,
      createdAt: "2026-04-07T04:45:22.696Z",
      updatedAt: "2026-04-07T04:45:22.696Z",
      __v: 0,
    },
    {
      _id: "69d48be3c19255216e3939fa",
      name: "Event Organizer - Pro Service",
      price: 150,
      role: "event_organizer",
      cycle: "one-time",
      description:
        "Event promoters, educators, and organizations hosting industry events.",
      image:
        "https://res.cloudinary.com/dvf9b5s6l/image/upload/v1771393661/xhwh0wn00ysgmgg3epkd.png",
      features: [
        "Publish one event on the platform",
        "Nationwide visibility",
        "Event remains live until expiration date",
      ],
      isActive: true,
      createdAt: "2026-04-07T04:45:23.840Z",
      updatedAt: "2026-04-07T04:45:23.840Z",
      __v: 0,
    },
    {
      _id: "69d48be5c19255216e3939fc",
      name: "Barberschool - Pro Service",
      price: 50,
      role: "barberschool",
      cycle: "month",
      description: "Pro service features for Barber Schools",
      image:
        "https://zeeshandevsinn.github.io/barberzlink/assets/assets/images/app_logo.png",
      features: [
        "Advanced student management",
        "Priority support",
        "Extended resource access",
        "Custom analytics dashboard",
      ],
      isActive: true,
      createdAt: "2026-04-07T04:45:25.006Z",
      updatedAt: "2026-04-07T04:45:25.006Z",
      __v: 0,
    },
    {
      _id: "69d48be6c19255216e3939fe",
      name: "Product Advertiser - Pro Service",
      price: 99.99,
      role: "product_advertiser",
      cycle: "month",
      description: "Pro level access for Product Advertisers",
      image:
        "https://zeeshandevsinn.github.io/barberzlink/assets/assets/images/app_logo.png",
      features: [
        "Upload and manage product listings",
        "Showcase tools and products to industry professionals",
        "Product visibility across the platform",
        "Access to professional barber audience",
      ],
      isActive: true,
      createdAt: "2026-04-07T04:45:26.222Z",
      updatedAt: "2026-04-07T04:45:26.222Z",
      __v: 0,
    },
  ],
  statusCode: 200,
  timestamp: "2026-05-05T18:42:45.443Z",
} as const;

type PricingPlan = (typeof pricingResponse.data)[number];

const roleIcons = {
  barber: FaScissors,
  barbershop: MdStorefront,
  business_resource: RiBankCardLine,
  event_organizer: FaCalendarCheck,
  barberschool: MdOutlineSchool,
  product_advertiser: RiAdvertisementLine,
} satisfies Record<PricingPlan["role"], React.ComponentType<{ className?: string }>>;

async function getPricingPlans() {
  return pricingResponse.data.filter((plan) => plan.isActive);
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price);
}

function cleanFeature(feature: string) {
  return feature.replace(/^string/, "");
}

function formatCycle(cycle: PricingPlan["cycle"]) {
  return cycle === "one-time" ? "one-time" : cycle;
}

export default async function PricingPage() {
  const plans = await getPricingPlans();

  return (
    <section className="bg-background px-5 py-16 text-foreground sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-3xl text-amber-400">
            <MdBusinessCenter />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
            BarberzLink Pricing
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            <span className="text-amber-400">Choose the plan</span> that fits
            your next move
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pro access for barbers, shops, schools, event organizers, product
            advertisers, and business resources across the platform.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => {
            const Icon = roleIcons[plan.role];

            return (
              <article
                key={plan._id}
                className="flex min-h-[540px] flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-white transition-colors hover:border-amber-400/60 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                      {plan.role.replaceAll("_", " ")}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold leading-snug">
                      {plan.name}
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-2xl text-amber-400">
                    <Icon />
                  </div>
                </div>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight text-amber-400 sm:text-6xl">
                    ${formatPrice(plan.price)}
                  </span>
                  <span className="pb-2 text-base font-semibold text-gray-400">
                    / {formatCycle(plan.cycle)}
                  </span>
                </div>

                <p className="mt-6 min-h-14 text-base leading-relaxed text-gray-400">
                  {plan.description}
                </p>

                <div className="my-7 h-px bg-zinc-800" />

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-relaxed text-gray-200 sm:text-base"
                    >
                      <FaRegCircleCheck className="mt-0.5 shrink-0 text-amber-400" />
                      <span>{cleanFeature(feature)}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/support"
                  className="mt-auto inline-flex min-h-11 items-center justify-center rounded-lg border border-amber-400/40 bg-amber-400/10 px-5 text-sm font-bold text-amber-300 transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-black"
                >
                  Get Started
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
