"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAmbient() {
  const { scrollYProgress } = useScroll();

  const color = useTransform(
    scrollYProgress,
    [0, 0.28, 0.55, 0.8, 1],
    ["#3652C4", "#5B5FEF", "#0E9488", "#C1793B", "#7A5AC8"]
  );

  const background = useTransform(
    color,
    (c) => `radial-gradient(680px circle at 50% 0%, ${c}12, transparent 72%)`
  );

  return (
    <motion.div
      aria-hidden
      style={{ background }}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
