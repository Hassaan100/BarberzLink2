"use client";
// @ts-ignore

import { motion } from "framer-motion";

import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { FiPlay, FiShield, FiVideo, FiAward } from "react-icons/fi";
import Link from "next/link";
import { AppButton } from "../layout/AppButton";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen scroll-mt-20 bg-[linear-gradient(to_right,var(--hero-bg-from),var(--hero-bg-via),var(--hero-bg-to))] flex items-center px-8 md:px-16 py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* =====================================
            LEFT CONTENT
        ===================================== */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-xl "
        >
          {/* TOP LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-yellow-600/50 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="text-yellow-500 text-xs font-semibold tracking-widest uppercase">
              Barbers · Bookings · Style
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-3xl md:text-[53px] font-black leading-tight mb-6"
          >
            <span className="text-foreground">Professional say it.</span>

            <br />

            <span className="text-yellow-500">BarberzLink shows it.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-md text-foreground md:text-xl leading-relaxed mb-8 max-w-lg"
          >
            The mobile app where you see ID-verified profiles, intro videos, and
            proof of skill before the interview. BarberzLink helps businesses
            hire faster for barbers, salons, beauty professionals, and grooming
            services.
          </motion.p>

          {/* DOWNLOAD TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-yellow-500 text-sm font-bold tracking-widest uppercase mb-4"
          >
            Download the BarberzLink App — Free
          </motion.p>

          {/* APP BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="py-5 flex gap-4"
          >
            <AppButton
              icon="/images/home/apple.png"
              title="Download on the"
              desc="App Store"
            />
            <AppButton
              icon="/images/home/playstore.png"
              title="Download on the"
              desc="Play Store"
            />
          </motion.div>

          {/* SMALL TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-foreground text-md mb-6"
          >
            Book appointments, connect with barbers, and manage your grooming
            business inside the BarberzLink mobile app.
          </motion.p>

          {/* DEVICE TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-[#a3a3a3] text-sm mb-8"
          >
            iPhone & Android · Free to download
          </motion.p>

          {/* TOUR BUTTON */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className=" bg-[#161410] inline-flex items-center gap-2 border border-yellow-500/50 text-foreground rounded-full px-5 py-2.5 hover:border-yellow-400 transition-colors mb-10 "
          >
            <FiPlay size={16} className="text-yellow-500" />

            <span className="text-sm font-medium text-amber-400">
              Watch the 56-second tour
            </span>
          </motion.a>

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 text-foreground text-sm"
          >
            <motion.span
              whileHover={{ y: -3 }}
              className="flex items-center gap-1.5"
            >
              <FiShield size={14} className="text-yellow-500/70" />
              ID-Verified
            </motion.span>

            <motion.span
              whileHover={{ y: -3 }}
              className="flex items-center gap-1.5"
            >
              <FiVideo size={14} className="text-yellow-500/70" />
              Intro Videos
            </motion.span>

            <motion.span
              whileHover={{ y: -3 }}
              className="flex items-center gap-1.5"
            >
              <FiAward size={14} className="text-yellow-500/70" />
              Proof of Skill
            </motion.span>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE MOBILE MOCKUP */}

        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex-1 flex justify-center items-center relative"
        >
          {/* APP PREVIEW BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-[-3] bg-black right-25 flex items-center gap-2 bg-label border border-span rounded-full px-3 py-1.5 z-10"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse " />

            <span className="text-yellow-500 text-xs font-semibold tracking-widest uppercase shadown-lg shadow-amber-400">
              App Preview
            </span>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-160 w-77.5 rounded-[58px] border-10 border-[#2f3033] bg-[#0b0b0d] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:h-175 sm:w-85"
            aria-label="iPhone 14 Pro Max app preview"
          >
            <div className="absolute -left-3.75 top-28 h-16 w-1.5 rounded-l-full bg-[#2f3033]" />
            <div className="absolute -left-3.75 top-52 h-12 w-1.5 rounded-l-full bg-[#2f3033]" />
            <div className="absolute -right-3.75 top-40 h-20 w-1.5 rounded-r-full bg-[#2f3033]" />

            <div className="relative h-full w-full overflow-hidden rounded-[44px] border border-white/10 bg-linear-to-b from-[#171717] via-[#0f0f10] to-black">
              <div className="absolute left-1/2 top-3 z-20 h-8 w-28 -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
