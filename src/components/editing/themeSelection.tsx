import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const ThemeSelection = () => {
  return (
    <div className="pb-6">
      <div className="pb-6 pt-8 text-[150%] font-bold">Выберите тему</div>

      <div
        className={classNames(
          "mx-auto bg-green-800",
          "border-2 border-solid border-gray-600",
          "w-[100%] pt-10",
          "s:w-[90%] s:rounded-2xl",
          "sm:w-[85%]",
          "md:w-[80%]",
          "xl:w-[70%]",
          "2xl:w-[60%]",
        )}
      >
        <Theme value="ТИПЫ ДАННЫХ" />
        <Theme value="ALERT, PROMPT, CONFIRM" />
        <Theme value="ПРЕОБРАЗОВАНИЕ ТИПОВ" />
        <Theme value="ПЕРЕМЕННЫЕ" />
        <Theme value="БАЗОВЫЕ ОПЕРАТОРЫ, МАТЕМАТИКА" />
      </div>
    </div>
  );
};

type ComponentProps = {
  value: string;
};
const Theme = ({ value }: ComponentProps) => {
  const navigate = useNavigate();
  return (
    <div
      className={classNames(
        //общие стили для всех кнопок:
        "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
        "rounded-lg border-2 border-solid border-gray-600",
        "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
        "hover:border hover:border-solid hover:border-pink-900",
        // меняющиеся стили:
        "mb-6 min-h-20 w-[80%] p-3",
        "sm:w-[75%]",
        "sm:w-[70%] sm:text-[2vw]",
        "lg:text-[1.6vw]",
        "xl:w-[60%] xl:text-[1.3vw]",
        "2xl:mb-10 2xl:text-[1vw]",
      )}
      onClick={() => navigate("/questionList")}
    >
      {value}
    </div>
  );
};
export default ThemeSelection;
