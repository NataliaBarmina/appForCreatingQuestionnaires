import { useTranslation } from "react-i18next";

import { ConfirmActionDialog } from "@shared/ui";

export const DeleteQuestionDialog = ({ questionID }: { questionID: string }) => {
  const { t } = useTranslation();

  // todo
  const onDelete = (id: string) => {
    alert("удалить вопрос");
  };
  // todo isFormValid
  return (
    <div>
      <ConfirmActionDialog
        alertDialogTitle={t("alert.title")}
        alertDialogDescription={t("alert.deleteWarning")}
        alertDialogAction={t("alert.continueEditing")}
        alertDialogCancel={t("alert.deleteQuestion")}
        buttonLabel={t("buttonLabel.delete")}
        size="middle"
        onConfirm={() => onDelete(questionID)}
        isFormValid={false}
      />
    </div>
  );
};
