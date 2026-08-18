import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import { Button, FieldsError } from "@shared/ui";
import { TSelectedTheme } from "@entities/theme";
// import { useCreateTheme } from "../api/use-create-theme";
// import { createThemeSchema } from "../model/validation-schema";
import { EditThemeIcon } from "./edit-theme-icon";

// todo - в зависимости от значения buttonID делать разные действия - работать с файрбэйз или локал сторадж

export const EditThemeForm = ({
  onSuccess,
  theme,
  buttonID,
}: {
  onSuccess: () => void;
  theme: TSelectedTheme;
  buttonID: string;
}) => {
  const { t } = useTranslation();

  // const schema = createThemeSchema(t("validation.required"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",

    defaultValues: {
      topicName: theme.themeName,
    },
    // resolver: yupResolver(schema),
  });

  // const { mutate: createTheme } = useCreateTheme();

  const onSubmit = (data: { topicName: string }) => {
    const { topicName } = data;

    // createTheme(
    //   {
    //     courseName,
    //     themeName: topicName,
    //   },
    //   {
    //     onSuccess: () => {
    //       reset();
    //       onSuccess?.();
    //     },
    //     onError: (error) => {
    //       const message = error instanceof Error ? error.message : t("error.somethingWentWrong");

    //       toast.error(message);
    //     },
    //   }
    // );
    onSuccess();
  };

  const errorMessage = errors?.topicName?.message;
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
        <textarea className="textarea-styles w-[90%]" {...register("topicName")} />
      </div>
      {errorMessage && <FieldsError message={errorMessage} />}
      <div>
        <Button buttonLabel={t("buttonLabel.send")} size="middle" />
      </div>
    </form>
  );
};
