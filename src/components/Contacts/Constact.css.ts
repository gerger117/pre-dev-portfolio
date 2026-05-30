import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const section = style({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `radial-gradient(ellipse at 60% 40%, rgba(92,59,255,0.18) 0%, ${vars.color.bg} 60%)`,
  padding: "40px 20px",
  position: "relative",
  overflow: "hidden",
});

export const glowRight = style({
  position: "absolute",
  top: "30%",
  right: "20%",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  background: `radial-gradient(circle, ${vars.color.purpleGlow} 0%, transparent 70%)`,
  pointerEvents: "none",
});

export const glowBottom = style({
  position: "absolute",
  bottom: "20%",
  right: "15%",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  background: `radial-gradient(circle, rgba(92,59,255,0.12) 0%, transparent 70%)`,
  pointerEvents: "none",
});

export const outerCard = style({
  width: "100%",
  maxWidth: "1100px",
  border: `1px solid ${vars.color.pillBorder}`,
  borderRadius: "20px",
  background: `rgba(14,11,22,0.7)`,
  backdropFilter: "blur(20px)",
  padding: "60px 50px",
  position: "relative",
});

export const contactContainer = style({
  display: "flex",
  gap: "60px",
  alignItems: "center",
  flexWrap: "wrap",
});

export const contactDetails = style({
  flex: 1,
  minWidth: "280px",
});

export const title = style({
  fontSize: "42px !important",
  fontWeight: "700 !important",
  color: `${vars.color.white} !important`,
  marginBottom: "8px !important",
  lineHeight: "1.2 !important",
});

export const divider = style({
  width: "60px",
  height: "2px",
  background: `linear-gradient(90deg, ${vars.color.purpleCore}, transparent)`,
  margin: "16px 0 20px",
});

export const paragraph = style({
  color: `${vars.color.muted} !important`,
  fontSize: "15px !important",
  lineHeight: "1.7 !important",
  marginBottom: "32px !important",
});

export const contactRow = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  color: vars.color.muted,
  fontSize: "14px",
  marginBottom: "12px",
});

export const iconCircle = style({
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  background: vars.color.pillBg,
  border: `1px solid ${vars.color.pillBorder}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.purpleLight,
  flexShrink: 0,
});

export const socialRow = style({
  display: "flex",
  gap: "12px",
  marginTop: "28px",
});

export const socialBtn = style({
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  background: vars.color.pillBg,
  border: `1px solid ${vars.color.pillBorder}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.muted,
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.2s",

  ":hover": {
    background: `rgba(92,59,255,0.2)`,
    borderColor: vars.color.purpleLight,
    color: vars.color.white,
  },
});

export const formCard = style({
  flex: 1,
  minWidth: "320px",
  background: `rgba(14,11,22,0.8)`,
  border: `1px solid rgba(92,59,255,0.3)`,
  borderRadius: "16px",
  padding: "32px",
  boxShadow: `0 0 60px ${vars.color.purpleGlow}, inset 0 1px 0 ${vars.color.pillBorder}`,
  position: "relative",
});

export const formTitle = style({
  fontSize: "20px",
  fontWeight: 700,
  color: vars.color.white,
  marginBottom: "24px",
  marginTop: 0,
});

export const inputField = style({
  background: `rgba(10,9,14,0.8)`,
  border: `1px solid rgba(92,59,255,0.25)`,
  borderRadius: "10px",
  color: vars.color.white,
  padding: "11px 14px",
  fontSize: "14px",
  width: "100%",
  outline: "none",
  marginBottom: "14px",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
  fontFamily: vars.font.ui,

  "::placeholder": {
    color: vars.color.muted,
  },

  ":focus": {
    borderColor: vars.color.purpleCore,
  },
});

export const textareaField = style({
  background: `rgba(10,9,14,0.8)`,
  border: `1px solid rgba(92,59,255,0.25)`,
  borderRadius: "10px",
  color: vars.color.white,
  padding: "11px 14px",
  fontSize: "14px",
  width: "100%",
  outline: "none",
  marginBottom: "14px",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
  fontFamily: vars.font.ui,
  minHeight: "110px",
  resize: "vertical",

  "::placeholder": {
    color: vars.color.muted,
  },

  ":focus": {
    borderColor: vars.color.purpleCore,
  },
});

export const sendBtn = style({
  width: "100%",
  padding: "14px",
  borderRadius: "50px",
  background: `linear-gradient(90deg, ${vars.color.purpleCore}, ${vars.color.purpleLight})`,
  color: vars.color.white,
  fontWeight: 600,
  fontSize: "15px",
  border: "none",
  cursor: "pointer",
  marginTop: "6px",
  letterSpacing: "0.3px",
  transition: "opacity 0.2s",
  fontFamily: vars.font.ui,

  ":hover": {
    opacity: 0.88,
  },
});
