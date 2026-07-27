import { cn } from "@shared/chadcn";

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

export const greenContainerStyles = cn(
  "mx-auto mb-8 w-[100vw] bg-green-800 px-8",
  "s:w-[90vw] s:rounded-2xl",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]"
);

export const errorsStyles = cn("textarea-styles", "border-pink-900");
