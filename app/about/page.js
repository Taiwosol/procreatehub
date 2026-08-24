"use client";

import Image from "next/image";
import AboutSection from "../__components/AboutSection";
import ProcessSection from "../__components/ProcessSection";
// import AwardSection from "../__components/AwardSection";
import ImageSection from "../__components/ImageSection";
import TeamSection from "../__components/TeamSection";
import TestimonialsSection from "../__components/TestimonialsSection";
import FAQSection from "../__components/FAQSection";
// import CTASection from "../__components/CTASection";
import FooterDark from "../__components/FooterDark";
import heroImg from "../../public/about-hero-img.jpg";
import imageBreaker from "../../public/Image-breaker.png";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black max-w-4xl tracking-tight">
              At ProCr8Hub, we turn ideas into impressions. Every print,
              package, and brand mark is crafted to make your business
              unforgettable — not just noticed.
            </h1>
            <button
              onClick={() => {
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer text-black text-xs uppercase tracking-widest font-medium border-b border-black pb-1 hover:opacity-60 transition-opacity flex items-center gap-2 mb-4"
            >
              Scroll Down <span>↓</span>
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm">
            <Image
              src={heroImg}
              fill
              priority
              className="object-cover"
              alt="About ProCr8Hub — Premium Print & Branding Studio"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      {/* About Section content */}
      <div id="about-content">
        <AboutSection />
        <ProcessSection />
        {/* <AwardSection /> */}
      </div>

      {/* Image Breaker Section */}
      {/* <section className="relative w-full py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src={imageBreaker}
              fill
              className="object-cover"
              alt="Image breaker"
              placeholder="blur"
            />
          </div>
        </div>
      </section> */}

      {/* Team and Testimonials Sections */}
      <div>
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        {/* <ImageSection /> */}
      </div>

      {/* CTA Section */}
      {/* <CTASection /> */}

      {/* Footer */}
      <FooterDark />
    </main>
  );
}
