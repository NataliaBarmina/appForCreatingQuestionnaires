import { useTranslation } from "react-i18next";
import { HeadersBlock } from "./headersBlock";
import { grayContainerStyles, wrongAnswersAnalysisHeader } from "./styles";
import { QuestionItem } from "./questionItem";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TQuestion } from "@shared/types/commonTypes";

export const ResultsOfTheQuestionnaire = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0); // Скролл к верху при загрузке компонента
  }, []);

  const location = useLocation();
  const { questionsList = [], answers = [] } = location.state || [];

  const wrongAnswersCount = questionsList.reduce((acc: number, item: TQuestion, index: number) => {
    return item.answer_1 !== answers[index] ? acc + 1 : acc;
  }, 0);

  const questionsCount = questionsList.length;

  return (
    <div>
      <HeadersBlock wrongAnswersCount={wrongAnswersCount} questionsCount={questionsCount} />

      <div className={grayContainerStyles}>
        <div className={wrongAnswersAnalysisHeader}>{t("header.wrongAnswersAnalysis")}</div>

        {questionsList.map((item: TQuestion, index: number) => {
          const correctAnswer = item.answer_1;
          const userAnswer = answers[index];

          if (correctAnswer === userAnswer) return null;

          return (
            <QuestionItem
              key={index}
              index={index}
              question={item.question}
              answer_1={correctAnswer}
              answer_2={userAnswer}
              questionNumber={t("header.questionNumber")}
              correctAnswer={t("formLabel.correctAnswer")}
              yourAnswer={t("formLabel.yourAnswer")}
            />
          );
        })}
      </div>
    </div>
  );
};
