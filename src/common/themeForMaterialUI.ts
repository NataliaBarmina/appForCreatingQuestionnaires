import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    s: true;
    xxl: true;
  }
}

export const theme = createTheme({
  palette: {
    background: {
      paper: "#dec4ba",
    },
    // text: {
    //   primary: "#173A5E",
    //   secondary: "#46505A",
    // },
    // action: {
    //   active: "#001E3C",
    // },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 320,
      s: 540,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});
