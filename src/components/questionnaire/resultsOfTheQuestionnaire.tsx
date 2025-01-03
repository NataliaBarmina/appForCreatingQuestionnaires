import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea, Input } from "../../common/createFields";
import { TFields } from "../../common/createFields";

const schema = yup.object({
  questionForAnalysis: yup.string(),
  rightAnswerForAnalysis: yup.string(),
  wrongAnswerForAnalysis: yup.string(),
  stringRightAnswerForAnalysis: yup.string(),
  stringWrongAnswerForAnalysis: yup.string(),
});

const ResultsOfTheQuestionnaire = () => {
  const questionSet = [
    {
      "К какому типу данных преобразует значение функция alert?": {
        1: "к строке",
        2: "к символу",
      },
    },

    {
      "К какому типу данных преобразует значение математические операторы?": {
        1: "к числам",
        2: "undefined",
      },
    },

    {
      " Что нужно использовать, чтобы преобразовать значение к строке?": {
        1: "функцию String(value)",
        2: "оператор +",
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
      <div className="h1">
        Поздравляем! <br /> Вы ответили на вопросы анкеты.
      </div>
      <div className="h2">Процент правильных ответов</div>
      <div className="container w-full bg-gray-200">
        <div className="h3 text-black">Анализ неправильных ответов:</div>

        {questionSet.map((item, index) => (
          <div className="container w-full bg-green-800">
            <div className="h3">{`вопрос №${index + 1}`}</div>
            <div className="mb-3">
              <Textarea
                placeholder={`${Object.keys(item)}`}
                register={register}
                fieldName="questionForAnalysis"
                defaultValue=""
                disabled={true}
                styles=""
              />
            </div>
            <div className="mx-auto mb-6 flex justify-center">
              <div className="mr-[-3px] w-[40%]">
                <Textarea
                  placeholder=""
                  register={register}
                  fieldName="stringRightAnswerForAnalysis"
                  defaultValue="правильный ответ"
                  disabled={true}
                  styles=""
                />
                <Textarea
                  placeholder=""
                  register={register}
                  fieldName="stringWrongAnswerForAnalysis"
                  defaultValue="ваш ответ"
                  disabled={true}
                  styles=""
                />
              </div>
              <div className="w-[59%]">
                <Textarea
                  placeholder={`${Object.values(item)[0][1]}`}
                  register={register}
                  fieldName="rightAnswerForAnalysis"
                  defaultValue=""
                  disabled={true}
                  styles=""
                />

                <Textarea
                  placeholder={`${Object.values(item)[0][2]}`}
                  register={register}
                  fieldName="wrongAnswerForAnalysis"
                  defaultValue=""
                  disabled={true}
                  styles=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};
export default ResultsOfTheQuestionnaire;
