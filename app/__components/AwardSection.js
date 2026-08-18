import Image from "next/image";
import vectorLogo from "../../public/vector-logo.png";
import founderLogo from "../../public/founder-logo.png";
import pearlLogo from "../../public/pearl-logo.png";
import ontoriaLogo from "../../public/ontoria-logo.png";
import baseeLogo from "../../public/basee-logo.png";
import ambidexterLogo from "../../public/ambidexter-logo.png";
import intergalacticaLogo from "../../public/intergalactica-logo.png";
import frameblocLogo from "../../public/framebloc-logo.png";

const awards = [
  {
    logo: vectorLogo,
    name: "Vector.Sage",
    description: "20x VectorSage Award",
  },
  {
    logo: founderLogo,
    name: "Founders VC",
    description: "5x Merit Award",
  },
  {
    logo: pearlLogo,
    name: "Pearl Studio",
    description: "5x Pearl Award",
  },
  {
    logo: ontoriaLogo,
    name: "Ontoria",
    description: "10x Ontoria Award",
  },
  {
    logo: baseeLogo,
    name: "Basee",
    description: "12x Basee Award",
  },
  {
    logo: ambidexterLogo,
    name: "Ambidexter",
    description: "5x AmbiD Award",
  },
  {
    logo: intergalacticaLogo,
    name: "Intergalactica",
    description: "22x Intergalatica Award",
  },
  {
    logo: frameblocLogo,
    name: "Framebloc",
    description: "15x Framebloc Award",
  },
];

export default function AwardSection() {
  return (
    <section className="bg-white text-black py-16 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Left Column: Title */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-normal tracking-tight">
            Awards
          </h2>
        </div>

        {/* Right Column: Content */}
        <div className="md:w-2/3">
          <h3 className="text-xl md:text-2xl lg:text-[32px] font-normal leading-tight mb-12 max-w-lg">
            Excited to celebrate our recent award for excellence in studio
            design!
          </h3>

          <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:gap-x-16 lg:gap-x-24">
            {awards.map((award, index) => (
              <div key={index} className="flex flex-col space-y-4">
                <div className="relative h-12 w-full flex items-center">
                  <Image
                    src={award.logo}
                    alt={award.name}
                    className="object-contain object-left"
                    height={32}
                  />
                </div>
                <p className="text-gray-500 text-xs md:text-sm">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
