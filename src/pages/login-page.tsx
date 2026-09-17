import { useTranslation } from "react-i18next";
import { LoginForm } from "@features/login-user";

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-1 items-center justify-center bg-green-800/40">
      <div className="w-[100%] max-w-xl pb-10">
        <h1 className="pb-20 text-[150%] text-white/80">{t("auth.title")}</h1>
        <LoginForm />
      </div>
    </div>
  );
};
