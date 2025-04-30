import { cn } from "@lib/utils";

type TButton = {
  onClick?: () => void;
  buttonLabel?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  size?: "big" | "middle" | "small";
};

const commonStylesForButtons = cn(
  "mx-auto bg-stone-900  text-pink-100 font-bold shadow-lg shadow-stone-800",
  "rounded-lg py-2",
  "hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-950",
  "hover:border hover:border-solid hover:border-zinc-950",
);
const bigButtonClasses = cn(
  "block w-[45vw]",
  "xs:text-[5vw]",
  "s:w-[35vw] s:py-4 s:text-[3.5vw]",
  "md:landscape:w-[30vw] md:landscape:text-[3vw]",
  "lg:landscape:w-[25vw] lg:landscape:text-[2.5vw]",
  "xl:landscape:w-[20vw] xl:landscape:text-[2vw]",
  "2xl:landscape:w-[14vw] 2xl:landscape:text-[1.3vw]",
);

const middleButtonClasses = cn("inline-block py-3 text-[1rem] px-5");

const smallButtonClasses = cn(
  "block ",
  "xs:text-[3.5vw] xs:w-[30vw] ",
  "s:w-[24vw] s:py-2 s:text-[2.5vw] s:px-1",
  "md:landscape:w-[17vw] md:landscape:text-[2vw] md:px-2",
  "lg:landscape:w-[13vw] lg:landscape:text-[1.5vw]",
  "xl:landscape:w-[10vw] xl:landscape:text-[1.2vw]",
  "2xl:landscape:w-[9vw] 2xl:landscape:text-[1vw]",
);

const sizeClasses: Record<string, string> = {
  big: bigButtonClasses,
  middle: middleButtonClasses,
  small: smallButtonClasses,
};

export const Button = ({
  size = "middle",
  onClick,
  buttonLabel,
  disabled,
  type,
}: TButton) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        commonStylesForButtons,
        sizeClasses[size], // Применяем классы в зависимости от размера
      )}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
