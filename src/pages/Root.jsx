import { Outlet } from "react-router-dom";
import MainNavigation from "./../components/MainNavigation/MainNavigation";

export default function Root() {
  return (
    <div className="flex w-full relative">
      <MainNavigation />
      <Outlet />
    </div>
  );
}
