import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { ConfirmActionDialog } from "@shared/ui";
import { useDeleteQuestion } from "@entities/question";

export const DeleteQuestionDialog = ({ questionID }: { questionID: string }) => {
  const { t } = useTranslation();
  const { mutateAsync: deleteQuestion, isPending } = useDeleteQuestion();

  const onDelete = async (questionID: string) => {
    try {
      await deleteQuestion(questionID);
    } catch (error) {
      const message = error instanceof Error ? error.message : t("error.somethingWentWrong");
      toast.error(message);
    }
  };

  return (
    <div>
      <ConfirmActionDialog
        alertDialogTitle={t("alert.confirmTitle")}
        alertDialogDescription={t("alert.deleteWarning")}
        alertDialogAction={t("alert.deleteQuestion")}
        alertDialogCancel={t("alert.continueEditing")}
        buttonLabel={t("buttonLabel.delete")}
        onConfirm={() => onDelete(questionID)}
        isFormValid={!isPending}
      />
    </div>
  );
};
