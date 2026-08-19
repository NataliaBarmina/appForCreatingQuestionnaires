import { useTranslation } from "react-i18next";
import { useDeleteTheme } from "../api/use-delete-theme";
import { DeleteThemeIcon } from "./delete-theme-icon";
import { toast } from "react-toastify";

export const buttonStyle =
  "flex h-11 w-11 items-center justify-center rounded-xl border border-[#dc9297] text-[#dc9297] transition hover:bg-[#dc9297] hover:text-white";

export const DeleteThemeButton = ({
  themeId,
  buttonID,
}: {
  themeId: string;
  buttonID: "EDIT" | "THEMES_AI";
}) => {
  const { t } = useTranslation();

  const { mutateAsync: deleteTheme } = useDeleteTheme();

  const onDeleteFirebase = async () => {
    try {
      await deleteTheme(themeId);
    } catch (error) {
      const message = error instanceof Error ? error.message : t("error.somethingWentWrong");
      toast.error(message);
    }
  };

  const onDeleteLocalStorage = () => {
    // todo
    alert(buttonID);
  };

  const onDeleteTheme = buttonID === "EDIT" ? onDeleteFirebase : onDeleteLocalStorage;

  return (
    <>
      <button type="button" title="yдалить" onClick={onDeleteTheme} className={buttonStyle}>
        <DeleteThemeIcon />
      </button>
    </>
  );
};
