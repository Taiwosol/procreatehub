"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const easeOutQuart = [0.22, 1, 0.36, 1];
const easeOutExpo = [0.16, 1, 0.3, 1];

const MAGNETIC_STRENGTH = 0.35;

const IconBase = ({
  className = "",
  strokeWidth = 2,
  fill = "none",
  viewBox = "0 0 24 24",
  children,
  fillOpacity,
  stroke = "currentColor",
  ...rest
}) => {
  const style = fillOpacity != null ? { fillOpacity } : undefined;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </svg>
  );
};

const Check = ({ className = "", strokeWidth = 2, ...rest }) => (
  <IconBase className={className} strokeWidth={strokeWidth} {...rest}>
    <polyline points="20 6 9 17 4 12" />
  </IconBase>
);

const ArrowRight = ({ className = "", strokeWidth = 2, ...rest }) => (
  <IconBase className={className} strokeWidth={strokeWidth} {...rest}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </IconBase>
);

const MoveRight = ({ className = "", strokeWidth = 2, ...rest }) => (
  <IconBase className={className} strokeWidth={strokeWidth} {...rest}>
    <path d="M17 8.5 21.5 12 17 15.5" />
    <path d="M3 12h14.5" />
  </IconBase>
);

const ShieldCheck = ({ className = "", strokeWidth = 2, ...rest }) => (
  <IconBase className={className} strokeWidth={strokeWidth} {...rest}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </IconBase>
);

const Globe2 = ({ className = "", strokeWidth = 2, ...rest }) => (
  <IconBase className={className} strokeWidth={strokeWidth} {...rest}>
    <circle cx="12" cy="12" r="10" />
    <path d="M15.5 8.5a17.3 17.3 0 0 0-7 0 17.3 17.3 0 0 1 0 7 17.3 17.3 0 0 0 7 0 17.3 17.3 0 0 1 0-7z" />
    <path d="M2 12h20" />
  </IconBase>
);

const Zap = ({
  className = "",
  strokeWidth = 2,
  fill = "none",
  fillOpacity,
  ...rest
}) => (
  <IconBase
    className={className}
    strokeWidth={strokeWidth}
    fill={fill}
    fillOpacity={fillOpacity}
    {...rest}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconBase>
);

const Sparkles = ({ className = "", strokeWidth = 2, ...rest }) => (
  <IconBase className={className} strokeWidth={strokeWidth} {...rest}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </IconBase>
);

