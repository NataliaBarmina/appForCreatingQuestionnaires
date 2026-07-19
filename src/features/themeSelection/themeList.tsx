import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { TCreationModeButton } from "@shared/types/commonTypes";
import { listItemStyles } from "./styles";
import { TTheme, TThemeList } from "./types";

export const ThemeList = ({ selectedTopics, courseName, buttonID }: TThemeList) => {
  const navigate = useNavigate();

  const handleThemeClick = (theme: TTheme) => {
    const { themeName, id } = theme;

    const state = {
      courseName,
      themeName,
      themeID: id,
    };

    if (buttonID === TCreationModeButton.MANUAL_QUESTIONS) {
      navigate("/manualCreatingPage", { state });
      return;
    }

    if (buttonID === TCreationModeButton.AI_QUESTIONS) {
      navigate("/formForCreatingQuestionsByAI", { state });
      return;
    }

    navigate("/questionList", { state });
  };

  return (
    <nav aria-label="Themes list">
      <List>
        {selectedTopics.map((theme) => (
          <ListItem disablePadding key={theme.id} sx={listItemStyles}>
            <ListItemButton onClick={() => handleThemeClick(theme)}>
              <ListItemText primary={theme.themeName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
