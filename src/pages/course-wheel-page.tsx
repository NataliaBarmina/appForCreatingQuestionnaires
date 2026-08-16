import { useTranslation } from "react-i18next";

import { CourseWheelContent } from "@widgets/course-wheel-content";

export const CourseWheel = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("courseThemeSelection.courseSelection")}</h1>
      <CourseWheelContent />
    </div>
  );
};
