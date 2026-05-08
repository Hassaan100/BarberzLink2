"use client";

import Link from "next/link";
import { FiX } from "react-icons/fi";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { SocialLinks } from "./SocialLinks";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

const homeSectionLinks = [
  { label: "Professional say it", href: "/#home" },
  { label: "See it in action", href: "/#see-it-in-action" },
  { label: "HOW IT WORKS", href: "/#how-it-works" },
  { label: "SEE THE DIFFERENCE", href: "/#professional-talk" },
  { label: "For Employers", href: "/#employers" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

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
        className={`fixed top-0 left-0 h-full w-64 bg-black z-50 p-6 flex flex-col gap-14
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header row */}
        <div className="flex items-center justify-between">
          <img src="/logo.png" alt="" className="w-14" />
          <button
            onClick={onClose}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Home section links */}
        <nav className="flex flex-col gap-7">
          {homeSectionLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="relative text-white/70 font-medium transition-all duration-200 px-1
            before:content-[''] before:absolute before:left-0 before:-bottom-1
            before:h-0.5 before:w-0 before:bg-amber-400
            before:transition-all before:duration-300
            hover:before:w-[80%] hover:text-white uppercase"
            >
              {link.label}
            </Link>
          ))}
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
