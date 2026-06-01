import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
};

// ─── Keyframes ───────────────────────────────────────────────

const fadeDown = keyframes({
  from: { opacity: 0, transform: "translateY(-24px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const riseUp = keyframes({
  from: { opacity: 0, transform: "translateX(-50%) translateY(60px)" },
  to: { opacity: 1, transform: "translateX(-50%) translateY(0)" },
});

const riseUpMobile = keyframes({
  from: { opacity: 0, transform: "translateY(40px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const floatIn = keyframes({
  from: { opacity: 0, transform: "scale(0.88) translateY(8px)" },
  to: { opacity: 1, transform: "scale(1) translateY(0)" },
});

const floatY = keyframes({
  "0%, 100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-8px)" },
});

const bounce = keyframes({
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(4px)" },
});

// ─── Hero Wrapper ─────────────────────────────────────────────

export const hero = style({
  position: "relative",
  minHeight: "100svh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  paddingTop: 80,
  paddingInline: 20,

  "@media": {
    [`screen and (max-width: ${breakpoints.lg})`]: {
      paddingInline: 16,
    },
    [`screen and (max-width: ${breakpoints.md})`]: {
      paddingTop: 100,
      justifyContent: "flex-start",
      paddingBottom: 180, // room for absolute bottom elements
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      paddingTop: 80,
      paddingBottom: 160,
    },
  },
});

// ─── Grain overlay ───────────────────────────────────────────

export const grain = style({
  position: "fixed",
  inset: 0,
  pointerEvents: "none",
  zIndex: 200,
  opacity: 0.028,
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  backgroundSize: "200px 200px",
});

// ─── Hero Text ────────────────────────────────────────────────

export const heroText = style({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  pointerEvents: "none",
  userSelect: "none",
  marginTop: "-120px",

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      marginTop: 0,
      paddingTop: 24,
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      paddingTop: 16,
    },
  },
});

export const heroGreeting = style({
  fontFamily: vars.font.ui,
  fontWeight: 700,
  fontSize: "clamp(2.2rem, 12vw, 7.8rem)",
  letterSpacing: "-0.01em",
  lineHeight: 1.1,
  color: vars.color.white,
  animation: `${fadeDown} 0.7s ease both`,
});

export const heroTitle = style({
  fontFamily: vars.font.display,
  fontStyle: "italic",
  fontWeight: 700,
  fontSize: "clamp(2.8rem, 9vw, 7.8rem)",
  color: "rgba(255,255,255,0.15)",
  letterSpacing: "-0.02em",
  lineHeight: 1,
  marginTop: -6,
  animation: `${fadeDown} 0.7s 0.1s ease both`,
});

// ─── Person ───────────────────────────────────────────────────

export const personWrap = style({
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 3,
  width: "clamp(220px, 70vw, 600px)",
  pointerEvents: "none",
  animation: `${riseUp} 0.9s 0.2s cubic-bezier(0.22,1,0.36,1) both`,
  background: "transparent",
  border: "none",
  outline: "none",

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      position: "relative",
      left: "auto",
      transform: "none",
      width: "75%",
      maxWidth: 320,
      margin: "32px auto 0",
      animation: `${riseUpMobile} 0.9s 0.2s cubic-bezier(0.22,1,0.36,1) both`,
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      width: "70%",
      maxWidth: 260,
      marginTop: 24,
    },
  },
});

export const personPlaceholder = style({
  width: "100%",
  aspectRatio: "0.72",
  background:
    "linear-gradient(180deg, rgba(130,90,255,0.15) 0%, rgba(80,44,220,0.35) 60%, transparent 100%)",
  borderRadius: "200px 200px 0 0",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  overflow: "visible",
});

export const silhouette = style({
  width: "78%",
});

// ─── Pills ───────────────────────────────────────────────────

export const pill = style({
  position: "absolute",
  zIndex: 4,
  background: vars.color.pillBg,
  border: `1px solid ${vars.color.pillBorder}`,
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderRadius: 50,
  padding: "9px 20px",
  fontSize: "0.82rem",
  fontWeight: 500,
  fontFamily: vars.font.ui,
  color: "rgba(255,255,255,0.88)",
  letterSpacing: "0.02em",
  whiteSpace: "nowrap",

  "@media": {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      padding: "7px 14px",
      fontSize: "0.72rem",
    },
  },
});

export const pill1 = style({
  top: "42%",
  left: "14%",
  animation: `${floatIn} 0.6s 0.4s ease both, ${floatY} 4s 1.2s ease-in-out infinite`,

  "@media": {
    // hide on mobile — too crowded alongside stacked layout
    [`screen and (max-width: ${breakpoints.md})`]: {
      display: "none",
    },
  },
});

export const pill2 = style({
  top: "36%",
  right: "13%",
  animation: `${floatIn} 0.6s 0.5s ease both, ${floatY} 4s 1.6s ease-in-out infinite`,

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      top: "auto",
      bottom: "38%",
      right: "4%",
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      display: "none",
    },
  },
});

export const pill3 = style({
  top: "58%",
  left: "10%",
  animation: `${floatIn} 0.6s 0.6s ease both, ${floatY} 4s 1.2s ease-in-out infinite`,

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      top: "auto",
      bottom: "28%",
      left: "4%",
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      display: "none",
    },
  },
});

