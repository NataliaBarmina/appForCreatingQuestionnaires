import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { CreateThemePopover } from "@features/create-theme-manually";
import { TSelectedTheme } from "@entities/theme";
import { QuestionCreationMode } from "@entities/question";

import { mainContainerStyles, listItemStyles } from "./styles";

export const ThemeSelection = ({
  courseName,
  buttonID,
  selectedTopics,
}: {
  courseName: string;
  buttonID: QuestionCreationMode;
  selectedTopics: TSelectedTheme[];
}) => {
  const navigate = useNavigate();

  const handleThemeClick = (theme: TSelectedTheme) => {
    const { themeName, themeId } = theme;

    const state = {
      courseName,
      themeName,
      themeId: themeId,
    };

    if (buttonID === QuestionCreationMode.MANUAL) {
      navigate("/create/questions/manual", { state });
      return;
    }

    if (buttonID === QuestionCreationMode.AI) {
      navigate("/create/questions/ai", { state });
      return;
    }

    navigate("/edit/questions", { state });
  };

  return (
    <div className="mx-auto w-full">
      <div className={mainContainerStyles}>
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

        {(buttonID === QuestionCreationMode.AI || buttonID === QuestionCreationMode.MANUAL) && (
          <CreateThemePopover courseName={courseName} />
        )}
      </div>
    </div>
  );
};
