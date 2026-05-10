import Link from "next/link";
import { ArrowRight, Headphones, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full rounded-3xl border border-amber-400/20 bg-card p-8 md:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Need Help or Want to Work With Us?
              </h2>

              <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                Whether you&apos;re facing an issue or planning your next
                project, our team is ready to assist you. Choose the right
                option below.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              {/* Contact CTA */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-medium text-black transition hover:bg-amber-500 min-w-[190px]"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Support CTA */}
              <Link
                href="/support"
                className="flex items-center justify-center gap-2 rounded-xl border border-amber-400/30 px-6 py-3 font-medium text-foreground transition hover:border-amber-400 hover:bg-amber-400/5 min-w-[190px]"
              >
                <Headphones className="w-4 h-4 text-amber-400" />
                Get Support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
