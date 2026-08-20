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
              (01)
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black tracking-tight">
              Printing Production
            </h1>
          </div>

          {/* Mobile Top Row */}
          <div className="flex md:hidden flex-row items-center gap-4 mb-8">
            <span className="text-4xl font-medium text-black">(01)</span>
            <h1 className="text-4xl font-medium leading-[1.1] text-black tracking-tight">
              Printing Production
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
                Printing
              </p>
            </div>
            <div className="flex flex-row justify-between items-start">
              <p className="text-sm max-w-md text-neutral-700">
                Welcome to our Printing Production showcase. We deliver
                high-caliber prints across large-format, digital, and offset
                outputs — engineered for clarity, color accuracy, and durability
                for multi-state deployments.
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
                Printing
              </p>
            </div>
            <p className="text-sm text-neutral-700">
              Welcome to our Printing Production showcase. We deliver
              high-caliber prints across large-format, digital, and offset
              outputs — engineered for clarity, color accuracy, and durability.
            </p>
            <button
              onClick={() => {
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                });
              }}
              className="text-black text-xs uppercase tracking-widest font-medium border-b border-black pb-1 hover:opacity-60 transition-opacity flex items-center gap-2 self-start"
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
            src="/printing-album-img.jpg"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            alt="Large format printing production"
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
                Production Showcase
              </h2>
            </div>
            <p className="text-lg text-neutral-700">
              Our production process begins with meticulous color calibration
              and material selection. From business cards and brochures to
              billboards and vehicle wraps, every project undergoes rigorous
              quality checks to ensure consistent, vibrant results across every
              run. We specialize in delivering nationwide print campaigns with
              uniform excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/printing-album-img-01.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Digital press output samples"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/printing-album-img-02.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Large format banner printing"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/printing-album-img-03.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Premium business card finishing"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/printing-album-img-04.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Packaging print samples"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/printing-album-img-05.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Poster and flyer production"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/printing-album-img-06.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Vehicle wrap installation"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/printing-album-img-07.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Sticker and label printing"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/printing-album-img-08.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Signage and display boards"
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
              The result is print production that doesn&apos;t merely reproduce
              designs — it elevates them. Our clients receive outputs that
              maintain brand consistency across nationwide campaigns, impress at
              trade shows, and convert customers at retail touchpoints. Every
              sheet, every banner, every wrap is a testament to precision
              engineering and uncompromising quality control.
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
          <Link href="/works/album/branding" className="block">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
              <span className="text-4xl md:text-6xl font-medium text-black">
                2
              </span>
              <h3 className="text-4xl md:text-6xl font-medium text-black">
                Branding
              </h3>
            </div>
            <div className="relative w-full aspect-[16/9] overflow-hidden group">
              <Image
                src="/branding-album-img.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Branding project preview"
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
