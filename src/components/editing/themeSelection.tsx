import { useNavigate } from "react-router-dom";

const ThemeSelection = () => {
  return (
    <div>
      <div className="h1">Выберите тему</div>

      <div className="container bg-green-800 pt-8 md:min-h-[70vh] 2xl:pt-[7vh]">
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
      className="btn mb-6 w-[90%] py-3 md:pb-[3vh] 2xl:mb-[5vh]"
      onClick={() => navigate("/questionList")}
    >
      {value}
    </div>
  );
};
export default ThemeSelection;
