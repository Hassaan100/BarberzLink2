"use client";

import { motion } from "framer-motion";
import { FaScissors } from "react-icons/fa6";

const professions = [
  {
    name: "BARBER",
    icon: <FaScissors />,

    professionalItems: [
      '"Build Your Profile"',
      '"Record Skill Videos"',
      '"Get Hired Faster"',
    ],
  },

  {
    name: "BARBERSHOP",
    icon: <FaScissors />,

    professionalItems: [
      '"Post Your Opening"',
      '"Review Skill Videos"',
      '"Hire with Confidence"',
    ],
  },

  {
    name: "BARBERSCHOOL",
    icon: <FaScissors />,

    professionalItems: [
      '"Create School Profile"',
      '"Share Student Work"',
      '"Connect with Talent"',
    ],
  },

  {
    name: "EVENT_ORGANIZER",
    icon: <FaScissors />,

    professionalItems: [
      '"Post Your Event Need"',
      '"Browse Verified Talent"',
      '"Book with Proof"',
    ],
  },

  {
    name: "BUSINESS_RESOURCE",
    icon: <FaScissors />,

    professionalItems: [
      '"List Your Resource"',
      '"Reach the Right Shops"',
      '"Grow Your Network"',
    ],
  },

  {
    name: "PRODUCT_ADVERTISER",
    icon: <FaScissors />,

    professionalItems: [
      '"Create Your Listing"',
      '"Target Barbers Directly"',
      '"Track Engagement"',
    ],
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

function ProfessionCol({
  prof,
  index,
}: {
  prof: (typeof professions)[0];
  index: number;
}) {
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
      className="flex flex-col bg-black p-5 rounded-2xl border border-[#666457] hover:border-amber-400/40 transition-all duration-300"
    >
      <div className="flex items-center gap-2.5 mb-3.5">
        {/* ICON */}
        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.08,
          }}
          className="w-8.5 h-8.5 rounded-[9px] bg-[rgba(245,166,35,0.13)] border border-[rgba(245,166,35,0.28)] flex items-center justify-center shrink-0 text-amber-400"
        >
          {prof.icon}
        </motion.div>

        {/* TITLE */}
        <motion.span
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
          className="text-[16px] font-bold text-white"
        >
          {prof.name}
        </motion.span>
      </div>

      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        className="bg-[#ffff] rounded-xl px-4.5 py-4 mb-2.5"
      >
        {/* TOP LABEL */}
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#999]">
            Professional Says
          </span>
        </div>

        {/* ITEMS */}
        <div className="flex flex-col gap-1.75">
          {prof.professionalItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: i * 0.08,
                duration: 0.4,
              }}
              viewport={{
                once: true,
              }}
              className="flex items-start gap-2"
            >
              <span className="text-[#bbb] text-[13px] mt-px shrink-0">—</span>

              <span className="text-[12.5px] text-[#555] italic leading-snug">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProfessionalTalk() {
  return (
    <section
      id="professional-talk"
      className="grid-bg min-h-screen scroll-mt-20 bg-background flex items-center justify-center px-6 py-20 overflow-hidden"
    >
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
        className="max-w-275 w-full flex flex-col items-center text-center"
      >
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
          SEE THE DIFFERENCE
        </motion.div>

        <motion.h2
          variants={fadeUp}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.1] text-foreground mb-3.5"
        >
          Professional talks.{" "}
          <span className="text-amber-400">BarberzLink shows.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="text-[15px] text-foreground mb-12 max-w-120 leading-relaxed"
        >
          Words on paper versus proof on video — the choice is clear.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{
            duration: 0.8,
          }}
          className="grid grid-cols-3 gap-5 w-full max-[700px]:grid-cols-1"
        >
          {professions.map((prof, i) => (
            <ProfessionCol key={i} prof={prof} index={i} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
