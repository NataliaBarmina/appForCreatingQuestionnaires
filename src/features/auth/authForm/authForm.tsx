import { containerStyles } from "./styles";
import { useEffect } from "react";
import { Logout } from "../logout/logout";
import { Login } from "../login/login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@appFirebase";
import { useState } from "react";
import type { User } from "firebase/auth";

export const AuthForm = () => {
  const [user, setUser] = useState<User | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setPassword("");
      setError(null);
    }
  }, [user]);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  return (
    <div className={containerStyles}>
      {user ? <Logout /> : <Login error={error} setError={setError} />}
    </div>
  );
};
