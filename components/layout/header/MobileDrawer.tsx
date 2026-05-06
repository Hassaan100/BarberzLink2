"use client";

import { FiX } from "react-icons/fi";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { NavLinks } from "./NavLinks";
import { SocialLinks } from "./SocialLinks";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black z-50 p-6 flex flex-col gap-6
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className="text-white font-black text-xl tracking-widest">
            <span className="text-yellow-400">V</span>ETANO
          </span>
          <button
            onClick={onClose}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Nav links (stacked) */}
        <nav className="flex flex-col gap-1">
          <NavLinks
            onLinkClick={onClose}
            linkClassName="text-lg py-3 hover:pl-3"
          />
        </nav>

        {/* Social links */}
        <SocialLinks />

        {/* Store icons (compact) */}
        <div className="flex gap-4 mt-auto">
          <a href="#" aria-label="App Store">
            <SiAppstore
              size={26}
              className="text-white/60 hover:text-white transition-colors"
            />
          </a>
          <a href="#" aria-label="Google Play">
            <SiGoogleplay
              size={24}
              className="text-white/60 hover:text-white transition-colors"
            />
          </a>
        </div>
      </div>
    </>
  );
}
