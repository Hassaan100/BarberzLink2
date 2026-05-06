"use client";

import { SiAppstore, SiGoogleplay } from "react-icons/si";

export function StoreBadges() {
  return (
    <div className="flex items-center gap-2">
      <a
        href="#"
        className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-1.5 text-white hover:border-yellow-400/60 hover:text-yellow-400 transition-colors"
      >
        <SiAppstore size={18} />
        <div className="leading-tight">
          <p className="text-[9px] text-white/50">Download on the</p>
          <p className="text-[11px] font-semibold">App Store</p>
        </div>
      </a>
      <a
        href="#"
        className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-1.5 text-white hover:border-yellow-400/60 hover:text-yellow-400 transition-colors"
      >
        <SiGoogleplay size={16} />
        <div className="leading-tight">
          <p className="text-[9px] text-white/50">GET IT ON</p>
          <p className="text-[11px] font-semibold">Google Play</p>
        </div>
      </a>
    </div>
  );
}
