import { useTranslation } from "react-i18next";

import { TQuestionList } from "@entities/question";
import { QuestionResultItem } from "./question-result-item";
import { grayContainerStyles, wrongAnswersAnalysisHeader } from "./styles";

type TQuestionnaireResult = {
  isWrongAnswers: boolean;
  answers: string[];
  questionsList: TQuestionList[];
};

export const QuestionnaireResult = ({
  isWrongAnswers,
  questionsList,
  answers,
}: TQuestionnaireResult) => {
  const { t } = useTranslation();

  return (
    <div>
      {isWrongAnswers && (
        <div className={grayContainerStyles}>
          <div className={wrongAnswersAnalysisHeader}>{t("survey.wrongAnswersAnalysis")}</div>

          {questionsList.map((item, index: number) => {
            const correctAnswer = item.answer_1;
            const userAnswer = answers[index];

            if (correctAnswer === userAnswer) return null;

            return (
              <QuestionResultItem
                key={index}
                question={item.question}
                answer_1={correctAnswer}
                answer_2={userAnswer}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
