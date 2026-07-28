import type { TFunction } from "i18next";
import * as yup from "yup";

export const createLoginSchema = (t: TFunction) =>
  yup.object({
    password: yup
      .string()
      .required(t("auth.required"))
      .matches(/^[A-Za-z0-9]+$/, t("auth.matches")),
  });
