import { SxProps } from "@mui/material";

export const tabStyle: SxProps = {
  backgroundColor: "#767474",
  borderTopRightRadius: "15px",
  borderTopLeftRadius: "15px",
  marginRight: "1px",
  fontWeight: 600,
  fontSize: "0.8rem",
  minWidth: "5rem",
  color: "#C3C3C3",
  ":hover": {
    backgroundColor: "#e3b6a6",
    boxShadow: "inset 0 0 35px rgb(28,25,23)",
    color: "black",
  },
  ":focus": {
    backgroundColor: "#e3b6a6",
    boxShadow: "inset 0 0 15px rgb(28,25,23)",
    color: "black",
  },
};

export const tabsStyle = {
  "& .MuiTabs-indicator": {
    backgroundColor: "black",
  },
};
