import { cn } from "@shared/lib";

export const pinkContainerStyles = cn(
  "w-full bg-[#ffa79c]",
  "border-[3px] border-solid border-[#ff806d]",
  "rounded-xl pb-6"
);

export const buttonsContainerStyles = cn(
  "mx-auto mt-6 flex w-full flex-row justify-between gap-4",
  "sm:w-[90%]",
  "md:w-[80%]",
  "lg:w-[60%]"
);

export const errorsStyles = "textarea-styles px-1 border-pink-900";

export const fieldStyles = "textarea-styles border-[#ff806d] text-[0.9rem] rounded-md";
