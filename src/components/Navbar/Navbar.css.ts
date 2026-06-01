import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

const breakpoints = {
  sm: "480px",
  md: "768px",
};

const slideDown = keyframes({
  from: { opacity: 0, transform: "translateY(-8px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

// ─── Nav Bar ─────────────────────────────────────────────────

export const nav = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "22px 52px",
  background: "rgba(10, 9, 14, 0.6)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      padding: "18px 24px",
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      padding: "16px 16px",
    },
  },
});

// ─── Logo ────────────────────────────────────────────────────

export const logo = style({
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontWeight: 700,
  fontSize: "1.1rem",
  letterSpacing: "0.04em",
  textDecoration: "none",
  color: vars.color.white,
  fontFamily: vars.font.ui,
  zIndex: 110, // above mobile drawer

  selectors: {
    "&:hover": {
      color: vars.color.white,
    },
  },
});

export const logoIcon = style({
  width: 28,
  height: 28,
  flexShrink: 0,
});

// ─── Desktop Links ───────────────────────────────────────────

export const links = style({
  display: "flex",
  gap: 38,
  listStyle: "none",
  margin: 0,
  padding: 0,

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      display: "none", // hidden on mobile — replaced by drawer
    },
  },
});

export const link = style({
  color: vars.color.muted,
  textDecoration: "none",
  fontSize: "0.9rem",
  fontWeight: 500,
  letterSpacing: "0.02em",
  fontFamily: vars.font.ui,
  transition: "color 0.2s ease",
  cursor: "pointer",

  selectors: {
    "&:hover": {
      color: vars.color.white,
    },
  },
});

export const linkActive = style({
  color: vars.color.white,
});

// ─── Contact Button ──────────────────────────────────────────

export const contactBtn = style({
  background: vars.color.purpleCore,
  color: vars.color.white,
  border: "none",
  padding: "11px 26px",
  borderRadius: 50,
  fontFamily: vars.font.ui,
  fontWeight: 600,
  fontSize: "0.9rem",
  cursor: "pointer",
  letterSpacing: "0.02em",
  transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
  boxShadow: `0 0 24px ${vars.color.purpleGlow}`,
  minHeight: 44, // touch target

  selectors: {
    "&:hover": {
      background: vars.color.purpleLight,
      transform: "translateY(-1px)",
      boxShadow: `0 0 40px ${vars.color.purpleGlow}`,
    },
  },

  "@media": {
    // hide the nav contact button on mobile — drawer has its own
    [`screen and (max-width: ${breakpoints.md})`]: {
      display: "none",
    },
  },
});

// ─── Hamburger Button ────────────────────────────────────────

export const hamburger = style({
  display: "none",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
  width: 44,
  height: 44,
  background: "transparent",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  cursor: "pointer",
  zIndex: 110,
  flexShrink: 0,
  transition: "border-color 0.2s, background 0.2s",

  selectors: {
    "&:hover": {
      borderColor: vars.color.purpleCore,
      background: "rgba(92,59,255,0.1)",
    },
  },

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      display: "flex",
    },
  },
});

export const hamburgerLine = style({
  width: 20,
  height: 1.5,
  background: vars.color.white,
  borderRadius: 2,
  transition: "transform 0.25s ease, opacity 0.2s ease",
});

// rotate top line when open
export const hamburgerLineTopOpen = style({
  transform: "translateY(6.5px) rotate(45deg)",
});

// hide middle line when open
export const hamburgerLineMidOpen = style({
  opacity: 0,
  transform: "scaleX(0)",
});

// rotate bottom line when open
export const hamburgerLineBottomOpen = style({
  transform: "translateY(-6.5px) rotate(-45deg)",
});

// ─── Mobile Drawer ───────────────────────────────────────────

export const drawer = style({
  display: "none",

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      // starts just below the nav bar
      paddingTop: 80,
      paddingBottom: 32,
      paddingInline: 24,
      background: "rgba(10, 9, 14, 0.97)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      zIndex: 99,
      animation: `${slideDown} 0.25s ease both`,
    },
  },
});

export const drawerLinks = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const drawerLink = style({
  color: vars.color.muted,
  textDecoration: "none",
  fontSize: "1.1rem",
  fontWeight: 500,
  fontFamily: vars.font.ui,
  letterSpacing: "0.02em",
  padding: "14px 4px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  transition: "color 0.2s",
  cursor: "pointer",
  // big touch target
  display: "block",

  selectors: {
    "&:hover": {
      color: vars.color.white,
    },
  },
});

export const drawerLinkActive = style({
  color: vars.color.white,
});

export const drawerContactBtn = style({
  marginTop: 24,
  background: vars.color.purpleCore,
  color: vars.color.white,
  border: "none",
  padding: "14px 24px",
  borderRadius: 50,
  fontFamily: vars.font.ui,
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  letterSpacing: "0.02em",
  textAlign: "center",
  boxShadow: `0 0 24px ${vars.color.purpleGlow}`,
  transition: "background 0.2s",
  minHeight: 44,

  selectors: {
    "&:hover": {
      background: vars.color.purpleLight,
    },
  },
});

// overlay that closes drawer on tap-outside
export const drawerOverlay = style({
  display: "none",

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      display: "block",
      position: "fixed",
      inset: 0,
      zIndex: 98,
      background: "rgba(0,0,0,0.4)",
    },
  },
});
