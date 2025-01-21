// import TailwindSample from "../sample/tailwindSample";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const Creating = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="p-4 text-[150%] font-bold">Создание вопросов</div>
      <div
        className={classNames(
          "mx-auto mb-4 rounded-full bg-green-800",
          "h-[80vw] w-[80vw] py-[18vw]",
          "s:h-[65vw] s:w-[65vw] s:py-[16vw]",
          "md:h-[65vh] md:w-[65vh] md:py-[15vh]",
        )}
      >
        <button
          onClick={() => navigate("/formForCreatingQuestionsByAI")}
          className={classNames(
            //общие стили для всех кнопок:
            "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
            "rounded-lg border-2 border-solid border-gray-600",
            "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
            "hover:border hover:border-solid hover:border-pink-900",
            // меняющиеся стили:
            "mb-[15vw] py-4",
            "block w-[45vw] py-2 text-[5vw]",
            "s:w-[35vw] s:text-[3.5vw]",
            "md:mb-[13vh] md:w-[30vh] md:text-[3vh]",
          )}
        >
          нейросетью
        </button>
        <button
          onClick={() => navigate("/formForCreatingQuestionsYourself")}
          className={classNames(
            //общие стили для всех кнопок:
            "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
            "rounded-lg border-2 border-solid border-gray-600",
            "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
            "hover:border hover:border-solid hover:border-pink-900",
            // меняющиеся стили:
            "py-4",
            "block w-[45vw] py-2 text-[5vw]",
            "s:w-[35vw] s:text-[3.5vw]",
            "md:mb-[13vh] md:w-[30vh] md:text-[3vh]",
          )}
        >
          самостоятельно
        </button>
      </div>
      {/* <TailwindSample /> */}
    </div>
  );
};
export default Creating;
//
