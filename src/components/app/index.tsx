import { Outlet } from "react-router-dom";
import { classesForContainer, classesForOutlet } from "./styles";
import Header from "./header";
import NavPanel from "./navPanel";

const App = () => {
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
export default App;
