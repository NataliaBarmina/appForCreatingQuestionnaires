import { CourseThemeSelection } from "../course-theme-selection";
import { EmptyState } from "@shared/ui/emptyState";
import { useTranslation } from "react-i18next";

// здесь надо убедится, что тем  нет

export const EditingQuestions = () => {
  const { t } = useTranslation();
  // const topicsForTest: any[] = [];
  // const hasTopics = topicsForTest.length > 0;

  // const hasTopics = selectedTopics.length > 0;
  const hasTopics = false;

  return (
    <div>
      {hasTopics ? <CourseThemeSelection /> : <EmptyState message={t("emptyState.noThemes")} />}
    </div>
  );
};
