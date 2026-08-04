import { cn } from "@shared/lib";

export const containerStyles =
  "mx-auto mb-8 mt-12 flex w-[90%] items-center justify-center gap-[2rem] rounded-[4rem] bg-green-800 py-20";

export const headerStyle = "text-center text-2xl font-medium text-[#fca5a5]/80 mb-10";

export const contentStyles = cn(
  "w-[40%] px-4 py-[3rem]",
  "flex-col items-center justify-center",
  "gap-6 overflow-hidden",
  "rounded-[2rem]",
  "border-[5px] border-solid  border-[#88cdbe]/80 bg-[radial-gradient(circle_at_top,_#0f2d2a,_#071716)]",
  "shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
);

export const lineStyles = "mx-auto mb-8 h-[2px] w-10 rounded-full bg-[#88cdbe]/80";
export const textStyles = "text-md pb-14 text-[#fca5a5]/80";
export const chevronButtonStyles =
  "flex h-14 w-14 items-center justify-center rounded-full border-[2px] border-[#9df1cf]/70 transition duration-300 hover:scale-105 hover:bg-[#88cdbe]/10";
