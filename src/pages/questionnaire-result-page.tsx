import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { cn } from "@shared/lib";
import { QuestionnaireResult } from "@features/questionnaire-result";
import { TQuestionList } from "@entities/question";

export const percentageOfCorrectAnswersStyles = cn(
  "mb-3 px-6 py-4",
  "bg-beige  inline-block rounded-full",
  "border border-solid border-pink-900",
  "shadow-lg shadow-pink-900"
);

export const QuestionnaireResultPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0); // Скролл к верху при загрузке компонента
  }, []);

  const location = useLocation();
  const { questions: questionsList, answers } = location.state ?? {};

  const questionsCount = questionsList?.length;

  const wrongAnswersCount = questionsList?.reduce(
    (acc: number, item: TQuestionList, index: number) => {
      return item.answer_1 !== answers[index] ? acc + 1 : acc;
    },
    0
  );

  const isWrongAnswers = wrongAnswersCount > 0;

  const correctAnswersCount = questionsCount - wrongAnswersCount;
  const percentageCorrectAnswers = !isWrongAnswers
    ? 0
    : Math.round((correctAnswersCount / questionsCount) * 100);

  return (
    <div>
      <h1>
        {t("survey.congratulation")} <br /> {t("survey.completedSurvey")}
      </h1>
      <h3 className="pb-1 pt-6 text-lg font-bold">{t("survey.correctPercentage")}</h3>
      <p className={percentageOfCorrectAnswersStyles}>{percentageCorrectAnswers}%</p>
      <h3 className="text-lg">{t("survey.correctAnswers", { count: correctAnswersCount })}</h3>
      <h3 className="mb-8 text-lg">{t("survey.wrongAnswers", { count: wrongAnswersCount })}</h3>

      <QuestionnaireResult
        isWrongAnswers={isWrongAnswers}
        questionsList={questionsList}
        answers={answers}
      />
    </div>
  );
};
