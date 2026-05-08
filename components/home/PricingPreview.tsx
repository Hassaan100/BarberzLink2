import Link from "next/link";
import { FaArrowRight, FaRegCircleCheck, FaScissors } from "react-icons/fa6";
import { MdStorefront } from "react-icons/md";
import { RiBankCardLine } from "react-icons/ri";

const pricingData = {
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
      features: [
        "Everything in Limited Access",
        "Full professional barber profile",
        "stringDirect messaging with barbershop owners Priority job visibility",
        "Nationwide job opportunities",
        "Access to business resources",
        "Event engagement tools",
      ],
      isActive: true,
    },
    {
      _id: "69d48be1c19255216e3939f1",
      name: "Barbershop - Pro Service",
      price: 49.99,
      role: "barbershop",
      cycle: "month",
      description: "Barbershop owners actively hiring and growing their teams.",
      features: [
        "Create and manage a barbershop profile",
        "Post unlimited job openings",
        "Search and view barber profiles",
        "Direct messaging with barbers",
        "Nationwide talent reach",
        "Access to business resources",
      ],
      isActive: true,
    },
    {
      _id: "69d48be2c19255216e3939f8",
      name: "Business Resources Access",
      price: 39.99,
      role: "business_resource",
      cycle: "month",
      description:
        "Barbers and shop owners focused on long-term financial growth.",
      features: [
        "Business and financial education resources",
        "Banking",
        "Professional development tools",
      ],
      isActive: true,
    },
  ],
} as const;

const roleIcons = {
  barber: FaScissors,
  barbershop: MdStorefront,
  business_resource: RiBankCardLine,
};

function getPreviewPlans() {
  return pricingData.data.filter((plan) => plan.isActive).slice(0, 3);
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

export default function PricingPreview() {
  const plans = getPreviewPlans();

  return (
    <section
      id="pricing"
      className="scroll-mt-20 bg-background px-5 py-20 text-foreground"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#333] bg-white/3 px-5 py-1.5 text-[11px] font-bold uppercase text-foreground">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#e8a020]" />
            Pricing
          </div>
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
           <span className="text-amber-400"> Pro packages  </span>built for barber industry growth
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Start with the plan that matches your role, then unlock the full
            package list when you are ready to compare every option.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = roleIcons[plan.role];

            return (
              <article
                key={plan._id}
                className="flex min-h-[460px] flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-white transition-colors hover:border-amber-400/60 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                      {plan.role.replaceAll("_", " ")}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold leading-snug">
                      {plan.name}
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-2xl text-amber-400">
                    <Icon />
                  </div>
                </div>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight text-amber-400">
                    ${formatPrice(plan.price)}
                  </span>
                  <span className="pb-2 text-base font-semibold text-gray-400">
                    / {plan.cycle}
                  </span>
                </div>

                <p className="mt-5 min-h-16 text-sm leading-relaxed text-gray-400 sm:text-base">
                  {plan.description}
                </p>

                <div className="my-6 h-px bg-zinc-800" />

                <ul className="space-y-3">
                  {plan.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-relaxed text-gray-200"
                    >
                      <FaRegCircleCheck className="mt-0.5 shrink-0 text-amber-400" />
                      <span>{cleanFeature(feature)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-amber-400 px-7 text-sm font-bold text-black transition-colors "
          >
            View All Packages
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
