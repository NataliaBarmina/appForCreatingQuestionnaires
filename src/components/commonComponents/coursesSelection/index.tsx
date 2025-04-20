import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { theme } from "@common/themeForMaterialUI";
import { useLocation } from "react-router-dom";
import ThemesSelection from "../themeSelection";
import { THandleTabChange } from "./types";
import TabsContainer from "./tabsContainer";
import CustomTabPanel from "./сustomTabPanel";
import { useTranslation } from "react-i18next";
import { quizData, TSubject } from "@common/dataExample"; //todo: получаем доступ к стэйту - массиву с вопросами

const CoursesSelection = () => {
  const location = useLocation();
  const buttonID = location.state?.buttonID;
  const { t } = useTranslation();

  const [tabValue, setTabValue] = useState(0);

  const handleChange: THandleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const courseNames: string[] = quizData.map(
    (item: TSubject) => Object.keys(item)[0],
  );

  const selectedCourseName = courseNames[tabValue];

  const courseEntry = quizData.find(
    (item) => Object.keys(item)[0] === selectedCourseName,
  );
  const courseThemes = courseEntry[selectedCourseName] ?? [];

  return (
    <ThemeProvider theme={theme}>
      <div className="w-full pb-11">
        <div className="bg-stone-300 shadow-2xl shadow-stone-500">
          <div className="py-10 text-xl font-bold">
            {t("header.courseSelection")}
          </div>

          <TabsContainer
            tabValue={tabValue}
            courseNames={courseNames}
            handleChange={handleChange}
          />
        </div>
        <CustomTabPanel value={tabValue} index={tabValue}>
          <ThemesSelection
            course={selectedCourseName} // название темы
            listOfThemes={courseThemes} // массив вопросов с темами
            buttonID={buttonID}
          />
        </CustomTabPanel>
      </div>
    </ThemeProvider>
  );
};
export default CoursesSelection;
