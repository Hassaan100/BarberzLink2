// components/features/FeaturesHero.tsx
"use client";

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-500">
            Features
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Everything Barberz does,
            <span className="text-yellow-500"> in one place.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Barberz is a mobile app for proof-first hiring. Workers prove skills
            with short videos. Employers hire with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}