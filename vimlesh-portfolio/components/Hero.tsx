"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "5+", label: "Years experience" },
  { value: "3", label: "Industries" },
  { value: "PMP", label: "In progress" },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Hero() {
  return (
    <section
      id="profile"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
        {/* Photo — first on mobile, right column on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-first lg:order-last relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px] pr-3 pb-3"
        >
          <div className="absolute top-4 left-4 right-0 bottom-0 rounded-3xl border border-brand/70" />
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card">
            <Image
              src="/profile/headshot.jpg"
              alt="Vimlesh Sonawane"
              fill
              priority
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 360px, 300px"
              className="object-cover object-[50%_20%]"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.div
            {...fade(0.05)}
            className="flex items-center gap-2 mb-6 text-xs sm:text-sm text-inkMute"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-analytics" />
            Boston, MA · Open to project management roles
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-ink leading-[1.05]"
          >
            Vimlesh
            <br />
            Sonawane
          </motion.h1>

          <motion.p
            {...fade(0.15)}
            className="text-brand mt-4 text-base sm:text-lg font-medium"
          >
            Project Manager
          </motion.p>

          <motion.p
            {...fade(0.2)}
            className="mt-6 max-w-xl text-inkSoft text-base sm:text-lg leading-relaxed"
          >
            I&apos;m Vimlesh Sonawane, a project manager with five years of
            experience delivering projects across construction, e-commerce
            operations, and community programs. I co-founded and delivered two
            residential builds in Pune, managed enterprise IP enforcement
            operations at Amazon as the sole point of contact between legal
            teams, brand partners, and leadership, and coordinated live events
            in Boston with partners including JPMorgan Chase and the Museum of
            African American History. I bring a civil engineering foundation,
            strong stakeholder management, process improvement, and data-driven
            reporting, and I&apos;m completing an MS in Project Management at
            Northeastern University.
          </motion.p>

          <motion.div {...fade(0.28)} className="flex flex-wrap gap-3 mt-8">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-brand text-paper font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-award transition-colors"
            >
              View experience <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-line text-ink text-sm px-5 py-2.5 rounded-lg hover:border-brand/60 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.dl
            {...fade(0.35)}
            className="flex gap-10 mt-10 pt-6 border-t border-line"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl sm:text-3xl text-ink font-semibold leading-none">
                  {stat.value}
                </dd>
                <dd className="text-xs sm:text-sm text-inkMute mt-1.5">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
