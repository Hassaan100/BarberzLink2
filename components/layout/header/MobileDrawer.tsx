"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FiX } from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";

import { SocialLinks } from "./SocialLinks";
import { useIsMobile } from "@/hooks/use-mobile";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

/* =========================
   MOBILE NAV LINKS
   REAL PAGES ONLY
========================= */

const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

/* =========================
   DESKTOP NAV LINKS
   SECTION IDS
========================= */

const desktopSectionLinks = [
  { label: "Professional say it", href: "/#home" },
  { label: "See it in action", href: "/#see-it-in-action" },
  { label: "HOW IT WORKS", href: "/#how-it-works" },
  { label: "SEE THE DIFFERENCE", href: "/#professional-talk" },
  { label: "For Employers", href: "/#employers" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const router = useRouter();

  const isMobile = useIsMobile();

  const handleDesktopNavigation = (href: string) => {
    onClose();

    const id = href.split("#")[1];

    // USER NOT ON HOME PAGE
    if (window.location.pathname !== "/") {
      router.push(`/#${id}`);

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);

      return;
    }

    // USER ALREADY ON HOME PAGE
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
            className="fixed top-0 left-0 z-50 flex h-full w-72 flex-col bg-black p-6"
          >
            {/* HEADER */}
            <div className="mb-12 flex items-center justify-between">
              <img src="/logo.png" alt="Logo" className="w-14" />

              <button
                onClick={onClose}
                className="text-white transition-colors hover:text-yellow-400"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* =========================
                MOBILE NAVIGATION
                REAL PAGES ONLY
            ========================= */}

            {isMobile ? (
              <>
                <nav className="flex flex-col gap-7">
                  {mobileNavLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      whileHover={{ x: 8 }}
                      whileTap={{
                        scale: 0.96,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="
                            relative inline-block px-1
                            text-sm font-medium uppercase
                            tracking-wider text-white/70
                            transition-all duration-300
                            before:absolute before:left-0
                            before:-bottom-1 before:h-0.5
                            before:w-0 before:bg-amber-400
                            before:transition-all
                            before:duration-300
                            before:content-['']
                            hover:text-white
                            hover:before:w-[80%]
                          "
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* SOCIAL LINKS */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="mt-10"
                >
                  <SocialLinks />
                </motion.div>

                {/* APP STORE + PLAY STORE */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                  }}
                  className="mt-10 mb-4 flex  gap-5  justify-start items-center"
                >
                  {/* APP STORE */}
                  <Link
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                    >
                      <img
                        src="/images/home/apple.png"
                        alt="Apple Store"
                        width={100}
                        height={100}
                        className="w-6"
                      />
                    </motion.div>
                  </Link>

                  {/* GOOGLE PLAY */}
                  <Link
                    href="https://play.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                    >
                      <img
                        src="/images/home/playstore.png"
                        alt="Google Play"
                        width={100}
                        height={100}
                        className="w-8"
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              </>
            ) : (
              <>
                {/* =========================
                    DESKTOP NAVIGATION
                    SECTION IDS
                ========================= */}

                <nav className="flex flex-col gap-7">
                  {desktopSectionLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      whileHover={{ x: 8 }}
                      whileTap={{
                        scale: 0.96,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();

                          handleDesktopNavigation(link.href);
                        }}
                        className="
                            relative inline-block px-1
                            text-sm font-medium uppercase
                            tracking-wider text-white/70
                            transition-all duration-300
                            before:absolute before:left-0
                            before:-bottom-1 before:h-0.5
                            before:w-0 before:bg-amber-400
                            before:transition-all
                            before:duration-300
                            before:content-['']
                            hover:text-white
                            hover:before:w-[80%]
                          "
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* SOCIAL LINKS */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="mt-10"
                >
                  <SocialLinks />
                </motion.div>

                {/* APP STORE + PLAY STORE */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                  }}
                  className="mt-10 mb-4 flex  gap-3  justify-start items-center"
                >
                  {/* APP STORE */}
                  <Link
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="
                       
                      "
                    >
                      <img
                        src="/images/home/apple.png"
                        alt="Apple Store"
                        width={100}
                        height={100}
                        className="w-6"
                      />
                    </motion.div>
                  </Link>

                  {/* GOOGLE PLAY */}
                  <Link
                    href="https://play.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className="
                    
                      "
                    >
                      <img
                        src="/images/home/playstore.png"
                        alt="Google Play"
                        width={100}
                        height={100}
                        className="w-8`"
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
