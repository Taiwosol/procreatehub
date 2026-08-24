"use client";

import Image from "next/image";
import Link from "next/link";
import FooterDark from "../../../__components/FooterDark";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-10">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Top Row */}
          <div className="hidden md:flex flex-row justify-between items-start mb-12">
            <span className="text-4xl md:text-6xl lg:text-[72px] font-medium text-black">
              (02)
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black tracking-tight">
              Branding
            </h1>
          </div>

          {/* Mobile Top Row */}
          <div className="flex md:hidden flex-row items-center gap-4 mb-8">
            <span className="text-4xl font-medium text-black">(02)</span>
            <h1 className="text-4xl font-medium leading-[1.1] text-black tracking-tight">
              Branding
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
                Branding
              </p>
            </div>
            <div className="flex flex-row justify-between items-start">
              <p className="text-sm max-w-md text-neutral-700">
                Welcome to our Branding showcase. We craft complete brand
                identity systems that tell compelling stories — from strategy
                and logo design to comprehensive visual guidelines that scale
                across multi-state operations.
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
                Branding
              </p>
            </div>
            <p className="text-sm text-neutral-700">
              Welcome to our Branding showcase. We craft complete brand identity
              systems that tell compelling stories through strategy, logo
              design, and comprehensive visual guidelines.
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
            src="/branding-album-img.jpg"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            alt="Brand identity hero presentation"
          />
        </div>
      </section>

      {/* Image 02 - 09 Grid */}
      <section className="pb-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-neutral-800">
                Concept &amp;
                <br />
                Identity Showcase
              </h2>
            </div>
            <p className="text-lg text-neutral-700">
              Our branding process begins with deep strategic discovery —
              understanding market positioning, audience personas, and
              competitive landscapes. We then translate insights into
              distinctive logos, color systems, typography suites, and
              collateral mockups that give brands an unmistakable presence.
              Every identity system ships with a comprehensive brand book for
              nationwide consistency.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/branding-album-img-01.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Logo design variations"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/branding-album-img-02.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Brand color palette system"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/branding-album-img-03.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Typography selection guide"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/branding-album-img-04.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Business card mockups"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/branding-album-img-05.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Stationery and letterhead design"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/branding-album-img-06.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Social media brand kit"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/branding-album-img-07.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Brand book and style guide"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/branding-album-img-08.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Signage and environmental branding"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Result Section */}
      <section className="pb-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <h2 className="text-2xl font-medium text-neutral-800">
              The Result
            </h2>
            <p className="text-lg text-neutral-700">
              The result is a brand identity that doesn&apos;t just look great —
              it performs. Clients receive identities that build instant
              recognition, communicate core values, and create emotional
              connections with customers. From local storefronts to nationwide
              chains, our brands maintain a cohesive, professional presence
              across every conceivable touchpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="pb-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-medium mb-8 text-neutral-800">
            Next Project
          </h2>
          <Link href="/works/album/packaging" className="block">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
              <span className="text-4xl md:text-6xl font-medium text-black">
                3
              </span>
              <h3 className="text-4xl md:text-6xl font-medium text-black">
                Packaging
              </h3>
            </div>
            <div className="relative w-full aspect-[16/9] overflow-hidden group">
              <Image
                src="/packaging-album-img.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Packaging project preview"
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
