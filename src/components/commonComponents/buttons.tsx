import classNames from "classnames";

type ButtonProps = {
  onClick?: () => void;
  value?: string;
  buttonLabel?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  size?: "big" | "middle" | "small";
};

const commonStylesForButtons = classNames(
  "mx-auto bg-stone-900  text-pink-100 font-bold shadow-lg shadow-stone-800",
  "rounded-lg py-2",
  "hover:cursor-pointer hover:shadow-xl hover:shadow-zinc-950",
  "hover:border hover:border-solid hover:border-zinc-950",
);

export const Button = ({
  size = "middle", // Размер по умолчанию
  onClick,
  buttonLabel,
  disabled,
  type,
}: ButtonProps) => {
  // Условные классы для разных размеров кнопок
  const sizeClasses = {
    big: "block w-[45vw] xs:text-[5vw] s:w-[35vw] s:py-4 s:text-[3.5vw] md:landscape:w-[30vw] md:landscape:text-[3vw] lg:landscape:w-[25vw] lg:landscape:text-[2.5vw] xl:landscape:w-[20vw] xl:landscape:text-[2vw] 2xl:landscape:w-[14vw] 2xl:landscape:text-[1.3vw]",
    middle: "inline-block p-3 text-[1rem]",
    small: "inline-block px-2",
  };

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={classNames(
        commonStylesForButtons,
        sizeClasses[size], // Применяем классы в зависимости от размера
      )}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
