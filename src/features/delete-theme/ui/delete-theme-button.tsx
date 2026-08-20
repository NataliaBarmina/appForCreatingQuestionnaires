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
  buttonID: "EDIT" | "AI THEMES";
}) => {
  const { t } = useTranslation();

  const { mutateAsync, isPending } = useDeleteTheme();

  const onDeleteTheme = async () => {
    try {
      if (buttonID === "EDIT") {
        await mutateAsync(themeId);
      } else {
        alert("здесь будет функция для работы с локал сторадж");
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : t("error.somethingWentWrong");
      toast.error(message);
    }
  };

  return (
    <>
      <button
        type="button"
        title="yдалить"
        onClick={onDeleteTheme}
        className={buttonStyle}
        disabled={isPending}
      >
        <DeleteThemeIcon />
      </button>
    </>
  );
};
