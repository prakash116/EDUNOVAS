import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#030014",
        abyss: "#06021a",
        panel: "#0b0724",
        neon: {
          cyan: "#22d3ee",
          blue: "#3b82f6",
          purple: "#a855f7",
          violet: "#7c3aed",
          pink: "#ec4899",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.35), transparent)",
      },
      boxShadow: {
        "glow-cyan": "0 0 40px -8px rgba(34,211,238,0.5)",
        "glow-purple": "0 0 40px -8px rgba(168,85,247,0.5)",
        "glow-blue": "0 0 40px -8px rgba(59,130,246,0.5)",
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.08)",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
