import { Outlet } from "react-router-dom";
import { Header } from "@features/header";
import { NavPanel } from "@widgets/nav-panel";

import { classesForContainer, classesForOutlet } from "./styles";

export const App = () => {
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
