import { useTranslation } from "react-i18next";
import { Trash2, Save } from "lucide-react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useCreateTheme } from "@entities/theme";
import { TEditAIGeneratedTheme, TThemeForm } from "../model/types";

export const EditAIGeneratedTheme = ({
  themeName,
  courseName,
  deleteTheme,
}: TEditAIGeneratedTheme) => {
  const { t } = useTranslation();

  const schema = yup.object({
    themeName: yup.string().trim().required(t("validation.required")),
  });

  const { handleSubmit, register } = useForm<TThemeForm>({
    defaultValues: {
      themeName,
    },
    resolver: yupResolver(schema),
  });

  const { mutate } = useCreateTheme();

  const onSubmit = (data: TThemeForm) => {
    mutate(
      {
        courseName,
        themeName: data.themeName,
      },
      {
        onSuccess: () => {
          deleteTheme(themeName);
        },
        onError: (error) => {
          const message = error instanceof Error ? error.message : t("error.somethingWentWrong");

          toast.error(message);
        },
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="textarea-styles mb-6 flex w-full flex-row items-center justify-between gap-4 rounded-2xl px-0 py-0"
    >
      <textarea
        className="textarea-styles m-0 border-none focus:outline-none focus:ring-0"
        {...register("themeName")}
      />

      <button
        className="rounded-xl bg-[#88cdbe]/30 p-2 text-[#fca5a5] hover:bg-[#88cdbe]/60"
        title="сохранить тему"
        type="submit"
      >
        <Save size={40} />
      </button>
      <button
        className="rounded-xl bg-red-200/30 p-2 text-[#fca5a5] hover:bg-red-200"
        type="button"
        title="Удалить тему"
        onClick={() => deleteTheme(themeName)}
      >
        <Trash2 size={40} />
      </button>
    </form>
  );
};
