import { useTranslation } from "react-i18next";
import { percentageOfCorrectAnswersStyles } from "./styles";

const HeadersBlock = () => {
  const numberOfQuestionsInQuestionnaire = 15;
  const numberOfCorrectAnswers = 8;
  const numberOfWrongAnswers = 7;
  const percentageOfCorrectAnswers = Math.round(
    (numberOfCorrectAnswers / numberOfQuestionsInQuestionnaire) * 100,
  );

  const { t } = useTranslation();
  return (
    <div>
      <div className="p-8 text-[150%] font-bold">
        {t("header.congratulation")} <br /> {t("header.completedSurvey")}
      </div>

      <div className="mb-1 text-lg font-bold">
        {t("header.correctPercentage")}
      </div>
      <div className={percentageOfCorrectAnswersStyles}>
        {percentageOfCorrectAnswers}%
      </div>
      <div className="text-lg">
        {t("header.correctAnswers", { count: numberOfCorrectAnswers })}
      </div>
      <div className="mb-8 text-lg">
        {t("header.wrongAnswers", { count: numberOfWrongAnswers })}
      </div>
    </div>
  );
};
export default HeadersBlock;
