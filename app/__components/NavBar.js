"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navLinks = [
    { name: "Explore", href: "#", isDropdown: true },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Contact", href: "/contact" },
  ];

  const exploreLinks = [
    { name: "Testimonials", href: "/testimonials" },
    { name: "Services", href: "/services" },
  ];

  const isLinkActive = (link) => {
    if (link.isDropdown) {
      return exploreLinks.some((s) => pathname?.startsWith(s.href));
    }
    if (link.href === "/works") {
      return pathname?.startsWith("/works");
    }
    return pathname === link.href;
  };

  return (
    <nav className="bg-white w-full z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="cursor-pointer block">
              <Image
                src="/logo.png"
                alt="ProCr8Hub Logo"
                width={180}
                height={40}
                loading="lazy"
                className="h-7 md:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 md:space-x-8 xl:space-x-10">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                {link.isDropdown ? (
                  <div
                    className="flex items-center cursor-pointer"
                    onMouseEnter={() => setIsExploreOpen(true)}
                    onMouseLeave={() => setIsExploreOpen(false)}
                  >
                    <span
                      className={`flex items-center text-black font-bold text-base md:text-lg`}
                    >
                      <span
                        className={`mr-2 h-1 w-4 bg-black transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300`}
                      ></span>
                      <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                        {link.name}
                      </span>
                    </span>
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    {isExploreOpen && (
                      <div
                        className={`absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg py-2`}
                      >
                        {exploreLinks.map((sublink, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sublink.href}
                            className="flex items-center px-4 py-2 text-sm transition-all duration-300 group/sub"
                            onClick={() => setIsExploreOpen(false)}
                          >
                            <span className="mr-2 h-0.5 w-3 bg-black transform scale-x-0 origin-left group-hover/sub:scale-x-100 transition-transform duration-300"></span>
                            <span className="text-black font-semibold hover:font-bold transform transition-transform duration-300 group-hover/sub:translate-x-2">
                              {sublink.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href} className="flex items-center group">
                    <span
                      className={`mr-2 h-1 w-4 bg-black transition-all duration-300 ${
                        isLinkActive(link)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      } transform origin-left`}
                    ></span>
                    <span
                      className={`text-black font-bold text-base md:text-lg transform transition-transform duration-300 ${
                        isLinkActive(link)
                          ? "translate-x-2"
                          : "group-hover:translate-x-2"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}

            <div className="h-6 w-px bg-gray-300 mx-1 md:mx-2" />

            <div
              className="relative group"
              onMouseEnter={() => setIsContactOpen(true)}
              onMouseLeave={() => setIsContactOpen(false)}
            >
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold text-base transition-colors duration-300 flex items-center cursor-pointer">
                Let&apos;s talk
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isContactOpen && (
                <div
                  className={`absolute top-full right-0 mt-0 w-64 bg-white shadow-lg rounded-lg py-4 px-4 z-50`}
                >
                  <a
                    href="tel:+2348093206395"
                    className="flex items-center py-2 text-black font-bold text-sm md:text-base cursor-pointer rounded px-2 transition-all duration-200 group/sub"
                  >
                    <span className="mr-2 h-1 w-4 bg-black transform scale-x-0 origin-left group-hover/sub:scale-x-100 transition-transform duration-300"></span>
                    <span className="transform transition-transform duration-300 group-hover/sub:translate-x-2">
                      Call: 08093206395
                    </span>
                  </a>
                  <a
                    href="mailto:info@procr8hub.com"
                    className="flex items-center py-2 text-black font-bold text-sm md:text-base cursor-pointer hover:bg-gray-50 rounded px-2 transition-all duration-200 group/sub"
                  >
                    <span className="mr-2 h-1 w-4 bg-black transform scale-x-0 origin-left group-hover/sub:scale-x-100 transition-transform duration-300"></span>
                    <span className="transform transition-transform duration-300 group-hover/sub:translate-x-2">
                      Email: info@procr8hub.com
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden bg-white border-t`}>
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                {link.isDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsExploreOpen(!isExploreOpen)}
                      className="flex items-center justify-between w-full text-black font-bold text-xl py-2 group"
                    >
                      <span className="flex items-center">
                        <span
                          className={`mr-2 h-1 w-4 bg-black transition-all duration-300 ${isExploreOpen || isLinkActive(link) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                        ></span>
                        <span
                          className={`transition-transform duration-300 ${isExploreOpen || isLinkActive(link) ? "translate-x-2" : "group-hover:translate-x-2"}`}
                        >
                          {link.name}
                        </span>
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExploreOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isExploreOpen && (
                      <div className="ml-6 mt-2 space-y-2">
                        {exploreLinks.map((sublink, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sublink.href}
                            className="flex items-center py-2 text-black font-semibold group"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsExploreOpen(false);
                            }}
                          >
                            <span className="mr-2 h-0.5 w-3 bg-black transform scale-x-0 origin-left group-hover/sub:scale-x-100 transition-transform duration-300"></span>
                            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                              {sublink.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center text-black font-bold text-xl py-2 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span
                      className={`mr-2 h-1 w-4 bg-black transition-all duration-300 ${
                        isLinkActive(link)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                    <span
                      className={`transform transition-transform duration-300 ${
                        isLinkActive(link)
                          ? "translate-x-2"
                          : "group-hover:translate-x-2"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4">
              <div>
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="flex items-center justify-between w-full text-black font-bold text-xl py-2 group"
                >
                  <span className="flex items-center">
                    <span
                      className={`mr-2 h-1 w-4 bg-black transition-all duration-300 ${isContactOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    ></span>
                    <span
                      className={`transition-transform duration-300 ${isContactOpen ? "translate-x-2" : "group-hover:translate-x-2"}`}
                    >
                      Let&apos;s talk
                    </span>
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isContactOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isContactOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    <a
                      href="tel:+2348093206395"
                      className="flex items-center py-2 text-black font-semibold group"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsContactOpen(false);
                      }}
                    >
                      <span className="mr-2 h-0.5 w-3 bg-black transform scale-x-0 origin-left group-hover/sub:scale-x-100 transition-transform duration-300"></span>
                      <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                        Call: 08093206395
                      </span>
                    </a>
                    <a
                      href="mailto:info@procr8hub.com"
                      className="flex items-center py-2 text-black font-semibold group"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsContactOpen(false);
                      }}
                    >
                      <span className="mr-2 h-0.5 w-3 bg-black transform scale-x-0 origin-left group-hover/sub:scale-x-100 transition-transform duration-300"></span>
                      <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                        Email: info@procr8hub.com
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
