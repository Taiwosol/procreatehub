"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from "../__components/CTASection";
import FooterDark from "../__components/FooterDark";
import heroImg from "../../public/sevices-hero-image.png";
import servicesImg06 from "../../public/services-image-06.png";
import servicesImg07 from "../../public/services-image-07.jpg";
import servicesImg01 from "../../public/services-image-01.png";
import servicesImg02 from "../../public/services-image-02.png";
import servicesImg03 from "../../public/services-image-03.png";
import servicesImg04 from "../../public/services-image-04.png";
import servicesImg05 from "../../public/services-image-05.jpg";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-20 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="flex flex-col md:flex-col justify-between items-start  mb-12 gap-8">
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black max-w-4xl tracking-tight">
              From creative concept to final retouch, we help you bring your
              ideas to life.
            </h1>
            <div className="flex justify-between items-center gap-15">
              <Link
                href="/contact"
                className="text-black text-lg font-bold  pb-1 hover:opacity-60 transition-opacity"
              >
                Let&apos;s Work Together
              </Link>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  });
                }}
                className="text-black text-xs uppercase tracking-widest font-medium pb-1 hover:opacity-60 transition-opacity flex items-center gap-2"
              >
                Scroll Down <span>↓</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-screen overflow-hidden rounded-sm">
            <Image
              src={heroImg}
              fill
              priority
              className="object-cover"
              alt="Services Hero"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      {/* Creative Direction Section */}
      <section className="pb-16 px-6 md:px-20 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black tracking-tight">
                Creative Direction
              </h2>
            </div>
            <div className="space-y-12">
              <p className="text-2xl md:text-3xl lg:text-4xl font-normal text-black leading-relaxed">
                We&apos;re not your typical design agency. We&apos;re a
                four-headed force of creatives, strategists, and makers obsessed
                with helping ambitious brands go from meh to magnetic.
              </p>
              <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
                From concept to capture, we produce imagery that tells authentic
                stories. Whether it&apos;s a brand campaign, editorial shoot,
                product showcase, or personal portrait series, our photographers
                balance artistry with precision to deliver work that feels
                cinematic and emotionally resonant.
              </p>
              <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
                The story doesn&apos;t end with the shutter click. Our
                post-production team refines every detail — tone, texture, and
                color — to craft polished, timeless visuals. From advanced
                retouching to creative color grading, we elevate each image to
                match the project&apos;s unique aesthetic and emotional tone.
              </p>
              <Link
                href="/contact"
                className="text-black text-2xl font-medium border-b border-black pb-1 hover:opacity-60 transition-opacity inline-block"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="pb-16 px-6 md:px-20 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-black mb-16 tracking-tight">
            What We Do
          </h2>
          <div className="space-y-16">
            {/* Visual Strategy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6 tracking-tight">
                  Visual Strategy
                </h3>
                <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
                  Pearl Studio is a Berlin-based design agency built by four
                  creatives with a shared passion for bold ideas and beautiful
                  execution.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={servicesImg01}
                    fill
                    className="object-cover"
                    alt="Visual Strategy"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>

            {/* Photography */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6 tracking-tight">
                  Photography
                </h3>
                <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
                  We build brands that speak — bold, clear, and built for
                  longevity. From naming to visual identity, we make sure your
                  brand leaves a mark.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={servicesImg02}
                    fill
                    className="object-cover"
                    alt="Photography"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>

            {/* Creative Direction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6 tracking-tight">
                  Post-Production
                </h3>
                <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
                  Great ideas start with strong thinking. We use research,
                  positioning, and storytelling to shape strategies that move
                  the needle.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={servicesImg03}
                    fill
                    className="object-cover"
                    alt="Creative Direction"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>

            {/* Visual Storytelling */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6 tracking-tight">
                  Visual Storytelling
                </h3>
                <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
                  Pearl Studio is a Berlin-based design agency built by four
                  creatives with a shared passion for bold ideas and beautiful
                  execution.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={servicesImg04}
                    fill
                    className="object-cover"
                    alt="Post-Production"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image + Text Section */}
      <section className="pb-16 px-6 md:px-20 lg:px-10">
        {/* Full Width Image */}
        <div className="relative w-full h-screen overflow-hidden">
          <Image
            src={servicesImg05}
            fill
            className="object-cover"
            alt="Collaboration"
            placeholder="blur"
          />
        </div>
        {/* Text Beneath */}
        <div className=" pt-16">
          <div className="max-w-7xl mx-auto space-y-12">
            <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
              At BraceLend, collaboration is at the heart of everything we do.
              Each project begins with understanding — of your brand, your
              story, and your audience. From there, we design a seamless
              experience that blends artistry and communication, ensuring your
              vision comes to life in its purest form.
            </p>
            <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
              We&apos;re proud to have worked with diverse clients — from local
              startups to international brands — helping each one find visual
              distinction through photography.
            </p>
            <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed">
              We love collaborating with passionate teams, and over the past few
              years, we&apos;ve had the pleasure of working with various design
              teams both in-person and remotely. We&apos;ve also teamed up with
              fantastic design agencies and freelancers to create stunning and
              impactful digital experiences for clients, including a photography
              studio known for its breathtaking work.
            </p>
          </div>
        </div>
      </section>

      {/* Full Width Images Section */}
      <section className="space-y-0 pb-16 px-10">
        <div className="relative w-full h-screen overflow-hidden">
          <Image
            src={servicesImg06}
            fill
            className="object-cover"
            alt="Services Image 06"
            placeholder="blur"
          />
        </div>
        <div className="relative w-full h-screen overflow-hidden">
          <Image
            src={servicesImg07}
            fill
            className="object-cover"
            alt="Services Image 07"
            placeholder="blur"
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <FooterDark />
    </main>
  );
}
