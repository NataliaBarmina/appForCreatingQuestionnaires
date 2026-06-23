import { signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@appFirebase";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SHARED_EMAIL = "myappforquestionnaires@gmail.com";

const containerStyles =
  "mx-auto mt-32 w-[70%] rounded-2xl border-2 border-solid border-gray-600 bg-green-800 py-14";
const headerStyles = "pb-10 text-[150%] text-pink-50";
const buttonStyles = "rounded-md bg-red-300 px-4 py-2";
const inputStyles = "mx-auto mb-10 block w-[70%] border bg-slate-50 px-4 py-4";
const errorStyles = "text-sm font-bold text-red-600";

export const AuthForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  async function login() {
    setError(null);
    try {
      const res = await signInWithEmailAndPassword(auth, SHARED_EMAIL, password);
      setPassword("");
    } catch (e: any) {
      setError(e?.message ?? t("error.auth"));
    }
  }

  async function logout() {
    await signOut(auth);
  }

  const handleClick = async (): Promise<void> => {
    const ok = login();
    if (ok) navigate("/dashboardPage");
  };

  return (
    <>
      <div className={containerStyles}>
        {user ? (
          <div>
            <h1 className={headerStyles}>{t("header.logout")}</h1>
            <button className={buttonStyles} onClick={logout}>
              {t("auth.logout")}
            </button>
          </div>
        ) : (
          <div>
            <h1 className={headerStyles}>{t("header.login")}</h1>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("placeholder.auth")}
              type="password"
              className={inputStyles}
            />
            <button className={buttonStyles} onClick={handleClick}>
              {t("auth.login")}
            </button>
            {error ? <span className={errorStyles}>{error}</span> : null}
          </div>
        )}
      </div>
    </>
  );
};
