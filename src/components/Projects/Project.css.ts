import { style } from "@vanilla-extract/css";

export const wrapper = style({
  padding: "80px 0",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "24px",
  marginTop: "40px",
});

export const card = style({
  background: "#111827",
  borderRadius: "20px",
  overflow: "hidden",
  border: "1px solid #1f2937",
  transition: "0.3s ease",

  selectors: {
    "&:hover": {
      transform: "translateY(-5px)",
      borderColor: "#38bdf8",
    },
  },
});

export const image = style({
  width: "100%",
  height: "220px",
  objectFit: "cover",
});

export const content = style({
  padding: "20px",
});

export const title = style({
  fontSize: "24px",
  fontWeight: "bold",
});

export const description = style({
  marginTop: "12px",
  color: "#9ca3af",
  lineHeight: 1.6,
});

export const techStack = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "16px",
});

export const badge = style({
  background: "#1e293b",
  color: "#38bdf8",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "12px",
});

export const button = style({
  display: "inline-block",
  marginTop: "20px",
  padding: "10px 16px",
  borderRadius: "10px",
  background: "#38bdf8",
  color: "#000",
  textDecoration: "none",
  fontWeight: 600,
});