export const pill4 = style({
  top: "54%",
  right: "10%",
  animation: `${floatIn} 0.6s 0.65s ease both, ${floatY} 4s 1.6s ease-in-out infinite`,

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      top: "auto",
      bottom: "18%",
      right: "4%",
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      display: "none",
    },
  },
});

// ─── Scroll Pill ─────────────────────────────────────────────

export const scrollPill = style({
  position: "absolute",
  bottom: 52,
  left: 52,
  zIndex: 10,
  width: 68,
  height: 68,
  borderRadius: "50%",
  background: vars.color.pillBg,
  border: `1px solid ${vars.color.pillBorder}`,
  backdropFilter: "blur(10px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 2,
  cursor: "pointer",
  fontSize: "0.63rem",
  fontWeight: 600,
  fontFamily: vars.font.ui,
  letterSpacing: "0.04em",
  color: "rgba(255,255,255,0.7)",
  textTransform: "uppercase",
  animation: `${fadeIn} 0.8s 0.8s both`,
  transition: "border-color 0.2s, background 0.2s",

  selectors: {
    "&:hover": {
      borderColor: "rgba(255,255,255,0.3)",
      background: "rgba(255,255,255,0.12)",
    },
  },

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      left: 20,
      bottom: 100,
      width: 58,
      height: 58,
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      // hide on very small screens — saves space, CTA buttons are enough
      display: "none",
    },
  },
});

export const scrollIcon = style({
  width: 14,
  height: 14,
  opacity: 0.7,
  animation: `${bounce} 1.8s 1.5s ease-in-out infinite`,
});

// ─── CTA Row ─────────────────────────────────────────────────

export const ctaRow = style({
  position: "absolute",
  bottom: 60,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 5,
  display: "flex",
  gap: 14,
  width: "max-content",
  justifyContent: "center",

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      bottom: 32,
      width: "calc(100% - 40px)",
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      flexDirection: "column",
      width: "calc(100% - 32px)",
      bottom: 24,
      gap: 10,
    },
  },
});

export const btnPrimary = style({
  background: vars.color.purpleCore,
  color: vars.color.white,
  border: "none",
  padding: "14px 30px",
  borderRadius: 50,
  fontFamily: vars.font.ui,
  fontWeight: 600,
  fontSize: "0.9rem",
  cursor: "pointer",
  letterSpacing: "0.02em",
  boxShadow: `0 0 32px ${vars.color.purpleGlow}`,
  transition: "background 0.2s, transform 0.15s",
  minHeight: 44,

  selectors: {
    "&:hover": {
      background: vars.color.purpleLight,
      transform: "translateY(-2px)",
    },
  },

  "@media": {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      width: "100%",
      padding: "14px 24px",
      textAlign: "center",
    },
  },
});

export const btnSecondary = style({
  background: "rgba(255,255,255,0.96)",
  color: "#111",
  border: "none",
  padding: "14px 30px",
  borderRadius: 50,
  fontFamily: vars.font.ui,
  fontWeight: 600,
  fontSize: "0.9rem",
  cursor: "pointer",
  letterSpacing: "0.02em",
  transition: "background 0.2s, transform 0.15s",
  minHeight: 44,

  selectors: {
    "&:hover": {
      background: "#fff",
      transform: "translateY(-2px)",
    },
  },

  "@media": {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      width: "100%",
      padding: "14px 24px",
      textAlign: "center",
    },
  },
});

// ─── Clients Badge ───────────────────────────────────────────

export const clientsBadge = style({
  position: "absolute",
  bottom: 60,
  right: 52,
  zIndex: 5,
  display: "flex",
  alignItems: "center",
  gap: 12,
  animation: `${fadeIn} 0.8s 0.9s both`,

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      right: 20,
      bottom: 100,
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      // move above the stacked CTA buttons on small phones
      bottom: 170,
      right: "50%",
      transform: "translateX(50%)",
    },
  },
});

export const avatarStack = style({
  display: "flex",
});

export const avatar = style({
  width: 36,
  height: 36,
  borderRadius: "50%",
  border: `2px solid ${vars.color.bg}`,
  background: "linear-gradient(135deg, #9b7dff, #5c3bff)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.7rem",
  fontWeight: 700,
  color: vars.color.white,
  fontFamily: vars.font.ui,
  marginLeft: -10,

  selectors: {
    "&:first-child": {
      marginLeft: 0,
    },
  },
});

export const avatar2 = style({
  background: "linear-gradient(135deg, #ff7db8, #c03bff)",
});

export const avatar3 = style({
  background: "linear-gradient(135deg, #7dffcf, #3b8fff)",
});

export const clientsInfo = style({
  lineHeight: 1.2,
});

export const clientsCount = style({
  fontSize: "1.4rem",
  fontWeight: 800,
  color: vars.color.white,
  fontFamily: vars.font.ui,
  letterSpacing: "-0.02em",

  "@media": {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      fontSize: "1.2rem",
    },
  },
});

export const clientsLabel = style({
  fontSize: "0.8rem",
  fontWeight: 500,
  color: vars.color.muted,
  fontFamily: vars.font.ui,
});
