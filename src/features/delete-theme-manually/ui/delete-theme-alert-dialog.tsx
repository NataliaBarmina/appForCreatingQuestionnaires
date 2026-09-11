import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@shared/ui";

import { useDeleteTheme } from "../api/use-delete-theme";

export const DeleteThemeAlertDialog = ({
  themeId,
  open,
  onOpenChange,
}: {
  themeId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const { t } = useTranslation();

  const { mutateAsync: deleteTheme } = useDeleteTheme();

  const onDeleteTheme = async () => {
    try {
      await deleteTheme(themeId);
    } catch (error) {
      const message = error instanceof Error ? error.message : t("error.somethingWentWrong");
      toast.error(message);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("alert.confirmTitle")}</AlertDialogTitle>
          <AlertDialogDescription>{t("alert.deleteThemeWarning")}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onDeleteTheme}>{t("alert.deleteTopic")}</AlertDialogAction>
          <AlertDialogCancel>{t("alert.continueEditing")}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
