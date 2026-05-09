import Link from "next/link";
import { ArrowRight, Headphones, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-card border border-amber-400/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Left Content */}
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Help or Want to Work With Us?
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Whether you&apos;re facing an issue or planning your next project,
              our team is ready to assist you. Choose the right option below.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-black font-medium hover:bg-amber-500 transition"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Support CTA */}
            <Link
              href="/support"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-amber-400/40 hover:border-amber-400 text-foreground font-medium transition"
            >
              <Headphones className="w-4 h-4 text-amber-400" />
              Get Support
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}