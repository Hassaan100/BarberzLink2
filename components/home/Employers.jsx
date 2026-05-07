"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsBagPlusFill } from "react-icons/bs";
import { RiShareForwardFill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: <BsBagPlusFill size={26} />,
    title: "Create your job on Vetano",
    desc: "Define what skills candidates should show on video—before you ever interview.",
  },
  {
    number: "02",
    icon: <RiShareForwardFill size={26} />,
    title: "Share your Vetano job link",
    desc: "Paste your Vetano link into Indeed, Craigslist, Facebook, or your website.",
  },
  {
    number: "03",
    icon: <MdVerified size={26} />,
    title: "Review verified applicants",
    desc: "Watch skill videos from real candidates and shortlist only the best fits.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

function StepCard({ step }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // mobile: full width | md: equal flex columns
      className="w-full md:flex-1 overflow-visible pt-5"
    >
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="overflow-visible relative rounded-[20px] transition-all duration-300 cursor-default bg-[#161410] h-full"
        style={{
          border: `1px solid ${hovered ? "#e8a020" : "#2a2620"}`,
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
        }}
      >
        {/* Number Badge */}
        <div
          className="absolute -top-4 left-7 w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-extrabold z-10"
          style={{ background: "#e8a020", color: "#0d0d0b" }}
        >
          {step.number}
        </div>

        <CardContent className="pt-10 pb-8 px-6 text-left flex flex-col">
          {/* Icon */}
          <div className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 bg-background text-foreground">
            {step.icon}
          </div>

          {/* Title */}
          <p className="text-base md:text-[18px] font-extrabold mb-3 text-white leading-snug">
            {step.title}
          </p>

          {/* Description */}
          <p className="text-sm leading-relaxed text-white/60">{step.desc}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Employers() {
  return (
    <section className=" relative min-h-screen px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-24 bg-background overflow-hidden">
      {/* Amber glow */}
      <div
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-[400px] sm:w-[700px] h-[300px] sm:h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,160,32,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative z-10 max-w-[1060px] mx-auto text-center"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 border border-[#333] rounded-full px-5 py-1.5 text-[11px] font-bold uppercase text-foreground mb-6 bg-white/5"
        >
          <div className="w-2 h-2 rounded-full bg-[#e8a020] shrink-0" />
          For Employers
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="font-black leading-none mb-5 text-foreground
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Build the team{" "}
          <span className="text-amber-400">you've always wanted.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-sm sm:max-w-lg md:max-w-xl mx-auto mb-12 sm:mb-16 leading-relaxed text-foreground/60 text-sm sm:text-base"
        >
          You've been burned before. Vetano lets you see real skills before you
          commit—so you stop hoping and start knowing.
        </motion.p>

        {/* Step Cards — stack on mobile, row on md+ */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
