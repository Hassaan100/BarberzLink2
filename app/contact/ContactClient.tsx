"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, ShieldCheck, FileText } from "lucide-react";

export default function ContactSupport() {
  const [loading, setLoading] = useState(false);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (loading) return;

  setLoading(true);

  const formEl = e.currentTarget; // snapshot early

  const toastId = toast.loading("Submitting your request...");

  const form = new FormData(formEl);

  const payload = {
    name: form.get("name"),
    email: form.get("email"),
    phone: form.get("phone"),
    subject: form.get("subject"),
    message: form.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Something went wrong");
    }

    // replace loading toast instead of dismiss + new toast
    toast.success("Support request submitted successfully!", {
      id: toastId,
    });

    formEl.reset();

  } catch (err: any) {
    toast.error(err.message || "Failed to submit request", {
      id: toastId,
    });

  } finally {
    setLoading(false);
  }
}

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT PANEL */}
        <div className="bg-card border border-amber-400/40 rounded-2xl p-6 md:p-8 space-y-6 h-fit">

          <div>
            <h1 className="text-3xl font-bold">Contact Support</h1>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Reach out to our support team
              and we&apos;ll get back to you within 24–48 business hours.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-sm">

            <a
              href="mailto:support@barberzlink.com"
              className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-amber-400/50 transition"
            >
              <Mail className="w-4 h-4 mt-1 text-amber-400" />
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="font-medium">support@barberzlink.com</p>
              </div>
            </a>

            <a
              href="tel:+19043193632"
              className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-amber-400/50 transition"
            >
              <Phone className="w-4 h-4 mt-1 text-amber-400" />
              <div>
                <p className="text-muted-foreground">Phone</p>
                <p className="font-medium">(904) 319-3632</p>
              </div>
            </a>

          </div>

          {/* Legal */}
          <div className="space-y-2 text-sm text-muted-foreground">

            <Link href="/privacy-policy" className="flex items-center gap-2 hover:text-foreground">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions" className="flex items-center gap-2 hover:text-foreground">
              <FileText className="w-4 h-4 text-amber-400" />
              Terms & Conditions
            </Link>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-card border border-amber-400/40 rounded-2xl p-6 md:p-8 shadow-sm">

          <h2 className="text-xl font-semibold mb-6">
            Submit a Support Request
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input name="name" placeholder="Full Name"
              className="w-full bg-background border border-amber-400/30 rounded-lg px-4 py-3"
              required
            />

            <input name="email" type="email" placeholder="Email Address"
              className="w-full bg-background border border-amber-400/30 rounded-lg px-4 py-3"
              required
            />

            <input name="phone" placeholder="Phone Number (Optional)"
              className="w-full bg-background border border-amber-400/30 rounded-lg px-4 py-3"
            />

            <input name="subject" placeholder="Subject"
              className="w-full bg-background border border-amber-400/30 rounded-lg px-4 py-3"
              required
            />

            <textarea name="message" rows={5} placeholder="Message"
              className="w-full bg-background border border-amber-400/30 rounded-lg px-4 py-3 resize-none"
              required
            />

            <button
              disabled={loading}
              className="w-full bg-amber-400 hover:bg-amber-500 text-black rounded-lg py-3 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Support Request"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}