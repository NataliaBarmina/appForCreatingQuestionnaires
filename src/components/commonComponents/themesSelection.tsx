import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import Button from "@commonComponents/buttons";
import { TTopic } from "@common/dataExample";
import { TQuizData } from "@common/dataExample";
import { useTranslation } from "react-i18next";

const ThemesSelection = ({
  course, // название курса
  listOfThemes, // массив- [{тема1: Array(2)},{тема2: Array(2)} }
  buttonLabel, // название кнопки на которой произошел клик
}: TQuizData) => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className="mx-auto w-[100%]">
      <div className="pb-10 pt-12 text-xl font-bold">
        {t("header.themeSelection")} {course}
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
            {listOfThemes.map((item: TTopic, index: number) => (
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
                        buttonLabel,
                        course: course,
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
        {buttonLabel !== t("buttonLabel.editing").toLowerCase() && (
          <Button
            onClick={() => {
              navigate("/formSelection", {
                state: { buttonLabel, course: course, listOfThemes },
              });
            }}
            buttonLabel={t("buttonLabel.addTheme")}
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
