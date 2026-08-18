"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const albums = [
  {
    id: 1,
    title: "Printing Production",
    description:
      "High-quality prints, large-format outputs, and precision finishing that bring designs to life with stunning clarity and color accuracy.",
    genre: "Printing",
    image: "/printing-album-img.jpg",
    link: "/works/album/printing-production",
    index: "01",
  },
  {
    id: 2,
    title: "Branding",
    description:
      "Comprehensive brand identity systems — from logo design to complete visual guidelines — that define memorable impressions across all touchpoints.",
    genre: "Branding",
    image: "/branding-album-img.jpg",
    link: "/works/album/branding",
    index: "02",
  },
  {
    id: 3,
    title: "Packaging",
    description:
      "Creative packaging solutions that combine structural innovation with striking visuals to elevate products and stand out on shelves nationwide.",
    genre: "Packaging",
    image: "/packaging-album-img.jpg",
    link: "/works/album/packaging",
    index: "03",
  },
  {
    id: 4,
    title: "Gift Sales & Procurement",
    description:
      "Curated corporate gifts, custom merchandise, and end-to-end procurement services that leave lasting impressions on clients and employees alike.",
    genre: "Gifts",
    image: "/gift-album-img.jpg",
    link: "/works/album/gift-sales-procurement",
    index: "04",
  },
];

export default function GallerySection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal translation
  // We have 4 items, each 100vw. To see the last one, we translate by 3 * 100vw = 300vw
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-300vw"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-full">
          {albums.map((album) => (
            <div
              key={album.id}
              className="relative h-screen w-screen flex-shrink-0"
            >
              <Link
                href={album.link}
                className="block w-full h-full relative group overflow-hidden"
              >
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  priority={album.id === 1}
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Overlay Content to match screenshots */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between text-white z-10 pointer-events-none">
                  {/* Top Section */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-0.5">
                      <p className="text-sm md:text-base font-medium opacity-80">
                        2024
                      </p>
                      <h3 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
                        {album.title}
                      </h3>
                    </div>

                    {/* Index Indicator */}
                    <div className="flex items-center gap-2 border border-white/40 px-3 py-1.5 bg-black/5 backdrop-blur-sm text-xs md:text-sm font-medium">
                      <span>{album.index}</span>
                      <span className="opacity-40">|</span>
                      <span className="opacity-40">04</span>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <p className="max-w-sm text-sm md:text-xl font-light leading-relaxed opacity-90">
                      {album.description}
                    </p>
                    <p className="text-xs md:text-base font-bold uppercase tracking-widest mb-1">
                      {album.genre}
                    </p>
                  </div>
                </div>

                {/* Subtle gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
