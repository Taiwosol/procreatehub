"use client";

import Footer from "../__components/Footer";
import ScrollReveal from "../__components/ScrollReveal";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollReveal>
        <section className="pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black max-w-4xl tracking-tight">
                Product
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
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="fade">
        <Footer />
      </ScrollReveal>
    </main>
  );
}
