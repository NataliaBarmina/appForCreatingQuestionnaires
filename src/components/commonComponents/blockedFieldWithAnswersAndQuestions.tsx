import BlockedField from "@commonComponents/blockedField";
import { Label } from "@ui/label";
import { useTranslation } from "react-i18next";

type MyProps = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
};

const BlockedFieldWithAnswersAndQuestions = ({
  question,
  correctAnswer,
  wrongAnswer1,
  wrongAnswer2,
}: MyProps) => {
  const { t } = useTranslation();

  const answerFields = [
    {
      id: "correctAnswer",
      value: correctAnswer,
      labelKey: t("formLabel.correctAnswer"),
      styles: "mb-6",
    },
    {
      id: wrongAnswer1,
      value: wrongAnswer1,
      labelKey: t("formLabel.wrongAnswer"),
      styles: "mb-8",
    },
    {
      id: wrongAnswer2,
      value: wrongAnswer2,
      labelKey: t("formLabel.wrongAnswer"),
      styles: "mb-5",
    },
  ];

  return (
    <div>
      <BlockedField id="" value={question} styles="mb-6" />

      <div className="mx-auto w-[90%]">
        {answerFields.map(({ id, value, labelKey, styles }) => (
          <div key={id}>
            <Label className="text-white" htmlFor={id}>
              {labelKey}
            </Label>
            <BlockedField id={id} value={value} styles={styles}></BlockedField>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlockedFieldWithAnswersAndQuestions;
