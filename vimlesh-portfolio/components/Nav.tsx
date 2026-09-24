"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#profile", label: "Profile" },
  { href: "#brief", label: "Brief" },
  { href: "#log", label: "Mission Log" },
  { href: "#projects", label: "Projects" },
  { href: "#systems", label: "Systems" },
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
        scrolled ? "bg-hull/90 border-b border-line backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#profile"
          className="font-mono text-sm tracking-wide text-signal"
        >
          V.SONAWANE <span className="text-mistDim">// CONSOLE</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 font-mono text-xs text-mistDim">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-signal transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="font-mono text-xs border border-signalDim text-signal px-3 py-1.5 hover:bg-signal/10 transition-colors duration-200"
        >
          Transmit
        </a>
      </nav>
    </header>
  );
}
