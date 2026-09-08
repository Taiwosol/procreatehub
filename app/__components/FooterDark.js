"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/works", label: "Works" },
  { href: "/pricing", label: "Packages" },
  { href: "/contact", label: "Contact us" },
];

const socialLinks = [
  { href: "https://www.instagram.com/procr8_hub", label: "Instagram" },
  { href: "https://x.com/Procr8_hub", label: "X (Twitter)" },
  {
    href: "https://wa.me/2348093206395?text=Hello%20Procr8Hub!",
    label: "WhatsApp",
  },
];

const legalLinks = [{ href: "/terms", label: "Terms & Conditions" }];

// Shared type scale so every footer column reads at the same weight
const columnHeading =
  "text-[11px] sm:text-xs lg:text-[13px] font-semibold text-gray-300 uppercase tracking-[0.14em] mb-5 lg:mb-6";
const columnLink =
  "text-[13px] sm:text-sm lg:text-[15px] text-gray-400 hover:text-white transition-colors";

export default function FooterDark() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", { email });
    setEmail("");
    setSubscribed(true);
  };

  useEffect(() => {
    if (!subscribed) return;
    const t = setTimeout(() => setSubscribed(false), 6000);
    return () => clearTimeout(t);
  }, [subscribed]);

  const Check = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <footer className="bg-white w-full">
      {/* Newsletter Section (Ash / Light Gray) - Full Width */}
      <div className="bg-neutral-300 border-t border-b border-neutral-400/50 py-8 md:py-10 lg:py-12 w-full">
        {/* Horizontal padding mirrors HeroCinematic so sections align down the page */}
        <div className="mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">
            {/* Left Column: Newsletter Heading & Copy */}
            <div>
              <p className="text-[11px] sm:text-xs lg:text-[13px] text-gray-600 mb-3 lg:mb-4">
                Newsletter
              </p>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-medium text-gray-950 leading-[1.18] tracking-tight">
                Subscribe to our newsletter
              </h2>
              <p className="mt-5 lg:mt-6 text-gray-700 text-[13px] sm:text-sm lg:text-[15px] xl:text-base leading-[1.65] max-w-md">
                Join our newsletter to get exclusive insights, timely updates,
                and expert tips that help you take control of your brand&apos;s
                growth, visibility, and creative direction.
              </p>
            </div>

            {/* Right Column: Newsletter Form or Success */}
            <div className="md:pt-8 min-h-[168px]">
              {subscribed ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-50/90 px-5 py-5 shadow-sm animate-[fadeIn_.35s_ease-out]"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                    <Check />
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-sm lg:text-base font-semibold text-emerald-900 leading-snug">
                      You&apos;re in! Welcome aboard.
                    </p>
                    <p className="text-[13px] lg:text-sm text-emerald-800/90 leading-[1.65]">
                      Thanks for subscribing — keep an eye on your inbox for
                      exclusive updates, brand insights, and creative tips.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-[11px] sm:text-xs lg:text-[13px] font-semibold text-gray-900 uppercase tracking-[0.14em] mb-4 lg:mb-5">
                    Stay Informed
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 min-w-0 px-5 py-3.5 rounded-full bg-white text-gray-950 placeholder-gray-500 border border-neutral-400/60 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-[13px] sm:text-sm lg:text-[15px]"
                      required
                    />
                    <button
                      type="submit"
                      className="shrink-0 bg-gray-900 hover:bg-black text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-300 cursor-pointer text-[13px] sm:text-sm lg:text-[15px] shadow-sm hover:shadow-md"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="mt-4 text-gray-600 text-[12px] sm:text-[13px] leading-relaxed">
                    By subscribing you agree to our{" "}
                    <Link
                      href="/terms"
                      className="text-gray-900 underline underline-offset-2 hover:no-underline cursor-pointer font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Original Footer Texts (Black Background) - Full Width */}
      <div className="bg-black pt-8 md:pt-10 lg:pt-12 pb-8 lg:pb-10 w-full">
        <div className="mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">
            <div className="sm:col-span-2 lg:col-span-5 lg:pr-12">
              <Link
                href="/"
                className="cursor-pointer inline-block bg-white p-3"
              >
                <Image
                  src="/logo.png"
                  alt="ProCr8Hub Logo"
                  width={180}
                  height={40}
                  loading="lazy"
                  className="h-8 w-auto md:h-10 object-contain"
                />
              </Link>
              <p className="mt-6 text-gray-400 text-[13px] sm:text-sm lg:text-[15px] leading-[1.7] max-w-sm">
                Quality digital services to bring your brand ideas to life. We
                offer creative solutions that inspire, influence, and convert.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h4 className={columnHeading}>Quick Links</h4>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={columnLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className={columnHeading}>Follow Us</h4>
              <ul className="space-y-3.5">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={columnLink}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className={columnHeading}>Legal</h4>
              <ul className="space-y-3.5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={columnLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 md:mt-16 lg:mt-20 pt-6 lg:pt-8 border-t border-white/10">
            <p className="text-[12px] sm:text-[13px] text-gray-500">
              &copy; {new Date().getFullYear()} ProCr8Hub Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
