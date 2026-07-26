import { useTranslation } from "react-i18next";
import { Login } from "@features/login";

export const headerStyles = "pb-10 text-[150%] text-pink-50";

export const containerStyles =
  "mx-auto mt-32 w-[70%] rounded-2xl border-2 border-solid border-gray-600 bg-green-800 py-14";

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className={containerStyles}>
      <h1 className={headerStyles}>{t("header.login")}</h1>

      <Login />
    </div>
  );
};
