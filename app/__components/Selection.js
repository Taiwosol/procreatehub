"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

import consultationImg from "../../public/consultation-image.png";
import photographyDirectionImg from "../../public/photography-direction-image.jpg";
import shootsImg from "../../public/shoots-image.png";
import brandCampaignImg from "../../public/brand-campaign-image.png";
import productionImg from "../../public/production-image.png";
import studioOutdoorImg from "../../public/studio-outdoor-image.png";
import retouchingImg from "../../public/retouching-image.png";
import postProcessingImg from "../../public/post-processing-image.png";
import designImg from "../../public/design-image.png";
import protographyUxImg from "../../public/protography-ux-image.png";
import artImg from "../../public/art-image.png";
import creativeLightingImg from "../../public/creative-lighting-image.png";

const selections = [
  {
    id: 1,
    number: "01",
    title: "Photography Direction & Consultation",
    smallImageLabel: "Consultation",
    smallImage: consultationImg,
    largeImage: photographyDirectionImg,
  },
  {
    id: 2,
    number: "02",
    title: "Brand Campaign & Editorial Shoots",
    smallImageLabel: "Shoots",
    smallImage: shootsImg,
    largeImage: brandCampaignImg,
  },
  {
    id: 3,
    number: "03",
    title: "Studio & Outdoor Production",
    smallImageLabel: "Production",
    smallImage: productionImg,
    largeImage: studioOutdoorImg,
  },
  {
    id: 4,
    number: "04",
    title: "Post-Processing & Retouching",
    smallImageLabel: "Retouching",
    smallImage: retouchingImg,
    largeImage: postProcessingImg,
  },
  {
    id: 5,
    number: "05",
    title: "Photography UX/UI Design",
    smallImageLabel: "Design",
    smallImage: designImg,
    largeImage: protographyUxImg,
  },
  {
    id: 6,
    number: "06",
    title: "Creative Lighting & Art Direction",
    smallImageLabel: "Art",
    smallImage: artImg,
    largeImage: creativeLightingImg,
  },
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
              <div className="relative w-full max-w-xs aspect-[16/9] overflow-hidden rounded-sm">
                <Image
                  src={selection.smallImage}
                  alt={selection.smallImageLabel}
                  fill
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          {/* Right Large Image */}
          <div className="w-full md:w-1/2 h-full">
            <div className="relative w-full h-full">
              <Image
                src={selection.largeImage}
                alt={selection.title}
                fill
                priority={selection.id === 1}
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
