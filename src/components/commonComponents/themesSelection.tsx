import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { Topic } from "@common/dataExample";
import { Button } from "@commonComponents/buttons";

export type MyProps = {
  themeOfCourse: string[];
  listOfThemes: Topic[];
  buttonName: string;
};

const ThemesSelection = ({
  themeOfCourse,
  listOfThemes,
  buttonName,
}: MyProps) => {
  const arrayListOfThemes = Object.values(listOfThemes);

  const navigate = useNavigate();
  return (
    <div className="mx-auto w-[100%]">
      <div className="pb-10 pt-12 text-xl font-bold">
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
                    boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.5)",
                  },
                }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate("/formSelection", {
                      state: { buttonName },
                    });
                  }}
                >
                  <ListItemText primary={Object.keys(item)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        {buttonName !== "редактирование" && (
          <Button
            onclick={() => {
              navigate("/formSelection", {
                state: { buttonName },
              });
            }}
            buttonName="Добавить тему"
            disabled={false}
            type="button"
            size="middle"
          />
        )}
      </Box>
    </div>
  );
};
export default ThemesSelection;

//TODO: добавить обработчик отправляющий название курса{themeOfCourse} и темы{Object.keys(item)} в стэйт?
