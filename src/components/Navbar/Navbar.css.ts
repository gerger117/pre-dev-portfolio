import { style } from "@vanilla-extract/css";

export const nav = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.5rem 6rem",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
});

export const logo = style({
  fontSize: "1rem",
  fontWeight: 300,
  letterSpacing: "0.1em",
  color: "inherit",
  textDecoration: "none",
  opacity: 0.9,
});

export const links = style({
  display: "flex",
  gap: "2.5rem",
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const link = style({
  fontSize: "0.75rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  opacity: 0.5,
  cursor: "pointer",
  transition: "opacity 0.2s ease",
  textDecoration: "none",
  color: "inherit",

  ":hover": {
    opacity: 1,
  },
});
