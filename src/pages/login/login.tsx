import { useTranslation } from "react-i18next";
import { useState } from "react";

import { FieldsError } from "@shared/ui";

import { useLogicSchema } from "./useLogicSchema";
import { useLogicSubmit } from "./useLogicSubmit";
import {
  showPasswordButtonStyles,
  showPasswordContainerStyles,
  showPasswordInputStyles,
  errorStyles,
  headerStyles,
  buttonStyles,
  containerStyles,
} from "./styles";

export const Login = () => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useLogicSchema(t);

  const { onSubmit } = useLogicSubmit({
    reset,
    setError,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={containerStyles}>
      <h1 className={headerStyles}>{t("header.login")}</h1>

      <div className={showPasswordContainerStyles}>
        <input
          {...register("password")}
          placeholder={t("placeholder.auth")}
          type={showPassword ? "text" : "password"}
          className={showPasswordInputStyles}
          autoFocus
        />
        <button
          type="button"
          className={showPasswordButtonStyles}
          onClick={() => setShowPassword((visible) => !visible)}
        >
          {showPassword ? t("auth.hidePassword") : t("auth.showPassword")}
        </button>
      </div>

      <button className={`${buttonStyles} mb-6`} type="submit" disabled={isSubmitting}>
        {t("auth.login")}
      </button>

      {errors.password?.message && (
        <FieldsError message={errors.password?.message} styles={errorStyles} />
      )}

      {error && <FieldsError message={error} styles={errorStyles} />}
    </form>
  );
};
