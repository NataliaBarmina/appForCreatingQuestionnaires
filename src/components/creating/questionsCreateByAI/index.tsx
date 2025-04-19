import BlockedFieldWithAnswersAndQuestions from "@commonComponents/blockedFieldWithAnswersAndQuestions";
import { useTranslation } from "react-i18next";
import QuestionActions from "./questionActions";
import HeadersBlock from "../../commonComponents/headersBlock";
import { cn } from "@lib/utils";

import { questionsList } from "@common/dataExample"; //TODO: получаем из какого-то временного хранилища  массив с объектами вопросов

const greenContainerStyles = cn(
  "mx-auto mb-8 w-[100vw] bg-green-800",
  "xs:px-0",
  "s:w-[90vw] s:rounded-2xl s:px-8",
  "md:w-[65vw]",
  "lg:w-[55vw]",
  "xl:w-[50vw]",
  "2xl:w-[45vw]",
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
