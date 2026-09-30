"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "profile", label: "Profile" },
  { id: "dashboard", label: "Overview" },
  { id: "brief", label: "Brief" },
  { id: "experience", label: "Experience" },
  { id: "coop", label: "Co-op" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "systems", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SectionDots() {
  const [active, setActive] = useState("profile");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-label={s.label}
          className="group relative flex items-center justify-end"
        >
          <span className="absolute right-5 whitespace-nowrap text-xs text-inkMute bg-paperRaised border border-line px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
            {s.label}
          </span>
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              active === s.id ? "bg-brand scale-125" : "bg-line group-hover:bg-brand/40"
            }`}
          />
        </a>
      ))}
    </div>
  );
}
