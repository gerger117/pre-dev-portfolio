import { style } from "@vanilla-extract/css";
import { keyframes } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

const fadeUp = keyframes({
  from: { opacity: 0, transform: "translateY(32px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

// ─── Section ─────────────────────────────────────────────────

export const section = style({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "120px 52px",
  overflow: "hidden",

  "::before": {
    content: '""',
    position: "absolute",
    top: "0%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 900,
    height: 400,
    background:
      "radial-gradient(ellipse at center, rgba(92,59,255,0.08) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "80px 24px",
    },
  },
});

export const inner = style({
  position: "relative",
  zIndex: 1,
  width: "100%",
  maxWidth: 1100,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 80,
  alignItems: "center",

  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: 48,
    },
  },
});

// ─── Left: Text Block ─────────────────────────────────────────

export const left = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
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
  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  color: vars.color.white,
});

export const divider = style({
  width: 48,
  height: 2,
  background: `linear-gradient(90deg, ${vars.color.purpleCore}, transparent)`,
  borderRadius: 2,
});

export const bio = style({
  fontFamily: vars.font.ui,
  fontSize: "1rem",
  lineHeight: 1.85,
  color: vars.color.muted,
  maxWidth: 480,
});

export const eduBlock = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: "16px 20px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
});

export const eduLabel = style({
  fontFamily: vars.font.ui,
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: vars.color.purpleLight,
});

export const eduDegree = style({
  fontFamily: vars.font.ui,
  fontSize: "0.97rem",
  fontWeight: 600,
  color: vars.color.white,
});

export const eduSchool = style({
  fontFamily: vars.font.ui,
  fontSize: "0.85rem",
  color: vars.color.muted,
});

// ─── Right: Skills Grid ───────────────────────────────────────

export const right = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  animation: `${fadeUp} 0.7s 0.15s ease both`,
});

export const skillsLabel = style({
  fontFamily: vars.font.ui,
  fontSize: "0.78rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: vars.color.muted,
  marginBottom: 8,
});

export const skillsGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,

  "@media": {
    "screen and (max-width: 480px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const skillCard = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: "20px 20px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  transition: "border-color 0.2s, background 0.2s",

  selectors: {
    "&:hover": {
      borderColor: vars.color.purpleCore,
      background: "rgba(92,59,255,0.08)",
    },
  },
});

export const skillIcon = style({
  width: 36,
  height: 36,
  borderRadius: 10,
  background: `linear-gradient(135deg, ${vars.color.purpleCore}, ${vars.color.purpleLight})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1rem",
});

export const skillName = style({
  fontFamily: vars.font.ui,
  fontSize: "0.9rem",
  fontWeight: 600,
  color: vars.color.white,
});

export const skillDesc = style({
  fontFamily: vars.font.ui,
  fontSize: "0.78rem",
  color: vars.color.muted,
  lineHeight: 1.5,
});
