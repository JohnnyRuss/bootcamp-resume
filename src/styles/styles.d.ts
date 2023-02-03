import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    size: Size;
    font: Font;
    colors: Colors;
  }

  interface Colors {
    blue: "#0E80BF";
    black: "#000000";
    black_tint: "rgba(0,0,0,0.6)";
    light_gray: "#1A1A1A";
    red: "#F93B1D";
    green: "#98E37E";
    purple: "#6B40E3";
    purple_tint: "#7949FF";
    purple_shade: "#512FAF";
  }

  interface Size {
    sm: "1.4rem";
    base: "1.6rem";
    md: "1.8rem";
    lg: "2rem";
    xl: "2.4rem";
    xxl: "3.4rem";
  }

  interface Font {
    base: 400;
    medium: 500;
    bold: 700;
  }
}
