"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { SiAppstore, SiGoogleplay } from "react-icons/si";

export function StoreBadges() {
  return (
      <div
 
  className="flex items-center gap-3  justify-center "
>
  
  {/* APP STORE */}
  <Link
    href="https://www.apple.com/app-store/"
    target="_blank"
   
  >
    <div
      
      className="flex justify-center items-center cursor-pointer  gap-2 rounded-xl bg-black px-4 py-2.5 text-white transition-colors hover:bg-black hover:shadow-sm hover:shadow-[#b59648]"
    >
      <img src="http://localhost:3000/images/home/apple.png" alt="" width={100} height={100} className="w-6" />

      <div className="leading-tight">
        <p className="text-[9px] opacity-60">
          Download on the
        </p>

        <p className="text-[13px] font-bold">
          App Store
        </p>
      </div>
    </div>
  </Link>

  
  {/* GOOGLE PLAY */}
  <Link
    href="https://play.google.com/"
    target="_blank"
  >
    <div
      
      className="flex cursor-pointer items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-white transition-colors hover:bg-black hover:shadow-sm hover:shadow-[#b59648] "
    >
      <img src="http://localhost:3000/images/home/playstore.png" alt="" width={100} height={100} className="w-6" />

      <div className="leading-tight">
        <p className="text-[9px] opacity-60">
          GET IT ON
        </p>

        <p className="text-[13px] font-bold">
          Google Play
        </p>
      </div>
    </div>
  </Link>
</div>

  );
}
