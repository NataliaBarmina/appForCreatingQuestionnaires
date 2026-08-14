import { useTranslation } from "react-i18next";
import { CourseThemesContent } from "../widgets/course-theme-content";

export const CourseThemesPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="pb-10">{t("courseThemeSelection.courseSelection")}</h1>
      <CourseThemesContent />
    </div>
  );
};
