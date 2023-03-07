import { DesignSystemProvider } from "@phoenix/design-system";
import { ThemeProvider } from "styled-components";
import type { ReactNode } from "react";
import appCaeqTheme from "./appCaeqTheme";
import GlobalStyles from "./globalStyles";

function AppCaeqThemeProvider({ children }: { children: ReactNode }) {
  return (
    <DesignSystemProvider>
      <ThemeProvider theme={appCaeqTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default AppCaeqThemeProvider;
