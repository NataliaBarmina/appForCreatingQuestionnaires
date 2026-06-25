import { useTranslation } from "react-i18next";
import { Alert } from "@shared/ui";
import { Button } from "@shared/ui";
import type { TFormAction } from "./types";
import { formActionContainerStyle } from "./styles";

export const FormAction = ({
  isFormValid,
  isSubmitting,
  onFormReset,
  handleCreateManualQuestion,
}: TFormAction) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className={formActionContainerStyle}>
        <div>
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
        </div>
        <div>
          <Button
            buttonLabel={t("buttonLabel.reset")}
            size="middle"
            disabled={false}
            type="reset"
            onClick={() => onFormReset()}
          />
        </div>
      </div>
    </div>
  );
};
