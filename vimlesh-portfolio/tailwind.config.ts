import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#0B1F3A",        // page background — deep navy
        paperRaised: "#142B4A",  // card/panel surfaces — lighter navy
        ink: "#F2EAD9",          // primary text — warm ivory
        inkSoft: "#C7CEDA",      // secondary text — soft blue-gray
        inkMute: "#8E9CB2",      // muted/meta text — slate blue (AA-verified on both bg tones)
        line: "#1F3A5F",         // borders — subtle navy line
        brand: "#C9A24B",        // primary accent — gold
        brandSoft: "#233150",
        onBrand: "#12233F",      // dark text for on-gold elements
        pmo: "#8B93FF",          // category — agile / PMO (periwinkle)
        pmoSoft: "#232A52",
        analytics: "#34D6C0",    // category — data / analytics (mint teal)
        analyticsSoft: "#123A38",
        construction: "#E0954B", // category — construction / real estate (amber)
        constructionSoft: "#3A2A16",
        business: "#F08BA8",     // category — business analysis (rose)
        businessSoft: "#3A1F33",
        research: "#A78BFA",     // category — research / academic (lavender)
        researchSoft: "#2C2350",
        award: "#D9B168",         // awards / recognition (gold, lighter than brand)
        awardSoft: "#332A14",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(242,234,217,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(242,234,217,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        blueprint: "32px 32px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.15), 0 8px 24px -12px rgba(0,0,0,0.35)",
        cardHover: "0 4px 10px rgba(0,0,0,0.2), 0 16px 32px -12px rgba(0,0,0,0.4)",
      },
      keyframes: {
        fillBar: {
          "0%": { width: "0%" },
          "100%": { width: "var(--fill-to, 100%)" },
        },
      },
      animation: {
        fillBar: "fillBar 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
