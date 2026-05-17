import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  height: "100%",
  background: vars.color.bg,
  color: vars.color.white,
  fontFamily: vars.font.ui,
  overflowX: "hidden",
});
