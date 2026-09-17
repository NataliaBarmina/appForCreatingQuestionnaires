import { LanguageSwitcher } from "@features/change-language";
import { LogoutButton } from "@features/logout-user";
import { cn } from "@shared/lib";

export const containerStyles = "hidden h-[12vh] w-full lg:block"; //  резервируем место для Header сверху для экрана lg+

export const headerStyle = cn(
  "fixed left-1/2 z-50 -translate-x-1/2",
  "flex w-full flex-row items-center justify-between",
  "bg-green-800",
  "bottom-0 h-16 px-4",
  "shadow-[0_-4px_12px_rgba(0,0,0,0.25)]",

  "md:h-20 md:px-8",

  // 1024+ возвращаем Header наверх
  "lg:top-0 lg:bottom-auto",
  "lg:h-[12vh] lg:w-[85%] lg:px-0",
  "lg:shadow-lg lg:shadow-stone-900",

  "xl:w-[80%]",
  "2xl:w-[70%]",
  "3xl:w-[60%]"
);

export const Header = () => {
  return (
    <>
      <div className={containerStyles} />

      <header className={headerStyle}>
        <LogoutButton />
        <LanguageSwitcher />
      </header>
    </>
  );
};
