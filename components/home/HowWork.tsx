// @ts-nocheck 

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";

// BARBER STEPS
const barberSteps = [
  {
    num: "01",
    title: "Post Barber Jobs",
    desc: "Share your barber job listings across social media, websites, flyers, and business platforms to hire skilled barbers faster.",
    icon: <PiSuitcaseSimpleBold />,
  },

  {
    num: "02",
    title: "Hire Skilled Barbers",
    desc: "Connect with experienced and talented barbers ready to grow your shop, support clients, and strengthen your business.",
    icon: <IoShareSocialSharp />,
  },

  {
    num: "03",
    title: "Fastest Growing Network",
    desc: "Join a rapidly growing barber community designed to connect shops, professionals, and new business opportunities.",
    icon: <FaPlayCircle />,
  },

  {
    num: "04",
    title: "Business Growth",
    desc: "Expand your barber business, attract more customers, and build long-term success through trusted barber connections.",
    icon: <IoShieldCheckmark />,
  },
];

// BARBER SHOP STEPS
const barberShopSteps = [
  {
    num: "01",
    title: "Find Barber Jobs",
    desc: "Explore barber job opportunities shared by trusted shops and businesses looking for skilled professionals near you.",
    icon: <IoMdVideocam />,
  },

  {
    num: "02",
    title: "Become a Licensed Barber",
    desc: "Start your barber journey, gain valuable experience, and grow your professional skills with real opportunities.",
    icon: <IoMdVideocam />,
  },

  {
    num: "03",
    title: "Grow Your Talent and Skills",
    desc: "Improve your barber expertise, build confidence, and connect with professionals who help grow your career faster.",
    icon: <MdOutlineSearch />,
  },

  {
    num: "04",
    title: "Get Hired Faster",
    desc: "Promote your barber profile across multiple platforms to connect with shops and secure opportunities more quickly.",
    icon: <IoCheckmarkCircleOutline />,
  },
];

// SMOOTH ANIMATION
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

// STEP CARD
function StepCard({ step, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
      }}
      className="bg-background border border-[#222] rounded-2xl flex flex-col transition-all duration-300 p-3 z-5 "
    >
      
      
          {/* IMAGE */}
      <div className="relative  rounded-2xl">
        
        <motion.img
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.5,
          }}
          src="https://vetano.com/assets/post-job-BlPbTb9p.png"
          alt=""
          className="rounded-2xl w-full"
        />

        
        {/* NUMBER */}
        <motion.div
          initial={{
            scale: 0,
            rotate: -180,
          }}
          whileInView={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            type: "spring",
          }}
          viewport={{
            once: true,
          }}
          className="absolute top-[-20] right-[-15] w-[40px] h-[40px] rounded-full border-[1.5px] border-[#f5a623] text-[#f5a623] text-[12px] font-bold flex items-center justify-center bg-[#0d0d0d] z-50"
        >
          {step.num}
        </motion.div>
      </div>

      
          {/* CONTENT */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        
        <div className="flex justify-start items-center gap-5">
          
          
          {/* ICON */}
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
            className="w-10 h-10 rounded-[9px] bg-[rgba(245,166,35,0.12)] border border-[rgba(245,166,35,0.25)] flex items-center justify-center mb-2.5 shrink-0 text-amber-400"
          >
            {step.icon}
          </motion.div>

          
          {/* TITLE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="text-[20px] font-bold text-foreground mb-1.5 text-start"
          >
            {step.title}
          </motion.div>
        </div>

        
        {/* DESCRIPTION */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="text-[15px] text-foreground leading-relaxed text-start"
        >
          {step.desc}
        </motion.div>
      </div>
    </motion.div>
  );
}

// MAIN COMPONENT
export default function HowWorks() {
  const [tab, setTab] = useState("barber");

  const steps =
    tab === "barber"
      ? barberSteps
      : barberShopSteps;

  return (
    <section id="how-it-works" className="min-h-screen scroll-mt-20 bg-background flex items-center justify-center px-5 py-16 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          staggerChildren: 0.15,
        }}
        className="max-w-7xl w-full flex flex-col items-center text-center"
      >
        
        
            {/* TOP BADGE */}
        <motion.div
          variants={fadeUp}
          transition={{
            duration: 0.7,
          }}
          className="inline-flex items-center gap-2 border border-[#333] rounded-full px-5 py-1.5 text-[11px] font-bold uppercase text-foreground mb-7 bg-white/5"
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

          HOW IT WORKS
        </motion.div>

        
            {/* HEADING */}
        <motion.h2
          variants={fadeUp}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[clamp(36px,5.5vw,62px)] font-extrabold leading-[1.08] text-foreground mb-4"
        >
          From Skills to{" "}

          <span className="text-amber-400">
            Success
          </span>
        </motion.h2>

        
            {/* SUBTEXT */}
        <motion.p
          variants={fadeUp}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="text-[16px] text-[#777] mb-9 max-w-125 leading-relaxed"
        >
          A simple process that puts real abilities
          front and center.
        </motion.p>

        
            {/* TABS */}
       
        <motion.div
          variants={fadeUp}
          transition={{
            duration: 0.8,
          }}
          className="inline-flex bg-[rgba(255,255,255,0.06)] border border-[#2a2a2a] rounded-full p-1.25 gap-1 mb-12"
        >
          {["barber", "barber-Shop"].map((t) => (
            <motion.button
              key={t}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => setTab(t)}
              className={`px-7 py-2 rounded-full text-[14px] font-medium transition-all duration-300 border-none cursor-pointer ${
                tab === t
                  ? "bg-amber-400 text-[#0d0d0d] font-semibold"
                  : "bg-transparent text-foreground hover:text-foreground hover:bg-white/6"
              }`}
            >
              {t === "barber"
                ? "Barberz"
                : "Barberz Shop"}
            </motion.button>
          ))}
        </motion.div>

        
            {/* CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.5,
            }}
            className="grid grid-cols-4 gap-4 w-full max-[800px]:grid-cols-2 max-[480px]:grid-cols-1 "
          >
            {steps.map((step, i) => (
              <StepCard
                key={i}
                step={step}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
