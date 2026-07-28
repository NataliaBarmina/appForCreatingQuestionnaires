import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@appFirebase";
import { cn } from "@shared/chadcn";

import { LoginLogoutButton } from "./login-logout-button";
import { LanguageSwitcher } from "./languageSwitcher";

export const headerStyle = cn(
  "z-50 mb-2 h-[12vh] w-full bg-red-400",
  "flex flex-row items-center justify-between",
  "bg-green-800 shadow-lg shadow-stone-900",
  "md:fixed md:left-0 md:top-0",
  "lg:left-[7.5vw] lg:w-[85%]",
  "xl:left-[10vw] xl:w-[80%]",
  "2xl:left-[14.9vw] 2xl:w-[70%]"
);

export const Header = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  return (
    <header className="h-[12vh] w-full">
      <div className={headerStyle}>
        <LoginLogoutButton user={user} />

        <LanguageSwitcher />
      </div>
    </header>
  );
};
