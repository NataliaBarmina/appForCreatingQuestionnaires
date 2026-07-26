import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "@appFirebase";

import {
  containerStyle,
  headerStyle,
  buttonAuthStyles,
  buttonLanguageStyles,
  containerSwitcherStyles,
} from "./styles";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  async function logout() {
    await signOut(auth);
    navigate("/loginPage");
  }

  async function changeLanguage(language: string) {
    await i18n.changeLanguage(language);
  }

  return (
    <header className={containerStyle}>
      <div className={headerStyle}>
        <div className="ml-8 flex flex-col items-center justify-center">
          {user ? (
            <button type="button" className={buttonAuthStyles} onClick={logout}>
              {t("auth.logout")}
            </button>
          ) : (
            <button
              type="button"
              className={buttonAuthStyles}
              onClick={() => navigate("/loginPage")}
            >
              {t("auth.login")}
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
    </header>
  );
};
