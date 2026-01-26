import Button from "@shared/ui/buttons";
import { useTranslation } from "react-i18next";
import { useFormConfig } from "./useFormConfig";
import QuestionItem from "./questionItem";
import { useSelector } from "react-redux";
// import { getQuestionnaire } from "@store/selectors";
import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TQuestion } from "@shared/types/commonTypes";

//todo: потом удалить
export const questionsList: TQuestion[] = [
  {
    question: "Свойство display какое значение принимает?",
    answer_1: "flex",
    answer_2: "relative",
    answer_3: "justify-content",
  },
  {
    question: "Что такое инлайн - стили и какой они имеют приоритет?",
    answer_1: "стили которые пишутся прямо в HTML  и имеют самый высокий приоритет",
    answer_2: "стили которые пишутся  в CSS  и имеют самый высокий приоритет",
    answer_3: "стили которые пишутся прямо в HTML  и имеют низкий приоритет",
  },

  {
    question: "За что отвечает z- index?",
    answer_1: "за расположение элементов по оси z",
    answer_2: "за расположение элементов по оси x",
    answer_3: "за расположение элементов по оси y",
  },
  {
    question: "Какие значения принимает свойство position?",
    answer_1: "relative",
    answer_2: "flex",
    answer_3: "justify-content",
  },
];

const FormQuestionnaire = () => {
  const { t } = useTranslation();

  // const questionsList = useSelector(getQuestionnaire);
  const navigate = useNavigate();

  const methods = useFormConfig(questionsList, navigate);

  const { handleSubmit, onSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-10">
        <div className="px-4 py-7 text-[150%] font-bold">{t("header.answerToQuestion")}</div>

        {questionsList.map((item, index) => (
          <QuestionItem
            key={index}
            answer_1={item.answer_1}
            answer_2={item.answer_2}
            answer_3={item.answer_3}
            index={index}
            question={item.question}
            questionNumber={t("header.questionNumber")}
          />
        ))}

        <Button type="submit" buttonLabel={t("buttonLabel.save")} size="middle" />
      </form>
    </FormProvider>
  );
};
export default FormQuestionnaire;
