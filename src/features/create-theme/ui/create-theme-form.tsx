import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button, FieldsError } from "@shared/ui";
import { useAddTheme } from "../api/use-add-theme";
import { createThemeSchema } from "../model/validation-schema";
import { formContainerStyles } from "./styles";
import { CircleIcon } from "./circle-icon";

export type TCreateThemeForm = {
  topicName: string;
};

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
  } = useForm<TCreateThemeForm>({
    mode: "onBlur",

    defaultValues: {
      topicName: "",
    },
    resolver: yupResolver(schema),
  });

  const { mutate: createTheme } = useAddTheme();

  const onSubmit: SubmitHandler<TCreateThemeForm> = (data) => {
    createTheme(
      {
        courseName,
        themeName: data.topicName,
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

  //todo - поменять стиль "bg-green-500"
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={onSuccess ? formContainerStyles : "bg-green-500"}
    >
      <div className="mb-5 flex items-center gap-4">
        <CircleIcon />

        <h1 className="pt-0">{t("header.addTheme")}</h1>
      </div>

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
