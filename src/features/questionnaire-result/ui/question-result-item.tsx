import { useTranslation } from "react-i18next";
import { Label } from "@shared/ui";
import { greenContainerStyles, questionNumberHeader, centeredContentStyles } from "./styles";

export const QuestionResultItem = ({
  index,
  question,
  answer_1,
  answer_2,
}: {
  index: number;
  question: string;
  answer_1: string;
  answer_2: string;
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={greenContainerStyles}>
        <p className={questionNumberHeader}>
          {t("header.questionNumber")}
          {index + 1}
        </p>

        <div className={centeredContentStyles}>
          <p className="textarea-styles mb-6">{question}</p>

          <div className={centeredContentStyles}>
            <Label className="text-white" htmlFor="correctAnswer">
              {t("formLabel.correctAnswer")}
            </Label>
            <p id={"correctAnswer"} className="textarea-styles mb-6">
              {answer_1}
            </p>

            <Label className="text-white" htmlFor="yourAnswer">
              {t("formLabel.yourAnswer")}
            </Label>
            <p id={"yourAnswer"} className="textarea-styles mb-6">
              {answer_2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
