"use client";

import { motion } from "framer-motion";

/* ---------- Donut chart ---------- */
type DonutSlice = { label: string; value: number; color: string };

export function DonutChart({ data, size = 140 }: { data: DonutSlice[]; size?: number }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = size / 2 - 14;
  const circumference = 2 * Math.PI * radius;
  let cumulative = 0;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      role="img"
      aria-label="Project mix by discipline donut chart"
    >
      <title>Project mix by discipline</title>
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1F3A5F"
          strokeWidth={16}
        />
        {data.map((d, i) => {
          const dash = (d.value / total) * circumference;
          const offset = -((cumulative / total) * circumference);
          cumulative += d.value;
          return (
            <motion.circle
              key={d.label}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth={16}
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={offset}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
          );
        })}
      </g>
      <text
        x={size / 2}
        y={size / 2 - 4}
        textAnchor="middle"
        className="fill-ink"
        style={{ fontSize: 22, fontWeight: 600, fontFamily: "var(--font-display)" }}
      >
        {total}
      </text>
      <text
        x={size / 2}
        y={size / 2 + 14}
        textAnchor="middle"
        className="fill-inkMute"
        style={{ fontSize: 9, fontFamily: "var(--font-mono)", textTransform: "uppercase" }}
      >
        projects
      </text>
    </svg>
  );
}

/* ---------- Horizontal bar chart ---------- */
type BarDatum = { label: string; value: number; display: string; color: string };

export function BarChart({ data }: { data: BarDatum[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="space-y-3">
      {data.map((d, i) => (
        <div key={d.label}>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-inkSoft font-medium">{d.label}</span>
            <span className="font-mono text-inkMute">{d.display}</span>
          </div>
          <div className="h-2 rounded-full bg-paper overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(d.value / max) * 100}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="h-full rounded-full"
              style={{ backgroundColor: d.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Sparkline ---------- */
export function Sparkline({
  values,
  labels,
  color = "#34D6C0",
  width = 220,
  height = 60,
}: {
  values: number[];
  labels: string[];
  color?: string;
  width?: number;
  height?: number;
}) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const pad = 8;
  const points = values.map((v, i) => {
    const x = pad + (i / (values.length - 1)) * (width - pad * 2);
    const y = height - pad - ((v - min) / range) * (height - pad * 2);
    return { x, y };
  });
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height={height}
      role="img"
      aria-label="Sprint retrospective confidence trend, rising over three sprints"
    >
      <title>Sprint confidence trend</title>
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={3.5} fill={color} />
          <text
            x={p.x}
            y={height - 1}
            textAnchor="middle"
            style={{ fontSize: 8, fontFamily: "var(--font-mono)" }}
            className="fill-inkMute"
          >
            {labels[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}
