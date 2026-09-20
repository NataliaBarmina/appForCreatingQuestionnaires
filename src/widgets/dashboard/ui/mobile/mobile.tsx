import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";

import { ConnectingLines } from "./connecting-lines";
import { circleStyles } from "./styles";
import { circleConfig } from "../../config";

export function MobileDashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="flex min-h-full w-full items-center justify-center min-[540px]:hidden">
      <div className="relative aspect-[320/600] w-full max-w-[320px]">
        <ConnectingLines />

        {circleConfig.map((item) => (
          <button className={cn(circleStyles, item.position)} onClick={() => navigate(item.link)}>
            <span>{t(item.labelKey)}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
