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
import { RxDashboard } from "react-icons/rx";
import { useIsMobile } from "@/hooks/use-mobile";
import { AppButton } from "@/components/layout/AppButton";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();
  return (
    <>
      {/* ── Mobile slide-out drawer ─────────────────────────────────── */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <header className="w-full bg-black border-b border-white/10 px-9 py-2 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: hamburger + logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-white hover:text-yellow-400 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <RxDashboard size={24} />
            </button>
            <nav className="hidden md:flex items-center gap-6">
              <NavLinks />
            </nav>
          </div>

          {/* Centre: desktop nav (hidden on mobile) */}

          {isMobile ? (
            <div className="flex gap-1 justify-center items-center">
              <Link href="/">
                {" "}
                <img
                  src="/icon.png"
                  alt="Mobile Logo"
                  width={100}
                  height={100}
                  className="w-10"
                />{" "}
              </Link>
              <div className="flex flex-col gap-0">
                <h1 className="text-white text-md font-bold">Barberz Link</h1>
                <p className="text-[10px] text-amber-400">
                  Hire. Connect. Grow
                </p>{" "}
              </div>{" "}
            </div>
          ) : (
            <Link href="/">
              {" "}
              <img
                src="/logo.png"
                alt="Desktop Logo"
                width={100}
                height={100}
                className="w-16"
              />{" "}
            </Link>
          )}
          {/* <Link href="/" aria-label="Go to homepage - BarberzLink">
  <Image
    src="/logo.png"
    width={206}
    height={230}
    alt="BarberzLink logo"
    className="w-16 cursor-pointer"
    priority
  />
</Link> */}
          {/* Right: theme toggle + socials + store badges */}
          <div className="flex items-center gap-3 justify-center">
            {/* Theme toggle – uses next-themes + shadcn DropdownMenu */}
            <ThemeToggle />

            {/* Social icons (sm+) */}
            <div className="hidden sm:flex">
              <SocialLinks />
            </div>

            {/* Store badges (lg+) */}
            <div className="hidden lg:flex justify-center items-center gap-4">
              <AppButton
                icon="/images/home/apple.png"
                title="Download on the"
                desc="App Store"
              />
              <AppButton
                icon="/images/home/playstore.png"
                title="Download on the"
                desc="Play Store"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
