import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { GiUsaFlag } from "react-icons/gi";
import logo from "@/public/Assets/logo.png";

const socialLinks = [
  { name: "Twitter", href: "#", icon: <FaTwitter /> },
  { name: "Facebook", href: "#", icon: <FaFacebookF /> },
  { name: "Instagram", href: "#", icon: <FaInstagram /> },
  { name: "YouTube", href: "#", icon: <FaYoutube /> },
  { name: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
];

const platformLinks = [
  { label: "Job", href: "#" },
  { label: "Events", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Licensing", href: "#" },
  { label: "Products", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },

];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "FAQ", href: "/faq" },
  { label: "Support", href: "/support" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white/80 px-4 sm:px-8  pt-12 lg:pt-16 pb-8 w-full border-t border-[#ffffff4f] overflow-hidden!">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 lg:mb-14 lg:w-7xl m-auto ">
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <img src="https://barberzlink.netlify.app/assets/logo-UdJIIqTR.png" alt="Barberz Link" width={80} className="mb-4" />

          <p className="text-sm text-white/80 leading-relaxed mb-5 max-w-[240px]">
            A professional networking & marketplace platform connecting the
            barber industry across all 50 states.
          </p>

          <div className="flex gap-2 mb-5">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="w-8 h-8 rounded-lg border border-[#99a1af]/20 bg-white/5
                           flex items-center justify-center text-[#99a1af] text-sm
                           hover:border-amber-400 hover:text-amber-400 transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#99a1af]/20 rounded-lg px-3 py-1.5 overflow-hidden!">
            <GiUsaFlag className="text-amber-400 text-sm" />
            <span className="text-xs text-white/80">
              Available{" "}
              <span className="text-amber-400 font-medium">Nationwide</span> ·
              United States
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
            Platform
          </p>
          <ul className="space-y-3">
            {platformLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/80 hover:text-amber-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
            Company
          </p>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/80 hover:text-amber-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
            Legal
          </p>
          <ul className="space-y-3">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/80 hover:text-amber-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#99a1af]/20 mb-7" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-7xl m-auto ">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-xs text-white/80">
            <MdLocationOn className="text-amber-400 text-sm shrink-0" />
            716 New Berlin Rd, Ste 15, Jacksonville, FL 32218
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 overflow-hidden">
            <a
              href="mailto:support@barberzlink.com"
              className="flex items-center gap-1.5 text-xs text-white/80 hover:text-amber-400 transition-colors"
            >
              <MdEmail className="text-amber-400 text-sm shrink-0" />
              contact@barberzlink.com
            </a>
            <a
              href="tel:9043193632"
              className="flex items-center gap-1.5 text-xs text-white/80 hover:text-amber-400 transition-colors"
            >
              <MdPhone className="text-amber-400 text-sm shrink-0" />
              (904) 319-3632
            </a>
          </div>
        </div>

        <div className="text-left sm:text-right overflow-hidden">
          <p className="text-xs text-[#99a1af]/60">
            © Barberz Link LLC. All rights reserved.
          </p>
          <p className="text-xs text-[#99a1af]/40 mt-1 max-w-xs sm:ml-auto leading-relaxed">
            Barberz Link does not sell or share phone numbers for third-party
            marketing. Reply STOP to unsubscribe.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
