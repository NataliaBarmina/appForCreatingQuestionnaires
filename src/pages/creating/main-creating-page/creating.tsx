import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@shared/ui";
import { circleStyles, containerStyle, headerStyle, flexContainer } from "./styles";
import { CreationModeButton } from "@shared/types/commonTypes";

export const Creating = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = (labelKey: string) => {
    navigate("/coursesSelection", { state: { buttonID: labelKey } });
  };

  return (
    <div className={containerStyle}>
      <div className={headerStyle}>{t("link.create")}</div>
      <div className={circleStyles}>
        <div className={flexContainer}>
          <Button
            buttonLabel={t("buttonLabel.byAI")}
            size="big"
            onClick={() => handleNavigate(CreationModeButton.AI)}
          />
          <Button
            buttonLabel={t("buttonLabel.yourself")}
            size="big"
            onClick={() => handleNavigate(CreationModeButton.MANUAL)}
          />
        </div>
      </div>
    </div>
  );
};
