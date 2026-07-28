import { Outlet } from "react-router-dom";
import { Header } from "@widgets/headerBlock";
import { NavPanel } from "@widgets/navPanel";

import { classesForContainer, classesForOutlet } from "./styles";

export const MainPage = () => {
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
