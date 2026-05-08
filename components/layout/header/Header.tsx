"use client";


import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import { MobileDrawer } from "./MobileDrawer";
import { NavLinks } from "./NavLinks";
import { SocialLinks } from "./SocialLinks";
import { StoreBadges } from "./StoreBadges";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      {/* ── Mobile slide-out drawer ─────────────────────────────────── */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <header className="w-full bg-black border-b border-white/10 px-2 py-2 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Left: hamburger + logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-white hover:text-yellow-400 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <FiMenu size={24} />
            </button>
            <nav className="hidden md:flex items-center gap-6">
            <NavLinks />
          </nav>
            
          </div>

          {/* Centre: desktop nav (hidden on mobile) */}
          

<Link href="/" aria-label="Go to homepage - BarberzLink">
  <Image
    src="/logo.png"
    width={206}
    height={230}
    alt="BarberzLink logo"
    className="w-16 cursor-pointer"
    priority
  />
</Link>
          {/* Right: theme toggle + socials + store badges */}
          <div className="flex items-center gap-3">
            {/* Theme toggle – uses next-themes + shadcn DropdownMenu */}
            <ThemeToggle />

            {/* Social icons (sm+) */}
            <div className="hidden sm:flex">
              <SocialLinks />
            </div>

            {/* Store badges (lg+) */}
            <div className="hidden lg:flex">
              <StoreBadges />
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
