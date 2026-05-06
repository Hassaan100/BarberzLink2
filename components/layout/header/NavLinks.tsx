"use client";

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

interface NavLinksProps {
  /** Extra classes applied to each <a> tag */
  linkClassName?: string;
  onLinkClick?: () => void;
}

export function NavLinks({ linkClassName = "", onLinkClick }: NavLinksProps) {
  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onLinkClick}
          className={`relative text-white/70 font-medium transition-all duration-200 px-1
            before:content-[''] before:absolute before:left-0 before:-bottom-1
            before:h-0.5 before:w-0 before:bg-amber-400
            before:transition-all before:duration-300
            hover:before:w-full hover:text-white
            ${linkClassName}`}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}
