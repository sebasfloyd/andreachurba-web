import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "1.5rem", lg: "2.5rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        bg: "#000000",
        bgSoft: "#0A0A0A",
        bgCard: "#141414",
        light: "#FFFFFF",
        lightSoft: "#F7F5F2",
        lightWarm: "#EFEAE0",
        ink: "#0A0A0A",
        ink2: "#3D3D3D",
        ink3: "#666666",
        ink4: "#9A9A9A",
        ink5: "#C7C7C7",
        line: "rgba(255,255,255,0.10)",
        lineLight: "rgba(0,0,0,0.10)",
        blueTR: "#1F58D6",
        blueTRSoft: "#3B72E8",
        violet: "#9E6FCD",
        violetSoft: "#C4A5E2",
        violetDeep: "#7A4FB0",
        orange: "#FF6B1A",
        orangeBright: "#FF8533",
        green: "#5BBF7C",
        sandLight: "#E5DECB",
        cream: "#F5F0E5",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Helvetica Neue", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tightmid: "-0.025em",
        widewide: "0.16em",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 1s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 60s linear infinite",
      },
      boxShadow: {
        soft: "0 4px 20px -8px rgba(0,0,0,0.08)",
        card: "0 12px 32px -8px rgba(0,0,0,0.18)",
        hover: "0 24px 60px -12px rgba(0,0,0,0.30)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
