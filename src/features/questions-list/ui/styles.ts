import { cn } from "@lib/utils";

export const mainContainerStyles = cn(
  "mx-auto bg-red-50",
  "border-2 border-solid border-gray-600",
  "s:rounded-2xl",
  "md:w-[90vw]",
  "lg:w-[75vw]",
  "xl:w-[70vw]",
  "2xl:w-[50vw]"
);

export const buttonsContainerStyles = "mx-auto mb-12 mt-6 flex w-[80%] justify-between px-[4vw] ";

export const headerStyles = "p-6 text-center text-[150%] font-bold";

export const greenContainerStyles = cn(
  "mx-auto mb-8 w-[100vw] bg-green-800 px-8",
  "s:w-[90vw] s:rounded-2xl",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]"
);

export const textareaStyles = cn(
  "w-[100%] bg-blue-100 font-bold italic",
  "placeholder:text-sm placeholder:text-purple-900",
  "border-4 border-solid border-blue-200",
  "mb-6 py-4 pl-4 text-[120%]"
);

export const errorsStyles = "border-pink-900 border-[2px]";
