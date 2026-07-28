import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { QuestionResultItem } from "./question-item";
import { TQuestion } from "../model/types";
import {
  grayContainerStyles,
  wrongAnswersAnalysisHeader,
  percentageOfCorrectAnswersStyles,
} from "./styles";

export const ResultQuestionnaireContent = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0); // Скролл к верху при загрузке компонента
  }, []);

  const location = useLocation();
  const { questionsList = [], answers = [] } = location.state || [];

  const questionsCount = questionsList.length;

  const wrongAnswersCount = questionsList.reduce((acc: number, item: TQuestion, index: number) => {
    return item.answer_1 !== answers[index] ? acc + 1 : acc;
  }, 0);

  const correctAnswersCount = questionsCount - wrongAnswersCount;
  const percentageOfCorrectAnswers = Math.round((correctAnswersCount / questionsCount) * 100);

  return (
    <div>
      <h3 className="pb-1 pt-6 text-lg font-bold">{t("header.correctPercentage")}</h3>
      <p className={percentageOfCorrectAnswersStyles}>{percentageOfCorrectAnswers}%</p>
      <h3 className="text-lg">{t("header.correctAnswers", { count: correctAnswersCount })}</h3>
      <h3 className="mb-8 text-lg">{t("header.wrongAnswers", { count: wrongAnswersCount })}</h3>

      <div className={grayContainerStyles}>
        <div className={wrongAnswersAnalysisHeader}>{t("header.wrongAnswersAnalysis")}</div>

        {questionsList.map((item: TQuestion, index: number) => {
          const correctAnswer = item.answer_1;
          const userAnswer = answers[index];

          if (correctAnswer === userAnswer) return null;

          return (
            <QuestionResultItem
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
