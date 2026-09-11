import Image from "next/image";
import Link from "next/link";

import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section className="bg-white text-black pt-8 md:pt-10 lg:pt-12 pb-8 md:pb-10 lg:pb-12">
      {/* Horizontal padding mirrors HeroCinematic so sections align down the page */}
      <div className="mx-auto px-6 sm:px-8 lg:px-10">
        {/* Label and Main Heading */}
        <ScrollReveal className="mb-12 md:mb-14 lg:mb-16">
          <p className="text-[11px] sm:text-xs lg:text-[13px] text-gray-500 mb-3 lg:mb-4">
            About Us
          </p>
          <h2 className="text-[19px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-medium leading-[1.18] tracking-tight max-w-5xl">
            At ProCr8Hub, we partner with businesses of all sizes to deliver
            exceptional printing, branding, quality and innovation that elevate
            how your brand shows up.
          </h2>
        </ScrollReveal>

        {/* Content Grid: narrow text column, wide image */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* Left Column: Text (~1/3) */}
          <ScrollReveal
            delay={0.1}
            className="w-full md:flex-[1] space-y-7 lg:space-y-9 xl:space-y-10 text-gray-600 leading-[1.65] text-[13px] sm:text-sm lg:text-[15px] xl:text-base"
          >
            <p>
              ProCr8Hub Ltd. is a prints and branding firm with up-to-date
              professionals delivering impeccable prints, branding, and
              packaging solutions to individuals, businesses, and corporate
              organizations nationwide.
            </p>
            <p>
              Our services include creative designs, branding, prints
              production, and packaging that exceed customers&apos; expectations
              at cost-saving rates, supported by printing, corporate gifts,
              signage, custom merchandise, and packaging services teams across
              Lagos and Nigeria.
            </p>
            <p>
              With experience delivering quality and innovative services, we
              help small, medium-sized enterprises, corporate organizations, and
              government institutions create and deliver impeccable prints and
              branding solutions that are affordable, effective, and efficient.
            </p>
            <div className="pt-1">
              <Link
                href="/about"
                className="inline-block border-b border-black pb-0.5 font-semibold text-[13px] sm:text-sm lg:text-[15px] text-black hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                More About Us
              </Link>
            </div>
          </ScrollReveal>

          {/* Right Column: Image (~2/3) */}
          <ScrollReveal delay={0.2} className="w-full md:flex-[2]">
            <Image
              src="/space-img.jpg"
              alt="ProCr8 Hub space branding showcase"
              width={1200}
              height={800}
              sizes="(min-width: 768px) 62vw, 100vw"
              className="w-full h-auto object-cover rounded-sm"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
