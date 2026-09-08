import Image from "next/image";

import ScrollReveal from "./ScrollReveal";

export default function AboutIntro() {
  return (
    <section className="bg-white text-black pt-10 md:pt-14 lg:pt-16 pb-16 md:pb-20 lg:pb-24">
      {/* Padding mirrors the hero above so both columns share its left edge */}
      <div className="mx-auto px-8">
        {/* Two columns: a short black statement on the left, the longer grey
            elaboration starting a little past the halfway mark, as in the ref */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 mb-14 md:mb-16 lg:mb-20">
          <ScrollReveal className="w-full lg:w-[46%] shrink-0">
            <p className="text-base md:text-lg lg:text-xl leading-[1.55] text-black max-w-[34ch]">
              At ProCr8Hub, we build brands you can hold. Every print, package
              and piece of merchandise is made to carry your name well.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.12} className="w-full lg:w-[54%]">
            <p className="text-base md:text-lg lg:text-xl leading-[1.55] text-gray-500 max-w-[52ch]">
              We are a print and branding firm working with businesses,
              institutions and corporate organizations across Nigeria. Our team
              handles creative design, production, packaging, signage, corporate
              gifts and custom merchandise under one roof, so the finish stays
              consistent from the first concept to the last carton. Whether you
              need a full identity rollout or a single run done properly, we
              deliver work that is sharp, dependable and priced to make sense.
            </p>
          </ScrollReveal>
        </div>

        {/* Supporting image. space-img.jpg is only 820x571, so it keeps close to
            its native 1.44:1 and is centred rather than cropped to a letterbox */}
        <ScrollReveal delay={0.2}>
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/space-img.jpg"
              alt="ProCr8Hub environmental and space branding installation"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
