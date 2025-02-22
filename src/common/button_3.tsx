import classNames from "classnames";

type MyProps = {
  buttonName: string;
};

const Button_3 = ({ buttonName, ...props }: MyProps) => {
  return (
    <div>
      <button
        // onClick={() => alert("njkjkj")}
        className={classNames(
          //общие стили для всех кнопок:
          "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
          "rounded-lg border-2 border-solid border-gray-600",
          "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
          "hover:border hover:border-solid hover:border-pink-900",
          // меняющиеся стили:
          "xs:w-[29vw] xs:py-1 xs:text-[3.5vw]",
          "s:w-[20vw] s:py-2 s:text-[2.5vw]",
          "md:w-[15vw] md:text-[1.8vw]",
          "lg:w-[13vw] lg:text-[1.5vw]",
          "xl:w-[10vw] xl:text-[1.2vw]",
          "2xl:w-[8vw] 2xl:text-[1vw]",
        )}
      >
        {buttonName}
      </button>
    </div>
  );
};
export default Button_3;
