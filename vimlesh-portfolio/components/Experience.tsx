"use client";

import { motion } from "framer-motion";
import { KanbanSquare, HardHat } from "lucide-react";
import { CategoryTag } from "./CategoryTag";

type Entry = {
  org: string;
  role: string;
  location: string;
  dates: string;
  category: "pmo" | "construction";
  left: number;
  width: number;
  points: string[];
};

// Positions are % across a Jan 2020 – Dec 2026 timeline (84 months)
const ENTRIES: Entry[] = [
  {
    org: "Evolution Properties",
    role: "Assistant Project Manager",
    location: "Pune, India · Co-founded · Residential construction",
    dates: "Jan 2020 – Aug 2021",
    category: "construction",
    left: 0,
    width: 23.8,
    points: [
      "Co-founded and delivered 2 residential construction projects in Pune from initiation through handover",
      "Managed contractor coordination, procurement, and milestone tracking, advocating for cost-effective, affordable housing solutions",
      "Championed sustainable construction practices, integrating eco-friendly, cost-efficient materials without compromising structural quality",
      "Maintained scope, schedule, and budget control across concurrent builds with zero scope deviation through closeout",
      "Conducted post-project evaluations and lessons-learned sessions after each build",
    ],
  },
  {
    org: "Amazon Inc.",
    role: "Operations & Process Improvement Specialist — IP",
    location: "Pune, India · Intellectual Property Operations",
    dates: "Sept 2021 – June 2024",
    category: "pmo",
    left: 23.8,
    width: 40.5,
    points: [
      "Managed enterprise-scale IP enforcement operations as sole POC across legal teams, brand partners, rights owners, and senior management",
      "Drove SOP redesign by conducting root cause analysis on workflow bottlenecks, reducing case resolution turnaround time",
      "Contributed operational data insights to an AI-powered fraud detection algorithm, improving identification accuracy and reducing false positives",
      "Designed and deployed Power BI dashboards tracking resolution KPIs, defect trends, and productivity metrics for leadership",
    ],
  },
  {
    org: "MadeINcubator, Inc.",
    role: "Project Coordinator / Executive Assistant (Co-op)",
    location: "Boston, MA · City of Boston's first BIPOC-focused fashion incubator",
    dates: "2026",
    category: "pmo",
    left: 85.7,
    width: 10.7,
    points: [
      "Supported planning and coordination of four live programs and events — see the Co-op section for each",
      "Coordinated information and follow-ups between MadeINcubator leadership, partners, sponsors, and stakeholders",
      "Tracked action items, deliverables, and timelines to keep projects on schedule",
      "Organized project documentation and Google Workspace folders across programs",
    ],
  },
];

const YEARS = ["2020", "2021", "2022", "2023", "2024", "2025", "2026"];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 border-t border-line bg-paperRaised/40">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-mono text-brand">02</span>
        <h2 className="font-display text-3xl text-ink mt-2 mb-2 font-semibold">
          Experience
        </h2>
        <p className="text-inkMute mb-10 max-w-xl">
          Roles plotted against a project timeline — bar length shows
          duration, color shows discipline.
        </p>

        {/* Year ruler */}
        <div className="hidden sm:flex justify-between text-[11px] font-mono text-inkMute mb-3 px-1">
          {YEARS.map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>
        <div className="hidden sm:block h-px bg-line mb-8" />

        <div className="space-y-10">
          {ENTRIES.map((entry, i) => (
            <motion.div
              key={entry.role + entry.dates}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="card card-hover p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <CategoryTag
                      category={entry.category}
                      icon={entry.category === "construction" ? HardHat : KanbanSquare}
                    />
                    <span className="font-mono text-xs text-inkMute">{entry.dates}</span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-ink font-semibold">
                    {entry.role}
                  </h3>
                  <div className="text-inkMute text-sm">
                    {entry.org} · {entry.location}
                  </div>
                </div>
              </div>

              {/* Gantt bar */}
              <div className="hidden sm:block relative h-2.5 rounded-full bg-paper mb-5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${entry.width}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  style={{ marginLeft: `${entry.left}%` }}
                  className={`h-full rounded-full ${
                    entry.category === "construction" ? "bg-construction" : "bg-pmo"
                  }`}
                />
              </div>

              <ul className="space-y-1.5">
                {entry.points.map((point) => (
                  <li
                    key={point}
                    className="text-inkSoft text-sm sm:text-base pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-inkMute"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
