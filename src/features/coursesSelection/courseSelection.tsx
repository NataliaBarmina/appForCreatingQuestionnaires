import { useTranslation } from "react-i18next";
import { TabsContainer } from "./tabsContainer";

export const CourseSelection = ({ tabValue, courses, handleChange }: any) => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#e3b6a6]/50 shadow-2xl shadow-stone-500">
      <div className="py-10 text-xl font-bold">{t("header.courseSelection")}</div>

      <TabsContainer tabValue={tabValue} courseNames={courses} handleChange={handleChange} />
    </div>
  );
};
