"use client";

import { motion, useReducedMotion } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1];

/* Every reveal waits this long after entering view before it starts, so the
   motion registers instead of being finished by the time the eye lands. */
const BASE_DELAY = 0.25;

const OFFSETS = {
  up: { y: 72, x: 0 },
  down: { y: -72, x: 0 },
  left: { x: 72, y: 0 },
  right: { x: -72, y: 0 },
  fade: { x: 0, y: 0 },
};

/**
 * Wraps a block so it fades and slides into place the first time it is
 * scrolled into view. Used across the homepage sections.
 */
export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1.4,
  amount = 0.15,
  once = true,
  className = "",
}) {
  const prefersReducedMotion = useReducedMotion();
  const offset = OFFSETS[direction] ?? OFFSETS.up;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay: BASE_DELAY + delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}
