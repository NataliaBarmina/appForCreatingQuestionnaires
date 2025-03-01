import classNames from "classnames";

type ButtonProps = {
  onclick?: () => void;
  value?: string;
  buttonName?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  size?: "big" | "middle" | "small";
};

const commonStylesForButtons = classNames(
  "mx-auto bg-[#241515]  text-[#F1E8F3] font-bold shadow-md shadow-[#DBEBD7]",
  "rounded-lg py-2",
  "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
  "hover:border hover:border-solid hover:border-pink-900",
);

export const Button = ({
  size = "middle", // Размер по умолчанию
  onclick,
  buttonName,
  disabled,
  type,
}: ButtonProps) => {
  // Условные классы для разных размеров кнопок
  const sizeClasses = {
    big: "block w-[45vw] xs:text-[5vw] s:w-[35vw] s:py-4 s:text-[3.5vw] md:landscape:w-[30vw] md:landscape:text-[3vw] lg:landscape:w-[25vw] lg:landscape:text-[2.5vw] xl:landscape:w-[20vw] xl:landscape:text-[2vw] 2xl:landscape:w-[14vw] 2xl:landscape:text-[1.3vw]",
    middle: "inline-block px-2 text-[1rem]",
    small: "inline-block xs:px-2 xs:text-[0.8rem] s:px-3 s:text-[1rem]",
  };

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onclick}
      className={classNames(
        commonStylesForButtons,
        sizeClasses[size], // Применяем классы в зависимости от размера
      )}
    >
      {buttonName}
    </button>
  );
};

export default Button;
