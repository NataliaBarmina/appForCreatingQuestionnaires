import {
  classesForLinks,
  classesForNavPanel,
  classesForFixingNavPanel,
} from "./styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavPanel = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={classesForNavPanel}>
      <div className={classesForFixingNavPanel}>
        <Link to="/creating" className={classesForLinks}>
          {t("link.create")}
        </Link>

        <button
          className={classesForLinks}
          onClick={() => {
            navigate("/coursesSelection", {
              state: { buttonID: t("buttonLabel.editing.id") },
            });
          }}
        >
          {t("link.editing")}
        </button>

        <Link to="/questionnaire" className={classesForLinks}>
          {t("link.questionnaire")}
        </Link>
      </div>
    </div>
  );
};
export default NavPanel;
