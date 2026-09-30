"use client";

import { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";

const LINKS = [
  { href: "#profile", label: "Profile" },
  { href: "#dashboard", label: "Overview" },
  { href: "#experience", label: "Experience" },
  { href: "#coop", label: "Co-op" },
  { href: "#projects", label: "Projects" },
  { href: "#credentials", label: "Credentials" },
  { href: "#systems", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 border-b border-line backdrop-blur-sm" : "bg-paper/80 border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5">
        <a href="#profile" className="flex items-center gap-2 text-ink font-display font-semibold text-sm">
          <span className="w-7 h-7 rounded-md bg-brand text-onBrand flex items-center justify-center">
            <Briefcase size={15} strokeWidth={2.25} />
          </span>
          Vimlesh Sonawane
        </a>
        <ul className="hidden md:flex items-center gap-1 text-xs font-mono">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-inkMute hover:text-brand hover:bg-brandSoft transition-colors duration-150 px-3 py-1.5 rounded-md"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline-flex items-center gap-1.5 font-mono text-[11px] text-inkMute border border-line px-2.5 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-analytics" />
            ACTIVE
          </span>
          <a
            href="#contact"
            className="text-xs font-mono font-medium bg-brand text-onBrand px-4 py-2 rounded-md hover:bg-brand/90 transition-colors duration-200"
          >
            Transmit →
          </a>
        </div>
      </nav>
    </header>
  );
}
