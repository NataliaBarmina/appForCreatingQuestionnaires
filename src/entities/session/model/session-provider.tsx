import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import { onAuthStateChanged, signOut, type User } from "firebase/auth";

import { auth } from "@appFirebase";

type SessionContextValue = {
  user: User | null;
  isAuthReady: boolean;
  isAuthenticated: boolean;
  logout: () => Promise<void>;
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

  const value = useMemo<SessionContextValue>(
    () => ({
      user,
      isAuthReady,
      isAuthenticated: user !== null,
      logout,
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
