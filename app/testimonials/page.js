"use client";

import FooterDark from "../__components/FooterDark";
import TestimonialsSection from "../__components/TestimonialsSection";
import CTASection from "../__components/CTASection";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-32 pb-0">
        <div className=" mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black max-w-4xl tracking-tight">
                Testimonials
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Stories from founders, creative directors, and marketing leads
                who partnered with us to shape brands, print with precision, and
                deliver nationwide.
              </p>
            </div>
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
        </div>
      </section>

      <TestimonialsSection />

      <CTASection />

      <FooterDark />
    </main>
  );
}
