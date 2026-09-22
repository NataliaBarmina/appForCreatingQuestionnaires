import { useTranslation } from "react-i18next";

import { CourseWheel } from "@widgets/course-wheel";

export const CourseSelectionPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-[calc(100dvh-9rem)] min-h-0 w-full min-w-0 flex-col md:h-[calc(100dvh-11rem)] lg:h-[88vh]">
      <h1 className="shrink-0">{t("courseThemeSelection.courseSelection")}</h1>

      <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden p-4 md:p-8">
        <CourseWheel />
      </div>
    </div>
  );
};
