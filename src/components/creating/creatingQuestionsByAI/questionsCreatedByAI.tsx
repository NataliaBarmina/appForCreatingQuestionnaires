import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea, Input } from "../../../common/createFields";
import { TFields } from "../../../common/createFields";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RoundLabel } from "../../../common/roundLabel";
import classNames from "classnames";

const schema = yup.object({
  questionExample: yup.string(),
  answerExample1: yup.string(),
  answerExample2: yup.string(),
  answerExample3: yup.string(),
});

const QuestionsCreatedByAI = () => {
  // должно приходить в пропсах название курса
  const nameOfCourse = "какой-то курс";
  const theme = "ПРЕОБРАЗОВАНИЕ ТИПОВ";

  const questionSet = [
    {
      "К какому типу данных преобразует значение функция alert?": {
        1: "к строке",
        2: "к символу",
        3: "к числу",
      },
    },

    {
      "К какому типу данных преобразует значение математические операторы?": {
        1: "к числам",
        2: "undefined",
        3: "к нулю",
      },
    },

    {
      " Что нужно использовать, чтобы преобразовать значение к строке?": {
        1: "функцию String(value)",
        2: "оператор +",
        3: "заключить в кавычки",
      },
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TFields> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-1">
      <div className="p-4 text-[150%] font-bold">
        Вопросы созданные нейросетью
      </div>

      <div className="p-4 text-xl font-bold">Курс {nameOfCourse}</div>

      <div className="mb-4 text-xl">{`Тема: ${theme}`}</div>

      {questionSet.map((item, index) => (
        <div
          className={classNames(
            "mx-auto mb-8 bg-green-800",
            "border-2 border-solid border-gray-600",
            "xs:w-[100vw]",
            "sm:w-[95vw] sm:rounded-2xl",
            "md:w-[65vw]",
            "lg:w-[55vw]",
            "xl:w-[50vw]",
            "2xl:w-[45vw]",
          )}
        >
          <div className="mb-2 p-4 text-lg font-bold text-blue-100">{`вопрос №${index + 1}`}</div>
          <div className="mx-auto mb-8 w-[90%]">
            <Textarea
              placeholder=""
              register={register}
              fieldName="questionExample"
              defaultValue={`${Object.keys(item)}`}
              disabled={true}
              styles=""
            />
            <div className="ml-4 flex">
              <div className="mr-4 w-[10%]">
                <RoundLabel value="а" />
                <RoundLabel value="б" />
                <RoundLabel value="в" />
              </div>
              <div className="w-[89%]">
                <Input
                  type="text"
                  placeholder=""
                  register={register}
                  fieldName="answerExample1"
                  defaultValue={`${Object.values(item)[0][1]}`}
                  disabled={true}
                  styles=""
                />
                <Input
                  type="text"
                  placeholder=""
                  register={register}
                  fieldName="answerExample2"
                  defaultValue={`${Object.values(item)[0][2]}`}
                  disabled={true}
                  styles=""
                />
                <Input
                  type="text"
                  placeholder=""
                  register={register}
                  fieldName="answerExample3"
                  defaultValue={`${Object.values(item)[0][3]}`}
                  disabled={true}
                  styles=""
                />
              </div>
            </div>
          </div>
          <div className="mb-8 flex w-full justify-evenly">
            <button
              onClick={() => alert("сохраняем данные в стэйт")}
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
              сохранить
            </button>
            <button
              onClick={() => alert("disabled=false")}
              className={classNames(
                //общие стили для всех кнопок:
                "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
                "rounded-lg border-2 border-solid border-gray-600",
                "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
                "hover:border hover:border-solid hover:border-pink-900",
                // меняющиеся стили:
                "xs:w-[30vw] xs:py-1 xs:text-[3.5vw]",
                "s:w-[22vw] s:text-[2.5vw]",
                "md:w-[15vw] md:text-[1.8vw]",
                "lg:w-[13vw] lg:text-[1.5vw]",
                "xl:w-[10vw] xl:text-[1.2vw]",
                "2xl:w-[9vw] 2xl:text-[1vw]",
              )}
            >
              редактировать
            </button>
            <button
              onClick={() => alert("удаляем данные из стэйта")}
              className={classNames(
                //общие стили для всех кнопок:
                "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
                "rounded-lg border-2 border-solid border-gray-600",
                "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
                "hover:border hover:border-solid hover:border-pink-900",
                // меняющиеся стили:
                "xs:w-[29vw] xs:py-1 xs:text-[3.5vw]",
                "s:w-[20vw] s:text-[2.5vw]",
                "md:w-[15vw] md:text-[1.8vw]",
                "lg:w-[13vw] lg:text-[1.5vw]",
                "xl:w-[10vw] xl:text-[1.2vw]",
                "2xl:w-[8vw] 2xl:text-[1vw]",
              )}
            >
              удалить
            </button>
          </div>
        </div>
      ))}
    </form>
  );
};
export default QuestionsCreatedByAI;
