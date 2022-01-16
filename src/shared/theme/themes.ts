import { DefaultTheme, ExtendedTheme } from "@react-navigation/native";

export const palette = {
  primary: "#0564d4",
  secondary: "#ff6a00",
  background: "#f6f8fa",
  white: "#fff",
  black: "#181818",
  button: "#2b2b2c",
  shadow: "#0564d4",
  blackOverlay: "rgba(0,0,0,0.6)",
  placeholder: "#a1a1a1",
  danger: "rgb(208, 2, 27)",
  text: "#30363b",
  title: "rgb(102, 102, 102)",
  separator: "rgb(194, 194, 195)",
  highlight: "rgb(199, 198, 203)",
};

export const LightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...palette,
  },
};

export const DarkTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...LightTheme.colors,
    background: palette.black,
    foreground: palette.white,
    text: palette.white,
    tabBar: palette.black,
  },
};
