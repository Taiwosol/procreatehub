"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1];

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

/* The desktop bar leans on the logo to get you home; the mobile overlay covers
   it, so the overlay gets its own Home entry ahead of the shared links. */
const mobileNavLinks = [{ name: "Home", href: "/" }, ...navLinks];

const OPEN_HOURS = "Monday - Saturday 9AM-7PM";

/* A link owns the current page when the pathname matches it or sits beneath it,
   so /works/album/branding still lights up "Works". "/" only ever matches "/". */
function isRouteActive(pathname, href) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/* The nav sits on the dark hero on the homepage and on white inner pages, so
   every colour it paints is keyed off the background it is laid over. */
const THEMES = {
  dark: {
    link: "text-white/85 hover:text-white",
    linkActive: "text-white",
    bracket: "text-white/45 group-hover:text-white",
    bracketActive: "text-white",
    underline: "bg-white",
    /* invert + 180deg hue-rotate lifts the dark wordmark to white while keeping
       the grey "Cr8" and the red mark intact — brightness-0 invert flattened
       all three into one white blob. */
    logo: "[filter:invert(100%)_hue-rotate(180deg)_brightness(1.15)]",
    hoursIcon: "text-white",
    hoursLabel: "text-white/75",
    hoursValue: "text-white",
    toggle: "text-white",
    overlay: "bg-gray-950/95",
  },
  light: {
    link: "text-black/70 hover:text-black",
    linkActive: "text-black",
    bracket: "text-black/35 group-hover:text-black",
    bracketActive: "text-black",
    underline: "bg-black",
    logo: "",
    hoursIcon: "text-black",
    hoursLabel: "text-black/55",
    hoursValue: "text-black",
    toggle: "text-black",
    overlay: "bg-white/97",
  },
};

/* The current page holds the hover state permanently: brackets spread, underline
   drawn, full-strength text. */
function BracketLink({ name, href, onClick, theme, isActive = false }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`group relative inline-flex items-center gap-[2px] uppercase tracking-[0.12em] transition-colors duration-300 ${
        isActive ? theme.linkActive : theme.link
      }`}
    >
      <span
        className={`transition-all duration-300 group-hover:-translate-x-[3px] ${
          isActive ? `-translate-x-[3px] ${theme.bracketActive}` : theme.bracket
        }`}
      >
        (
      </span>
      <span className="relative">
        {name}
        <span
          className={`absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 ${
            isActive ? "scale-x-100" : "scale-x-0"
          } ${theme.underline}`}
        />
      </span>
      <span
        className={`transition-all duration-300 group-hover:translate-x-[3px] ${
          isActive ? `translate-x-[3px] ${theme.bracketActive}` : theme.bracket
        }`}
      >
        )
      </span>
    </Link>
  );
}

function ClockIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442Z" />
      <path d="M12 7V12L15 15" />
    </svg>
  );
}

/* Replaces the old "Let's talk" dropdown — a static opening-hours readout. */
function OpenHours({ theme, className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <ClockIcon className={`h-6 w-6 shrink-0 ${theme.hoursIcon}`} />
      <div className="leading-tight">
        <p className={`text-[13px] font-normal ${theme.hoursLabel}`}>
          Open Hours
        </p>
        <p className={`text-[13px] font-bold ${theme.hoursValue}`}>
          {OPEN_HOURS}
        </p>
      </div>
    </div>
  );
}

export default function HeroNavBar({ variant = "dark" }) {
  const theme = THEMES[variant] ?? THEMES.dark;
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: easeOutExpo, delay: 0.15 }}
      className="parkinsans relative z-50 w-full"
    >
      <div className="mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-10 py-5 lg:py-7">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 cursor-pointer">
          <Image
            src="/logo.png"
            alt="ProCr8Hub Logo"
            width={180}
            height={40}
            priority
            className={`h-8 md:h-10 w-auto ${theme.logo}`}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-[13px] xl:text-sm font-medium">
          {navLinks.map((link) => (
            <BracketLink
              key={link.href}
              name={link.name}
              href={link.href}
              theme={theme}
              isActive={isRouteActive(pathname, link.href)}
            />
          ))}
        </div>

        {/* Desktop opening hours */}
        <OpenHours theme={theme} className="hidden lg:flex" />

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(true)}
          className={`lg:hidden p-2 cursor-pointer ${theme.toggle}`}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className={`lg:hidden fixed inset-0 z-40 backdrop-blur-xl ${theme.overlay}`}
          >
            {/* Close button, aligned with the hamburger it replaces */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={closeMobile}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className={`absolute top-5 right-6 sm:right-8 p-2 cursor-pointer transition-opacity duration-300 hover:opacity-70 ${theme.toggle}`}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            <div className="flex h-full flex-col justify-center gap-7 px-8 text-2xl font-medium">
              {mobileNavLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08 * i,
                    ease: easeOutExpo,
                  }}
                >
                  <BracketLink
                    name={link.name}
                    href={link.href}
                    onClick={closeMobile}
                    theme={theme}
                    isActive={isRouteActive(pathname, link.href)}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.08 * mobileNavLinks.length,
                  ease: easeOutExpo,
                }}
                className="pt-4"
              >
                <OpenHours theme={theme} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
