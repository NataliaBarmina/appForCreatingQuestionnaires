import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { cn } from "@shared/lib";

import { linkOptions } from "../config/link-options";

export const classesForLinks = "hover:text-pink-900 focus:text-emerald-400 text-2xl text-white";

export const classesForNavPanel = cn(
  "mx-auto block align-top",
  "md:inline-block md:min-h-[86vh] md:w-[30%]"
  // "lg:pt-[13vh]"
);

export const classesForFixingNavPanel = cn(
  "pl-6",
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
        {linkOptions.map((option) => (
          <div className="flex items-center gap-4">
            <option.icon width={40} height={40} color="#FCA5A5" />

            <Link to={option.path} className={classesForLinks}>
              {t(option.buttonLabel)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
