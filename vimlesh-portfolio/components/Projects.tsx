"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  {
    label: "Request logged",
    question: "What are we trying to accomplish?",
    detail:
      "A new request enters the intake system. The requester states the goal in plain terms before anything else happens.",
  },
  {
    label: "Triage",
    question: "Is this routine work, or a project?",
    detail:
      "The request is screened to separate day-to-day operational asks from work that needs formal project structure.",
  },
  {
    label: "Vendor / tech check",
    question: "Are we using a new vendor or technology?",
    detail:
      "Flags whether the request introduces new tooling, systems, or third parties that need extra review.",
  },
  {
    label: "Impact check",
    question: "Will this affect company data or systems?",
    detail:
      "Identifies downstream effects on existing data, infrastructure, or access before resourcing is committed.",
  },
  {
    label: "Sponsorship identified",
    question: "Who owns and funds this?",
    detail:
      "Confirms a sponsor and funding source exists, so the project doesn't stall for lack of ownership.",
  },
  {
    label: "Approved & initiated",
    question: "Ready to move.",
    detail:
      "The request converts into a scoped project with visibility for the wider organization — without adding bureaucracy to simple asks.",
  },
];

const DATA_PROJECTS = [
  {
    name: "Crime data analysis",
    course: "ALY 6010",
    size: "~29,288 rows",
    focus:
      "Exploratory data analysis identifying patterns across 2024 crime incident records.",
  },
  {
    name: "Airline delay analysis",
    course: "ALY 6010",
    size: "~94,636 rows",
    focus:
      "Exploratory analysis of airline delay causes to surface recurring patterns.",
  },
  {
    name: "Diabetes dataset analysis",
    course: "ALY 6000",
    size: "Independent study",
    focus: "Statistical analysis and modeling in R.",
  },
];

function CapstoneStepper() {
  const [active, setActive] = useState(0);

  return (
    <div className="hud-panel p-6 sm:p-8">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
        <div>
          <div className="font-mono text-[11px] text-mistDim">
            ARDELYX PMO CAPSTONE
          </div>
          <h3 className="font-display text-xl text-white mt-1">
            Project intake &amp; initiation
          </h3>
        </div>
        <span className="font-mono text-[11px] text-signal border border-signalDim px-2 py-1">
          INTERACTIVE
        </span>
      </div>

      <p className="text-mist text-sm sm:text-base mb-6">
        A lightweight intake process for deciding what deserves full project
        treatment — without slowing down routine work. Step through each
        stage.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {STAGES.map((stage, i) => (
          <button
            key={stage.label}
            onClick={() => setActive(i)}
            className={`font-mono text-xs px-3 py-2 border transition-colors duration-200 text-left ${
              active === i
                ? "border-signal text-signal bg-signal/10"
                : "border-line text-mistDim hover:border-signalDim hover:text-mist"
            }`}
          >
            {String(i + 1).padStart(2, "0")} — {stage.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-line pt-5"
        >
          <div className="font-mono text-signal text-sm mb-2">
            {STAGES[active].question}
          </div>
          <p className="text-mist text-sm sm:text-base">
            {STAGES[active].detail}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function DataProjectCard({ project }: { project: (typeof DATA_PROJECTS)[number] }) {
  return (
    <div className="hud-panel p-5 group relative overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-signal/10 to-transparent animate-scan" />
      </div>
      <div className="relative">
        <div className="font-mono text-[11px] text-mistDim mb-2">
          {project.course} · {project.size}
        </div>
        <h4 className="font-display text-lg text-white mb-2">
          {project.name}
        </h4>
        <p className="text-mist text-sm">{project.focus}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 border-t border-line">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-xs text-signal">SEC.03</span>
        <h2 className="font-display text-3xl text-white mt-2 mb-4">
          Projects
        </h2>
        <p className="text-mistDim mb-10 max-w-xl">
          A PMO process design and a set of analytics projects — click into
          the capstone below to see how a request moves from idea to
          approved project.
        </p>

        <div className="mb-14">
          <CapstoneStepper />
        </div>

        <h3 className="font-mono text-xs text-mistDim mb-5">
          BUSINESS ANALYTICS
        </h3>
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {DATA_PROJECTS.map((project) => (
            <DataProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="hud-panel p-5">
          <div className="font-mono text-[11px] text-mistDim mb-2">
            EVOLUTION PROPERTIES
          </div>
          <h4 className="font-display text-lg text-white mb-2">
            Real estate development case study
          </h4>
          <p className="text-mist text-sm mb-3">
            Project documentation, regulatory compliance, financial
            modeling, and safety planning support during development in
            Pune, Maharashtra.
          </p>
          <div className="inline-block font-mono text-[10px] text-amber border border-amber/40 px-2 py-1">
            ⚠ Add a specific project name and measurable outcome
          </div>
        </div>
      </div>
    </section>
  );
}
