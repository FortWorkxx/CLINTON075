import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#101820",
        navy: "#253746",
        gold: {
          DEFAULT: "#D6B46A",
          light: "#E7D3A1",
          dark: "#A9873F",
        },
        ivory: "#F4F2ED",
        slate: {
          DEFAULT: "#777F85",
        },
      },
      fontFamily: {
        display: [
          "Cormorant Garamond",
          "Iowan Old Style",
          "Palatino Linotype",
          "Georgia",
          "serif",
        ],
        sans: [
          "Inter Variable",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        shell: "1280px",
      },
      boxShadow: {
        gold: "0 18px 50px -20px rgba(214, 180, 106, 0.45)",
        card: "0 24px 60px -32px rgba(16, 24, 32, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1.12)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slow-zoom": "slow-zoom 22s ease-out both",
        marquee: "marquee 38s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
