import { useTranslation } from "react-i18next";
import { ConfirmActionDialog } from "@shared/ui";
import { Button } from "@shared/ui";

export type TQuestionFormActions = {
  onFormReset: () => void;
  onConfirm?: () => void;
  isFormValid: boolean;
  isSubmitting: boolean;
};

export const QuestionFormActions = ({
  isFormValid,
  isSubmitting,
  onFormReset,
  onConfirm,
}: TQuestionFormActions) => {
  const { t } = useTranslation();
  return (
    <div className="my-6 flex w-full justify-evenly lg:my-10">
      <ConfirmActionDialog
        alertDialogTitle={t("alert.validationTitle")}
        alertDialogDescription={t("alert.checkQuestions")}
        alertDialogAction={t("alert.saveQuestion")}
        alertDialogCancel={t("alert.continueEditing")}
        buttonLabel={t("buttonLabel.save")}
        type="button"
        onConfirm={onConfirm}
        isFormValid={isFormValid}
        isSubmitting={isSubmitting}
      />

      <Button buttonLabel={t("buttonLabel.reset")} type="button" onClick={() => onFormReset()} />
    </div>
  );
};
