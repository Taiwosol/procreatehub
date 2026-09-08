"use client";

import Image from "next/image";
import AboutIntro from "../__components/AboutIntro";
import ProcessSection from "../__components/ProcessSection";

import TeamSection from "../__components/TeamSection";
import TestimonialsSection from "../__components/TestimonialsSection";
import FAQSection from "../__components/FAQSection";
import Footer from "../__components/Footer";
import ScrollReveal from "../__components/ScrollReveal";
import heroImg from "../../public/about-hero-img.jpg";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16">
        <div className=" mx-auto px-8">
          {/* Hero Text */}
          <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
            <h1 className="text-[22px] sm:text-2xl md:text-[32px] lg:text-[38px] xl:text-[42px] font-medium leading-[1.15] text-black max-w-4xl tracking-tight">
              At ProCr8Hub, we turn ideas into impressions. Every print,
              package and brand mark is built to be remembered, not just
              noticed.
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
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal
            delay={0.15}
            className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm"
          >
            <Image
              src={heroImg}
              fill
              priority
              className="object-cover"
              alt="About ProCr8Hub, premium print and branding studio"
              placeholder="blur"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* About Section content */}
      <div id="about-content">
        <AboutIntro />
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

        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>

        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
        {/* <ImageSection /> */}
      </div>

      {/* CTA Section */}
      {/* <CTASection /> */}

      {/* Footer */}
      <ScrollReveal direction="fade">
        <Footer />
      </ScrollReveal>
    </main>
  );
}
