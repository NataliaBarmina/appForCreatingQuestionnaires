import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

type TThemeList = {
  handleThemeClick: (theme: string) => void;
  selectedTopicName: string[];
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

const ThemeList = ({ handleThemeClick, selectedTopicName }: TThemeList) => {
  return (
    <div>
      <nav aria-label="Themes list">
        <List>
          {selectedTopicName.map((theme: string, index: number) => {
            return (
              <ListItem disablePadding key={index} sx={listItemStyles}>
                <ListItemButton onClick={() => handleThemeClick(theme)}>
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
