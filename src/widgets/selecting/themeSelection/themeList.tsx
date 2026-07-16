import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { CreationModeButton } from "@shared/types/commonTypes";
import { useNavigate } from "react-router-dom";

export type TSelectedTopic = {
  id: string;
  courseName: string;
  themeName: string;
};

type TThemeList = {
  selectedTopics: TSelectedTopic[];
  courseName: string;
  buttonID: CreationModeButton;
};
const listItemStyles = {
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

export const ThemeList = ({ selectedTopics, courseName, buttonID }: TThemeList) => {
  const navigate = useNavigate();

  const handleThemeClick = (selectedTopic: TSelectedTopic) => {
    const { themeName, id } = selectedTopic;

    navigate("/formSelection", {
      state: {
        buttonID,
        courseName,
        themeName: themeName,
        themeID: id,
      },
    });
  };

  return (
    <div>
      <nav aria-label="Themes list">
        <List>
          {selectedTopics.map((theme: TSelectedTopic, index: number) => {
            return (
              <ListItem disablePadding key={index} sx={listItemStyles}>
                <ListItemButton onClick={() => handleThemeClick(theme)}>
                  <ListItemText primary={theme.themeName} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </div>
  );
};
