import { useTranslation } from "react-i18next";
import { Label } from "@shared/ui";
import { greenContainerStyles, centeredContentStyles } from "./styles";

export const QuestionResultItem = ({
  question,
  answer_1,
  answer_2,
}: {
  question: string;
  answer_1: string;
  answer_2: string;
}) => {
  const { t } = useTranslation();

  const questionResult = [
    { id: "question", text: question, label: "formLabel.question" },
    { id: "correctAnswer", text: answer_1, label: "formLabel.correctAnswer" },
    { id: "yourAnswer", text: answer_2, label: "formLabel.yourAnswer" },
  ];

  return (
    <div>
      <div className={greenContainerStyles}>
        <div className={centeredContentStyles}>
          {questionResult.map((item) => (
            <div>
              <Label className="text-white" htmlFor={item.id}>
                {t(item.label)}
              </Label>
              <p
                id={item.id}
                lang="ru"
                className="textarea-styles mx-auto mb-4 hyphens-auto text-[0.9rem]"
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
