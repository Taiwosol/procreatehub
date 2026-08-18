"use client";

import Image from "next/image";
import { useState } from "react";
import img01 from "../../public/image-section-01.png";
import img02 from "../../public/image-section-02.png";
import img03 from "../../public/image-section-03.png";
import img04 from "../../public/image-section-04.png";
import img05 from "../../public/image-section-05.png";
import img06 from "../../public/image-section-06.png";

const ImageBlock = ({ mainImg, hoverImg, alt, date, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full aspect-square overflow-hidden rounded-sm cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={mainImg}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
        placeholder="blur"
      />
      <Image
        src={hoverImg}
        alt={alt}
        fill
        className={`object-cover absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
        placeholder="blur"
      />

      <div className="absolute inset-0 p-10 flex flex-col justify-end text-white z-10 pointer-events-none">
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base font-medium opacity-80">{date}</p>
          <p className="max-w-sm text-lg md:text-2xl font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 opacity-80" />
    </div>
  );
};

export default function ImageSection() {
  return (
    <section className="bg-white text-black py-16 px-6 md:px-20 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-col gap-8">
          <ImageBlock
            mainImg={img01}
            hoverImg={img02}
            alt="Image Section 1"
            date="June 12 2025"
            description="Transform Your Photography Game -- Creative Vision Is Key Today"
          />
          <ImageBlock
            mainImg={img03}
            hoverImg={img04}
            alt="Image Section 2"
            date="July 10 2025"
            description="A Camera Is More Than Just Gear -- It's a Superpower for Dynamic Creatives"
          />
          <ImageBlock
            mainImg={img05}
            hoverImg={img06}
            alt="Image Section 3"
            date="May 22 2025"
            description="Your Portfolio Is Your Identity -- Why Photography Style Sets You Apart"
          />
        </div>
      </div>
    </section>
  );
}
