import { useTranslation } from "react-i18next";
import {
  headerStyles,
  buttonStyles,
  showPasswordInputStyles,
  errorStyles,
  showPasswordContainerStyles,
  showPasswordButtonStyles,
} from "./styles";
import { useState, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import type { FirebaseError } from "firebase/app";
import { auth } from "@appFirebase";
import { SHARED_EMAIL, keyByCode } from "./constants";
import { TLogin } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//?  разделить - useAuth,  файлы индекс

export const Login = ({ error, setError }: TLogin) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const schema = useMemo(
    () =>
      yup.object({
        password: yup
          .string()
          .required(t("auth.required"))
          .matches(/^[A-Za-z0-9]+$/, t("auth.matches")),
      }),
    [t]
  );

  type TAuthForm = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAuthForm>({
    defaultValues: { password: "" },
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TAuthForm> = async ({ password }) => {
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, SHARED_EMAIL, password);
      navigate("/dashboardPage");
    } catch (e: any) {
      const err = e as FirebaseError;
      setError(t(keyByCode[err.code] ?? "error.auth"));
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className={headerStyles}>{t("header.login")}</h1>

      <div className={showPasswordContainerStyles}>
        <input
          {...register("password")}
          placeholder={t("placeholder.auth")}
          type={showPassword ? "text" : "password"}
          className={showPasswordInputStyles}
        />
        <button
          type="button"
          className={showPasswordButtonStyles}
          onClick={() => setShowPassword((visible) => !visible)}
        >
          {showPassword ? t("auth.hidePassword") : t("auth.showPassword")}
        </button>
      </div>

      <button className={buttonStyles} type="submit">
        {t("auth.login")}
      </button>

      {errors.password ? (
        <div>
          <span className={errorStyles}>{errors.password.message}</span>
        </div>
      ) : null}

      {error ? (
        <div>
          <span className={errorStyles}>{error}</span>
        </div>
      ) : null}
    </form>
  );
};
