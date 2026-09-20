import { MobileDashboard } from "./mobile";
import { DesktopDashboard } from "./desktop";

export const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="min-[540px]:hidden">
        <MobileDashboard />
      </div>

      <div className="hidden min-[540px]:block">
        <DesktopDashboard />
      </div>
    </div>
  );
};
