"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("system");
  const [themeMenu, setThemeMenu] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem("theme", theme);
    if (theme === "dark") root.classList.add("dark");
    else if (theme === "light") root.classList.remove("dark");
    else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      prefersDark ? root.classList.add("dark") : root.classList.remove("dark");
    }
  }, [theme]);

  const ThemeIcon =
    theme === "light" ? FiSun : theme === "dark" ? FiMoon : FiMonitor;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black z-50 p-6 flex flex-col gap-6 transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between">
          <span className="text-white font-black text-xl tracking-widest">
            <span className="text-yellow-400">V</span>ETANO
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-yellow-400"
          >
            <FiX size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className=" text-white/70 
before:content-[''] 
text-lg
before:absolute 
before:left-0 
before:-bottom-1 
before:h-0.5 
before:w-0
before:bg-amber-400 
before:transition-all 
before:duration-300 
hover:before:w-full 
font-medium 
transition-all 
duration-200 
px-1 py-3
hover:pl-3"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4 mt-2">
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

      <header className="w-full bg-black border-b border-white/10 px-2 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 ">
            <button
              onClick={() => setOpen(true)}
              className="text-white hover:text-yellow-400 transition-colors cursor-pointer"
            >
              <FiMenu size={24} />
            </button>
            <img
              src="https://barberzlink.netlify.app/assets/logo-UdJIIqTR.png"
              className="w-20 cursor-pointer"
              alt=""
              srcset=""
            />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-white/70 
before:content-[''] 
before:absolute 
before:left-0 
before:-bottom-1 
before:h-0.5 
before:w-0 
before:bg-amber-400 
before:transition-all 
before:duration-300 
hover:before:w-full 
font-medium 
transition-all 
duration-200 

px-1 
"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setThemeMenu(!themeMenu)}
                className="text-white/70 hover:text-yellow-400 transition-colors p-1.5 rounded-md"
              >
                <ThemeIcon size={18} />
              </button>
              {themeMenu && (
                <div className="absolute right-0 top-9 bg-zinc-900 border border-white/10 rounded-md py-1 w-32 z-50">
                  {[
                    ["light", FiSun, "Light"],
                    ["dark", FiMoon, "Dark"],
                    ["system", FiMonitor, "System"],
                  ].map(([val, Icon, label]) => (
                    <button
                      key={val}
                      onClick={() => {
                        setTheme(val);
                        setThemeMenu(false);
                      }}
                      className={`flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-white/10 ${theme === val ? "text-yellow-400" : "text-white/80"}`}
                    >
                      <Icon size={14} /> {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Social */}
            <div className="hidden sm:flex items-center gap-3 text-white/60">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-white transition-colors"
              >
                <FaInstagram size={17} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <FaLinkedinIn size={17} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-white transition-colors"
              >
                <FaTwitter size={17} />
              </a>
            </div>

            {/* Store Badges */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="#"
                className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-1.5 text-white hover:border-white/50 transition-colors"
              >
                <SiAppstore size={18} />
                <div className="leading-tight">
                  <p className="text-[9px] text-white/50">Download on the</p>
                  <p className="text-[11px] font-semibold">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-1.5 text-white hover:border-white/50 transition-colors"
              >
                <SiGoogleplay size={16} />
                <div className="leading-tight">
                  <p className="text-[9px] text-white/50">GET IT ON</p>
                  <p className="text-[11px] font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
