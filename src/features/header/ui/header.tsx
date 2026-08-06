import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useSession } from "@entities/session";

import {
  headerStyle,
  buttonAuthStyles,
  containerSwitcherStyles,
  buttonLanguageStyles,
} from "./styles";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const { user, logout } = useSession();

  async function handleLogout() {
    await logout();

    navigate("/loginPage", {
      replace: true,
    });
  }

  async function changeLanguage(language: string) {
    await i18n.changeLanguage(language);
  }

  return (
    <div className="h-[12vh] w-full">
      <div className={headerStyle}>
        <div className="ml-8 flex flex-col items-center justify-center">
          {user && (
            <button type="button" className={buttonAuthStyles} onClick={handleLogout}>
              {t("auth.logout")}
            </button>
          )}
        </div>

        <div className={containerSwitcherStyles}>
          <button
            type="button"
            className={buttonLanguageStyles}
            onClick={() => changeLanguage("ru")}
          >
            🇷🇺 Русский
          </button>

          <button
            type="button"
            className={buttonLanguageStyles}
            onClick={() => changeLanguage("en")}
          >
            🇺🇸 English
          </button>
        </div>
      </div>
    </div>
  );
};
