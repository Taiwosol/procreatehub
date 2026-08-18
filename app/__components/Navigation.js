"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation({ textColor = "text-white" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Desktop Navigation */}
      <ul
        className={`hidden md:flex justify-between items-center ${textColor} text-lg md:text-xl font-bold px-10 py-8`}
      >
        <li>
          <Link
            href="/"
            className={`font-black italic text-xl tracking-tighter ${textColor}`}
          >
            BRACELAND
          </Link>
        </li>
        <div className="flex gap-20">
          <li>
            <Link
              href="/about"
              className={`${textColor} hover:opacity-70 transition-opacity`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className={`${textColor} hover:opacity-70 transition-opacity`}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`${textColor} hover:opacity-70 transition-opacity`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${textColor} hover:opacity-70 transition-opacity`}
            >
              Contact
            </Link>
          </li>
        </div>
      </ul>

      {/* Mobile/Tablet Navigation */}
      <div
        className={`md:hidden flex flex-col w-full transition-colors duration-300 ${
          isOpen ? "bg-white min-h-screen" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex-1 md:hidden"></div>
          <Link
            href="/"
            className={`font-black italic text-xl tracking-tighter flex-1 text-center transition-colors ${
              isOpen ? "text-black" : textColor
            }`}
          >
            BRACELAND
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex-1 flex justify-end focus:outline-none transition-colors ${
              isOpen ? "text-black" : textColor
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Links */}
        {isOpen && (
          <ul className="flex flex-col gap-8 px-6 pt-12 pb-8 text-black text-4xl font-normal">
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/works" onClick={() => setIsOpen(false)}>
                Works
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
