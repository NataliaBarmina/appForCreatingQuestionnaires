import Button from "../buttons";
import { buttonsContainerStyles } from "./styles";
import { useTranslation } from "react-i18next";
import { TForm } from "./types";

const FormAction = ({ hasErrors, onSubmit, onDelete }: TForm) => {
  const { t } = useTranslation();
  return (
    <div className={buttonsContainerStyles}>
      <Button
        buttonLabel={t("buttonLabel.save")}
        size="middle"
        disabled={hasErrors} //todo: проверить работу
        type="button"
        onClick={onSubmit}
      />
      <Button
        buttonLabel={t("buttonLabel.closeForm")}
        size="middle"
        onClick={onDelete}
        type="button"
      />
    </div>
  );
};
export default FormAction;
