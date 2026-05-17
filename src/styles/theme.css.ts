import { createGlobalTheme } from "@vanilla-extract/css";

// Global CSS variables — consumed by all component .css.ts files via `vars`
export const vars = createGlobalTheme(":root", {
  color: {
    bg: "#0a090e",
    purpleCore: "#5c3bff",
    purpleLight: "#7b5fff",
    purpleGlow: "rgba(92, 59, 255, 0.45)",
    white: "#ffffff",
    muted: "rgba(255,255,255,0.55)",
    pillBg: "rgba(255,255,255,0.08)",
    pillBorder: "rgba(255,255,255,0.14)",
  },
  font: {
    display: "'Playfair Display', serif",
    ui: "'Syne', sans-serif",
  },
});
