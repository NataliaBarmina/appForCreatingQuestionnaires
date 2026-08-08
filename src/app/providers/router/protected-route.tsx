import { Navigate, Outlet } from "react-router-dom";

import { useSession } from "@entities/session";
import { Preloader } from "@shared/ui";

export const ProtectedRoute = () => {
  const { isAuthenticated, isAuthReady } = useSession();

  if (!isAuthReady) {
    return <Preloader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/loginPage" replace />;
  }

  return <Outlet />;
};
