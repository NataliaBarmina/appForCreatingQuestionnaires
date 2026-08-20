import type { PropsWithChildren } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { QueryProvider } from "./query";
import { theme } from "./theme";

import { SessionProvider } from "@entities/session";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>
      <QueryProvider>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </QueryProvider>
    </SessionProvider>
  );
};
