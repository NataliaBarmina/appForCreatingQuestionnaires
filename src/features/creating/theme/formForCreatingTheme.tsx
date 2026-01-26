import { SubmitHandler } from "react-hook-form";
import { TFields } from "../../../shared/createFields/createFields";
import Button from "../../../shared/buttons";
import { useTranslation } from "react-i18next";
import TextAreaBlock from "./textAreaBlock";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addThemes } from "@store/reducers/newReducer";

type TFormForCreatingTheme = {
  closePopover?: () => void;
  course?: string;
};

const FormForCreatingTheme = ({ closePopover, course }: TFormForCreatingTheme) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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
    dispatch(addThemes({ courseName: course, themeName: data.topicName }));
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
