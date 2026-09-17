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
  "flex flex-col",
  "bg-[#D3D6D6] text-center",
  "shadow-lg shadow-[#241515]",
  "min-h-[calc(100dvh-9rem)]",

  "md:min-h-[calc(100dvh-11rem)]",
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
          <div className="flex flex-1 flex-col">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
