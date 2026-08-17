import { Outlet } from "react-router-dom";
import { Header } from "@widgets/header";
import { NavPanel } from "@widgets/nav-panel";

import { classesForContainer, classesForOutlet } from "./styles";

export const AppLayout = () => {
  return (
    <div className={classesForContainer}>
      <Header />
      <NavPanel />
      <div className={classesForOutlet}>
        <Outlet />
      </div>
    </div>
  );
};
