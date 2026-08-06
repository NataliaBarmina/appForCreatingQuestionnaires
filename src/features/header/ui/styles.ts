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

export const buttonAuthStyles = "rounded-md bg-[#fca5a5]/80 px-4 py-2";

export const containerSwitcherStyles = "flex h-[12vh] flex-col items-end justify-evenly";
export const buttonLanguageStyles = "mr-4 w-[5rem] rounded-md bg-red-100 p-1 text-[0.8rem]";
