import { useTranslation } from "react-i18next";
import { headerStyles, buttonStyles } from "./styles";
import { useLogicSchema } from "./useLogicSchema";
import { FormError } from "./formError";
import { PasswordField } from "./passwordField";
import { useLogicSubmit } from "./useLogicSubmit";

export type TLogin = {
  error: string | null;
  setError: (e: string | null) => void;
};

export const Login = ({ error, setError }: TLogin) => {
  const { t } = useTranslation();

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className={headerStyles}>{t("header.login")}</h1>

      <PasswordField register={register} />

      <button className={buttonStyles} type="submit" disabled={isSubmitting}>
        {t("auth.login")}
      </button>

      <FormError message={errors.password?.message} />
      <FormError message={error} />
    </form>
  );
};
