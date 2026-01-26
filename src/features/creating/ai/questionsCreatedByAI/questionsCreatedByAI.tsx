import BlockedFieldWithAnswersAndQuestions from "@shared/createFields/blockedFieldWithAnswersAndQuestions";
import { useTranslation } from "react-i18next";
import QuestionActions from "./questionActions";
import HeadersBlock from "@shared/ui/headersBlock";
import { cn } from "@lib/utils";
import { TQuestion } from "@shared/types/commonTypes";

//todo: потом удалить
const questionsList: TQuestion[] = [
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

const greenContainerStyles = cn(
  "mx-auto mb-8 w-[100vw] bg-green-800",
  "xs:px-0",
  "s:w-[90vw] s:rounded-2xl s:px-8",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]"
);

const QuestionsCreatedByAI = () => {
  const { t } = useTranslation();
  return (
    <div className="pb-1">
      <HeadersBlock
        questionsGeneratedByAIHeader={t("header.questionsGeneratedByAI")}
        courseHeader={t("header.course")}
        themeHeader={t("header.theme")}
      />

      {questionsList.map((item, index) => (
        <div key={index} className={greenContainerStyles}>
          <div className={"py-6 text-lg font-bold text-blue-100"}>
            {t("header.questionNumber")} {index + 1}
          </div>

          <div className="mx-auto w-[95%]">
            <BlockedFieldWithAnswersAndQuestions
              question={item.question}
              correctAnswer={item.answer_1}
              wrongAnswer1={item.answer_2}
              wrongAnswer2={item.answer_3}
            />
          </div>
          <QuestionActions
            question={item.question}
            correctAnswer={item.answer_1}
            wrongAnswer1={item.answer_2}
            wrongAnswer2={item.answer_3}
          />
        </div>
      ))}
    </div>
  );
};
export default QuestionsCreatedByAI;
