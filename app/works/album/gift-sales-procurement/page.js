"use client";

import Image from "next/image";
import Link from "next/link";
import FooterDark from "../../../__components/FooterDark";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-8 lg:px-6 xl:px-5 2xl:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Top Row */}
          <div className="hidden md:flex flex-row justify-between items-start mb-12">
            <span className="text-4xl md:text-6xl lg:text-[72px] font-medium text-black">
              (04)
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black tracking-tight">
              Gift Sales &amp; Procurement
            </h1>
          </div>

          {/* Mobile Top Row */}
          <div className="flex md:hidden flex-row items-center gap-4 mb-8">
            <span className="text-4xl font-medium text-black">(04)</span>
            <h1 className="text-4xl font-medium leading-[1.1] text-black tracking-tight">
              Gift Sales &amp; Procurement
            </h1>
          </div>

          {/* Desktop Bottom Row */}
          <div className="hidden md:flex flex-col gap-8">
            <div className="flex flex-row justify-between items-start">
              <Link
                href="/works"
                className="text-black text-xs uppercase tracking-widest font-medium border-b border-black pb-1 hover:opacity-60 transition-opacity"
              >
                All Projects
              </Link>
              <p className="text-xs uppercase tracking-widest font-medium text-neutral-700">
                Gifts
              </p>
            </div>
            <div className="flex flex-row justify-between items-start">
              <p className="text-sm max-w-md text-neutral-700">
                Welcome to our Gift Sales &amp; Procurement showcase. We curate
                premium corporate gifts, custom branded merchandise, and
                end-to-end procurement services — helping organizations
                celebrate, incentivize, and make lasting impressions across
                multi-state operations.
              </p>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="text-black text-xs uppercase tracking-widest font-medium border-b border-black pb-1 hover:opacity-60 transition-opacity flex items-center gap-2"
              >
                Scroll Down <span>↓</span>
              </button>
            </div>
          </div>

          {/* Mobile Bottom Row */}
          <div className="flex md:hidden flex-col gap-6">
            <div className="flex flex-row justify-between items-center">
              <Link
                href="/works"
                className="text-black text-xs uppercase tracking-widest font-medium border-b border-black pb-1 hover:opacity-60 transition-opacity"
              >
                ← All Projects
              </Link>
              <p className="text-xs uppercase tracking-widest font-medium text-neutral-700">
                Gifts
              </p>
            </div>
            <p className="text-sm text-neutral-700">
              Welcome to our Gift Sales &amp; Procurement showcase. We curate
              premium corporate gifts, custom branded merchandise, and
              end-to-end procurement services for lasting impressions.
            </p>
            <button
              onClick={() => {
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer text-black text-xs uppercase tracking-widest font-medium border-b border-black pb-1 hover:opacity-60 transition-opacity flex items-center gap-2 self-start"
            >
              Scroll Down <span>↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* Image 01 */}
      <section className="pb-16">
        <div className="relative w-full aspect-[16/9] overflow-hidden group">
          <Image
            src="/gift-album-img.jpg"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            alt="Curated corporate gift collection hero"
          />
        </div>
      </section>

      {/* Image 02 - 09 Grid */}
      <section className="pb-16 px-6 md:px-10 lg:px-6 xl:px-5 2xl:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-neutral-800">
                Concept &amp;
                <br />
                Gift Showcase
              </h2>
            </div>
            <p className="text-lg text-neutral-700">
              Our gifting and procurement process begins with understanding the
              occasion, recipient, and desired impression. We source globally
              and locally to assemble collections that range from premium
              executive gifts and custom-branded swag to bulk employee
              appreciation kits. Every item is curated, branded, and packaged
              with care, supported by transparent logistics for nationwide
              rollouts.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/gift-album-img-01.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Custom branded gift sets"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/gift-album-img-02.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Corporate holiday gift boxes"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/gift-album-img-03.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Premium executive gifts"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/gift-album-img-04.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Employee appreciation kits"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/gift-album-img-05.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Custom branded merchandise"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/gift-album-img-06.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Event and conference swag"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/gift-album-img-07.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Welcome onboarding packages"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/gift-album-img-08.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Award and recognition trophies"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Result Section */}
      <section className="pb-16 px-6 md:px-10 lg:px-6 xl:px-5 2xl:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <h2 className="text-2xl font-medium text-neutral-800">
              The Result
            </h2>
            <p className="text-lg text-neutral-700">
              The result is gifting and procurement that feels personal at
              scale. Clients we work with report stronger employee engagement,
              elevated brand perception at events, and meaningful client
              retention through thoughtful, beautifully executed gifts. Our
              turnkey service — from concept and sourcing to branding and
              nationwide delivery — lets teams focus on their people while we
              handle every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Next Project Section - loop back to first */}
      <section className="pb-16 px-6 md:px-10 lg:px-6 xl:px-5 2xl:px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-medium mb-8 text-neutral-800">
            Next Project
          </h2>
          <Link href="/works/album/printing-production" className="block">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
              <span className="text-4xl md:text-6xl font-medium text-black">
                1
              </span>
              <h3 className="text-4xl md:text-6xl font-medium text-black">
                Printing Production
              </h3>
            </div>
            <div className="relative w-full aspect-[16/9] overflow-hidden group">
              <Image
                src="/printing-album-img.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Printing production project preview"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <FooterDark />
    </main>
  );
}
