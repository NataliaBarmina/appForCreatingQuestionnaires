import { classesForLinks, classesForNavPanel, classesForFixingNavPanel } from "./styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const NavPanel = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  async function login() {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log("UID:", res.user.uid);
    } catch (e) {
      console.error("Login error:", e);
    }
  }
  async function logout() {
    await signOut(auth);
    console.log("Logged out");
  }

  return (
    <div className={classesForNavPanel}>
      {user ? (
        <button className="bg-red-600" onClick={logout}>
          LOGOUT
        </button>
      ) : (
        <button className="bg-green-500" onClick={login}>
          LOGIN
        </button>
      )}

      <div className={classesForFixingNavPanel}>
        <Link to="/creating" className={classesForLinks}>
          {t("link.create")}
        </Link>

        <button
          className={classesForLinks}
          onClick={() => {
            navigate("/editing", {});
          }}
        >
          {t("link.editing")}
        </button>

        <Link to="/questionnaire" className={classesForLinks}>
          {t("link.questionnaire")}
        </Link>
      </div>
    </div>
  );
};
