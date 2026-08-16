import { useTranslation } from "react-i18next";

import { CourseWheel } from "@widgets/course-wheel";

export const CourseSelectionPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("courseThemeSelection.courseSelection")}</h1>
      <CourseWheel />
    </div>
  );
};
