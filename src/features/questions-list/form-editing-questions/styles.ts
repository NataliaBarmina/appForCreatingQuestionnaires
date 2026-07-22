import { cn } from "@lib/utils";

export const mainContainerStyles = cn(
  "mx-auto w-[100vw] bg-red-50",
  "border-2 border-solid border-gray-600",
  "s:rounded-2xl",
  "md:w-[90vw]",
  "lg:w-[75vw]",
  "xl:w-[70vw]",
  "2xl:w-[55vw]",
);

export const errorsStyles = "border-pink-900 border-[2px]";

export const buttonsContainerStyles =
  "mx-auto mb-12 mt-6 flex w-[80%] justify-between px-[4vw]";

export const headerStyles = "p-6 text-center text-[150%] font-bold";
