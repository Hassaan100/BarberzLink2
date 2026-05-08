import { FaCircleQuestion, FaFileContract, FaShieldHalved } from "react-icons/fa6";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type InfoSection = {
  title: string;
  body?: string;
  items?: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updatedAt?: string;
  sections?: InfoSection[];
  faqItems?: FaqItem[];
  variant: "terms" | "privacy" | "faq";
};

const pageIcons = {
  terms: FaFileContract,
  privacy: FaShieldHalved,
  faq: FaCircleQuestion,
};

export default function InfoPage({
  eyebrow,
  title,
  description,
  updatedAt,
  sections = [],
  faqItems = [],
  variant,
}: InfoPageProps) {
  const Icon = pageIcons[variant];

  return (
    <section className="bg-background text-foreground px-5 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid-bg rounded-[2rem] border border-border bg-background/80 px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-[#333] rounded-full px-5 py-1.5 text-[11px] font-bold uppercase text-foreground mb-7 bg-white/3">
              <span className="w-2 h-2 rounded-full bg-[#e8a020] shrink-0" />
              {eyebrow}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 text-amber-400 flex items-center justify-center text-2xl shrink-0">
                <Icon />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {variant === "faq" ? (
                    <>
                      <span className="text-amber-400">Frequently Asked</span>{" "}
                      Questions
                    </>
                  ) : (
                    title
                  )}
                </h1>
                {updatedAt ? (
                  <p className="text-sm text-amber-400 font-semibold uppercase tracking-widest mt-4">
                    Last updated: {updatedAt}
                  </p>
                ) : null}
              </div>
            </div>

            <p className="text-muted-foreground max-w-2xl mt-7 text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {sections.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 text-white p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold leading-snug">
                      {section.title}
                    </h2>
                    {section.body ? (
                      <p className="text-gray-400 leading-relaxed mt-3">
                        {section.body}
                      </p>
                    ) : null}
                  </div>
                </div>

                {section.items ? (
                  <ul className="mt-5 space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-gray-300 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}

        {faqItems.length > 0 ? (
          <Accordion type="single" collapsible className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 px-6 text-white transition-colors data-[state=open]:border-amber-400/70"
              >
                <AccordionTrigger className="py-6 text-lg font-bold text-white hover:no-underline [&>svg]:rounded-full [&>svg]:bg-yellow-500/10 [&>svg]:p-1 [&>svg]:text-amber-400">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-4xl pb-6 pt-0">
                  <p className="text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : null}
      </div>
    </section>
  );
}
