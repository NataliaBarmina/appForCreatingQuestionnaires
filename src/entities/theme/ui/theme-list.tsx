import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { TThemeList } from "../model/types";

export const listItemStyles = {
  border: "4px solid rgb(180, 209, 210)",
  bgcolor: "rgb(240,248,255)",
  width: "90%",
  margin: "0 auto",
  marginBottom: "20px",
  ":hover": {
    backgroundColor: "#e3b6a6",
    boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.5)",
  },
};

export const ThemeList = ({ selectedTopics, handleThemeClick }: TThemeList) => {
  return (
    <nav aria-label="Themes list">
      <List>
        {selectedTopics.map((theme) => (
          <ListItem disablePadding key={theme.themeId} sx={listItemStyles}>
            <ListItemButton onClick={() => handleThemeClick(theme)}>
              <ListItemText primary={theme.themeName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
