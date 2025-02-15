import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

//TODO:! нужно проверить адаптивность верстки

interface MyProps {
  value: any;
}

const ThemesSelection = ({ value }: MyProps) => {
  const themeOfCourse = Object.keys(value);
  const listOfThemes: any = Object.values(value)[0];
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-8 text-xl font-bold">
        Выберите тему из курса {themeOfCourse}
      </div>

      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
          bgcolor: "rgb(47,79,79)",
          paddingTop: "20px",
          paddingBottom: "25px",
          borderRadius: "15px",
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            {listOfThemes.map((item: any, index: number) => (
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
                    //TODO: добавить обработчик отправляющий название курса{themeOfCourse} и темы{Object.keys(item)} в стэйт
                    //TODO: нужно найти тему{Object.keys(item)} на которой произошло событие
                  }}
                >
                  <ListItemText primary={Object.keys(item)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        <button
          onClick={() => navigate("/formForCreatingQuestionsYourself")}
          className={classNames(
            //общие стили для всех кнопок:
            "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
            "rounded-lg border-2 border-solid border-gray-600",
            "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
            "hover:border hover:border-solid hover:border-pink-900",
            // меняющиеся стили:
            "block w-[30%] py-2",
            // "xs:text-[5vw]",
            // "s:w-[35vw] s:py-4 s:text-[3.5vw]",
            // "md:landscape:w-[30vw] md:landscape:text-[3vw]",
            // "lg:landscape:w-[25vw] lg:landscape:text-[2.5vw]",
            // "xl:landscape:w-[20vw] xl:landscape:text-[2vw]",
            // "2xl:landscape:w-[16vw] 2xl:landscape:text-[1.7vw]",
          )}
        >
          Добавить тему
        </button>
      </Box>
    </div>
  );
};
export default ThemesSelection;

//   component="a"href="#creating"
//TODO: я должна передать item в стэйт?
