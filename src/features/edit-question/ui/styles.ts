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

export const greenContainerStyles = "w-[90%] mx-auto mb-4 bg-green-800  pt-10 pb-6 rounded-2xl";

export const buttonsContainerStyles = "mx-auto mt-6 flex w-[80%] justify-between px-[4vw]";

export const errorsStyles = cn("textarea-styles", "border-pink-900");
