import classNames from "classnames";

type ButtonProps = {
  onclick?: () => void;
  value?: string;
  buttonName?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
};

const commonStylesForButtons = classNames(
  "mx-auto bg-[#241515]  text-[#F1E8F3] font-bold shadow-md shadow-[#DBEBD7]",
  "rounded-lg ",
  "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
  "hover:border hover:border-solid hover:border-pink-900",
);

export const BigButton = ({ buttonName, onclick }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={() => {
          onclick();
        }}
        className={classNames(
          commonStylesForButtons,
          "block w-[45vw] py-2 xs:text-[5vw]",
          "s:w-[35vw] s:py-4 s:text-[3.5vw]",
          "md:landscape:w-[30vw] md:landscape:text-[3vw]",
          "lg:landscape:w-[25vw] lg:landscape:text-[2.5vw]",
          "xl:landscape:w-[20vw] xl:landscape:text-[2vw]",
          "2xl:landscape:w-[14vw] 2xl:landscape:text-[1.3vw]",
        )}
      >
        {buttonName}
      </button>
    </div>
  );
};

const Button_3 = ({ buttonName }: ButtonProps) => {
  return (
    <div>
      <button
        className={classNames(
          commonStylesForButtons,
          "xs:w-[29vw] xs:py-1 xs:text-[3.5vw]",
          "s:w-[20vw] s:py-2 s:text-[2.5vw]",
          "md:w-[15vw] md:text-[1.8vw]",
          "lg:w-[13vw] lg:text-[1.5vw]",
          "xl:w-[10vw] xl:text-[1.2vw]",
          "2xl:w-[8vw] 2xl:text-[0.8vw]",
        )}
      >
        {buttonName}
      </button>
    </div>
  );
};
export default Button_3;

export const Button_2 = ({
  onclick,
  buttonName,
  disabled,
  type,
}: ButtonProps) => (
  <button
    disabled={disabled}
    type={type}
    onClick={() => {
      onclick();
    }}
    className={classNames(
      commonStylesForButtons,
      "w-[43%] p-2",
      "xs:text-[4vw]",
      "s:w-[38%] s:text-[3vw]",
      "sm:w-[34%] sm:text-[2.6vw]",
      "md:text-[2.2vw]",
      "lg:text-[1.8vw]",
      "xl:text-[1.5vw]",
      "2xl:text-[1vw]",
    )}
  >
    {buttonName}
  </button>
);
