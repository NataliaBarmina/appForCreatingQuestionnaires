import { cn } from "@lib/utils";

export const containerStyle = "md:h-[12vh] md:w-[100%]";

export const headerStyle = cn(
  "z-50 mb-2 h-[12vh] w-[100%]",
  "bg-green-800 shadow-lg shadow-stone-900",
  "md:fixed md:left-0 md:top-0",
  "lg:left-[7.5vw] lg:w-[85%]",
  "xl:left-[10vw] xl:w-[80%]",
  "2xl:left-[14.9vw] 2xl:w-[70%]"
);

export const containerStyles = "flex h-[12vh] w-full flex-col items-end justify-evenly";

export const buttonStyles = "mr-4 rounded-md bg-red-100 p-1 w-[5rem] text-[0.8rem]";
