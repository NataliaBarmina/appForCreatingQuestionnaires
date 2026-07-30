import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { CircleIcon } from "@shared/ui/icons/circle-icon";
import { cn } from "@shared/lib";

export const classesForLinks = cn("hover:text-pink-900 focus:text-emerald-400");

export const classesForNavPanel = cn(
  "mx-auto block align-top",
  "md:inline-block md:min-h-[86vh] md:w-[30%]"
  // "lg:pt-[13vh]"
);

export const classesForFixingNavPanel = cn(
  "text-xl text-white pl-4",
  "shadow-[-10px_0_15px_-8px_rgba(36,21,21,0.8),10px_0_15px_-8px_rgba(36,21,21,0.8)]",
  "md:fixed md:left-0",
  "md:top-[25vh] md:w-[30%]",
  "lg:left-[7.5vw] lg:w-[25.5vw] lg:h-[40vw] lg:top-[7vw] lg:flex lg:flex-col lg:justify-evenly ",
  "xl:left-[10vw] xl:w-[24vw]",
  "2xl:left-[15vw] 2xl:w-[20.5vw]"
);

export const NavPanel = () => {
  const { t } = useTranslation();

  return (
    <div className={classesForNavPanel}>
      <div className={classesForFixingNavPanel}>
        <div className="flex items-center gap-4">
          <CircleIcon />
          <Link to="/creationOptionsPage" className={classesForLinks}>
            {t("buttonLabel.creating")}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <CircleIcon />
          <Link to="/coursesThemesSelection" className={classesForLinks}>
            {t("link.editing")}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <CircleIcon />
          <Link to="/questionnaire" className={classesForLinks}>
            {t("link.questionnaire")}
          </Link>
        </div>
      </div>
    </div>
  );
};
