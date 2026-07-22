import { classesForLinks, classesForNavPanel, classesForFixingNavPanel } from "./styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NavPanel = () => {
  const { t } = useTranslation();

  return (
    <div className={classesForNavPanel}>
      <div className={classesForFixingNavPanel}>
        <Link to="/creationOptionsPage" className={classesForLinks}>
          {t("buttonLabel.creating")}
        </Link>

        <Link to="/editingQuestions" className={classesForLinks}>
          {t("link.editing")}
        </Link>

        <Link to="/questionnaire" className={classesForLinks}>
          {t("link.questionnaire")}
        </Link>

        <Link to="/authForm" className={classesForLinks}>
          {t("link.auth")}
        </Link>
      </div>
    </div>
  );
};
