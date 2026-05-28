import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const section = style({
  marginLeft: "14%",
  width: "72%",
  backgroundColor: vars.color.bg,
});
export const fillupForm = style({
  width: "50%",
  marginLeft: "50%",
  borderColor: "red",
});
export const contactInfo = style({
  fontFamily: "monserrat",
});
export const Form = style({
  marginTop: "10px",
});
export const messageBtn = style({
  marginLeft: "35%",
  color: "white",
  background: "blue",
});
