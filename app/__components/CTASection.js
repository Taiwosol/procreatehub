import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        src="/UV-Printing.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Transparent Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-10">
        <h2 className="text-4xl md:text-6xl lg:text-[72px] font-medium text-white mb-8 max-w-4xl">
          Ready to bring your
          <br />
          vision to life?
        </h2>
        <Link
          href="/contact"
          className="text-white text-lg md:text-xl font-medium border-b-2 border-white pb-1 hover:opacity-80 transition-opacity"
        >
          Let's Work Together
        </Link>
      </div>
    </section>
  );
}
