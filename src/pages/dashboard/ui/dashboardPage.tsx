import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { bigCircleStyles, containerStyles } from "./styles";
import { Circle } from "./circle";
import { circleConfig } from "./circleConfig";
import { TNavigateToPage } from "./types";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigateToPage: TNavigateToPage = useCallback(
    (link) => {
      navigate(link);
    },
    [navigate]
  );

  return (
    <div className={containerStyles}>
      {circleConfig.map((circle, index) => (
        <Circle key={index} {...circle} buttonLabel={t(circle.labelKey)} onClick={navigateToPage} />
      ))}

      <div className={bigCircleStyles}></div>
    </div>
  );
};