const MagneticButton = ({
  children,
  href,
  className = "",
  variant = "primary",
  ...props
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.4 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.4 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * MAGNETIC_STRENGTH);
    y.set(relY * MAGNETIC_STRENGTH);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={`group relative inline-flex items-center justify-center cursor-pointer overflow-hidden rounded-2xl font-bold px-8 sm:px-9 py-4 transition-colors duration-500 ${className} ${
        variant === "primary"
          ? "bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-600/20 hover:shadow-2xl hover:shadow-red-600/30"
          : "bg-white text-gray-900 border border-gray-200 hover:border-gray-900 hover:bg-gray-50 shadow-sm"
      }`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-1">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }
  return content;
};

const ImageCard = ({
  src,
  alt,
  width = 300,
  height = 300,
  className = "",
  parallaxX,
  parallaxY,
  zIndex = 10,
  depth = 0.3,
  mouseX,
  mouseY,
  stagger = 0,
  objectFit = "cover",
  background = "transparent",
  cardBg = "transparent",
}) => {
  const xSpring = useSpring(parallaxX, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });
  const ySpring = useSpring(parallaxY, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const mX = useTransform(mouseX, [-0.5, 0.5], [-28 * depth, 28 * depth]);
  const mY = useTransform(mouseY, [-0.5, 0.5], [-28 * depth, 28 * depth]);

  const combinedX = useTransform([xSpring, mX], ([pxv, mxv]) => pxv + mxv);
  const combinedY = useTransform([ySpring, mY], ([pyv, myv]) => pyv + myv);

  const imgClass =
    objectFit === "contain"
      ? "w-full h-full object-contain"
      : "w-full h-full object-cover";

  const bgSize = objectFit === "contain" ? "contain" : "cover";
  const bgPos = "center";

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer ${className}`}
      style={{
        x: combinedX,
        y: combinedY,
        zIndex: zIndex,
        willChange: "transform",
        backgroundColor: cardBg !== "transparent" ? cardBg : undefined,
      }}
      initial={{ opacity: 0, scale: 0.88, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1.15,
        delay: stagger,
        ease: easeOutExpo,
      }}
      whileHover={{ y: -14, scale: 1.015 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        className={imgClass}
        style={{
          transform: "scale(1.02)",
          backgroundColor:
            background !== "transparent" ? background : undefined,
        }}
      />
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: bgSize,
          backgroundPosition: bgPos,
          backgroundColor:
            background !== "transparent" ? background : undefined,
        }}
        initial={{ scale: 1.02 }}
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.85, ease: easeOutQuart }}
      />
    </motion.div>
  );
};

const FloatingBadge = ({
  children,
  className = "",
  parallaxX,
  parallaxY,
  depth = 0.5,
  mouseX,
  mouseY,
  stagger = 0,
}) => {
  const xSpring = useSpring(parallaxX, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });
  const ySpring = useSpring(parallaxY, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });
  const mX = useTransform(mouseX, [-0.5, 0.5], [-18 * depth, 18 * depth]);
  const mY = useTransform(mouseY, [-0.5, 0.5], [-18 * depth, 18 * depth]);
  const combinedX = useTransform([xSpring, mX], ([a, b]) => a + b);
  const combinedY = useTransform([ySpring, mY], ([a, b]) => a + b);

  return (
    <motion.div
      className={`absolute backdrop-blur-xl bg-white/72 border border-white/70 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.22)] px-4 py-3 flex items-center font-medium text-gray-800 ${className}`}
      style={{
        x: combinedX,
        y: combinedY,
        willChange: "transform",
      }}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1.1,
        delay: stagger,
        ease: easeOutExpo,
      }}
    >
      {children}
    </motion.div>
  );
};

const PulsingDot = () => (
  <span className="relative flex h-2 w-2 shrink-0">
    <span className="absolute inline-flex h-full w-full rounded-full bg-red-600 animate-ping opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
  </span>
);

export default function HeroPremium() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const badgeRef = useRef(null);
  const paraRef = useRef(null);
  const trustRef = useRef(null);
  const cornerLabelRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const collageRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mXSpring = useSpring(mouseX, { stiffness: 80, damping: 24, mass: 0.5 });
  const mYSpring = useSpring(mouseY, { stiffness: 80, damping: 24, mass: 0.5 });

  const scrollY = useMotionValue(0);

  const p1x = useTransform(scrollY, [0, 600], [0, -12]);
  const p1y = useTransform(scrollY, [0, 600], [0, 18]);
  const p2x = useTransform(scrollY, [0, 600], [0, 10]);
  const p2y = useTransform(scrollY, [0, 600], [0, 22]);
  const p3x = useTransform(scrollY, [0, 600], [0, -6]);
  const p3y = useTransform(scrollY, [0, 600], [0, 28]);
  const p4x = useTransform(scrollY, [0, 600], [0, -14]);
  const p4y = useTransform(scrollY, [0, 600], [0, 20]);
  const p5x = useTransform(scrollY, [0, 600], [0, 12]);
  const p5y = useTransform(scrollY, [0, 600], [0, 32]);

  const b1x = useTransform(scrollY, [0, 600], [0, -8]);
  const b1y = useTransform(scrollY, [0, 600], [0, 14]);
  const b2x = useTransform(scrollY, [0, 600], [0, 10]);
  const b2y = useTransform(scrollY, [0, 600], [0, 18]);
  const b3x = useTransform(scrollY, [0, 600], [0, -10]);
  const b3y = useTransform(scrollY, [0, 600], [0, 22]);
  const b4x = useTransform(scrollY, [0, 600], [0, 5]);
  const b4y = useTransform(scrollY, [0, 600], [0, 26]);

  const textScrollY = useTransform(scrollY, [0, 600], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

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
      const badgeEl = badgeRef.current;
      if (badgeEl) {
        gsap.fromTo(
          badgeEl,
          { opacity: 0, y: -16, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "expo.out",
            delay: 0.1,
          },
        );
      }

      if (headingRef.current) {
        const text = new SplitType(headingRef.current, {
          types: "lines, words",
          tagName: "span",
        });
        gsap.fromTo(
          text.words,
          { yPercent: 115, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.15,
            ease: "expo.out",
            stagger: 0.035,
            delay: 0.2,
            clearProps: "all",
          },
        );
      }

      const paraEl = paraRef.current;
      if (paraEl) {
        gsap.fromTo(
          paraEl,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1, ease: "expo.out", delay: 0.95 },
        );
      }

      if (trustRef.current) {
        const items = trustRef.current.querySelectorAll("[data-trust-item]");
        gsap.fromTo(
          items,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "expo.out",
            stagger: 0.11,
            delay: 1.35,
          },
        );
      }

      const corner = cornerLabelRef.current;
      if (corner) {
        gsap.fromTo(
          corner,
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: 1.8, ease: "power2.out" },
        );
      }

      if (collageRef.current && typeof window !== "undefined") {
        gsap.to(collageRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          yPercent: -1.5,
          ease: "none",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="parkinsans relative min-h-screen w-full bg-white overflow-hidden isolate"
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div
          className="absolute rounded-full blur-3xl opacity-50"
          style={{
            top: "-8%",
            left: "50%",
            width: "520px",
            height: "520px",
            background:
              "radial-gradient(circle, rgba(254, 202, 202, 0.65) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-40"
          style={{
            bottom: "-12%",
            right: "0%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(254, 215, 170, 0.55) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-35"
          style={{
            top: "30%",
            right: "48%",
            width: "380px",
            height: "380px",
            background:
              "radial-gradient(circle, rgba(209, 213, 219, 0.6) 0%, rgba(255, 255, 255, 0) 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-20 h-full items-center gap-10 lg:gap-16 min-h-[calc(100vh-8rem)]">
          <motion.div
            style={{ y: textScrollY }}
            className="lg:col-span-9 flex flex-col justify-center order-1 will-change-transform"
          >
            <div ref={badgeRef} className="mb-8 lg:mb-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-50 border border-red-100 shadow-sm">
                <PulsingDot />
                <span className="text-red-600 text-xs lg:text-sm font-bold uppercase tracking-[0.18em]">
                  CREATE • BRAND • IMPACT
                </span>
              </div>
            </div>

            <h1
              ref={headingRef}
              className="text-[1.9rem] sm:text-[2.2rem] lg:text-[2.7rem] xl:text-[3.1rem] font-black text-gray-950 tracking-tight mb-8 lg:mb-10 leading-[1.02]"
            >
              Premium Print Production &amp; Branding Solutions That Bring{" "}
              <span className="text-red-600">Ideas</span> To Life
            </h1>

            <p
              ref={paraRef}
              className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xl mb-10 lg:mb-12"
              style={{ opacity: 0 }}
            >
              We partner with businesses, organizations and institutions to
              create unforgettable brand experiences through premium printing,
              packaging, signage, fabrication, merchandise and corporate
              branding.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-12 lg:mb-16">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.95, delay: 1.1, ease: easeOutExpo }}
              >
                <MagneticButton href="/contact" variant="primary">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 ml-1" strokeWidth={2.25} />
                </MagneticButton>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.95, delay: 1.22, ease: easeOutExpo }}
              >
                <MagneticButton href="/works" variant="secondary">
                  Explore Our Work
                  <MoveRight className="w-4 h-4 ml-1" strokeWidth={2.25} />
                </MagneticButton>
              </motion.div>
            </div>

            <div
              ref={trustRef}
              className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-5 sm:gap-8"
            >
              {[
                { label: "Fast Turnaround" },
                { label: "Nationwide Delivery" },
                { label: "Premium Quality" },
              ].map((item, i) => (
                <div
                  key={i}
                  data-trust-item
                  className="flex items-center gap-3"
                  style={{ opacity: 0 }}
                >
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-50 ring-1 ring-red-100 shrink-0">
                    <Check className="w-4 h-4 text-red-600" strokeWidth={3} />
                  </div>
                  <span className="text-gray-600 leading-relaxed text-sm md:text-base font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-11 relative order-2 w-full">
            <motion.div
              ref={collageRef}
              className="relative w-full mx-auto will-change-transform"
              style={{ maxWidth: "640px", aspectRatio: "4 / 4.6" }}
            >
              <div className="absolute -top-6 -left-8 w-56 h-56 rounded-full bg-gradient-to-br from-red-100 to-orange-100 blur-3xl opacity-65 pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-gradient-to-br from-amber-100 to-gray-200 blur-3xl opacity-65 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-slate-100 to-white blur-2xl opacity-75 pointer-events-none" />

              <div
                className="absolute"
                style={{
                  top: "0%",
                  left: "-6%",
                  width: "62%",
                  aspectRatio: "5 / 4",
                }}
              >
                <ImageCard
                  src="/hero-img.png"
                  alt="Hero image"
                  width={500}
                  height={400}
                  className="w-full h-full"
                  parallaxX={p1x}
                  parallaxY={p1y}
                  mouseX={mXSpring}
                  mouseY={mYSpring}
                  zIndex={20}
                  depth={0.3}
                  stagger={0.35}
                />
              </div>

              <div
                className="absolute"
                style={{
                  top: "6%",
                  right: "-4%",
                  width: "46%",
                  aspectRatio: "3 / 4",
                }}
              >
                <ImageCard
                  src="/hero-print.jpg"
                  alt="Hero print sample"
                  width={360}
                  height={480}
                  className="w-full h-full"
                  parallaxX={p2x}
                  parallaxY={p2y}
                  mouseX={mXSpring}
                  mouseY={mYSpring}
                  zIndex={30}
                  depth={0.5}
                  stagger={0.5}
                  objectFit="cover"
                  background="transparent"
                  cardBg="transparent"
                />
              </div>

              <div
                className="absolute"
                style={{
                  top: "41%",
                  left: "12%",
                  width: "58%",
                  aspectRatio: "16 / 10",
                }}
              >
                <ImageCard
                  src="/tutorial-03.png"
                  alt="Tutorial sample 03"
                  width={460}
                  height={290}
                  className="w-full h-full"
                  parallaxX={p3x}
                  parallaxY={p3y}
                  mouseX={mXSpring}
                  mouseY={mYSpring}
                  zIndex={40}
                  depth={0.65}
                  stagger={0.65}
                />
              </div>

              <div
                className="absolute"
                style={{
                  bottom: "-2%",
                  left: "-2%",
                  width: "40%",
                  aspectRatio: "1 / 1",
                }}
              >
                <ImageCard
                  src="/van-img.jpg"
                  alt="Vehicle branding on a van"
                  width={320}
                  height={320}
                  className="w-full h-full"
                  parallaxX={p4x}
                  parallaxY={p4y}
                  mouseX={mXSpring}
                  mouseY={mYSpring}
                  zIndex={25}
                  depth={0.4}
                  stagger={0.8}
                />
              </div>

              <div
                className="absolute"
                style={{
                  bottom: "2%",
                  right: "4%",
                  width: "52%",
                  aspectRatio: "4 / 3",
                }}
              >
                <ImageCard
                  src="/space-img.jpg"
                  alt="Space image sample"
                  width={420}
                  height={315}
                  className="w-full h-full"
                  parallaxX={p5x}
                  parallaxY={p5y}
                  mouseX={mXSpring}
                  mouseY={mYSpring}
                  zIndex={50}
                  depth={0.55}
                  stagger={0.95}
                />
              </div>

              <FloatingBadge
                style={{ top: "-18px", left: "28%" }}
                parallaxX={b1x}
                parallaxY={b1y}
                mouseX={mXSpring}
                mouseY={mYSpring}
                depth={0.7}
                stagger={1.15}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center shadow-md shadow-red-600/30">
                    <ShieldCheck
                      className="w-5 h-5 text-white"
                      strokeWidth={2.25}
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[15px] font-black text-gray-900">
                      500+
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 tracking-wide uppercase">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </FloatingBadge>

              <FloatingBadge
                style={{ top: "44%", right: "-14px" }}
                parallaxX={b2x}
                parallaxY={b2y}
                mouseX={mXSpring}
                mouseY={mYSpring}
                depth={0.8}
                stagger={1.3}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-100">
                    <Globe2
                      className="w-5 h-5 text-amber-600"
                      strokeWidth={2.25}
                    />
                  </div>
                  <div className="leading-tight whitespace-nowrap">
                    <div className="text-[14px] font-black text-gray-900">
                      Nationwide
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 tracking-wide uppercase">
                      Trusted Service
                    </div>
                  </div>
                </div>
              </FloatingBadge>

              <FloatingBadge
                style={{ bottom: "20%", left: "-22px" }}
                parallaxX={b3x}
                parallaxY={b3y}
                mouseX={mXSpring}
                mouseY={mYSpring}
                depth={0.75}
                stagger={1.45}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
                    <Zap
                      className="w-5 h-5 text-emerald-600"
                      strokeWidth={2.25}
                      fill="currentColor"
                      fillOpacity={0.15}
                    />
                  </div>
                  <div className="leading-tight whitespace-nowrap">
                    <div className="text-[14px] font-black text-gray-900">
                      End-to-End
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 tracking-wide uppercase">
                      Production
                    </div>
                  </div>
                </div>
              </FloatingBadge>

              <FloatingBadge
                style={{ bottom: "-26px", right: "32%" }}
                parallaxX={b4x}
                parallaxY={b4y}
                mouseX={mXSpring}
                mouseY={mYSpring}
                depth={0.9}
                stagger={1.6}
              >
                <div className="flex items-center gap-2">
                  <Sparkles
                    className="w-4 h-4 text-red-600"
                    strokeWidth={2.25}
                  />
                  <span className="text-[12px] font-bold tracking-wide text-gray-800 uppercase">
                    Create. Brand. Impact.
                  </span>
                </div>
              </FloatingBadge>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        ref={cornerLabelRef}
        className="hidden xl:block absolute bottom-10 left-8 z-10"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center gap-3 text-gray-400">
          <span className="inline-block w-10 h-px bg-gray-300" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
            Crafted with precision
          </span>
        </div>
      </div>
    </section>
  );
}
