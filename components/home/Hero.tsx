"use client";

import { motion } from "framer-motion";

import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { FiPlay, FiShield, FiVideo, FiAward } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[linear-gradient(to_right,var(--hero-bg-from),var(--hero-bg-via),var(--hero-bg-to))] flex items-center px-8 md:px-16 py-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        
        {/* =====================================
            LEFT CONTENT
        ===================================== */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-xl"
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
            className="text-5xl md:text-[53px] font-black leading-tight mb-6"
          >
            <span className="text-foreground">
              Resumes say it.
            </span>

            <br />

            <span className="text-yellow-500">
              BarberzLink shows it.
            </span>
          </motion.h1>

          
          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-foreground text-xl leading-relaxed mb-8 max-w-lg"
          >
            The mobile app where you see ID-verified profiles,
            intro videos, and proof of skill before the interview.
            BarberzLink helps businesses hire faster for barbers,
            salons, beauty professionals, and grooming services.
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
            className="flex items-center gap-3 mb-4"
          >
            
            {/* APP STORE */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="flex items-center gap-2 bg-background text-foreground rounded-xl px-4 py-2.5 hover:bg-background transition-colors"
            >
              <SiAppstore size={22} />

              <div className="leading-tight">
                <p className="text-[9px] opacity-60">
                  Download on the
                </p>

                <p className="text-[13px] font-bold">
                  App Store
                </p>
              </div>
            </motion.a>

            
            {/* GOOGLE PLAY */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="flex items-center gap-2 bg-background text-foreground rounded-xl px-4 py-2.5 hover:bg-background transition-colors"
            >
              <SiGoogleplay size={20} />

              <div className="leading-tight">
                <p className="text-[9px] opacity-60">
                  GET IT ON
                </p>

                <p className="text-[13px] font-bold">
                  Google Play
                </p>
              </div>
            </motion.a>
          </motion.div>

          
          {/* SMALL TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-foreground text-md mb-6"
          >
            Book appointments, connect with barbers,
            and manage your grooming business inside
            the BarberzLink mobile app.
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
            className="inline-flex items-center gap-2 border border-yellow-500/50 text-foreground rounded-full px-5 py-2.5 hover:border-yellow-400 transition-colors mb-10"
          >
            <FiPlay
              size={16}
              className="text-yellow-500"
            />

            <span className="text-sm font-medium">
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
              <FiShield
                size={14}
                className="text-yellow-500/70"
              />

              ID-Verified
            </motion.span>

            
            <motion.span
              whileHover={{ y: -3 }}
              className="flex items-center gap-1.5"
            >
              <FiVideo
                size={14}
                className="text-yellow-500/70"
              />

              Intro Videos
            </motion.span>

            
            <motion.span
              whileHover={{ y: -3 }}
              className="flex items-center gap-1.5"
            >
              <FiAward
                size={14}
                className="text-yellow-500/70"
              />

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
            className="absolute top-0 right-4 flex items-center gap-2 bg-label border border-span rounded-full px-3 py-1.5 z-10"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />

            <span className="text-yellow-500 text-xs font-semibold tracking-widest uppercase">
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
            className="relative w-70 h-145 bg-[#111] rounded-[45px] border-4 border-[#333] shadow-2xl overflow-hidden"
          >
            
            <div className="w-full h-full bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] p-5 flex flex-col">
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}