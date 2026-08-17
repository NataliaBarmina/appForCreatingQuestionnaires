import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button, FieldsError } from "@shared/ui";
import { useCreateTheme } from "../api/use-create-theme";
import { createThemeSchema } from "../model/validation-schema";

export const CreateThemeForm = ({
  onSuccess,
  courseName,
}: {
  onSuccess?: () => void;
  courseName: string;
}) => {
  const { t } = useTranslation();

  const schema = createThemeSchema(t("validation.required"));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",

    defaultValues: {
      topicName: "",
    },
    resolver: yupResolver(schema),
  });

  const { mutate: createTheme } = useCreateTheme();

  const onSubmit = (data: { topicName: string }) => {
    const { topicName } = data;

    createTheme(
      {
        courseName,
        themeName: topicName,
      },
      {
        onSuccess: () => {
          reset();
          onSuccess?.();
        },
        onError: (error) => {
          const message = error instanceof Error ? error.message : t("error.somethingWentWrong");

          toast.error(message);
        },
      }
    );
  };

  const errorMessage = errors?.topicName?.message;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 text-center">
        <textarea
          className="textarea-styles w-[90%]"
          placeholder={t("createTheme.placeholder")}
          {...register("topicName")}
        />
      </div>
      {errorMessage && <FieldsError message={errorMessage} />}
      <div>
        <Button buttonLabel={t("buttonLabel.send")} size="middle" />
      </div>
    </form>
  );
};
