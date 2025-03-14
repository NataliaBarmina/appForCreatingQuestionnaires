import classNames from "classnames";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div
      className={classNames(
        "mx-auto border-2 border-solid border-black text-center",
        "md:min-h-dvh md:bg-black",
        "lg:w-[85%]",
        "xl:w-[80%]",
        "2xl:w-[70%]",
      )}
    >
      {/* чтобы текст не прятался под зеленую полосу вводим доп контейнер: */}
      <div className="md:h-[12vh] md:w-[100%]">
        <div
          className={classNames(
            "z-50 mb-2 h-[12vh] w-[100%]",
            "bg-green-800 shadow-lg shadow-pink-600",
            "md:fixed md:left-0 md:top-0",
            "lg:left-[7.5vw] lg:w-[85%]",
            "xl:left-[10vw] xl:w-[80%]",
            "2xl:left-[14.9vw] 2xl:w-[70%]",
          )}
        ></div>
      </div>
      <div
        className={classNames(
          "mx-auto block w-screen align-top",
          "md:inline-block md:min-h-[86vh] md:w-[30%]",
          "lg:pt-[13vh]",
        )}
      >
        <div
          className={classNames(
            "md:fixed md:left-0 md:top-[30vh] md:w-[30%]",
            "lg:left-[7.5vw] lg:w-[25.5vw]",
            "xl:left-[10vw] xl:w-[24vw]",
            "2xl:left-[15vw] 2xl:w-[20.5vw]",
          )}
        >
          <Links to="/creating" content="Создание вопросов" />
          <Links to="/courseSelection" content="Редактирование вопросов" />
          <Links to="/questionnaire" content="Проведение анкетирования" />
        </div>
      </div>
      <div
        className={classNames(
          "mx-auto w-screen bg-blue-200 text-center",
          "md:inline-block md:min-h-[86vh] md:w-[70%]",
        )}
      >
        <Outlet />
      </div>
    </div>
  );
};
export default App;

interface ComponentProps {
  to: string;
  content: string;
}
export const Links = ({ to, content }: ComponentProps) => {
  return (
    <Link
      to={to}
      className={classNames(
        "mb-2 block w-[100%] bg-black p-4",
        "text-center text-[140%] text-white",
        "shadow-lg shadow-pink-600",
        "hover:text-pink-900 focus:text-purple-700",
        "md:mb-[8vh] md:shadow-none lg:mb-[11vh]",
      )}
    >
      {content}
    </Link>
  );
};
