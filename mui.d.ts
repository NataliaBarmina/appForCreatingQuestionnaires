import type {} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    s: true;
    xxl: true;
  }
}
