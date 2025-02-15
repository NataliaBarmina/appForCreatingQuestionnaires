import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const Creating = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-6">
      <div className="p-8 text-[150%] font-bold">Создание вопросов</div>
      <div
        className={classNames(
          "mx-auto rounded-full bg-green-800",
          "h-[80vw] w-[80vw]",
          "s:h-[65vw] s:w-[65vw]",
          "md:landscape:h-[60vw] md:landscape:w-[60vw]",
          "lg:landscape:h-[48vw] lg:landscape:w-[48vw]",
          "xl:landscape:h-[40vw] xl:landscape:w-[40vw]",
          "xl:landscape:h-[35vw] xl:landscape:w-[35vw]",
        )}
      >
        <div className="flex h-[100%] w-[100%] flex-col justify-evenly">
          <button
            onClick={() => navigate("/coursesSelectionWithShadcnUI")}
            className={classNames(
              //общие стили для всех кнопок:
              "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
              "rounded-lg border-2 border-solid border-gray-600",
              "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
              "hover:border hover:border-solid hover:border-pink-900",
              // меняющиеся стили:
              "block w-[45vw] py-2 xs:text-[5vw]",
              "s:w-[35vw] s:py-4 s:text-[3.5vw]",
              "md:landscape:w-[30vw] md:landscape:text-[3vw]",
              "lg:landscape:w-[25vw] lg:landscape:text-[2.5vw]",
              "xl:landscape:w-[20vw] xl:landscape:text-[2vw]",
              "2xl:landscape:w-[16vw] 2xl:landscape:text-[1.7vw]",
            )}
          >
            нейросетью
          </button>
          <button
            onClick={() => navigate("/coursesSelectionWithMaterialUI")}
            className={classNames(
              //общие стили для всех кнопок:
              "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
              "rounded-lg border-2 border-solid border-gray-600",
              "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
              "hover:border hover:border-solid hover:border-pink-900",
              // меняющиеся стили:
              "block w-[45vw] py-2 xs:text-[5vw]",
              "s:w-[35vw] s:py-4 s:text-[3.5vw]",
              "md:landscape:w-[30vw] md:landscape:text-[3vw]",
              "lg:landscape:w-[25vw] lg:landscape:text-[2.5vw]",
              "xl:landscape:w-[20vw] xl:landscape:text-[2vw]",
              "2xl:landscape:w-[16vw] 2xl:landscape:text-[1.7vw]",
            )}
          >
            самостоятельно
          </button>
        </div>
      </div>
    </div>
  );
};
export default Creating;
//
