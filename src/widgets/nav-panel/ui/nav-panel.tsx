import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { cn } from "@shared/lib";
import { linkOptions } from "../config/link-options";

export const navPanelStyles = cn(
  "fixed z-40 left-0 top-0",
  "grid h-20 w-full grid-cols-3",
  "bg-[#183232] shadow-[0_4px_12px_rgba(0,0,0,0.2)]",

  "md:h-24 md:px-4",

  "lg:left-[7.5%] lg:top-[12vh] lg:h-[88vh] lg:w-[25.5%] lg:px-0",
  "lg:flex lg:flex-col lg:justify-evenly",
  "lg:bg-black lg:shadow-[-10px_0_15px_-8px_rgba(36,21,21,0.8),10px_0_15px_-8px_rgba(36,21,21,0.8)]",

  "xl:left-[10%] xl:w-[24%]",
  "2xl:left-[15%] 2xl:w-[21%]",
  "3xl:left-[20%] 3xl:w-[18%]"
);

export const navLinkStyles = cn(
  "h-full px-1 text-sm text-white",
  "flex flex-col items-center justify-center gap-1",
  "transition-colors duration-200",
  "hover:text-[#88cdbe] focus:bg-[#fca5a5]/20 focus:text-[#fca5a5]",

  "md:flex-row md:gap-3 md:text-xl",

  "lg:my-2 lg:h-auto lg:py-2 lg:pl-4 lg:text-2xl lg:focus:bg-inherit",
  "lg:justify-start lg:gap-2",
  "xl:gap-4 xl:pl-6"
);

export const NavPanel = () => {
  const { t } = useTranslation();

  return (
    <nav className={navPanelStyles}>
      {linkOptions.map((option) => (
        <NavLink key={option.buttonLabel} to={option.path} className={navLinkStyles}>
          <option.icon
            width={40}
            height={40}
            color="#FCA5A5"
            className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"
          />

          <span>{t(option.buttonLabel)}</span>
        </NavLink>
      ))}
    </nav>
  );
};
