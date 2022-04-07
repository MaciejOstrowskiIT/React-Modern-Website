import React, { createContext } from "react";

export const ThemeContext = createContext({
  light: { background: "#eeeeee", foreground: "#000000" },
  dark: { background: "#222222", foreground: "#ffffff" },
});

export const ThemeContextProvider = (props) => {
  const value = {};
  return <ThemeContext.Provider>{props.children}</ThemeContext.Provider>;
};
