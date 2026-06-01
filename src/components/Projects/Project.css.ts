import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
};

const fadeUp = keyframes({
  from: { opacity: 0, transform: "translateY(32px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export const section = style({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "120px 52px",
  overflow: "hidden",

  "::before": {
    content: '""',
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 900,
    height: 400,
    background:
      "radial-gradient(ellipse at center, rgba(92,59,255,0.07) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },

  "@media": {
    [`screen and (max-width: ${breakpoints.lg})`]: {
      padding: "100px 36px",
    },
    [`screen and (max-width: ${breakpoints.md})`]: {
      padding: "80px 20px",
      justifyContent: "flex-start",
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      padding: "72px 16px",
    },
  },
});

export const inner = style({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: 1100,
  display: "flex",
  flexDirection: "column",
  gap: 48,

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      gap: 36,
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      gap: 28,
    },
  },
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  animation: `${fadeUp} 0.7s ease both`,
});

export const eyebrow = style({
  fontFamily: vars.font.ui,
  fontSize: "0.78rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: vars.color.purpleLight,
});

export const heading = style({
  fontFamily: vars.font.display,
  fontStyle: "italic",
  fontWeight: 700,
  fontSize: "clamp(2rem, 5vw, 3.8rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  color: vars.color.white,
});

export const divider = style({
  width: 48,
  height: 2,
  background: `linear-gradient(90deg, ${vars.color.purpleCore}, transparent)`,
  borderRadius: 2,
  marginTop: 4,
});

export const filters = style({
  display: "flex",
  gap: 10,
  flexWrap: "wrap",

  "@media": {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      gap: 8,
    },
  },
});

export const filterBtn = style({
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 50,
  padding: "8px 20px",
  fontFamily: vars.font.ui,
  fontSize: "0.82rem",
  fontWeight: 500,
  color: vars.color.muted,
  cursor: "pointer",
  transition: "all 0.2s",
  // min touch target height
  minHeight: 44,

  selectors: {
    "&:hover": {
      borderColor: vars.color.purpleCore,
      color: vars.color.white,
    },
  },

  "@media": {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      padding: "7px 16px",
      fontSize: "0.78rem",
    },
  },
});

export const filterBtnActive = style({
  background: vars.color.purpleCore,
  borderColor: vars.color.purpleCore,
  color: vars.color.white,
  boxShadow: `0 0 20px ${vars.color.purpleGlow}`,
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 20,

  "@media": {
    [`screen and (max-width: ${breakpoints.lg})`]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 16,
    },
    [`screen and (max-width: ${breakpoints.md})`]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 14,
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      gridTemplateColumns: "1fr",
      gap: 14,
    },
  },
});
