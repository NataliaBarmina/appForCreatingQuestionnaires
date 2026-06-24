import { SubmitHandler } from "react-hook-form";
import { TFields } from "@shared/createFields/textarea";
import { Button } from "@shared/ui";
import { useTranslation } from "react-i18next";
import { TextAreaBlock } from "./textAreaBlock";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addThemeAsync } from "@store/theme/thunks";
import { TDispatch } from "@store/store";

type TFormForCreatingTheme = {
  closePopover?: () => void;
  courseName?: string;
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
  } = useForm<TFields>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TFields> = (data) => {
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
