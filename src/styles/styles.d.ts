import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    size: Size;
    font: Font;
    colors: Colors;
    container: Container;
  }

  interface Colors {
    black: "#000000";
    black_tint: "rgba(0,0,0,0.6)";
    gray_tint: "#2E2E2E";
    light_gray: "#919191";
    white: "#fff";
    white_shade: "#F9F9F9";
    blue: "#0E80BF";
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

  interface Container {
    desktop_w: "1920px";
    desktop_w_inset: "1780px";
  }
}
