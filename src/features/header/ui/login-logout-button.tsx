import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { signOut, type User } from "firebase/auth";
import { auth } from "@appFirebase";

export const buttonAuthStyles = "rounded-md bg-red-300 px-4 py-2";

export const LoginLogoutButton = ({ user }: { user: User | null }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  async function logout() {
    await signOut(auth);
    navigate("/loginPage");
  }
  return (
    <div className="ml-8 flex flex-col items-center justify-center">
      {user ? (
        <button type="button" className={buttonAuthStyles} onClick={logout}>
          {t("auth.logout")}
        </button>
      ) : (
        <button type="button" className={buttonAuthStyles} onClick={() => navigate("/loginPage")}>
          {t("auth.login")}
        </button>
      )}
    </div>
  );
};
