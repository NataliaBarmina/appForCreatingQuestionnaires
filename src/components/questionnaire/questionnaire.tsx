import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TFields } from "../../common/createFields";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { questionSet } from "../../common/dataExample";
import StaticFieldForQuestionsAndAnswers from "../commonComponents/staticFieldForQuestionsAndAnswers";
import Button from "../commonComponents/commonButtons";

const schema = yup.object({
  questionFromSurvey: yup.string(),
});

const Questionnaire = () => {
  const navigate = useNavigate();

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
    <form onSubmit={handleSubmit(onSubmit)} className="pb-10">
      <div className="px-4 py-7 text-[150%] font-bold">
        Ответьте на вопросы:
      </div>

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
          <div className="mx-auto mb-8 w-[90%]">
            <div className="mb-3">
              <StaticFieldForQuestionsAndAnswers
                styles=""
                value={`${Object.keys(item)}`}
                id=""
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
        </div>
      ))}
      <Button
        buttonName="сохранить"
        size="middle"
        onclick={() => navigate("/resultsOfTheQuestionnaire")}
      />
    </form>
  );
};
export default Questionnaire;

type MyProps = {
  value: string;
  name: string;
};

const RadioInput = ({ value, name }: MyProps) => {
  return (
    <div>
      <label className="mb-4 flex">
        <input type="radio" name={name} className="mt-2 h-8 w-8" />
        <div
          className={classNames(
            "w-[100%] bg-blue-100",
            "border-4 border-solid border-blue-200",
            "placeholder:text-purple-900",
            "ml-2 rounded-lg p-2 text-left",
          )}
        >
          {value}
        </div>
      </label>
    </div>
  );
};
