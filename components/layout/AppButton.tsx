"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { SiAppstore, SiGoogleplay } from "react-icons/si";

type AppButtonProps = {
  icon: string;
  title: string;
  desc: string;
};

export function AppButton({ icon, title, desc }: AppButtonProps) {
  return (
    <div className="flex items-center gap-3  justify-start ">
      {/* APP STORE */}
      <Link
        href="https://apps.apple.com/us/app/barberz-link/id6759682571"
        target="_blank"
      >
        <div className="flex justify-center items-center cursor-pointer  gap-2 rounded-xl bg-black px-4 py-2.5 text-white transition-colors hover:bg-black hover:shadow-sm hover:shadow-[#b59648]">
          <img src={icon} alt="" width={100} height={100} className="w-6" />

          <div className="leading-tight">
            <p className="text-[9px] opacity-60">{title}</p>

            <p className="text-[13px] font-bold">{desc}</p>
          </div>
        </div>
      </Link>

      {/* GOOGLE PLAY */}
      {/* <Link href="https://play.google.com/" target="_blank">
        <div className="flex cursor-pointer items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-white transition-colors hover:bg-black hover:shadow-sm hover:shadow-[#b59648] ">
          <img
            src="http://localhost:3000/images/home/playstore.png"
            alt=""
            width={100}
            height={100}
            className="w-6"
          />

          <div className="leading-tight">
            <p className="text-[9px] opacity-60">GET IT ON</p>

            <p className="text-[13px] font-bold">Google Play</p>
          </div>
        </div>
      </Link> */}
    </div>
  );
}
