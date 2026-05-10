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
    title: "Create your job on BarberzLink",
    desc: "Define what skills candidates should show on video—before you ever interview.",
  },

  {
    number: "02",
    icon: <RiShareForwardFill size={26} />,
    title: "Share your BarberzLink job link",
    desc: "Paste your BarberzLink link into Indeed, Craigslist, Facebook, or your website.",
  },

  {
    number: "03",
    icon: <MdVerified size={26} />,
    title: "Review verified applicants",
    desc: "Watch skill videos from real candidates and shortlist only the best fits.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function StepCard({ step }: { step: (typeof steps)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="w-full md:flex-1 overflow-visible pt-5"
    >
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="overflow-visible relative rounded-[20px] transition-all duration-500 cursor-default bg-[#161410] h-full"
        style={{
          border: `1px solid ${hovered ? "#e8a020" : "#2a2620"}`,
          boxShadow: hovered
            ? "0 20px 40px rgba(232,160,32,0.12)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.4,
            type: "spring",
          }}
          viewport={{ once: true }}
          className="absolute -top-4 left-7 w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-extrabold z-10"
          style={{
            background: "#e8a020",
            color: "#0d0d0b",
          }}
        >
          {step.number}
        </motion.div>

        <CardContent className="pt-10 pb-8 px-6 text-left flex flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            whileHover={{
              rotate: 5,
              scale: 1.05,
            }}
            className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 bg-background text-foreground"
          >
            {step.icon}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="text-base md:text-[18px] font-extrabold mb-3 text-white leading-snug"
          >
            {step.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="text-sm leading-relaxed text-white/60"
          >
            {step.desc}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Employers() {
  return (
    <section
      id="employers"
      className="relative min-h-screen scroll-mt-20 px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-24 bg-background overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="absolute -top-28 left-1/2 -translate-x-1/2 w-100 sm:w-175 h-75 sm:h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,160,32,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={stagger}
        className="relative z-10 max-w-265 mx-auto text-center"
      >
        {/* ==========================================
            BADGE
        ========================================== */}
        <motion.div
          variants={fadeUp}
          transition={{
            duration: 0.6,
          }}
          className="inline-flex items-center gap-2 border border-[#333] rounded-full px-5 py-1.5 text-[11px] font-bold uppercase text-foreground mb-6 bg-white/5"
        >
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-2 h-2 rounded-full bg-[#e8a020] shrink-0"
          />
          For Employers
        </motion.div>

        {/* ==========================================
            HEADING
        ========================================== */}
        <motion.h1
          variants={fadeUp}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-black leading-none mb-5 text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Build the team{" "}
          <span className="text-amber-400">you've always wanted.</span>
        </motion.h1>

        {/* ==========================================
            SUBTEXT
        ========================================== */}
        <motion.p
          variants={fadeUp}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="max-w-sm sm:max-w-lg md:max-w-xl mx-auto mb-12 sm:mb-16 leading-relaxed text-foreground/60 text-sm sm:text-base"
        >
          You've been burned before. BarberzLink lets you see real skills before
          you commit—so you stop hoping and start knowing.
        </motion.p>

        {/* ==========================================
            STEP CARDS
        ========================================== */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-4">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
