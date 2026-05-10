import Link from "next/link";
import { FaArrowRight, FaCircleQuestion } from "react-icons/fa6";

import { faqPage } from "@/components/content/infoPages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPreview() {
  const previewFaqs = faqPage.faqItems.slice(0, 4);

  return (
    <section id="faq" className="bg-background px-5 py-20 text-foreground">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#333] bg-white/3 px-5 py-1.5 text-[11px] font-bold uppercase text-foreground">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#e8a020]" />
            FAQ
          </div>
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
         <span className="text-amber-400">Quick answers </span>before you get started
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A few common questions from clients, barbers, beauty professionals,
            shops, schools, and employers using BarberzLink.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {previewFaqs.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 px-6 text-white transition-colors data-[state=open]:border-amber-400/70"
            >
              <AccordionTrigger className="py-6 text-left text-lg font-bold text-white hover:no-underline [&>svg]:rounded-full [&>svg]:bg-yellow-500/10 [&>svg]:p-1 [&>svg]:text-amber-400">
                <span className="flex items-center gap-3">
                  <FaCircleQuestion className="shrink-0 text-amber-400" />
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="max-w-4xl pb-6 pt-0">
                <p className="text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex justify-center">
          <Link
            href="/faq"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-amber-400 px-7 text-sm font-bold text-black transition-colors hover:bg-amber-300"
          >
            View All FAQ
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
