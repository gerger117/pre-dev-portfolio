import { style } from "@vanilla-extract/css";

export const section = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "100vh",
  padding: "0 6rem",
  gap: "4rem",
});

export const textSide = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  maxWidth: "520px",
});

export const name = style({
  fontSize: "3.5rem",
  fontWeight: 300,
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
});

export const title = style({
  fontSize: "1rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  opacity: 0.5,
});

export const tagline = style({
  fontSize: "1.1rem",
  lineHeight: 1.75,
  opacity: 0.7,
  maxWidth: "440px",
});

export const photoSide = style({
  flexShrink: 0,
});

export const photo = style({
  width: "340px",
  height: "420px",
  objectFit: "cover",
  borderRadius: "4px",
  filter: "grayscale(20%)",
});
