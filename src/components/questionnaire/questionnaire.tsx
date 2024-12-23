import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TFields, Textarea } from "../../common/createFields";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  questionFromSurvey: yup.string(),
});

const Questionnaire = () => {
  const navigate = useNavigate();

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
      <div className="h1">Ответьте на вопросы:</div>

      {questionSet.map((item, index) => (
        <div className="container w-full bg-green-800">
          <div className="h3">{`вопрос №${index + 1}`}</div>
          <div className="mb-3">
            <Textarea
              placeholder=""
              register={register}
              fieldName="questionFromSurvey"
              defaultValue={`${Object.keys(item)}`}
              disabled={true}
              styles=""
            />
          </div>
          <div className="mb-12 ml-[4%] w-[96%]">
            <RadioInput
              value={`${Object.values(item)[0][1]}`}
              name={`radioInputFromSurvey${index}`}
            />
            <RadioInput
              value={`${Object.values(item)[0][2]}`}
              name={`radioInputFromSurvey${index}`}
            />
            <RadioInput
              value={`${Object.values(item)[0][3]}`}
              name={`radioInputFromSurvey${index}`}
            />
          </div>
        </div>
      ))}
      <button
        onClick={() => navigate("/resultsOfTheQuestionnaire")}
        className="btn w-[20vw] p-2 md:w-[20vh]"
      >
        сохранить
      </button>
    </form>
  );
};
export default Questionnaire;

interface MyProps {
  value: string;
  name: string;
}

const RadioInput = ({ value, name }: MyProps) => {
  return (
    <div>
      <label className="mb-4 flex">
        <input type="radio" name={name} className="mt-2 h-8 w-8" />
        <div className="field ml-2 rounded-lg p-2 text-left">{value}</div>
      </label>
    </div>
  );
};
