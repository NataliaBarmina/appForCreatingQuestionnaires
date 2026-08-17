import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSession } from "@entities/session";

export const buttonAuthStyles = "rounded-md bg-[#fca5a5]/80 px-4 py-2";

export const LogoutButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { user, logout } = useSession();

  async function handleLogout() {
    await logout();

    navigate("/login", {
      replace: true,
    });
  }

  return (
    <div className="ml-8 flex flex-col items-center justify-center">
      {user && (
        <button type="button" className={buttonAuthStyles} onClick={handleLogout}>
          {t("auth.logout")}
        </button>
      )}
    </div>
  );
};
