"use client";

import { getImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import HeroNavBar from "./HeroNavBar";

gsap.registerPlugin(ScrollTrigger);

/* Art direction: a taller crop carries the mobile viewport, the wide crop takes
   over from md up. <picture> means the browser only fetches the one it needs. */
const HERO_IMAGE_COMMON = {
  alt: "ProCr8Hub branded business cards",
  sizes: "100vw",
  loading: "eager",
  fetchPriority: "high",
};

const {
  props: { srcSet: heroDesktopSrcSet },
} = getImageProps({
  ...HERO_IMAGE_COMMON,
  src: "/tutorial-03-new.jpg",
  width: 1266,
  height: 832,
});

const {
  props: { srcSet: heroMobileSrcSet, ...heroImageProps },
} = getImageProps({
  ...HERO_IMAGE_COMMON,
  src: "/tutorial-03-new-mobile.jpg",
  width: 1072,
  height: 992,
});

/* Stats sourced from TrustSection */
const HERO_STATS = [
  { value: 500, suffix: "+", label: "projects delivered" },
  { value: 200, suffix: "+", label: "happy clients" },
  { value: 15, suffix: "+", label: "services offered" },
];

function useCountUp(target, isActive, duration = 1800) {
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
      // ease-out so the number decelerates into place
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

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

function HeroStat({ value, suffix, label, isActive }) {
  const count = useCountUp(value, isActive);

  return (
    <div
      data-hero-stat
      className="relative pl-4 sm:pl-5 border-l border-white/30"
      style={{ opacity: 0 }}
    >
      <div className="text-xl sm:text-2xl lg:text-3xl xl:text-[2.1rem] font-semibold text-white leading-none tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-[11px] sm:text-xs lg:text-sm text-white/65 tracking-wide">
        {label}
      </div>
    </div>
  );
}

export default function HeroCinematic() {
  const containerRef = useRef(null);
  const backdropRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);
  const paraRef = useRef(null);
  const scrollCueRef = useRef(null);

  const [statsActive, setStatsActive] = useState(false);

  /* Pointer parallax on the backdrop */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mXSpring = useSpring(mouseX, { stiffness: 60, damping: 22, mass: 0.6 });
  const mYSpring = useSpring(mouseY, { stiffness: 60, damping: 22, mass: 0.6 });
  const bgX = useTransform(mXSpring, [-0.5, 0.5], [18, -18]);
  const bgY = useTransform(mYSpring, [-0.5, 0.5], [12, -12]);

  useEffect(() => {
    let rafId = null;
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const nx = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const ny = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(Math.max(-0.5, Math.min(0.5, nx)));
        mouseY.set(Math.max(-0.5, Math.min(0.5, ny)));
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 });

      if (statsRef.current) {
        const items = statsRef.current.querySelectorAll("[data-hero-stat]");
        tl.fromTo(
          items,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.12,
            onStart: () => setStatsActive(true),
          },
          0.1,
        );
      }

      if (headingRef.current) {
        const text = new SplitType(headingRef.current, {
          types: "lines, words",
          tagName: "span",
        });
        gsap.set(headingRef.current, { opacity: 1 });
        tl.fromTo(
          text.words,
          { yPercent: 118, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.25,
            ease: "expo.out",
            stagger: 0.03,
            clearProps: "all",
          },
          0.35,
        );
      }

      if (paraRef.current) {
        tl.fromTo(
          paraRef.current,
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 1.05, ease: "expo.out" },
          0.85,
        );
      }

      if (scrollCueRef.current) {
        tl.fromTo(
          scrollCueRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          1.15,
        );
      }

      /* Backdrop drifts slower than the page as it scrolls away */
      if (backdropRef.current) {
        gsap.to(backdropRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          yPercent: 10,
          scale: 1.1,
          ease: "none",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="parkinsans relative isolate min-h-[100svh] w-full overflow-hidden bg-gray-950"
    >
      {/* Backdrop */}
      <motion.div
        ref={backdropRef}
        style={{ x: bgX, y: bgY }}
        className="absolute -inset-[6%] -z-20 will-change-transform"
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktopSrcSet} />
          <source srcSet={heroMobileSrcSet} />
          <img
            {...heroImageProps}
            alt={HERO_IMAGE_COMMON.alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
      </motion.div>

      {/* Tonal overlays: darken for legibility, warm the top-left, weight the base */}
      <div className="absolute inset-0 -z-10 bg-gray-950/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#7a3a1c]/55 via-transparent to-[#12100f]/70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950/85 via-gray-950/25 to-gray-950/45" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <HeroNavBar />

        <div className="flex flex-1 flex-col justify-end gap-12 lg:gap-14 px-6 sm:px-8 lg:px-10 pt-16 pb-12 lg:pb-14">
          {/* Stats */}
          <div
            ref={statsRef}
            className="flex flex-wrap items-start gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-6"
          >
            {HERO_STATS.map((stat) => (
              <HeroStat key={stat.label} {...stat} isActive={statsActive} />
            ))}
          </div>

          {/* Headline + supporting copy */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
            <h1
              ref={headingRef}
              className="max-w-[22ch] text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.4rem] 2xl:text-[3.9rem] font-medium uppercase tracking-tight leading-[0.95] text-white"
              style={{ opacity: 0 }}
            >
              Premium Print Production &amp; Branding Solutions That Bring{" "}
              <span className="text-red-500">Ideas</span> To Life.
            </h1>

            <p
              ref={paraRef}
              className="text-sm lg:text-[13px] xl:text-sm leading-relaxed text-white/70 max-w-md lg:max-w-[300px] xl:max-w-[340px] lg:text-justify shrink-0"
              style={{ opacity: 0 }}
            >
              At ProCr8Hub, we partner with businesses, organizations and
              institutions to create unforgettable brand experiences through
              premium printing, packaging, signage, fabrication, merchandise and
              corporate branding.
            </p>
          </div>

          {/* Scroll cue */}
          <div
            ref={scrollCueRef}
            className="flex items-center justify-between gap-6"
            style={{ opacity: 0 }}
          >
            <span className="inline-flex items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/60">
              <span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-white/35 pt-1.5">
                <motion.span
                  className="block h-1.5 w-1 rounded-full bg-white/80"
                  animate={{ y: [0, 9, 0], opacity: [1, 0.15, 1] }}
                  transition={{
                    duration: 1.9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
              Scroll to explore
            </span>

            <span className="hidden sm:block text-[11px] uppercase tracking-[0.25em] text-white/40">
              Create. Brand. Impact.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
