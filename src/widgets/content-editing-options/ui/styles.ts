import { cn } from "@shared/lib";

export const containerStyles = cn(
  "flex flex-col items-center justify-center",
  "mx-auto gap-[0.5rem] h-[67cqh]",

  "s:rounded-[3rem] s:gap-[2rem] s:flex-row s:w-[90%]",
  "md:gap-[6rem] md:h-[63cqh]",
  "lg:bg-green-800 lg:gap-[2rem] lg:h-[70cqh]"
);

export const headerStyle = "text-center text-[1.2rem] font-medium text-[#fca5a5]/80 mb-6 s:mb-10";

export const contentStyles = cn(
  "w-[50%] px-4 py-[1rem] overflow-hidden",
  "flex-col items-center justify-center gap-6",
  "border-[5px] border-solid  border-[#88cdbe]/80 rounded-[2rem]",
  "bg-[radial-gradient(circle_at_top,_#0f2d2a,_#071716)] shadow-[0_12px_30px_rgba(0,0,0,0.35)]",

  "s:w-[40%]",
  "md:w-[30%]",
  "lg:w-[40%]"
);

export const lineStyles = "hidden s:block mx-auto mb-8 h-[2px] w-10 rounded-full bg-[#88cdbe]/80";
export const textStyles = "hidden s:block text-md pb-10 text-[#fca5a5]/80";

export const chevronButtonStyles = cn(
  "flex h-10 w-10 items-center justify-center",
  "border-[2px] border-[#9df1cf]/70 rounded-full",
  "transition duration-300 hover:scale-105 hover:bg-[#88cdbe]/10",

  "s:h-14 s:w-14"
);
