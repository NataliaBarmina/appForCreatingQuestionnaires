import { cn } from "@shared/lib";

export const mainContainerStyles = cn(
  "mx-auto bg-[#ffa79c]",
  "border-[3px] border-solid border-[#ff806d]",
  "s:rounded-2xl",
  "md:w-[90vw]",
  "lg:w-[75vw]",
  "xl:w-[70vw]",
  "2xl:w-[50vw]"
);

export const buttonsContainerStyles = "mx-auto mb-12 mt-6 flex w-[80%] justify-between px-[4vw] ";

export const errorsStyles = cn("textarea-styles", "border-pink-900");
