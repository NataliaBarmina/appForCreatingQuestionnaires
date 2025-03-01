import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Topic } from "../../../common/dataExample";
import { Button } from "../../commonComponents/buttons";

//TODO:! нужно проверить адаптивность верстки

export type MyProps = {
  themeOfCourse: string[];
  listOfThemes: Topic[];
};

const ThemesSelection = ({ themeOfCourse, listOfThemes }: MyProps) => {
  const arrayListOfThemes = Object.values(listOfThemes);

  const navigate = useNavigate();
  return (
    <div className="mx-auto w-[100%]">
      <div className="py-8 text-xl font-bold">
        Выберите тему из курса {themeOfCourse}
      </div>

      <Box
        sx={{
          width: { xs: "100%", sm: "90%" },
          margin: "0 auto",
          bgcolor: "rgb(47,79,79)",
          paddingTop: "20px",
          paddingBottom: "25px",
          borderRadius: { xs: "0px", sm: "15px" },
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {arrayListOfThemes.map((item: Topic, index: number) => (
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
                    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate("/formForCreatingQuestionsYourself");
                    //TODO: добавить обработчик отправляющий название курса{themeOfCourse} и темы{Object.keys(item)} в стэйт?
                    //TODO: нужно найти тему{Object.keys(item)} на которой произошло событие
                    //TODO: я должна передать item в стэйт?
                  }}
                >
                  <ListItemText primary={Object.keys(item)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        <Button
          onclick={() => navigate("/formForCreatingQuestionsYourself")}
          buttonName="Добавить тему"
          disabled={false}
          type="button"
          size="middle"
        />
      </Box>
    </div>
  );
};
export default ThemesSelection;
