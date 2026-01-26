import { Outlet } from "react-router-dom";
import { classesForContainer, classesForOutlet } from "./styles";
import { Header } from "./header";
import { NavPanel } from "./navPanel";

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
