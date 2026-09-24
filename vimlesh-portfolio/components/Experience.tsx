"use client";

import { motion } from "framer-motion";

type Entry = {
  org: string;
  role: string;
  location: string;
  dates: string;
  points: string[];
  flag?: string;
};

const ENTRIES: Entry[] = [
  {
    org: "MadeINcubator",
    role: "Project Coordinator / Executive Assistant",
    location: "Nonprofit — fashion & creative industries incubator",
    dates: "Jan 2026 – Present",
    flag: "Confirm start date before publishing",
    points: [
      "Support the CEO with project coordination and administrative operations",
      "Coordinate event planning and execution, including sponsor logistics",
      "Organize Google Workspace documentation and program timelines",
      "Support fashion, youth development, and cultural programming initiatives",
    ],
  },
  {
    org: "Amazon",
    role: "SEPO ADT Operations",
    location: "Intellectual Property Compliance",
    dates: "June 2024 – Present",
    flag: "Confirm exact title and end date",
    points: [
      "Managed patent docketing and maintenance operations",
      "Led workflow optimization across IP compliance processes",
      "Handled complaints and appeals across IP categories",
      "Improved resolution efficiency by approximately 30%",
    ],
  },
  {
    org: "Amazon",
    role: "SEPO Investigations Specialist — CDT Operations",
    location: "Intellectual Property Compliance · Investigations",
    dates: "Sept 2021 – June 2024",
    points: [
      "Led a team of approximately 50 investigators",
      "Managed 500+ weekly intellectual property investigations",
      "Collaborated with legal and cross-functional teams on digital forensics",
      "Worked across copyright, trademark, patent, and design-right compliance",
      "Recipient of a Most Valued Player Award",
    ],
  },
  {
    org: "Evolution Properties",
    role: "Real Estate Developer",
    location: "Pune, Maharashtra, India",
    dates: "Jan 2020 – Aug 2021",
    points: [
      "Supported real estate project planning and execution",
      "Managed project documentation and regulatory compliance applications",
      "Assisted with financial modeling and project tracking",
      "Supported implementation of on-site safety protocols",
    ],
  },
];

export default function Experience() {
  return (
    <section id="log" className="relative px-6 py-28 border-t border-line hud-grid">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-xs text-signal">SEC.02</span>
        <h2 className="font-display text-3xl text-white mt-2 mb-14">
          Mission log
        </h2>

        <div className="relative pl-8">
          {/* Base track line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-14">
            {ENTRIES.map((entry, i) => (
              <motion.div
                key={entry.org + entry.dates}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="relative"
              >
                {/* Node + drawing tick on the track */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.3 }}
                  className="absolute -left-8 top-1.5 w-[13px] h-[13px] rounded-full bg-hull border-2 border-signal signal-glow"
                />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl text-white">
                    {entry.role}
                  </h3>
                  <span className="font-mono text-xs text-mistDim">
                    {entry.org}
                  </span>
                </div>
                <div className="font-mono text-xs text-signal/80 mt-1">
                  {entry.dates}
                </div>
                <div className="text-mistDim text-sm mt-0.5">
                  {entry.location}
                </div>

                <ul className="mt-3 space-y-1.5">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="text-mist text-sm sm:text-base pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-mistDim"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {entry.flag && (
                  <div className="mt-3 inline-block font-mono text-[10px] text-amber border border-amber/40 px-2 py-1">
                    ⚠ {entry.flag}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
