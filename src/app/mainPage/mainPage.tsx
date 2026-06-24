import { Outlet } from "react-router-dom";
import { classesForContainer, classesForOutlet } from "./styles";
import { Header } from "../../widgets/headerBlock";
import { NavPanel } from "../../widgets/navPanel";

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
