import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import { onAuthStateChanged, signOut, signInWithEmailAndPassword, type User } from "firebase/auth";
import { auth } from "@appFirebase";

export const SHARED_EMAIL = "myappforquestionnaires@gmail.com";

type SessionContextValue = {
  user: User | null;
  isAuthReady: boolean;
  isAuthenticated: boolean;
  logout: () => Promise<void>;
  login: (password: string) => Promise<void>;
};

const SessionContext = createContext<SessionContextValue | null>(null);

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthReady(true);
    });

    return unsubscribe;
  }, []);

  async function logout() {
    await signOut(auth);
  }

  async function login(password: string) {
    await signInWithEmailAndPassword(auth, SHARED_EMAIL, password); // вход с помощью email (SHARED_EMAIL) и пароля, который ввёл пользователь
  }

  const value = useMemo<SessionContextValue>(
    () => ({
      user,
      isAuthReady,
      isAuthenticated: user !== null,
      logout,
      login,
    }),
    [user, isAuthReady]
  );

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession должен использоваться внутри SessionProvider");
  }

  return context;
};
