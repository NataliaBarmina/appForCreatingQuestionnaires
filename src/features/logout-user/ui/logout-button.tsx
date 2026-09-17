import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSession } from "@entities/session";

export const buttonAuthStyles =
  "rounded-md hover:bg-[#fca5a5] px-4 py-1 border border-white/30 text-white/70 md:py-2";

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
    <div className="ml-8 flex flex-col items-center justify-center text-xs md:text-sm">
      {user && (
        <button type="button" className={buttonAuthStyles} onClick={handleLogout}>
          {t("auth.logout")}
        </button>
      )}
    </div>
  );
};
