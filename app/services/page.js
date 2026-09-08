"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from "../__components/CTASection";
import ScrollReveal from "../__components/ScrollReveal";
import Footer from "../__components/Footer";
import heroImg from "../../public/hero-print.jpg";
import servicesImg01 from "../../public/branding-album-img-01.jpg";
import servicesImg02 from "../../public/printing-album-img-02.jpg";
import servicesImg03 from "../../public/packaging-album-img-03.png";
import servicesImg04 from "../../public/printing-album-img-07.jpg";
import servicesImg05 from "../../public/space-img.jpg";
import servicesImg06 from "../../public/print-img-new.jpg";
import servicesImg07 from "../../public/selection-img-06.jpg";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ScrollReveal>
        <section className="relative pt-12 pb-16">
          <div className=" mx-auto px-8">
            {/* Hero Text */}
            <div className="flex flex-col md:flex-col justify-between items-start  mb-12 gap-8">
              <h1 className="text-[22px] sm:text-2xl md:text-[32px] lg:text-[38px] xl:text-[42px] font-medium leading-[1.15] text-black max-w-4xl tracking-tight">
                Premium print and branding solutions built for businesses that
                mean business.
              </h1>
              <div className="flex w-full justify-between items-center gap-15">
                <Link
                  href="/contact"
                  className="text-black text-lg font-bold  pb-1 hover:opacity-60 transition-opacity"
                >
                  Let&apos;s Work Together
                </Link>
                <button
                  onClick={() => {
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                      behavior: "smooth",
                    });
                  }}
                  className="cursor-pointer text-black text-xs uppercase tracking-widest font-medium pb-1 hover:opacity-60 transition-opacity flex items-center gap-2"
                >
                  Scroll Down <span>↓</span>
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[50vh] md:h-screen overflow-hidden rounded-sm">
              <Image
                src={heroImg}
                fill
                priority
                className="object-cover"
                alt="ProCr8Hub Print Production"
                placeholder="blur"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Intro Section */}
      <ScrollReveal>
        <section id="intro-section" className="pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-[22px] sm:text-2xl md:text-[32px] lg:text-[38px] xl:text-[42px] font-medium leading-[1.15] text-black tracking-tight">
                  End-to-End Branding & Print
                </h2>
              </div>
              <div className="space-y-12">
                <p className="text-base md:text-lg lg:text-xl font-medium text-black leading-relaxed">
                  ProCr8Hub is a multi-state print and branding studio powering
                  businesses with impeccable design, precision manufacturing,
                  and nationwide delivery.
                </p>
                <p className="text-sm md:text-base font-normal text-neutral-700 leading-relaxed">
                  From brand strategy and creative design through to production
                  and logistics, we own every stage. Our in-house teams for
                  branding, print, packaging, signage, and corporate gifts work
                  as one to deliver quality that moves the needle for your
                  business.
                </p>
                <p className="text-sm md:text-base font-normal text-neutral-700 leading-relaxed">
                  We serve small startups, mid-sized enterprises, and large
                  corporate and government institutions across the country —
                  delivering consistent quality, on time, every time.
                </p>
                <Link
                  href="/contact"
                  className="inline-block shrink-0 bg-gray-900 hover:bg-black text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-300 text-[13px] sm:text-sm lg:text-[15px] shadow-sm hover:shadow-md"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What We Do Section */}
      <ScrollReveal direction="fade">
        <section className="pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[22px] sm:text-2xl md:text-[32px] lg:text-[38px] xl:text-[42px] font-medium leading-[1.15] text-black mb-16 tracking-tight">
              What We Do
            </h2>
            <div className="space-y-16">
              {/* Branding & Identity */}
              <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="order-1 md:order-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-black mb-4 tracking-tight">
                    Branding & Identity
                  </h3>
                  <p className="text-sm md:text-base font-normal text-neutral-700 leading-relaxed">
                    We build brands that speak — bold, clear, and built for
                    longevity. From naming and logo design to full visual
                    identity systems, we make sure your brand leaves a mark.
                  </p>
                </div>
                <div className="order-2 md:order-2">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={servicesImg01}
                      fill
                      className="object-cover"
                      alt="Branding and Identity Design"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Printing Production */}
              <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="order-1 md:order-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-black mb-4 tracking-tight">
                    Printing Production
                  </h3>
                  <p className="text-sm md:text-base font-normal text-neutral-700 leading-relaxed">
                    Large format, offset, digital, UV, and specialty printing —
                    all produced in-house with premium materials. Business
                    cards, banners, flyers, books, and everything in between.
                  </p>
                </div>
                <div className="order-2 md:order-2">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={servicesImg02}
                      fill
                      className="object-cover"
                      alt="Printing Production Services"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Packaging Design */}
              <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="order-1 md:order-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-black mb-4 tracking-tight">
                    Packaging Design
                  </h3>
                  <p className="text-sm md:text-base font-normal text-neutral-700 leading-relaxed">
                    Shelf-ready packaging that protects your product and sells
                    it. Structural design, premium materials, custom finishes,
                    and full production under one roof.
                  </p>
                </div>
                <div className="order-2 md:order-2">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={servicesImg03}
                      fill
                      className="object-cover"
                      alt="Packaging Design and Production"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Corporate Gifts & Signage */}
              <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="order-1 md:order-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-black mb-4 tracking-tight">
                    Corporate Gifts & Signage
                  </h3>
                  <p className="text-sm md:text-base font-normal text-neutral-700 leading-relaxed">
                    Custom merchandise, branded giveaways, indoor and outdoor
                    signage, vehicle branding, and wayfinding. Procurement and
                    fulfillment handled nationwide.
                  </p>
                </div>
                <div className="order-2 md:order-2">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={servicesImg04}
                      fill
                      className="object-cover"
                      alt="Corporate Gifts and Signage"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Full Width Image + Text Section */}
      <ScrollReveal>
        <section className="pb-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start md:items-center">
            {/* Image — first on mobile, left column on desktop */}
            <div className="order-1">
              <div className="relative w-full aspect-square overflow-hidden rounded-sm">
                <Image
                  src={servicesImg05}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  alt="ProCr8Hub Brand Showcase"
                  placeholder="blur"
                />
              </div>
            </div>
            {/* Text — after the image on mobile, right column on desktop */}
            <div className="order-2 space-y-12 lg:space-y-16">
              <p className="text-sm md:text-base font-normal text-neutral-700 leading-relaxed">
                At ProCr8Hub, collaboration is at the heart of everything we do.
                Each project begins with understanding — of your brand, your
                market, and your goals. From there, we design a seamless
                experience that blends strategy, creativity, and precision
                manufacturing, ensuring your vision comes to life exactly as
                imagined.
              </p>
              <p className="text-sm md:text-base font-normal text-neutral-700 leading-relaxed">
                We&apos;re proud to have served diverse clients — from local
                startups to nationwide corporate brands — helping each one build
                distinction through world-class print and branding.
              </p>
              <p className="text-sm md:text-base font-normal text-neutral-700 leading-relaxed">
                Our three-stage process — Brand Strategy & Creative Design,
                Production & Precision Manufacturing, and Quality Assurance &
                Nationwide Delivery — ensures every job ships on spec, on time,
                and on budget. No surprises. No shortcuts. Just results.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Full Width Images Section */}
      <ScrollReveal>
        <section className="pb-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-sm">
              <Image
                src={servicesImg06}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                alt="Print Production Facility"
                placeholder="blur"
              />
            </div>
            <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-sm">
              <Image
                src={servicesImg07}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                alt="ProCr8Hub Production Setup"
                placeholder="blur"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <ScrollReveal direction="fade">
        <Footer />
      </ScrollReveal>
    </main>
  );
}
