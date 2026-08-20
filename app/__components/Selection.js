"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const selections = [
  {
    id: 1,
    number: "01",
    title: "Production, Sales and Procurement",
    smallImageLabel: "Custom Apparel",
    smallImage: "/selection-img-02.jpg",
    largeImage: "/selection-img-01.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Vehicle Branding",
    smallImageLabel: "Branding",
    smallImage: "/selection-img-04.jpg",
    largeImage: "/selection-img-03.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Production, Procurement and Branding",
    smallImageLabel: "Signages",
    smallImage: "/selection-img-06.jpg",
    largeImage: "/selection-img-05.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Production, Packaging and Sales",
    smallImageLabel: "Souvenirs",
    smallImage: "/selection-img-08.jpg",
    largeImage: "/selection-img-07.jpg",
  },
  {
    id: 5,
    number: "05",
    title: "Procurement, Sales and Packaging",
    smallImageLabel: "Corporate Gift",
    smallImage: "/selection-img-10.jpg",
    largeImage: "/selection-img-09.jpg",
  },
  // {
  //   id: 6,
  //   number: "06",
  //   title: "Creative Lighting & Art Direction",
  //   smallImageLabel: "Art",
  //   smallImage: artImg,
  //   largeImage: creativeLightingImg,
  // },
];

export default function Selection() {
  return (
    <section className="relative">
      {selections.map((selection) => (
        <div
          key={selection.id}
          className="sticky top-0 h-screen flex-shrink-0 flex flex-col md:flex-row"
        >
          {/* Left Content */}
          <div className="w-full md:w-1/2 bg-white px-10 py-10 flex flex-col justify-between">
            {/* Top Number */}
            <div>
              <span className="text-4xl md:text-6xl font-medium">
                {selection.number}
              </span>
            </div>

            {/* Main Title */}
            <div>
              <h2 className="text-3xl md:text-5xl font-medium leading-tight text-black">
                {selection.title}
              </h2>
            </div>

            {/* Bottom Small Image Section */}
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                {selection.smallImageLabel}
              </p>
              <div className="relative w-full max-w-xs aspect-[16/9] overflow-hidden rounded-sm bg-neutral-100">
                <Image
                  src={selection.smallImage}
                  alt={selection.smallImageLabel}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Large Image */}
          <div className="w-full md:w-1/2 h-full bg-white">
            <div className="relative w-full h-full">
              <Image
                src={selection.largeImage}
                alt={selection.title}
                fill
                priority={selection.id === 1}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
