import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@appFirebase";

import { FieldsError } from "@shared/ui";

import { createLoginSchema } from "../model/validation-schema";
import {
  showPasswordButtonStyles,
  showPasswordContainerStyles,
  showPasswordInputStyles,
  errorStyles,
  buttonStyles,
} from "./styles";

export const SHARED_EMAIL = "myappforquestionnaires@gmail.com";

export const Login = () => {
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

  const onSubmit = async ({ password }: { password: string }) => {
    setError(null);

    try {
      // Firebase пытается войти с помощью:заранее заданного email — SHARED_EMAIL и пароля, который ввёл пользователь.
      await signInWithEmailAndPassword(auth, SHARED_EMAIL, password);

      reset();
      navigate("/dashboardPage");
    } catch (error: unknown) {
      setError(t("auth.errors.default"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
