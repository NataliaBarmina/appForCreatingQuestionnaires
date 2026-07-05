import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@shared/ui";
import { TextAreaBlock } from "./textAreaBlock";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTheme } from "./use-add-theme";

export const useAddTheme = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTheme,

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["themes"],
      }),
  });
};
export const createThemeSchema = (requiredText: string) =>
  yup.object({
    topicName: yup.string().required(requiredText),
  });

export type TTextArea = yup.InferType<ReturnType<typeof createThemeSchema>>;

type TFormForCreatingTheme = {
  closePopover: () => void;
  courseName: string;
};

export const FormForCreatingTheme = ({ closePopover, courseName }: TFormForCreatingTheme) => {
  const { t } = useTranslation();

  const schema = createThemeSchema(t("required"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTextArea>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { mutate: createQuestion, isPending, isError, error } = useAddTheme();

  const onSubmit: SubmitHandler<TTextArea> = (data) => {
    createQuestion({
      courseName,
      themeName: data.topicName,
    });
    closePopover();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4">
        <TextAreaBlock
          placeholder={t("placeholder.topic")}
          register={register}
          fieldName="topicName"
          styles=""
          error={errors.topicName}
        />
      </div>
      <div>
        <Button buttonLabel={t("buttonLabel.send")} size="middle" />
      </div>
    </form>
  );
};
