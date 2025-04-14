import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { TForm } from "./types";

export const UseFormConfig = ({ defaultValues }: TForm) => {
  const { t } = useTranslation();
  const requiredString = yup.string().required(t("required"));

  const schema = yup.object({
    questionForEditing: requiredString,
    answerForEditing1: requiredString,
    answerForEditing2: requiredString,
    answerForEditing3: requiredString,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues,
  });

  const hasErrors = Object.keys(errors).length > 0; // проверяем есть ли вообще какие-либо ошибки

  return {
    register,
    errors,
    handleSubmit,
    hasErrors,
  };
};
