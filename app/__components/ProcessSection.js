import Image from "next/image";
import process01 from "../../public/process-step-image-01.png";
import process02 from "../../public/process-step-image-02.png";
import process03 from "../../public/process-step-image-03.png";

const processes = [
  {
    title: "Brand Strategy & Creative Design",
    description:
      "Every great print starts with a clear idea. We begin by understanding your brand, audience, and objectives, then translate that insight into bold visual concepts — from logo systems and brand identities to packaging layouts and signage designs that command attention.",
    image: process01,
  },
  {
    title: "Production & Precision Manufacturing",
    description:
      "This is where ideas take physical shape. Our in-house team runs state-of-the-art presses, die-cutters, and fabrication lines to produce premium prints, custom packages, corporate gifts, branded merchandise, and large-format signage with sharp color and flawless finish.",
    image: process02,
  },
  {
    title: "Quality Assurance & Nationwide Delivery",
    description:
      "Before anything leaves our studio, every piece passes through a rigorous quality check — color accuracy, material integrity, structural finish. We then coordinate secure packaging and reliable nationwide logistics so your brand assets arrive pristine and on schedule.",
    image: process03,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white text-black pt-16 pb-4">
      <div className=" mx-auto px-8">
        {/* <h2 className="text-4xl md:text-5xl lg:text-[64px] font-normal mb-16 tracking-tight">
          Our process
        </h2> */}

        <div className="space-y-12 md:space-y-0">
          {processes.map((process, index) => (
            <div key={index} className="flex flex-col">
              <hr className="border-gray-300 mb-8 md:mb-12" />
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24 items-start pb-12">
                {/* Title */}
                <div className="w-full md:w-1/4">
                  <h3 className="text-xl md:text-2xl font-medium leading-tight">
                    {process.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="w-full md:w-2/5">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {process.description}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                    <Image
                      src={process.image}
                      alt={process.title}
                      fill
                      className="object-cover"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
