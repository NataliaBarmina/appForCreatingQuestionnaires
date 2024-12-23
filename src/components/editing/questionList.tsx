import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea, Input } from "../../common/createFields";
import { TFields } from "../../common/createFields";

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
      <div className="h1">Измените необходимый вопрос</div>

      <div className="h2">{`Тема: ${theme}`}</div>

      {questionSet.map((item, index) => (
        <div className="container w-full bg-green-800">
          <div className="h3">{`вопрос №${index + 1}`}</div>
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
          <div className="mx-auto mb-6 ml-9 flex justify-center">
            <div className="mr-[-3px] w-[40%]">
              <Textarea
                placeholder=""
                register={register}
                fieldName="CorrectnessOfAnswer"
                defaultValue="правильный ответ"
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
              <Textarea
                placeholder=""
                register={register}
                fieldName="CorrectnessOfAnswer"
                defaultValue="неправильный ответ"
                disabled={true}
                styles=""
              />
            </div>
            <div className="w-[60%]">
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
          <div className="mx-auto mb-12 flex w-[80%] justify-between px-[4vw]">
            <button
              onClick={() => alert("сохраняем данные в стэйт")}
              className="btn w-[40%] p-2"
            >
              сохранить
            </button>

            <button
              onClick={() => alert("удаляем данные из стэйта")}
              className="btn w-[40%] p-2"
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
