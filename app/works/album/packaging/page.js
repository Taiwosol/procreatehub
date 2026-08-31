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
              (03)
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black tracking-tight">
              Packaging
            </h1>
          </div>

          {/* Mobile Top Row */}
          <div className="flex md:hidden flex-row items-center gap-4 mb-8">
            <span className="text-4xl font-medium text-black">(03)</span>
            <h1 className="text-4xl font-medium leading-[1.1] text-black tracking-tight">
              Packaging
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
                Packaging
              </p>
            </div>
            <div className="flex flex-row justify-between items-start">
              <p className="text-sm max-w-md text-neutral-700">
                Welcome to our Packaging showcase. We design and produce
                innovative packaging solutions that merge structural engineering
                with stunning graphics — helping products stand out on shelves
                and create memorable unboxing experiences nationwide.
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
                Packaging
              </p>
            </div>
            <p className="text-sm text-neutral-700">
              Welcome to our Packaging showcase. We design and produce
              innovative packaging solutions that merge structural engineering
              with stunning graphics for standout shelf presence.
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
            src="/packaging-album-img.jpg"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            alt="Premium packaging line hero"
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
                Packaging Showcase
              </h2>
            </div>
            <p className="text-lg text-neutral-700">
              Our packaging process fuses consumer research, structural
              prototyping, and graphic design into cohesive systems that both
              protect and elevate products. From eco-friendly mailer boxes to
              luxury rigid setups and food-safe flexible pouches, we engineer
              every element for function, sustainability, and emotional impact.
              All designs are optimized for nationwide distribution and
              high-volume production runs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/packaging-album-img-01.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Box packaging structural designs"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/packaging-album-img-02.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Luxury rigid box packaging"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/packaging-album-img-03.png"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Eco-friendly mailer packaging"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/packaging-album-img-04.png"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Flexible pouch packaging"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/packaging-album-img-05.png"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Product label design"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/packaging-album-img-06.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Sleeve and wrap packaging"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/packaging-album-img-07.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Cosmetic packaging line"
              />
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm group">
              <Image
                src="/packaging-album-img-08.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Retail display packaging"
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
              The result is packaging that works as hard as the products inside
              — driving purchase decisions at shelf level and earning social
              shares through unforgettable unboxing moments. Our clients see
              measurable lifts in perceived value, repeat purchases, and brand
              loyalty. Whether rolling out across a handful of boutiques or
              nationwide retail chains, every package meets the same exacting
              standards.
            </p>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="pb-16 px-6 md:px-10 lg:px-6 xl:px-5 2xl:px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-medium mb-8 text-neutral-800">
            Next Project
          </h2>
          <Link href="/works/album/gift-sales-procurement" className="block">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
              <span className="text-4xl md:text-6xl font-medium text-black">
                4
              </span>
              <h3 className="text-4xl md:text-6xl font-medium text-black">
                Gift Sales &amp; Procurement
              </h3>
            </div>
            <div className="relative w-full aspect-[16/9] overflow-hidden group">
              <Image
                src="/gift-album-img.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Gift sales and procurement preview"
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
