import { useTranslation } from "react-i18next";
import { headerStyles, buttonStyles } from "./styles";
import { signOut } from "firebase/auth";
import { auth } from "@appFirebase";

export const Logout = () => {
  const { t } = useTranslation();

  async function logout() {
    await signOut(auth);
  }

  return (
    <>
      <h1 className={headerStyles}>{t("header.logout")}</h1>
      <button className={buttonStyles} onClick={logout}>
        {t("auth.logout")}
      </button>
    </>
  );
};
