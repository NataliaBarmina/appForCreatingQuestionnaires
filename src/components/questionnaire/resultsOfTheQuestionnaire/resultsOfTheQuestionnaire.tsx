import { questionsList } from "@common/dataExample";
import { useTranslation } from "react-i18next";
import HeadersBlock from "./headersBlock";
import { grayContainerStyles, wrongAnswersAnalysisHeader } from "./styles";
import QuestionItem from "./questionItem";

//todo: получить массив через пропсы из FormQuestionnaire и массив ответов и сравнить их

const ResultsOfTheQuestionnaire = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeadersBlock />

      <div className={grayContainerStyles}>
        <div className={wrongAnswersAnalysisHeader}>
          {t("header.wrongAnswersAnalysis")}
        </div>

        {questionsList.map((item, index) => (
          <QuestionItem
            index={index}
            question={item.question}
            answer_1={item.answer_1}
            answer_2={item.answer_2}
            questionNumber={t("header.questionNumber")}
            correctAnswer={t("formLabel.correctAnswer")}
            yourAnswer={t("formLabel.yourAnswer")}
          />
        ))}
      </div>
    </div>
  );
};
export default ResultsOfTheQuestionnaire;
