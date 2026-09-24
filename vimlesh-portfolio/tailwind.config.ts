import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hull: "#060A12",        // base background
        panel: "#0C1622",       // panel surfaces
        panelLight: "#122032",  // hover / raised panel
        signal: "#4FD3FF",      // primary HUD glow (cyan-blue)
        signalDim: "#2C6C87",
        amber: "#FFB454",       // secondary accent (status/alerts)
        mist: "#C9D7E8",        // primary text
        mistDim: "#7C8DA6",     // muted text
        line: "#1B2C40",        // borders / grid lines
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(79,211,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,211,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.85" },
          "94%": { opacity: "1" },
        },
      },
      animation: {
        scan: "scan 6s linear infinite",
        blink: "blink 1.6s ease-in-out infinite",
        flicker: "flicker 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
