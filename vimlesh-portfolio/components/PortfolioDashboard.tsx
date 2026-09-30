"use client";

import { motion } from "framer-motion";
import { Briefcase, DollarSign, Database, BadgeCheck, GraduationCap } from "lucide-react";
import { DonutChart, BarChart, Sparkline } from "./Charts";

const ACCENT_HEX: Record<string, string> = {
  brand: "#C9A24B",
  pmo: "#8B93FF",
  analytics: "#34D6C0",
  construction: "#E0954B",
  business: "#F08BA8",
  research: "#A78BFA",
  award: "#D9B168",
};

const KPIS = [
  { icon: Briefcase, value: "20", label: "Projects documented", accent: "brand" },
  { icon: DollarSign, value: "$39M+", label: "Program budgets modeled", accent: "construction" },
  { icon: Database, value: "200K+", label: "Data records analyzed", accent: "analytics" },
  { icon: GraduationCap, value: "12", label: "Courses & disciplines", accent: "pmo" },
  { icon: BadgeCheck, value: "6", label: "Certifications · 2 awards", accent: "award" },
];

const CATEGORY_DATA = [
  { label: "Agile / PMO", value: 12, color: ACCENT_HEX.pmo },
  { label: "Business Analysis", value: 2, color: ACCENT_HEX.business },
  { label: "Analytics", value: 3, color: ACCENT_HEX.analytics },
  { label: "Construction", value: 2, color: ACCENT_HEX.construction },
  { label: "Research", value: 1, color: ACCENT_HEX.research },
];

const BUDGET_DATA = [
  { label: "Costco Expansion", value: 11.98, display: "$11.98M", color: ACCENT_HEX.construction },
  { label: "Fuel-Efficient Engine", value: 10, display: "$10M", color: ACCENT_HEX.pmo },
  { label: "Hydroponic Farming", value: 10, display: "$10M", color: ACCENT_HEX.analytics },
  { label: "AI Equipment (Mahindra)", value: 6, display: "$6M", color: ACCENT_HEX.pmo },
  { label: "Wearable Safety Device", value: 1.5, display: "$1.5M", color: ACCENT_HEX.research },
];

const R2_DATA = [
  { label: "Addiction → Mental health", value: 0.89, display: "R² 0.89", color: ACCENT_HEX.analytics },
  { label: "Usage → Addiction score", value: 0.69, display: "R² 0.69", color: ACCENT_HEX.analytics },
  { label: "Addiction → Sleep hours", value: 0.58, display: "R² 0.58", color: ACCENT_HEX.analytics },
  { label: "NYC crash factors (real-world noise)", value: 0.018, display: "R² 0.018", color: "#8E9CB2" },
];

export default function PortfolioDashboard() {
  return (
    <section id="dashboard" className="relative px-6 py-20 border-t border-line bg-paperRaised/40">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
          <span className="text-xs font-mono text-brand">00</span>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-inkMute border border-line px-2 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-analytics animate-pulse" />
            LIVE — AGGREGATED FROM PROJECT RECORDS
          </span>
        </div>
        <h2 className="font-display text-3xl text-ink mt-2 mb-1 font-semibold">
          Portfolio Overview
        </h2>
        <p className="text-inkMute mb-8 max-w-xl text-sm">
          Aggregated across every documented project on this site — computed from the records below, not marketing copy.
        </p>

        {/* KPI tile row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {KPIS.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="card relative overflow-hidden px-3.5 py-3.5"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: ACCENT_HEX[kpi.accent] }}
              />
              <kpi.icon size={15} className="text-inkMute mb-2" strokeWidth={2} />
              <div className="font-display text-lg sm:text-xl font-semibold text-ink leading-none">
                {kpi.value}
              </div>
              <div className="text-[10.5px] text-inkMute mt-1.5 leading-tight font-mono uppercase tracking-wide">
                {kpi.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {/* Category donut */}
          <div className="card p-5 flex items-center gap-5">
            <DonutChart data={CATEGORY_DATA} size={120} />
            <div className="flex-1 space-y-2">
              <div className="text-[11px] font-mono text-inkMute uppercase tracking-wide mb-2">
                Project mix
              </div>
              {CATEGORY_DATA.map((d) => (
                <div key={d.label} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-inkSoft">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ backgroundColor: d.color }}
                    />
                    {d.label}
                  </span>
                  <span className="font-mono text-inkMute">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sprint confidence sparkline — real Care Connect retrospective data */}
          <div className="card p-5">
            <div className="text-[11px] font-mono text-inkMute uppercase tracking-wide mb-1">
              Team confidence trend
            </div>
            <div className="text-inkMute text-xs mb-3">
              Care Connect sprint retrospectives, PJM 6810 (out of 10)
            </div>
            <Sparkline
              values={[6, 7, 8]}
              labels={["Sprint 1", "Sprint 2", "Sprint 3"]}
              color={ACCENT_HEX.analytics}
              width={260}
              height={70}
            />
          </div>
        </div>

        {/* Budget bar chart */}
        <div className="card p-5 mb-4">
          <div className="text-[11px] font-mono text-inkMute uppercase tracking-wide mb-4">
            Program budgets modeled ($M)
          </div>
          <BarChart data={BUDGET_DATA} />
        </div>

        {/* R-squared bar chart */}
        <div className="card p-5">
          <div className="text-[11px] font-mono text-inkMute uppercase tracking-wide mb-1">
            Model strength across real regression analyses
          </div>
          <div className="text-inkMute text-xs mb-4">
            Higher R² = more variance explained. The NYC crash model's low score is reported honestly — five predictors were never going to explain most of real-world crash variability.
          </div>
          <BarChart data={R2_DATA} />
        </div>
      </div>
    </section>
  );
}
