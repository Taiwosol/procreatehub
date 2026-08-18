import Link from "next/link";
import Image from "next/image";

const journalEntries = [
  {
    image: "/image-section-01.png",
    date: "Jun 6, 2025",
    title: "Transform Your Photography Game — Creative Vision Is Key Today",
    slug: "transform-photography-game",
  },
  {
    image: "/image-section-03.png",
    date: "Jun 6, 2025",
    title:
      "A Camera Is More Than Just Gear — It's a Superpower for Dynamic Creatives",
    slug: "camera-superpower",
  },
  {
    image: "/image-section-05.png",
    date: "Jun 6, 2025",
    title:
      "Your Portfolio Is Your Identity — Why Photography Style Sets You Apart",
    slug: "portfolio-identity",
  },
];

const JournalCard = ({ entry }) => {
  return (
    <Link
      href={`/journals/${entry.slug}`}
      className="group relative block w-full aspect-square overflow-hidden rounded-sm"
    >
      {/* Image */}
      <Image
        src={entry.image}
        alt={entry.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />

      {/* Text Content */}
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end text-white">
        <div className="transition-transform duration-300 ease-out group-hover:-translate-y-[6px]">
          <p className="text-sm md:text-base font-medium mb-2 opacity-90">
            {entry.date}
          </p>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light leading-tight max-w-xl">
            {entry.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default function JournalImages() {
  return (
    <section className="w-full py-16 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {journalEntries.map((entry, index) => (
          <JournalCard key={index} entry={entry} />
        ))}
      </div>
    </section>
  );
}
