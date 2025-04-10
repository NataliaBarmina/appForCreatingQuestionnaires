import BlockedFieldWithAnswersAndQuestions from "@commonComponents/blockedFieldWithAnswersAndQuestions";
import { useTranslation } from "react-i18next";
import { greenContainerStyles, questionNumberHeaderStyles } from "./styles";
import QuestionActions from "./questionActions";
import Headers from "./headers";

import { questionsList } from "@common/dataExample"; //TODO: получаем из какого-то временного хранилища  массив с объектами вопросов

const QuestionsCreatedByAI = () => {
  const { t } = useTranslation();
  return (
    <div className="pb-1">
      <Headers
        questionsGeneratedByAIHeader={t("header.questionsGeneratedByAI")}
        courseHeader={t("header.course")}
      />

      {questionsList.map((item, index) => (
        <div key={index} className={greenContainerStyles}>
          <div className={questionNumberHeaderStyles}>
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
