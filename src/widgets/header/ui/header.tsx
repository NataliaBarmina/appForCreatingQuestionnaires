import { LanguageSwitcher } from "@features/change-language";
import { LogoutButton } from "@features/logout-user";

import { cn } from "@shared/lib";

export const headerStyle = cn(
  "z-50 mb-2 h-[12vh] w-full bg-red-400",
  "flex flex-row items-center justify-between",
  "bg-green-800 shadow-lg shadow-stone-900",
  "md:fixed md:left-0 md:top-0",
  "lg:left-[7.5vw] lg:w-[85%]",
  "xl:left-[10vw] xl:w-[80%]",
  "2xl:left-[14.9vw] 2xl:w-[70%]"
);

export const Header = () => {
  return (
    <div className="h-[12vh] w-full">
      <div className={headerStyle}>
        <LogoutButton />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
