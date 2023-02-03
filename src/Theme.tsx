import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { BaseTheme } from "./styles/AppTheme";
import { AppStyles } from "./styles/AppStyles";

interface ThemeContextT {}

interface ThemeProviderT {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextT>({});

const Theme: React.FC<ThemeProviderT> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{}}>
      <ThemeProvider theme={BaseTheme}>
        <AppStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
