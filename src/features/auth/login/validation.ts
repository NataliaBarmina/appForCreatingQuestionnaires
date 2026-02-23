import * as yup from "yup";
import type { TFunction } from "i18next";

export const buildLoginSchema = (t: TFunction) =>
  yup.object({
    password: yup
      .string()
      .required(t("auth.required"))
      .matches(/^[A-Za-z0-9]+$/, t("auth.matches")),
  });

export type LoginFormValues = yup.InferType<ReturnType<typeof buildLoginSchema>>;
