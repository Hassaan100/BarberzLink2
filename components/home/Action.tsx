"use client";

import { motion } from "framer-motion";

export default function Action() {
 
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

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          staggerChildren: 0.15,
        }}
        className="max-w-3xl w-full py-20 flex flex-col items-center text-center"
      >
        
    
        <motion.div
          variants={fadeUp}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-flex items-center gap-2 border border-[#333] rounded-full px-5 py-1.5 text-[11px] font-bold uppercase text-foreground mb-7 bg-white/3"
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

          See it in action
        </motion.div>

        
        <motion.h2
          variants={fadeUp}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-extrabold text-5xl leading-[1.1] text-foreground mb-5 font-sans"
        >
          See how BarberzLink works in
          <br />

          <span className="text-[#f5a623]">
            56 seconds
          </span>
        </motion.h2>

        
       
        <motion.div
          variants={fadeUp}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="inline-flex items-center gap-2 border border-[#3a3a3a] rounded-full px-4 py-[6px] text-xs text-[#aaa] mb-4 bg-white/[0.03]"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <circle
              cx="6.5"
              cy="6.5"
              r="5.5"
              stroke="#888"
              strokeWidth="1.2"
            />

            <path
              d="M6.5 3.5v3l2 1.5"
              stroke="#888"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>

          56-second video
        </motion.div>

       
        <motion.p
          variants={fadeUp}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="text-[#888] text-[15px] leading-relaxed max-w-lg mb-9"
        >
          This 56-second video is a quick walkthrough
          of the platform — it shows how the product
          works, not how long hiring takes.
        </motion.p>

       
        <motion.div
          variants={fadeUp}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.02,
          }}
          className="w-full"
        >
          <motion.video
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full aspect-video object-cover block rounded-2xl border-2 border-amber-400 shadow-[0_0_50px_rgba(245,166,35,0.15)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}