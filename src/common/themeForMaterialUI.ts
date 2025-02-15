import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      paper: "#dec4ba",
    },
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
