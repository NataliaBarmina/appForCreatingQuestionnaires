import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button, FieldsError } from "@shared/ui";
import { useAddTheme } from "../api/use-add-theme";
import { createThemeSchema } from "../model/validation-schema";

export const CreateThemeManually = ({
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

  const { mutate: createTheme } = useAddTheme();

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
    <form
      className="mx-auto mt-10 w-[85%] rounded-lg bg-green-800 px-4 pb-10 pt-14"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 text-center">
        <textarea
          className="textarea-styles w-[90%]"
          placeholder={t("placeholder.topic")}
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
