import { Outlet } from "react-router-dom";

import { Header } from "@widgets/header";
import { NavPanel } from "@widgets/nav-panel";
import { cn } from "@shared/lib";

export const containerStyle = cn(
  "mx-auto text-center",
  "min-h-dvh",
  "lg:w-[85%]",
  "xl:w-[80%]",
  "2xl:w-[70%]",
  "3xl:w-[60%]"
);

export const outletStyle = cn(
  "bg-[#D3D6D6] text-center",
  "shadow-lg shadow-[#241515]",
  "min-h-[calc(100dvh-9rem)] pb-16",

  "md:min-h-[calc(100dvh-11rem)] md:pb-20",
  "lg:min-h-[88vh] lg:w-[70%] lg:pb-0"
);

export const AppLayout = () => {
  return (
    <div className={containerStyle}>
      <Header />

      <div className="w-full lg:flex lg:min-h-[88vh] lg:flex-row">
        <div className="h-20 md:h-24 lg:h-auto lg:w-[30%]">
          <NavPanel />
        </div>

        <main className={outletStyle}>
          <Outlet />
        </main>
        <ScreenInfo />
      </div>
    </div>
  );
};

export const ScreenInfo = () => {
  return (
    <div className="fixed left-0 top-0 z-[9999] bg-black p-2 text-white">
      {window.innerWidth} × {window.innerHeight}
      <br />
      DPR: {window.devicePixelRatio}
    </div>
  );
};
