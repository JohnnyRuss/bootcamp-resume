import { DefaultTheme } from "styled-components";

export const BaseTheme: DefaultTheme = {
  colors: {
    black: "#000000",
    black_tint: "rgba(0,0,0,0.6)",
    gray_tint: "#2E2E2E",
    light_gray: "#919191",
    white: "#fff",
    white_shade: "#F9F9F9",
    blue: "#0E80BF",
    green: "#98E37E",
    purple: "#6B40E3",
    purple_shade: "#512FAF",
    purple_tint: "#7949FF",
    red: "#F93B1D",
  },

  size: {
    sm: "1.4rem",
    base: "1.6rem",
    lg: "2rem",
    md: "1.8rem",
    xl: "2.4rem",
    xxl: "3.4rem",
  },

  font: {
    base: 400,
    medium: 600,
    bold: 700,
    bolder: 900,
  },

  container: {
    desktop_w: "1920px",
    desktop_w_inset: "1780px",
  },
};
