import type { Metadata } from "next";
import Link from "next/link";
import {
  MdEmail,
  MdOutlineArticle,
  MdOutlineHelpOutline,
} from "react-icons/md";
import { RiChatSmile3Line } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Support Center | BarberzLink",
  description:
    "Contact BarberzLink support for help with accounts, bookings, profiles, hiring, and platform questions.",
};

const supportCards = [
  {
    title: "Email Us",
    description:
      "Send us a message and our support team will respond as soon as possible.",
    action: "contact@barberzlink.com",
    href: "mailto:contact@barberzlink.com",
    icon: MdEmail,
  },
  {
    title: "Live Chat",
    description:
      "Start a support request for account, booking, profile, and platform help.",
    action: "Start a Chat",
    href: "mailto:contact@barberzlink.com?subject=Support%20chat%20request",
    icon: RiChatSmile3Line,
  },
  {
    title: "Help Center",
    description:
      "Browse common answers for clients, professionals, shops, schools, and employers.",
    action: "Browse Articles",
    href: "/faq",
    icon: MdOutlineArticle,
  },
];

export default function SupportPage() {
  return (
    <section className="bg-background px-5 py-16 text-foreground sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-3xl text-amber-400">
            <RiChatSmile3Line />
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Support Center
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We&apos;re here to help. Reach out through any of the channels
            below and our team will get back to you as quickly as possible.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {supportCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="flex min-h-[304px] flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-8 text-center text-card-foreground transition-colors hover:border-amber-400/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/10 text-3xl text-amber-400">
                  <Icon />
                </div>
                <h2 className="mt-5 text-xl font-bold">{card.title}</h2>
                <p className="mt-4 max-w-[250px] text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex min-h-9 items-center justify-center rounded-lg border border-border px-4 text-sm font-bold text-foreground transition-colors hover:border-amber-400 hover:text-amber-400"
                >
                  {card.action}
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card px-6 py-9 text-center text-card-foreground">
          <div className="flex items-center justify-center gap-2 text-xl font-bold">
            <MdOutlineHelpOutline className="text-amber-400" />
            <h2>Frequently Asked Questions</h2>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Find quick answers to the most common questions about BarberzLink.
          </p>
          <Link
            href="/faq"
            className="mt-5 inline-flex min-h-9 items-center justify-center rounded-lg border border-border px-4 text-sm font-bold text-foreground transition-colors hover:border-amber-400 hover:text-amber-400"
          >
            View FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
