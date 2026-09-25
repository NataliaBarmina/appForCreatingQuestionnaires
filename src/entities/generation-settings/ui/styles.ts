import { cn } from "@shared/lib";

export const containerStyles =
  "mx-auto s:w-[90%] md:w-[80%] lg:w-[90%] xl:w-[85%] 3xl:w-[80%] text-white bg-green-800 px-4 py-8 s:bg-transparent";

export const sectionStyles = cn(
  "mb-8 rounded-2xl",
  "s:bg-green-800 s:shadow-[0_12px_30px_rgba(0,0,0,0.2)]",
  "s:px-6 s:pb-8 s:pt-6",
  "md:px-10 md:pb-10 md:pt-8",
  "2xl:mb-12 2xl:pt-10 2xl:pb-12"
);

export const titleStyles = "text-[1.2rem] font-semibold";

export const promptContainerStyles =
  "border-2 border-white/20 text-base rounded-2xl bg-[#0000001A] p-2 w-full focus:border-[#e3a0a7] mt-2";

export const countContainerStyles = cn(
  promptContainerStyles,
  "flex justify-evenly",

  "py-4 s:py-6 2xl:py-10"
);

export const countButtonStyles =
  "h-10 w-12 sm:h-12 sm:w-20 rounded-full border-2 transition duration-200 hover:-translate-y-0.5";
export const countButtonSelectedStyles = "border-[#e3a0a7] bg-[#0000001A] text-[#efb0b6]";
export const countButtonDefaultStyles =
  "border-white/20 bg-transparent text-white/90 hover:border-[#e3a0a7]/60";

export const instructionsStyles = cn(
  promptContainerStyles,
  "min-h-[90px] resize-y leading-tight outline-none transition placeholder:text-white/40 "
);

export const generateButtonStyle = (isFetching: boolean) =>
  cn(
    "transition duration-200",
    "mx-auto block",
    "rounded-xl px-4 py-2",
    "text-[0.9rem] font-semibold text-white/80",
    "bg-[#181313]/80 shadow-[0_10px_22px_rgba(0,0,0,0.3)]",

    !isFetching &&
      "hover:-translate-y-0.5 hover:bg-[#372d2d] hover:shadow-[0_14px_26px_rgba(0,0,0,0.35)]",

    isFetching && "cursor-not-allowed opacity-60"
  );
