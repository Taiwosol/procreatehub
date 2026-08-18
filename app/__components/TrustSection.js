"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useCountUp(target, isActive, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    let animationFrame;
    let startTime;

    const updateCount = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrame = window.requestAnimationFrame(updateCount);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [duration, isActive, target]);

  return count;
}

function StatItem({ value, suffix = "", label, isActive }) {
  const count = useCountUp(value, isActive);

  return (
    <div className="space-y-2">
      <div className="text-2xl md:text-3xl font-bold text-gray-900">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
}

export default function TrustSection() {
  const sectionRef = useRef(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection || hasEnteredView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, [hasEnteredView]);

  return (
    <section
      ref={sectionRef}
      className="pt-4 md:pt-6 pb-6 md:pb-10 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="mb-16 w-full space-y-6 lg:max-w-[620px] xl:max-w-[680px]">
            <h2 className="text-3xl md:text-5xl lg:text-[54px] font-medium leading-[1.1] max-w-6xl tracking-tight text-black">
              Trusted by Businesses Across Nigeria
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:max-w-[560px] xl:max-w-[620px]">
              At ProCr8 Hub, we partner with businesses of all sizes to deliver
              exceptional printing and branding solutions. Our commitment to
              quality and innovation has made us the go-to choice for
              organizations seeking to elevate their brand presence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-10 lg:grid-cols-4">
            <StatItem
              value={500}
              suffix="+"
              label="Projects Delivered"
              isActive={hasEnteredView}
            />
            <StatItem
              value={200}
              suffix="+"
              label="Happy Clients"
              isActive={hasEnteredView}
            />
            <StatItem
              value={15}
              suffix="+"
              label="Services"
              isActive={hasEnteredView}
            />
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                Nationwide
              </div>
              <div className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
                Service Coverage
              </div>
            </div>
          </div>
          {/* <div className="mt-10">
            <Link
              href="/about"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              More About Us
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
