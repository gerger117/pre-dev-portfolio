import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

const breakpoints = {
  sm: "480px",
  md: "768px",
};

export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: 14,
  padding: "24px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 18,
  transition: "border-color 0.25s, background 0.25s, transform 0.25s",

  selectors: {
    "&:hover": {
      borderColor: vars.color.purpleCore,
      background: "rgba(92,59,255,0.07)",
      transform: "translateY(-4px)",
    },
  },

  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      padding: "20px",
      gap: 12,
      borderRadius: 14,
    },
    [`screen and (max-width: ${breakpoints.sm})`]: {
      padding: "16px",
      // disable hover lift on touch devices — no hover state anyway
      selectors: {
        "&:hover": {
          transform: "none",
        },
      },
    },
  },
});

export const image = style({
  width: "100%",
  height: 160,
  objectFit: "cover",
  borderRadius: 10,
  background: "rgba(255,255,255,0.04)",

  "@media": {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      height: 180, // slightly taller on single-column mobile for better preview
    },
  },
});

export const cardTop = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const typeTag = style({
  padding: "4px 12px",
  borderRadius: 50,
  fontSize: "0.7rem",
  fontWeight: 700,
  fontFamily: vars.font.ui,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  background: "rgba(92,59,255,0.18)",
  color: vars.color.purpleLight,
  border: "1px solid rgba(92,59,255,0.25)",
});

export const year = style({
  fontFamily: vars.font.ui,
  fontSize: "0.75rem",
  color: vars.color.muted,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  flexGrow: 1,

  "@media": {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      gap: 8,
    },
  },
});

export const title = style({
  fontFamily: vars.font.ui,
  fontSize: "1.05rem",
  fontWeight: 700,
  color: vars.color.white,
  lineHeight: 1.3,
  margin: 0,

  "@media": {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      fontSize: "1rem",
    },
  },
});

export const usedAt = style({
  fontFamily: vars.font.ui,
  fontSize: "0.78rem",
  fontWeight: 500,
  color: vars.color.purpleLight,
  opacity: 0.8,
});

export const description = style({
  fontFamily: vars.font.ui,
  fontSize: "0.85rem",
  lineHeight: 1.7,
  color: vars.color.muted,
  margin: 0,
  flexGrow: 1,

  "@media": {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      fontSize: "0.88rem", // slightly larger for readability on phone
    },
  },
});

export const techStack = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
});

export const badge = style({
  padding: "4px 10px",
  borderRadius: 6,
  fontSize: "0.7rem",
  fontWeight: 600,
  fontFamily: vars.font.ui,
  background: "rgba(255,255,255,0.06)",
  color: "rgba(255,255,255,0.6)",
  border: "1px solid rgba(255,255,255,0.08)",
});

export const cardLinks = style({
  display: "flex",
  gap: 10,
  paddingTop: 12,
  borderTop: "1px solid rgba(255,255,255,0.06)",
  marginTop: "auto",

  "@media": {
    [`screen and (max-width: ${breakpoints.sm})`]: {
      gap: 16, // more space between links on touch
      paddingTop: 14,
    },
  },
});

export const button = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontFamily: vars.font.ui,
  fontSize: "0.8rem",
  fontWeight: 600,
  color: vars.color.muted,
  textDecoration: "none",
  transition: "color 0.2s",
  minHeight: 44, // touch target
  minWidth: 44,

  selectors: {
    "&:hover": { color: vars.color.white },
  },
});

export const demoLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontFamily: vars.font.ui,
  fontSize: "0.8rem",
  fontWeight: 600,
  color: vars.color.purpleLight,
  textDecoration: "none",
  transition: "color 0.2s",
  minHeight: 44, // touch target
  minWidth: 44,

  selectors: {
    "&:hover": { color: vars.color.white },
  },
});
