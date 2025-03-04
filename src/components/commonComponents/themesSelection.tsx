import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { Topic } from "@common/dataExample";
import { Button } from "@commonComponents/buttons";

export type MyProps = {
  course: string[];
  listOfThemes: Topic[];
  buttonName: string;
};

const ThemesSelection = ({
  course, // название курса
  listOfThemes, // массив- [{тема1: Array(2)},{тема2: Array(2)} }
  buttonName, // название кнопки на которой произошел клик
}: MyProps) => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-[100%]">
      <div className="pb-10 pt-12 text-xl font-bold">
        Выберите тему из курса {course}
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
            {listOfThemes.map((item: Topic, index: number) => (
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
                      state: {
                        buttonName,
                        course: course[0],
                        questionsList: Object.values(item)[0], //массив вопросов
                        theme: Object.keys(item)[0],
                      },
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
                state: { buttonName, course: course[0], listOfThemes },
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

//TODO: добавить обработчик отправляющий название курса{course} и темы{Object.keys(item)} в стэйт?
