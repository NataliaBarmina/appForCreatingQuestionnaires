import { cn } from "@shared/lib";

export const pinkContainerStyles = cn(
  "mx-auto bg-[#ffa79c] pb-10",
  "border-[3px] border-solid border-[#ff806d]",
  "s:rounded-2xl",
  "md:w-[90vw]",
  "lg:w-[75vw]",
  "xl:w-[70vw]",
  "2xl:w-[50vw]"
);

export const buttonsContainerStyles = "mx-auto mt-6 flex w-[80%] justify-between px-[4vw]";

export const errorsStyles = cn("textarea-styles", "border-pink-900");

export const fieldStyles = cn("textarea-styles", "border-[#ff806d]");
