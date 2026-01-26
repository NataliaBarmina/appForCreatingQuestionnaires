import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { TSelectedTopic } from "@shared/types/commonTypes";

type TThemeList = {
  handleThemeClick: (theme: string, themeID: string) => void;
  selectedTopics: Array<Partial<TSelectedTopic>>;
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

export const ThemeList = ({ handleThemeClick, selectedTopics }: TThemeList) => {
  console.log("topics", selectedTopics);
  const selectedTopicNames = selectedTopics.map((item: TSelectedTopic) => item.themeName);

  return (
    <div>
      <nav aria-label="Themes list">
        <List>
          {selectedTopics.map((themes: TSelectedTopic, index: number) => {
            return (
              <ListItem disablePadding key={index} sx={listItemStyles}>
                <ListItemButton onClick={() => handleThemeClick(themes.themeName, themes.id)}>
                  <ListItemText primary={themes.themeName} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </div>
  );
};
