import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

const fadeUp = keyframes({
  from: { opacity: 0, transform: "translateY(32px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const scaleIn = keyframes({
  from: { opacity: 0, transform: "scale(0.92) translateY(16px)" },
  to: { opacity: 1, transform: "scale(1) translateY(0)" },
});

// ─── Section ─────────────────────────────────────────────────

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
      "radial-gradient(ellipse at center, rgba(92,59,255,0.06) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },

  "@media": {
    "screen and (max-width: 768px)": { padding: "80px 20px" },
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
  marginTop: 4,
});

// ─── Grid ─────────────────────────────────────────────────────

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 24,

  "@media": {
    "screen and (max-width: 1024px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "screen and (max-width: 600px)": { gridTemplateColumns: "1fr" },
  },
});

// ─── Card ─────────────────────────────────────────────────────

export const card = style({
  display: "flex",
  flexDirection: "column",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 16,
  overflow: "hidden",
  cursor: "pointer",
  transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
  animation: `${fadeUp} 0.6s ease both`,

  selectors: {
    "&:hover": {
      borderColor: vars.color.purpleCore,
      transform: "translateY(-4px)",
      boxShadow: `0 8px 32px rgba(92,59,255,0.2)`,
    },
  },
});

export const imageWrap = style({
  width: "100%",
  aspectRatio: "16/10",
  overflow: "hidden",
  background: "rgba(255,255,255,0.04)",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "transform 0.4s ease",

  selectors: {
    [`${imageWrap}:hover &`]: {
      transform: "scale(1.04)",
    },
  },
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: "16px 20px",
  borderTop: "1px solid rgba(255,255,255,0.06)",
});

export const certName = style({
  fontFamily: vars.font.ui,
  fontSize: "0.92rem",
  fontWeight: 700,
  color: vars.color.white,
  lineHeight: 1.3,
});

export const certIssuer = style({
  fontFamily: vars.font.ui,
  fontSize: "0.78rem",
  fontWeight: 500,
  color: vars.color.purpleLight,
  opacity: 0.85,
});

export const certYear = style({
  fontFamily: vars.font.ui,
  fontSize: "0.72rem",
  color: vars.color.muted,
  marginTop: 2,
});

// ─── Modal Overlay ────────────────────────────────────────────

export const overlay = style({
  position: "fixed",
  inset: 0,
  zIndex: 999,
  background: "rgba(0,0,0,0.82)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  animation: `${fadeIn} 0.2s ease both`,

  "@media": {
    "screen and (max-width: 768px)": { padding: "16px" },
  },
});

// ─── Modal Box ────────────────────────────────────────────────

export const modal = style({
  position: "relative",
  background: "#13111a",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 20,
  width: "100%",
  maxWidth: 640,
  maxHeight: "90vh",
  overflowY: "auto",
  animation: `${scaleIn} 0.25s cubic-bezier(0.22,1,0.36,1) both`,

  "@media": {
    "screen and (max-width: 768px)": { maxWidth: "100%", borderRadius: 16 },
  },
});

export const modalImage = style({
  width: "100%",
  display: "block",
  borderRadius: "20px 20px 0 0",
  objectFit: "contain",
  background: "rgba(255,255,255,0.96)",

  "@media": {
    "screen and (max-width: 768px)": { borderRadius: "16px 16px 0 0" },
  },
});

export const modalBody = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: "24px 28px 28px",

  "@media": {
    "screen and (max-width: 768px)": { padding: "20px" },
  },
});

export const modalName = style({
  fontFamily: vars.font.ui,
  fontSize: "1.2rem",
  fontWeight: 700,
  color: vars.color.white,
  lineHeight: 1.3,
  margin: 0,
});

export const modalMeta = style({
  display: "flex",
  alignItems: "center",
  gap: 10,
  flexWrap: "wrap",
});

export const modalIssuer = style({
  fontFamily: vars.font.ui,
  fontSize: "0.85rem",
  fontWeight: 600,
  color: vars.color.purpleLight,
});

export const modalDot = style({
  width: 4,
  height: 4,
  borderRadius: "50%",
  background: vars.color.muted,
  flexShrink: 0,
});

export const modalYear = style({
  fontFamily: vars.font.ui,
  fontSize: "0.82rem",
  color: vars.color.muted,
});

export const modalDivider = style({
  width: "100%",
  height: 1,
  background: "rgba(255,255,255,0.07)",
});

export const modalDesc = style({
  fontFamily: vars.font.ui,
  fontSize: "0.92rem",
  lineHeight: 1.75,
  color: vars.color.muted,
  margin: 0,
});

// ─── Close button ─────────────────────────────────────────────

export const closeBtn = style({
  position: "absolute",
  top: 14,
  right: 14,
  width: 34,
  height: 34,
  borderRadius: "50%",
  background: "rgba(0,0,0,0.5)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: vars.color.white,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
  transition: "background 0.2s",

  selectors: {
    "&:hover": { background: "rgba(92,59,255,0.6)" },
  },
});
