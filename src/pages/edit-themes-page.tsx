import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EditThemesContent } from "@widgets/edit-themes-content";

export const EditThemesPage = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const { course } = location.state;

  return (
    <div>
      <h1>
        {t("header.editTopic")} {t("header.byCourse")}
      </h1>
      <h1>{course}</h1>
      <EditThemesContent course={course} />
    </div>
  );
};
