import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FieldsError } from "@shared/ui";
import { createLoginSchema } from "../model/validation-schema";
import {
  showPasswordButtonStyles,
  containerButtonStyles,
  inputStyles,
  errorStyles,
  submitButtonStyles,
} from "./styles";
import { useSession } from "@entities/session";

export const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const schema = createLoginSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      password: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { login } = useSession();

  const onSubmit = async ({ password }: { password: string }) => {
    setError(null);

    try {
      await login(password);

      reset();
      navigate("/dashboard");
    } catch (error: unknown) {
      setError(t("auth.errors.default"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("password")}
        placeholder={t("auth.placeholder")}
        type={showPassword ? "text" : "password"}
        className={inputStyles}
        autoFocus
      />

      <div className={containerButtonStyles}>
        <button className={submitButtonStyles} type="submit" disabled={isSubmitting}>
          {t("auth.login")}
        </button>

        <button
          type="button"
          className={showPasswordButtonStyles}
          onClick={() => setShowPassword((visible) => !visible)}
        >
          {showPassword ? t("auth.hidePassword") : t("auth.showPassword")}
        </button>
      </div>

      {errors.password?.message && (
        <FieldsError message={errors.password?.message} styles={errorStyles} />
      )}
      {error && <FieldsError message={error} styles={errorStyles} />}
    </form>
  );
};
