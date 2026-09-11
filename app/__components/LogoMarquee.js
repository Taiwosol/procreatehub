import Image from "next/image";

import ScrollReveal from "./ScrollReveal";

/* Each logo is drawn at its own height so the marks read at a similar optical
   weight: wide wordmarks sit shorter, the square and portrait lockups sit
   taller. Widths/heights are the artwork's intrinsic ratio, not display size. */
const LOGOS = [
  {
    name: "Chowdeck",
    src: "/logos/chowdeck-logo.svg",
    width: 960,
    height: 153,
    className: "h-5 sm:h-6 md:h-7",
  },
  {
    name: "Coca-Cola",
    src: "/logos/coca-cola-logo.svg",
    width: 615,
    height: 193,
    className: "h-6 sm:h-8 md:h-9",
  },
  {
    name: "Tecno",
    src: "/logos/tecno-logo.svg",
    width: 634,
    height: 147,
    className: "h-4 sm:h-5 md:h-6",
  },
  {
    name: "Oraimo",
    src: "/logos/oraimo-logo.svg",
    width: 135,
    height: 28,
    className: "h-5 sm:h-6 md:h-7",
  },
  {
    name: "Ballantine's",
    src: "/logos/ballantines-logo.svg",
    width: 563,
    height: 193,
    className: "h-7 sm:h-9 md:h-10",
  },
  {
    name: "Loya Milk",
    src: "/logos/loya-logo.svg",
    width: 447,
    height: 447,
    className: "h-12 sm:h-14 md:h-16 rounded-[3px]",
  },
  {
    name: "Hall 7 Real Estate",
    src: "/logos/hall-7-logo.svg",
    width: 289,
    height: 563,
    className: "h-14 sm:h-16 md:h-20",
  },
  {
    name: "Itel",
    src: "/logos/itel-logo.svg",
    width: 625,
    height: 322,
    className: "h-6 sm:h-8 md:h-9",
  },
];

/* One pass of the logo list. The track holds two identical passes and slides
   exactly half its width, so the loop closes with no visible seam. Spacing
   lives on each item rather than a flex `gap`, which keeps the gap across the
   seam identical to every other gap. */
function LogoPass({ duplicate = false }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center"
    >
      {LOGOS.map((logo) => (
        <li
          key={logo.name}
          className="flex h-16 md:h-24 shrink-0 items-center justify-center px-6 sm:px-9 md:px-12"
        >
          <Image
            src={logo.src}
            alt={duplicate ? "" : `${logo.name} logo`}
            width={logo.width}
            height={logo.height}
            className={`${logo.className} w-auto object-contain`}
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoMarquee() {
  return (
    <section className="bg-white text-black pt-10 md:pt-12 lg:pt-14 pb-8 md:pb-10 lg:pb-12">
      <div className="mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollReveal className="mb-8 md:mb-10 lg:mb-12">
          <p className="text-[11px] sm:text-xs lg:text-[13px] text-gray-500 mb-3 lg:mb-4">
            Our Clients
          </p>
          <h2 className="text-[19px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] font-medium leading-[1.18] tracking-tight max-w-3xl">
            Brands that trust us with their print, branding and packaging.
          </h2>
        </ScrollReveal>
      </div>

      {/* Full-bleed: the strip runs edge to edge while the heading stays in the
          padded container above it. */}
      <div className="marquee">
        <div className="marquee-viewport">
          <div className="marquee-track">
            <LogoPass />
            <LogoPass duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
