import { useTranslation } from "react-i18next";
import { CourseThemesContent } from "../widgets/course-theme-content";

export const CourseThemesPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="py-10 text-xl font-bold">{t("header.courseSelection")}</div>
      <CourseThemesContent />
    </div>
  );
};
