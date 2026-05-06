"use client";

import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3 text-white/60">
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
  );
}
