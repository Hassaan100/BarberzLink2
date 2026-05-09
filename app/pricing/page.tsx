"use client";

import { ArrowRight, Headphones, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCalendarCheck, FaRegCircleCheck, FaScissors } from "react-icons/fa6";
import {
  MdBusinessCenter,
  MdOutlineSchool,
  MdStorefront,
} from "react-icons/md";
import { RiAdvertisementLine, RiBankCardLine } from "react-icons/ri";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://barberlinkbackend-production.up.railway.app";

type Plan = {
  _id: string;
  name: string;
  price: number;
  role:
    | "barber"
    | "barbershop"
    | "business_resource"
    | "event_organizer"
    | "barberschool"
    | "product_advertiser";
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
  event_organizer: FaCalendarCheck,
  barberschool: MdOutlineSchool,
  product_advertiser: RiAdvertisementLine,
} satisfies Record<Plan["role"], React.ComponentType<{ className?: string }>>;

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price);
}

function cleanFeature(feature: string) {
  return feature.replace(/^string/, "");
}

function formatCycle(cycle: string) {
  return cycle === "one-time" ? "one-time" : cycle;
}

function SkeletonCard() {
  return (
    <article className="flex min-h-135 flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
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

      <div className="my-7 h-px bg-zinc-800" />

      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex gap-3">
            <div className="h-5 w-5 shrink-0 animate-pulse rounded-full bg-zinc-800" />
            <div className="h-4 flex-1 animate-pulse rounded bg-zinc-800" />
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <div className="h-11 w-32 animate-pulse rounded-lg bg-zinc-800" />
      </div>
    </article>
  );
}

export default function PricingPage() {
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
          setPlans(data.data.filter((plan) => plan.isActive));
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

        {error ? (
          <div className="mt-14 text-center text-red-500">
            <p>{error}</p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={i} />
                  ))
                : plans.map((plan) => {
                    const Icon = roleIcons[plan.role];

                    return (
                      <article
                        key={plan._id}
                        className="flex min-h-135 flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-white transition-colors hover:border-amber-400/60 sm:p-8"
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
                      </article>
                    );
                  })}
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-black font-medium  transition"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
