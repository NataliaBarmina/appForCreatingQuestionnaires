import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@shared/lib";

import { ConnectingLines } from "./connecting-lines";
import { circleConfig } from "../../config";

export const circleStyles =
  "absolute z-10 flex aspect-square w-[42%] items-center justify-center rounded-full border-2 border-[#8AB9AF]/80 bg-green-800 px-1 text-center text-[clamp(11px,3.4vw,13px)] leading-tight text-white/80  shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-transform duration-200";

export function MobileDashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="flex min-h-full w-full items-center justify-center min-[540px]:hidden">
      <div className="relative aspect-[320/600] w-full max-w-[320px]">
        <ConnectingLines />

        {circleConfig.map((item) => (
          <button
            key={item.position}
            className={cn(circleStyles, item.position)}
            onClick={() => navigate(item.link)}
          >
            <span>{t(item.labelKey)}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
