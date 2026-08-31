"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      className="w-5 h-5 shrink-0"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <footer className="bg-white py-0 w-full">
      {/* Newsletter Section (Ash / Light Gray) - Full Width */}
      <div className="bg-neutral-300 border-t border-b border-neutral-400/50 py-6 md:py-8 w-full">
        <div className=" mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Left Column: Newsletter Heading & Copy */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-950 leading-[1.05] tracking-tight">
                Subscribe to
                <br />
                our newsletter
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl xl:text-[1.3rem] 2xl:text-2xl leading-8 max-w-xl">
                Join our newsletter to get exclusive insights, timely updates,
                and expert tips that help you take control of your brand&apos;s
                growth, visibility, and creative direction.
              </p>
            </div>

            {/* Right Column: Newsletter Form or Success */}
            <div className="space-y-4 min-h-[160px]">
              {subscribed ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-50/90 px-5 py-4 shadow-sm animate-[fadeIn_.35s_ease-out]"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
                    <Check />
                  </div>
                  <div className="space-y-1">
                    <p className="text-base lg:text-lg xl:text-xl font-black text-emerald-900 leading-tight">
                      You&apos;re in! Welcome aboard.
                    </p>
                    <p className="text-sm lg:text-base xl:text-lg font-medium text-emerald-800/90 leading-relaxed">
                      Thanks for subscribing — keep an eye on your inbox for
                      exclusive updates, brand insights, and creative tips.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 tracking-wide">
                    Stay Informed
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-5 py-4 rounded-full bg-white text-gray-950 placeholder-gray-500 border border-neutral-400/60 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-base lg:text-lg xl:text-xl"
                      required
                    />
                    <button
                      type="submit"
                      className="shrink-0 bg-gray-900 hover:bg-black text-white font-black px-8 py-4 rounded-full transition-colors duration-300 cursor-pointer tracking-normal text-base lg:text-lg xl:text-xl shadow-sm hover:shadow-md"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-gray-600 text-sm lg:text-base leading-6">
                    By subscribing you agree to our{" "}
                    <Link
                      href="/terms"
                      className="text-gray-900 underline underline-offset-2 hover:no-underline cursor-pointer font-semibold"
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
      <div className="bg-black py-8 w-full">
        <div className=" mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-auto">
            <div className="space-y-5">
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
                  className="h-8 w-auto md:h-12 object-contain"
                />
              </Link>
              <p className="text-gray-400 text-lg lg:text-xl xl:text-2xl leading-7 xl:leading-9">
                Quality digital services to bring your brand ideas to life. We
                offer creative solutions that inspire, influence, and convert.
              </p>
            </div>

            <div>
              <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-200 mb-6 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors text-lg lg:text-xl xl:text-2xl"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors text-lg lg:text-xl xl:text-2xl"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/works"
                    className="text-gray-400 hover:text-white transition-colors text-lg lg:text-xl xl:text-2xl"
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-400 hover:text-white transition-colors text-lg lg:text-xl xl:text-2xl"
                  >
                    Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors text-lg lg:text-xl xl:text-2xl"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-200 mb-6 uppercase tracking-wider">
                Follow Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.instagram.com/procr8_hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-lg lg:text-xl xl:text-2xl"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Procr8_hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-lg lg:text-xl xl:text-2xl"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/2348093206395?text=Hello%20Procr8Hub!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-lg lg:text-xl xl:text-2xl"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-200 mb-6 uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors text-lg lg:text-xl xl:text-2xl"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
