import { useTranslation } from "react-i18next";
import { Alert } from "@shared/ui";
import { Button } from "@shared/ui";

export type TQuestionFormActions = {
  onFormReset: () => void;
  handleCreateManualQuestion?: () => void;
  isFormValid: boolean;
  isSubmitting: boolean;
};

export const QuestionFormActions = ({
  isFormValid,
  isSubmitting,
  onFormReset,
  handleCreateManualQuestion,
}: TQuestionFormActions) => {
  const { t } = useTranslation();
  return (
    <div className="mb-8 flex w-full justify-evenly pt-14">
      <Alert
        alertDialogTitle={t("alert.title")}
        alertDialogDescription={t("alert.checkQuestions")}
        alertDialogAction={t("alert.continueEditing")}
        alertDialogCancel={t("alert.saveQuestion")}
        buttonLabel={t("buttonLabel.save")}
        type="button"
        size="middle"
        handleCreateManualQuestion={handleCreateManualQuestion}
        isFormValid={isFormValid} //будем показывать Alert только если форма валидна
        isSubmitting={isSubmitting} //будем показывать Alert только произошло событие submit
      />

      <Button
        buttonLabel={t("buttonLabel.reset")}
        size="middle"
        type="reset"
        onClick={() => onFormReset()}
      />
    </div>
  );
};
