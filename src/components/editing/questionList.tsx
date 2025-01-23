import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea, Input } from "../../common/createFields";
import { TFields } from "../../common/createFields";
import classNames from "classnames";

const schema = yup.object({
  questionForEditing: yup.string(),
  answerForEditing1: yup.string(),
  answerForEditing2: yup.string(),
  answerForEditing3: yup.string(),
  CorrectnessOfAnswer: yup.string(),
});

const QuestionList = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-6 text-[150%] font-bold">
        Измените необходимый вопрос
      </div>

      <div className="px-4 pb-4 text-xl">{`Тема: ${theme}`}</div>

      {questionSet.map((item, index) => (
        <div
          className={classNames(
            "mx-auto mb-8 w-[100vw] bg-green-800",
            "border-2 border-solid border-gray-600",
            "s:w-[95vw] s:rounded-2xl",
            "md:w-[65vw]",
            "lg:w-[55vw]",
            "xl:w-[50vw]",
            "2xl:w-[45vw]",
          )}
        >
          <div className="mb-2 p-4 text-lg font-bold text-blue-100">{`вопрос №${index + 1}`}</div>
          <div className="mx-auto mb-8 w-[91%]">
            <div className="mb-3">
              <Textarea
                placeholder={`${Object.keys(item)}`}
                register={register}
                fieldName="questionForEditing"
                defaultValue=""
                disabled={false}
                styles=""
              />
            </div>
            <div
              className={classNames(
                "mx-auto mb-6 flex justify-center",
                "s:ml-7",
              )}
            >
              <div className="mr-[-3px] w-[45%]">
                <Textarea
                  placeholder=""
                  register={register}
                  fieldName="CorrectnessOfAnswer"
                  defaultValue="правильный ответ"
                  disabled={true}
                  styles="px-1"
                />
                <Textarea
                  placeholder=""
                  register={register}
                  fieldName="CorrectnessOfAnswer"
                  defaultValue="неправильный ответ"
                  disabled={true}
                  styles=""
                />
                <Textarea
                  placeholder=""
                  register={register}
                  fieldName="CorrectnessOfAnswer"
                  defaultValue="неправильный ответ"
                  disabled={true}
                  styles=""
                />
              </div>
              <div className="w-[55%]">
                <Textarea
                  placeholder={`${Object.values(item)[0][1]}`}
                  register={register}
                  fieldName="answerForEditing1"
                  defaultValue=""
                  disabled={false}
                  styles=""
                />

                <Textarea
                  placeholder={`${Object.values(item)[0][2]}`}
                  register={register}
                  fieldName="answerForEditing2"
                  defaultValue=""
                  disabled={false}
                  styles=""
                />

                <Textarea
                  placeholder={`${Object.values(item)[0][3]}`}
                  register={register}
                  fieldName="answerForEditing3"
                  defaultValue=""
                  disabled={false}
                  styles=""
                />
              </div>
            </div>
          </div>
          <div className="mx-auto mb-12 flex w-[80%] justify-between px-[4vw]">
            <button
              onClick={() => alert("сохраняем данные в стэйт")}
              className={classNames(
                //общие стили для всех кнопок:
                "mx-auto bg-salmon text-xl font-bold shadow-lg shadow-black",
                "rounded-lg border-2 border-solid border-gray-600",
                "hover:cursor-pointer hover:shadow-lg hover:shadow-pink-900",
                "hover:border hover:border-solid hover:border-pink-900",
                // меняющиеся стили:
                "w-[43%] p-2",
                "xs:text-[4vw]",
                "s:w-[38%] s:text-[3vw]",
                "sm:w-[34%] sm:text-[2.6vw]",
                "md:text-[2.2vw]",
                "lg:text-[1.8vw]",
                "xl:text-[1.5vw]",
                "2xl:text-[1.1vw]",
              )}
            >
              сохранить
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
                "w-[43%] p-2",
                "xs:text-[4vw]",
                "s:w-[38%] s:text-[3vw]",
                "sm:w-[34%] sm:text-[2.6vw]",
                "md:text-[2.2vw]",
                "lg:text-[1.8vw]",
                "xl:text-[1.5vw]",
                "2xl:text-[1.1vw]",
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
export default QuestionList;
