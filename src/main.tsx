import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { SessionProvider } from "@entities/session";
import "@app/providers/i18n";
import { router, theme, queryClient } from "@app/providers";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element with id="root" was not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <MuiThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </MuiThemeProvider>

        <ToastContainer position="top-right" autoClose={4000} />

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  </StrictMode>
);
