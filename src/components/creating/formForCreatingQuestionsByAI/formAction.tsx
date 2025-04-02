import Alert from "@commonComponents/alert";
import Button from "@commonComponents/buttons";
import { useTranslation } from "react-i18next";

type FormActionsProps = {
  onFormReset: () => void;
  isFormValid: boolean;
  isSubmitting: boolean;
};

const FormAction = ({
  isFormValid,
  isSubmitting,
  onFormReset,
}: FormActionsProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mb-8 flex w-full justify-evenly pt-14">
        <div>
          <Alert
            whatToDo={"сохраняем данные в стэйт "} //todo: потом удалить
            alertDialogTitle={t("alert.title")}
            alertDialogDescription={t("alert.checkQuestions")}
            alertDialogAction={t("alert.continueEditing")}
            alertDialogCancel={t("alert.saveQuestion")}
            buttonLabel={t("buttonLabel.save")}
            type="submit"
            onContinue={() => onFormReset()}
            isFormValid={isFormValid} //будем показывать Alert только если форма валидна
            isSubmitting={isSubmitting} //будем показывать Alert только произошло событие submit
          />
        </div>
        <div>
          <Button
            buttonLabel={t("buttonLabel.reset")}
            size="small"
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
