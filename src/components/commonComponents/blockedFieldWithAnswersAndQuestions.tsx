import { BlockedField } from "@commonComponents/createFields";
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
  return (
    <div>
      <BlockedField id="" value={question} styles="mb-6" />
      <div className="mx-auto w-[90%]">
        <Label className="text-white" htmlFor="correctAnswer">
          {t("formLabel.correctAnswer")}
        </Label>
        <BlockedField
          styles="mb-6"
          value={correctAnswer}
          id={"correctAnswer"}
        />
        <Label className="text-white" htmlFor="wrongAnswer1">
          {t("formLabel.wrongAnswer")}
        </Label>
        <BlockedField styles="mb-8" value={wrongAnswer1} id={"wrongAnswer1"} />
        <Label className="text-white" htmlFor="wrongAnswer2">
          {t("formLabel.wrongAnswer")}
        </Label>
        <BlockedField styles="mb-5" value={wrongAnswer2} id={"wrongAnswer2"} />
      </div>
    </div>
  );
};
export default BlockedFieldWithAnswersAndQuestions;
