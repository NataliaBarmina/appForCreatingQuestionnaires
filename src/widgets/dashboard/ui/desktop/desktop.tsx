import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { cn } from "@shared/lib";
import { circleConfig } from "../../config";
import { containerStyles, bigCircleStyles, smallCirclesStyles } from "./styles";

export const DesktopDashboard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center">
      <div className={containerStyles}>
        {circleConfig.map((circle) => {
          const { colSpan, colStart, rowSpan, rowStart, link, labelKey } = circle;
          return (
            <div
              key={link}
              className={cn(
                "z-10 flex items-center justify-center",
                colSpan,
                colStart,
                rowSpan,
                rowStart
              )}
            >
              <button className={smallCirclesStyles} onClick={() => navigate(link)}>
                <span>{t(labelKey)}</span>
              </button>
            </div>
          );
        })}
        <div className={bigCircleStyles} aria-hidden="true" />
      </div>
    </div>
  );
};
