"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  KanbanSquare,
  BarChart3,
  HardHat,
  TrendingUp,
  Users,
  GraduationCap,
  Building2,
  Target,
} from "lucide-react";

const FOCUS_AREAS = [
  { icon: Briefcase, label: "Project Management" },
  { icon: KanbanSquare, label: "Agile & PMO" },
  { icon: BarChart3, label: "Business Analytics" },
  { icon: HardHat, label: "Construction & Real Estate" },
];

const GOALS = [
  "Advance to PMP certification to deepen and formalize project management expertise",
  "Lead cross-functional teams that ship on time, on budget, and on scope",
  "Turn ambiguous, complex problems into structured, executable plans",
];

const STATS = [
  { icon: TrendingUp, value: "5+", label: "Years in project management" },
  { icon: Users, value: "4", label: "Live co-op projects supported" },
  { icon: GraduationCap, value: "15", label: "Academic & case-study projects" },
  { icon: Building2, value: "2", label: "Residential builds delivered" },
];

const TIMELINE = [
  { year: "2020", note: "BE, Civil Engineering" },
  { year: "2021", note: "Co-founded 2 construction builds" },
  { year: "2024", note: "IP ops & process improvement" },
  { year: "2026", note: "Co-op, MadeINcubator · MS PM (in progress)" },
];

export default function Hero() {
  return (
    <section
      id="profile"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative max-w-4xl mx-auto w-full">
        {/* System status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-8 font-mono text-[11px] text-inkMute"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-analytics animate-pulse" />
          PORTFOLIO STATUS: ACTIVE · OPEN TO PM ROLES
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-brand/50 shadow-card">
            <Image
              src="/profile/headshot.jpg"
              alt="Vimlesh Sonawane"
              width={288}
              height={288}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name & title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-display text-4xl sm:text-6xl font-semibold text-ink leading-tight"
        >
          Vimlesh Sonawane
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.13 }}
          className="text-brand mt-2 text-sm sm:text-base font-medium"
        >
          Project Manager · MS Project Management, Northeastern University
        </motion.p>

        {/* Who I am */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-8 max-w-xl"
        >
          <div className="font-mono text-[11px] text-inkMute uppercase tracking-wide mb-2">
            Who I am
          </div>
          <p className="text-inkSoft text-base sm:text-lg">
            Project Manager with 5+ years across construction, e-commerce
            operations, and partnerships &amp; program delivery. I bring
            structure to complex initiatives — coordinating teams, tracking
            outcomes, and turning operational chaos into a plan people can
            actually follow.
          </p>
        </motion.div>

        {/* Goals */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-6 max-w-xl"
        >
          <div className="font-mono text-[11px] text-inkMute uppercase tracking-wide mb-2 flex items-center gap-1.5">
            <Target size={12} /> Goals
          </div>
          <ul className="space-y-1.5">
            {GOALS.map((goal) => (
              <li
                key={goal}
                className="text-inkSoft text-sm sm:text-base pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-brand"
              >
                {goal}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Focus tags */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mt-8"
        >
          {FOCUS_AREAS.map((area) => (
            <span
              key={area.label}
              className="inline-flex items-center gap-1.5 bg-paperRaised border border-line text-inkSoft text-xs font-medium px-3 py-1.5 rounded-md shadow-sm"
            >
              <area.icon size={13} strokeWidth={2.25} />
              {area.label}
            </span>
          ))}
        </motion.div>

        {/* Career Gantt strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-10"
        >
          <div className="h-2.5 rounded-full bg-line overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, delay: 0.45, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-construction via-brand to-pmo"
            />
          </div>
          <div className="flex justify-between mt-2">
            {TIMELINE.map((t) => (
              <div key={t.year} className="text-left">
                <div className="font-mono text-[11px] text-ink font-medium">{t.year}</div>
                <div className="text-[11px] text-inkMute hidden sm:block max-w-[110px]">
                  {t.note}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard-style KPI tiles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="card relative overflow-hidden px-4 py-3.5">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand" />
              <stat.icon size={14} className="text-inkMute mb-1.5" strokeWidth={2} />
              <div className="font-display text-xl sm:text-2xl text-ink font-semibold leading-none">
                {stat.value}
              </div>
              <div className="text-[10.5px] sm:text-xs text-inkMute mt-1.5 leading-tight font-mono uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
