import { useState } from "react";
import SettingsOptions from "./SettingsOptions";
import EditProfile from "./EditProfile";
import Preferences from "./Preferences";
import Security from "./Security";

export default function Settings() {
  const [option, setOption] = useState("edit profile");

  return (
    <div className=" w-full box-border pt-6 mt-[140px] mb-[120px] lg:mt-0  z-50 lg:pt-[110px] xl:pt-[120px] px-5 lg:px-[2.5%] xl:px-[2%] :bg-background_1 pb-8">
      <div className="bg-white p-5 min-[600px]:p-6 rounded-2xl xl:rounded-3xl w-full">
        <SettingsOptions onSetOption={setOption} />
        {option === "edit profile" ? (
          <EditProfile />
        ) : option === "preferences" ? (
          <Preferences />
        ) : option === "security" ? (
          <Security />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
