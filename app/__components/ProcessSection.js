import Image from "next/image";
import process01 from "../../public/process-step-image-01.png";
import process02 from "../../public/process-step-image-02.png";
import process03 from "../../public/process-step-image-03.png";

const processes = [
  {
    title: "Visual Storytelling & Direction",
    description:
      "At BraceLend, we don't just capture moments — we design them. Our creative team leads each project with a clear visual language, ensuring that every frame reflects your story, tone, and essence with artistic precision.",
    image: process01,
  },
  {
    title: "Studio & On-Location Production",
    description:
      "From concept to execution, we handle the entire production process. Whether it's an intimate studio session or a large-scale outdoor shoot, our approach balances technical mastery with an instinct for light, space, and mood.",
    image: process02,
  },
  {
    title: "Post-Production & Finishing",
    description:
      "The magic continues in post. We refine every detail — color, texture, and tone — to produce cohesive visuals that feel both cinematic and timeless. Our finishing process ensures every image meets the highest creative standard.",
    image: process03,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white text-black py-16 px-10">
      <div className="max-w-7xl mx-auto">
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
