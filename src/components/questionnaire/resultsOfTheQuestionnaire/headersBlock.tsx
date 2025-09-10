import { useTranslation } from "react-i18next";
import { percentageOfCorrectAnswersStyles } from "./styles";

type THeadersBlock = {
  wrongAnswersCount: number;
  questionsCount: number;
};

const HeadersBlock = ({ wrongAnswersCount, questionsCount }: THeadersBlock) => {
  const correctAnswersCount = questionsCount - wrongAnswersCount;
  const percentageOfCorrectAnswers = Math.round(
    (correctAnswersCount / questionsCount) * 100,
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
        {t("header.correctAnswers", { count: correctAnswersCount })}
      </div>
      <div className="mb-8 text-lg">
        {t("header.wrongAnswers", { count: wrongAnswersCount })}
      </div>
    </div>
  );
};
export default HeadersBlock;
