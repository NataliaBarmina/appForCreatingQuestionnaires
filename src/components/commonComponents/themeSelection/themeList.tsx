import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { TTopic, TQuestion } from "@store/commonTypes";

type TThemeList = {
  selectedThemes: TTopic[];
  handleThemeClick: (theme: string, questions: TQuestion[]) => void;
};

const ThemeList = ({ selectedThemes, handleThemeClick }: TThemeList) => {
  return (
    <div>
      <nav aria-label="Themes list">
        <List>
          {selectedThemes.map((topic: TTopic, index: number) => {
            const [theme, questions] = Object.entries(topic)[0];

            return (
              <ListItem
                disablePadding
                key={index}
                sx={{
                  border: "4px solid rgb(180, 209, 210)",
                  bgcolor: "rgb(240,248,255)",
                  width: "90%",
                  margin: "0 auto",
                  marginBottom: "20px",
                  ":hover": {
                    backgroundColor: "#e3b6a6",
                    boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <ListItemButton
                  onClick={() => handleThemeClick(theme, questions)}
                >
                  <ListItemText primary={theme} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </div>
  );
};
export default ThemeList;
