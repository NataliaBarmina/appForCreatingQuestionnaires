import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@shared/ui";
import { useAddTheme } from "../api/use-add-theme";
import { toast } from "react-toastify";
import { createThemeSchema } from "../model/validation-schema";
import { FieldsError } from "@shared/ui/fields-error";

export type TCreateThemeForm = {
  topicName: string;
};

export const FormForCreatingTheme = ({
  closePopover,
  courseName,
}: {
  closePopover: () => void;
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
          closePopover();
        },
        onError: (error) => {
          const message = error instanceof Error ? error.message : t("error.somethingWentWrong");

          toast.error(message);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4">
        <div className="mx-auto">
          <textarea
            className="textarea-styles"
            placeholder={t("placeholder.topic")}
            {...register("topicName")}
          />

          {errors?.topicName?.message && <FieldsError message={errors?.topicName?.message} />}
        </div>
      </div>
      <div>
        <Button buttonLabel={t("buttonLabel.send")} size="middle" />
      </div>
    </form>
  );
};
