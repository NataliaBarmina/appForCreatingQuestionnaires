import { SubmitHandler } from "react-hook-form";
import { TFields } from "@commonComponents/createFields";
import Button from "@commonComponents/buttons";
import { useTranslation } from "react-i18next";
import TextAreaBlock from "./textAreaBlock";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type TFormForCreatingTheme = {
  closePopover: () => void;
};

const FormForCreatingTheme = ({ closePopover }: TFormForCreatingTheme) => {
  const { t } = useTranslation();

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
export default FormForCreatingTheme;
