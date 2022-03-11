import React from "react";

export type Themes = "light" | "dark";

export interface ThemeContextInterface {
  light: "light";
  dark: "dark";
}

export const themes: ThemeContextInterface = {
  light: "light",
  dark: "dark",
};

export const ThemeContext = React.createContext<Themes>(themes.light);
