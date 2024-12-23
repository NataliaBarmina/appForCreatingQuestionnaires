import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea, Input } from "../../common/createFields";
import { TFields } from "../../common/createFields";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RoundLabel } from "../../common/roundLabel";

const schema = yup.object({
  questionExample: yup.string(),
  answerExample1: yup.string(),
  answerExample2: yup.string(),
  answerExample3: yup.string(),
});

const QuestionsCreatedByAI = () => {
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
      <div className="h1">Вопросы созданные нейросетью</div>

      <div className="h2">{`Тема: ${theme}`}</div>

      {questionSet.map((item, index) => (
        <div className="container bg-green-800">
          <div className="h3">{`вопрос №${index + 1}`}</div>

          <div className="mb-8">
            <Textarea
              placeholder=""
              register={register}
              fieldName="questionExample"
              defaultValue={`${Object.keys(item)}`}
              disabled={true}
              styles=""
            />
            <div className="ml-9 flex">
              <div className="w-[11%]">
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
          <div className="mb-12 flex w-full justify-between">
            <button
              onClick={() => alert("сохраняем данные в стэйт")}
              className="btn w-[20vw] p-2 md:w-[17vh] md:text-[2vh] lg:w-[20vh] lg:text-[2.5vh] 2xl:w-[23vh] 2xl:text-[2.6vh]"
            >
              сохранить
            </button>
            <button
              onClick={() => alert("disabled=false")}
              className="btn w-[20vw] p-2 md:w-[18vh] md:text-[2vh] lg:w-[21vh] lg:text-[2.5vh] 2xl:w-[23vh] 2xl:text-[2.6vh]"
            >
              редактировать
            </button>
            <button
              onClick={() => alert("удаляем данные из стэйта")}
              className="btn w-[20vw] p-2 md:w-[17vh] md:text-[2vh] lg:w-[20vh] lg:text-[2.5vh] 2xl:w-[23vh] 2xl:text-[2.6vh]"
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
