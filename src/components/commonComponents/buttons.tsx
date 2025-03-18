import classNames from "classnames";

type ButtonProps = {
  onClick?: () => void;
  buttonLabel?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  size?: string;
};

const sizeClasses: Record<string, string> = {
  big: "block w-[45vw] xs:text-[5vw] s:w-[35vw] s:py-4 s:text-[3.5vw] md:landscape:w-[30vw] md:landscape:text-[3vw] lg:landscape:w-[25vw] lg:landscape:text-[2.5vw] xl:landscape:w-[20vw] xl:landscape:text-[2vw] 2xl:landscape:w-[14vw] 2xl:landscape:text-[1.3vw]",
  middle: "inline-block p-3 text-[1rem]",
  small: "inline-block px-2",
};

const commonStylesForButtons = classNames(
  "mx-auto bg-stone-900  text-pink-100 font-bold shadow-lg shadow-stone-800",
  "rounded-lg py-2",
  "hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-950",
  "hover:border hover:border-solid hover:border-zinc-950",
);

const Button: React.FC<ButtonProps> = ({
  size,
  onClick,
  buttonLabel,
  disabled,
  type,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={classNames(commonStylesForButtons, sizeClasses[size])}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
