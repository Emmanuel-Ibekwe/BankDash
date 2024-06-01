import { Outlet } from "react-router-dom";
import { useState } from "react";
import MainNavigation from "./../components/MainNavigation/MainNavigation";

export default function Root() {
  const [isNavClosed, setIsNavClosed] = useState(false);
  return (
    <div className="  w-full relative">
      <MainNavigation
        isNavClosed={isNavClosed}
        onSetIsNavClosed={setIsNavClosed}
      />
      <Outlet context={[isNavClosed, setIsNavClosed]} />
    </div>
  );
}
