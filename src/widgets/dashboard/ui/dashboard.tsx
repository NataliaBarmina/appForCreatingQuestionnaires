import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@shared/shadcn";

import { circleConfig } from "../config/circleConfig";
import { smallCirclesStyles, circlesTextStyles, bigCircleStyles } from "./styles";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {circleConfig.map((circle) => {
        const { colSpan, colStart, rowSpan, rowStart, link, labelKey } = circle;

        return (
          <div key={link} className={cn("z-50", colSpan, colStart, rowSpan, rowStart)}>
            <div className={smallCirclesStyles} onClick={() => navigate(link)}>
              <p className={circlesTextStyles}>{t(labelKey)}</p>
            </div>
          </div>
        );
      })}

      <div className={bigCircleStyles}></div>
    </>
  );
};
