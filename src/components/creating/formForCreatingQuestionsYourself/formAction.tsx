import Alert from "@commonComponents/alert";
import Button from "@commonComponents/buttons";
import { useTranslation } from "react-i18next";

type TFormActionsProps = {
  onFormReset?: () => void;
  onCreateManualQuestion?: () => void;
  isFormValid: boolean;
  isSubmitting: boolean;
};

const FormAction = ({
  isFormValid,
  isSubmitting,
  onFormReset,
  onCreateManualQuestion,
}: TFormActionsProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mb-8 flex w-full justify-evenly pt-14">
        <div>
          <Alert
            alertDialogTitle={t("alert.title")}
            alertDialogDescription={t("alert.checkQuestions")}
            alertDialogAction={t("alert.continueEditing")}
            alertDialogCancel={t("alert.saveQuestion")}
            buttonLabel={t("buttonLabel.save")}
            type="button"
            size="middle"
            onClick={onCreateManualQuestion}
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
export default FormAction;
