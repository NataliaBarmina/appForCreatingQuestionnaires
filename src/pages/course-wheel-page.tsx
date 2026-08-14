import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { CourseWheelContent } from "@widgets/course-wheel-content";

export const CourseWheel = () => {
  const { t } = useTranslation();

  const location = useLocation();

  const { buttonID } = location.state;

  return (
    <div>
      <h1>{t("courseThemeSelection.courseSelection")}</h1>
      <CourseWheelContent />
    </div>
  );
};
