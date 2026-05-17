import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

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
    "screen and (max-width: 768px)": {
      padding: "18px 24px",
    },
  },
});

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

export const links = style({
  display: "flex",
  gap: 38,
  listStyle: "none",
  margin: 0,
  padding: 0,

  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
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

  selectors: {
    "&:hover": {
      background: vars.color.purpleLight,
      transform: "translateY(-1px)",
      boxShadow: `0 0 40px ${vars.color.purpleGlow}`,
    },
  },
});
