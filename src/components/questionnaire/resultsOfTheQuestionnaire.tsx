import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Textarea, Input } from "../../common/createFields";
import { TFields } from "../../common/createFields";
import classNames from "classnames";
import { questionSet } from "../../common/dataExample";

const schema = yup.object({
  questionForAnalysis: yup.string(),
  rightAnswerForAnalysis: yup.string(),
  wrongAnswerForAnalysis: yup.string(),
  stringRightAnswerForAnalysis: yup.string(),
  stringWrongAnswerForAnalysis: yup.string(),
});

const ResultsOfTheQuestionnaire = () => {
  const percentageOfCorrectAnswers = "95%";

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
      <div className="p-8 text-[150%] font-bold">
        Поздравляем! <br /> Вы ответили на вопросы анкеты.
      </div>
      <div className="mb-1 text-xl">Процент правильных ответов</div>
      <div className="mb-10 inline-block rounded-full border border-solid border-pink-900 bg-beige px-6 py-4 shadow-lg shadow-pink-900">
        {percentageOfCorrectAnswers}
      </div>
      <div className={classNames("mx-auto w-full bg-gray-200 pb-1")}>
        <div className="mb-2 py-8 text-xl font-bold text-black">
          Анализ неправильных ответов:
        </div>

        {questionSet.map((item, index) => (
          <div
            className={classNames(
              "mx-auto mb-8 w-[95%] bg-green-800",
              "rounded-2xl border-2 border-solid border-gray-600",
              "md:w-[85%]",
            )}
          >
            <div className="mb-2 p-4 text-lg font-bold text-blue-100">{`вопрос №${index + 1}`}</div>
            <div className={classNames("mx-auto mb-8 w-[100%]", "s:w-[90%]")}>
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
                <div className="mr-[-3px] w-[44%]">
                  <Textarea
                    placeholder=""
                    register={register}
                    fieldName="stringRightAnswerForAnalysis"
                    defaultValue="правильный ответ"
                    disabled={true}
                    styles="px-1"
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
                <div className="w-[56%]">
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
          </div>
        ))}
      </div>
    </form>
  );
};
export default ResultsOfTheQuestionnaire;
