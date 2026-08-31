import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white text-black pt-6 md:pt-10 pb-16 md:pb-20 px-6 md:px-8 lg:px-6 xl:px-5 2xl:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Label and Main Heading */}
        <div className="mb-10 lg:mb-12">
          <p className="text-xs md:text-sm xl:text-base text-gray-500 mb-6">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] 2xl:text-[56px] font-medium leading-[1.1] max-w-6xl tracking-tight">
            At ProCr8Hub, we partner with businesses of all sizes to deliver
            exceptional printing and branding solutions. Our commitment to
            quality and innovation has made us the go-to choice for
            organizations seeking to elevate their brand presence.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Text (~40%) */}
          <div className="w-full md:flex-[2] space-y-4 lg:space-y-5 text-gray-600 leading-relaxed text-sm md:text-base lg:text-base xl:text-[17px] 2xl:text-lg">
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
              help small, medium-sized enterprises, and government institutions
              create and deliver impeccable prints and branding solutions that
              are affordable, effective, and efficient.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-block border-b border-black pb-0.5 font-semibold text-sm md:text-base lg:text-base hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                More About Us
              </Link>
            </div>
          </div>

          {/* Right Column: Image (~60%) */}
          <div className="w-full md:flex-[3]">
            <Image
              src="/space-img.jpg"
              alt="ProCr8 Hub space branding showcase"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
