import {
  showPasswordButtonStyles,
  showPasswordContainerStyles,
  showPasswordInputStyles,
} from "./styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { UseFormRegister } from "react-hook-form";
import type { TAuthForm } from "./useLogicSchema";

export const PasswordField = ({ register }: { register: UseFormRegister<TAuthForm> }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  return (
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
  );
};
