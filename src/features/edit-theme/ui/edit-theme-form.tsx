import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

import { Button, FieldsError } from "@shared/ui";
import { TSelectedTheme } from "@entities/theme";
import { EditThemeIcon } from "./edit-theme-icon";
import { useEditTheme } from "../api/use-edit-theme";

// todo - в зависимости от значения buttonID делать разные действия - работать с файрбэйз или локал сторадж EDIT / AI THEMES

export const EditThemeForm = ({
  onClose,
  theme,
  buttonID,
}: {
  onClose: () => void;
  theme: TSelectedTheme;
  buttonID: "EDIT" | "AI THEMES";
}) => {
  const { t } = useTranslation();

  const schema = yup.object({
    editTopicName: yup.string().trim().required(t("validation.required")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",

    defaultValues: {
      editTopicName: theme.themeName,
    },
    resolver: yupResolver(schema),
  });

  const { mutateAsync, isPending } = useEditTheme();

  const onSubmit = async (data: { editTopicName: string }) => {
    const { themeId } = theme;

    const updateTheme = { themeName: data.editTopicName };

    try {
      if (buttonID === "EDIT") {
        await mutateAsync({ themeId, data: updateTheme });
      } else {
        alert("здесь будет функция для работы с localStorage");
      }

      onClose();
    } catch (error) {
      const message = error instanceof Error ? error.message : t("error.somethingWentWrong");
      toast.error(message);
    }
  };

  const errorMessage = errors?.editTopicName?.message;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full rounded-2xl border-[3px] border-[#ff806d] bg-[#ffa79c] px-5 pb-10 pt-5"
    >
      <div className="mb-5 flex items-center gap-4">
        <EditThemeIcon />
        <h1 className="pt-0">{t("editTheme.editTitle")}</h1>
      </div>

      <div className="mb-6 text-center">
        <textarea className="textarea-styles w-[90%]" {...register("editTopicName")} />
      </div>
      {errorMessage && <FieldsError message={errorMessage} />}
      <div>
        <Button
          buttonLabel={t("buttonLabel.send")}
          size="middle"
          type="submit"
          disabled={isPending}
        />
      </div>
    </form>
  );
};
