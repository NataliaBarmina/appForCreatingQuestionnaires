import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const ThemeSelection = () => {
  return (
    <div>
      <div className="p-4 text-[150%] font-bold">Выберите тему</div>

      <div
        className={classNames(
          "mx-auto mb-4 w-[90%] bg-green-800 px-8",
          "rounded-2xl border-2 border-solid border-gray-600",
          "md:min-h-[70vh] 2xl:pt-[7vh]",
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

interface ComponentProps {
  value: string;
}
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
        "mb-6 w-[90%] py-3",
        "md:pb-[3vh]",
        "2xl:mb-[5vh]",
      )}
      onClick={() => navigate("/questionList")}
    >
      {value}
    </div>
  );
};
export default ThemeSelection;
