import { useTranslation } from "react-i18next";
import { Login } from "@features/login";

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto mt-32 w-[70%] rounded-2xl border-2 border-solid border-gray-600 bg-green-800 py-14">
      <h1 className="pb-10 text-[150%] text-pink-50">{t("header.login")}</h1>

      <Login />
    </div>
  );
};
