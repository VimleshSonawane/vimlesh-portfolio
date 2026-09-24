"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BOOT_LINES = [
  "AUTHENTICATING PROFILE...",
  "LOADING CAREER TELEMETRY...",
  "ACCESS GRANTED — WELCOME",
];

const STATS = [
  { value: "50+", label: "Investigators led" },
  { value: "500+", label: "Weekly IP cases reviewed" },
  { value: "30%", label: "Resolution efficiency gained" },
  { value: "2026", label: "MS Project Mgmt (expected)" },
];

function useBootSequence() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      const t = setTimeout(() => setComplete(true), 300);
      return () => clearTimeout(t);
    }
    const currentLine = BOOT_LINES[lineIndex];
    if (charCount < currentLine.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharCount(0);
    }, 260);
    return () => clearTimeout(t);
  }, [lineIndex, charCount]);

  const linesToShow = BOOT_LINES.slice(0, lineIndex).concat(
    lineIndex < BOOT_LINES.length ? [BOOT_LINES[lineIndex].slice(0, charCount)] : []
  );

  return { linesToShow, complete };
}

export default function Hero() {
  const { linesToShow, complete } = useBootSequence();

  return (
    <section
      id="profile"
      className="relative min-h-screen flex flex-col justify-center px-6 hud-grid overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-hull via-hull/95 to-hull pointer-events-none" />

      <div className="relative max-w-4xl mx-auto w-full pt-24">
        {/* Boot sequence readout */}
        <div className="font-mono text-xs sm:text-sm text-signal/80 h-20 sm:h-16 mb-6">
          {linesToShow.map((line, i) => (
            <div key={i} className="leading-6">
              <span className="text-mistDim mr-2">{">"}</span>
              {line}
              {i === linesToShow.length - 1 && !complete && (
                <span className="inline-block w-2 h-4 bg-signal ml-1 animate-blink align-middle" />
              )}
            </div>
          ))}
        </div>

        {complete && (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl sm:text-6xl font-medium text-white text-glow leading-tight"
            >
              Vimlesh Sonawane
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="font-mono text-sm sm:text-base text-mistDim mt-4 max-w-xl"
            >
              Project management · operations · business analytics · program coordination
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-mist mt-6 max-w-xl text-base sm:text-lg"
            >
              I bring structure to complex initiatives — coordinating teams,
              tracking outcomes, and turning operational chaos into a plan
              people can actually follow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  className="hud-panel px-4 py-3"
                >
                  <div className="font-mono text-signal text-xl sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-mistDim mt-1 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
