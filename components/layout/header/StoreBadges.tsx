"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { SiAppstore, SiGoogleplay } from "react-icons/si";

export function StoreBadges() {
  return (
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.6 }}
  className="flex items-center gap-3 mb-4 "
>
  
  {/* APP STORE */}
  <Link
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex cursor-pointer items-center gap-2 rounded-xl bg-background px-4 py-2.5 text-foreground transition-colors hover:bg-background"
    >
      <img src="http://localhost:3000/images/home/apple.png" alt="" width={100} height={100} className="w-8" />

      <div className="leading-tight">
        <p className="text-[9px] opacity-60">
          Download on the
        </p>

        <p className="text-[13px] font-bold">
          App Store
        </p>
      </div>
    </motion.div>
  </Link>

  
  {/* GOOGLE PLAY */}
  <Link
    href="https://play.google.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex cursor-pointer items-center gap-2 rounded-xl bg-background px-4 py-2.5 text-foreground transition-colors hover:bg-background"
    >
      <img src="http://localhost:3000/images/home/playstore.png" alt="" width={100} height={100} className="w-8" />

      <div className="leading-tight">
        <p className="text-[9px] opacity-60">
          GET IT ON
        </p>

        <p className="text-[13px] font-bold">
          Google Play
        </p>
      </div>
    </motion.div>
  </Link>
</motion.div>

  );
}
