import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white text-black pt-6 md:pt-10 pb-16 md:pb-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Label and Main Heading */}
        <div className="mb-16">
          <p className="text-xs text-gray-500 mb-6">About Us</p>
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-medium leading-[1.1] max-w-6xl tracking-tight">
            At ProCr8Hub, we partner with businesses of all sizes to deliver
            exceptional printing and branding solutions. Our commitment to
            quality and innovation has made us the go-to choice for
            organizations seeking to elevate their brand presence.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          {/* Left Column: Text */}
          <div className="flex-1 space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
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
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block border-b border-black pb-0.5 font-semibold text-sm hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                More About Us
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 w-full">
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
