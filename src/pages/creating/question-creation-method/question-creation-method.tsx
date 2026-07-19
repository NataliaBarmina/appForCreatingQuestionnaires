import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@shared/ui";
import { TCreationModeButton } from "@shared/types/commonTypes";
import { circleStyles, containerStyle, headerStyle, flexContainer } from "./styles";

export const QuestionCreationMethod = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = (labelKey: string) => {
    navigate("/coursesThemesSelection", { state: { buttonID: labelKey } });
  };

  return (
    <div className={containerStyle}>
      <div className={headerStyle}>{t("link.createQuestion")}</div>
      <div className={circleStyles}>
        <div className={flexContainer}>
          <Button
            buttonLabel={t("buttonLabel.byAI")}
            size="big"
            onClick={() => handleNavigate(TCreationModeButton.AI)}
          />
          <Button
            buttonLabel={t("buttonLabel.yourself")}
            size="big"
            onClick={() => handleNavigate(TCreationModeButton.MANUAL)}
          />
        </div>
      </div>
    </div>
  );
};
