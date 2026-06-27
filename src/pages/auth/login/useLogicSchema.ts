import type { TFunction } from "i18next";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const createLoginSchema = (t: TFunction) =>
  yup.object({
    password: yup
      .string()
      .required(t("auth.required"))
      .matches(/^[A-Za-z0-9]+$/, t("auth.matches")),
  });
export type TAuthForm = yup.InferType<ReturnType<typeof createLoginSchema>>;

export const useLogicSchema = (t: TFunction) => {
  const schema = useMemo(() => createLoginSchema(t), [t]);

  return useForm<TAuthForm>({
    defaultValues: { password: "" },
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
};
