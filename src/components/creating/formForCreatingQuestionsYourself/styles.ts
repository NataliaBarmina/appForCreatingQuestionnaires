import { cn } from "@lib/utils";

export const formContainerClasses = cn(
  "mx-auto mb-5 w-[100vw] bg-green-800 px-6",
  "border-2 border-solid border-gray-600",
  "s:w-[90vw] s:rounded-2xl",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]",
);
export const formLabelClasses = "text-lg text-yellow-50";
export const textAreaBase = "text-center placeholder:text-sm";
export const textAreaBold = cn(
  textAreaBase,
  "font-extrabold placeholder:font-normal",
);
