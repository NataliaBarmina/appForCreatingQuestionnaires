import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addThemeAsync } from "@store/theme/thunks";
import { TDispatch } from "@store/store";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@shared/ui";
import { TextAreaBlock } from "./textAreaBlock";

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
  const dispatch = useDispatch<TDispatch>();

  const schema = yup.object({
    topicName: yup.string().required(t("required")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTextArea>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TTextArea> = (data) => {
    dispatch(addThemeAsync({ themeName: data.topicName, courseName }));
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
