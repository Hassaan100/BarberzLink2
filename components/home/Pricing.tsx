"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaRegCircleCheck, FaScissors } from "react-icons/fa6";
import { MdStorefront } from "react-icons/md";
import { RiBankCardLine } from "react-icons/ri";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://barberlinkbackend-production.up.railway.app";

type Plan = {
  _id: string;
  name: string;
  price: number;
  role: "barber" | "barbershop" | "business_resource";
  cycle: string;
  description: string;
  features: string[];
  isActive: boolean;
};

type PlansResponse = {
  success: boolean;
  message: string;
  data: Plan[];
};

const roleIcons = {
  barber: FaScissors,
  barbershop: MdStorefront,
  business_resource: RiBankCardLine,
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price);
}

function cleanFeature(feature: string) {
  return feature.replace(/^string/, "");
}

function SkeletonCard() {
  return (
    <article className="flex min-h-115 flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="h-3 w-20 animate-pulse rounded bg-zinc-800" />
          <div className="mt-3 h-8 w-40 animate-pulse rounded bg-zinc-800" />
        </div>
        <div className="h-12 w-12 shrink-0 animate-pulse rounded-xl bg-zinc-800" />
      </div>

      <div className="mt-7 flex items-end gap-2">
        <div className="h-12 w-24 animate-pulse rounded bg-zinc-800" />
        <div className="h-6 w-12 animate-pulse rounded bg-zinc-800" />
      </div>

      <div className="mt-5 min-h-16">
        <div className="h-4 w-full animate-pulse rounded bg-zinc-800" />
        <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-zinc-800" />
      </div>

      <div className="my-6 h-px bg-zinc-800" />

      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-3">
            <div className="h-5 w-5 shrink-0 animate-pulse rounded-full bg-zinc-800" />
            <div className="h-4 flex-1 animate-pulse rounded bg-zinc-800" />
          </div>
        ))}
      </div>
    </article>
  );
}

export default function PricingPreview() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlans() {
      try {
        setLoading(true);
        const response = await fetch(`${BACKEND_URL}/api/v1/plans`);

        if (!response.ok) {
          throw new Error("Failed to fetch plans");
        }

        const data: PlansResponse = await response.json();

        if (data.success && data.data) {
          setPlans(data.data.filter((plan) => plan.isActive).slice(0, 3));
        }
      } catch (err) {
        console.error("Error fetching plans:", err);
        setError("Failed to load pricing plans");
      } finally {
        setLoading(false);
      }
    }

    fetchPlans();
  }, []);

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

        {error ? (
          <div className="mt-14 text-center text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : plans.map((plan) => {
                  const Icon = roleIcons[plan.role];

                  return (
                    <article
                      key={plan._id}
                      className="flex min-h-115 flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-white transition-colors hover:border-amber-400/60 sm:p-7"
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
        )}

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