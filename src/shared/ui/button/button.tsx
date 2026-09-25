import { cn } from "@shared/lib";

type TButton = {
  onClick?: () => void;
  buttonLabel?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  size?: "big" | "middle" | "small";
  className?: string;
};

const commonStylesForButtons = cn(
  "mx-auto block rounded-lg px-4 py-2",
  "font-semibold text-white/80 text-[0.8rem]",
  "bg-stone-900 shadow-[0_10px_22px_rgba(0,0,0,0.3)]",

  "transition duration-200",
  "hover:-translate-y-0.5 hover:bg-[#211919] hover:shadow-[0_14px_26px_rgba(0,0,0,0.35)]",
  "active:translate-y-0",
  "disabled:pointer-events-none disabled:opacity-50"
);

export const Button = ({
  onClick,
  buttonLabel,
  disabled = false,
  type = "button",
  className,
}: TButton) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(commonStylesForButtons, className)}
    >
      {buttonLabel}
    </button>
  );
};
