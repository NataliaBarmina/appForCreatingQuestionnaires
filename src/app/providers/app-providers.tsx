import type { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { QueryProvider } from "./query";
import { store } from "./store/store";
import { theme } from "./theme";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider store={store}>
      <QueryProvider>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </QueryProvider>
    </ReduxProvider>
  );
};
