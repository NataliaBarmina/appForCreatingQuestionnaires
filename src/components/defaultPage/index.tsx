import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { bigCircleStyles, containerStyles } from "./styles";
import Circle from "./circle";
import { TNavigateToPage } from "./types";
import { getCircleConfig } from "./getCircleConfig";
import { useMemo } from "react";

const DefaultPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const buttonID = t("buttonLabel.editing.id");

  const navigateToPage: TNavigateToPage = useCallback(
    (link, buttonLabel?) => {
      if (buttonID === buttonID) {
        navigate(link, { state: { buttonID } });
      } else navigate(link);
    },
    [navigate],
  );
  const circleConfig = useMemo(() => getCircleConfig(t), [t]);

  return (
    <div className={containerStyles}>
      {circleConfig.map((circle, index) => (
        <Circle key={index} {...circle} onClick={navigateToPage} />
      ))}

      <div className={bigCircleStyles}></div>
    </div>
  );
};
export default DefaultPage;
