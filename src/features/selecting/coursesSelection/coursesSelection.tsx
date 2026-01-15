import { ThemeProvider } from "@mui/material";
import { theme } from "@common/themeForMaterialUI";
import { useLocation } from "react-router-dom";
import ThemesSelection from "../themeSelection/themesSelection";
import TabsContainer from "./tabsContainer";
import CustomTabPanel from "./customTabPanel";
import { useTranslation } from "react-i18next";
import { useCoursesSelectionLogic } from "./useCoursesSelectionLogic";

const CoursesSelection = () => {
  const location = useLocation();
  const buttonID = location.state?.buttonID;
  const { t } = useTranslation();

  const { tabValue, courses, handleChange, selectedCourseName, selectedTopics } =
    useCoursesSelectionLogic();

  return (
    <ThemeProvider theme={theme}>
      <div className="w-full pb-11">
        <div className="bg-stone-300 shadow-2xl shadow-stone-500">
          <div className="py-10 text-xl font-bold">{t("header.courseSelection")}</div>

          <TabsContainer tabValue={tabValue} courseNames={courses} handleChange={handleChange} />
        </div>
        <CustomTabPanel value={tabValue} index={tabValue}>
          <ThemesSelection
            course={selectedCourseName}
            selectedTopics={selectedTopics}
            buttonID={buttonID}
          />
        </CustomTabPanel>
      </div>
    </ThemeProvider>
  );
};
export default CoursesSelection;
