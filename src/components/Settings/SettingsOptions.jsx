import { useState } from "react";

export default function SettingsOptions({ onSetOption }) {
  const [option, setOption] = useState("edit profile");

  return (
    <div className="flex justify-between min-[410px]:justify-start space-x-0 min-[410px]:space-x-6 text-text_2 font-medium text-xs xl:text-base cursor-pointer">
      <div className="flex flex-col items-center w-fit">
        <p
          onClick={() => {
            setOption("edit profile");
            onSetOption("edit profile");
          }}
          className={`px-0 min-[410px]:px-3  ${option === "edit profile" ? " text-blue_3" : ""}`}
        >
          Edit Profile
        </p>
        {option === "edit profile" && (
          <div className="bg-blue_3 rounded-t-3xl h-[3px] w-full"></div>
        )}
      </div>
      <div>
        <p
          onClick={() => {
            setOption("preferences");
            onSetOption("preferences");
          }}
          className={`px-0 min-[410px]:px-3  ${option === "preferences" ? " text-blue_3" : ""}`}
        >
          Preferences
        </p>
        {option === "preferences" && (
          <div className="bg-blue_3 rounded-t-3xl h-[3px] w-full"></div>
        )}
      </div>
      <div>
        <p
          onClick={() => {
            setOption("security");
            onSetOption("security");
          }}
          className={`px-0 min-[410px]:px-3  ${option === "security" ? " text-blue_3" : ""}`}
        >
          Security
        </p>
        {option === "security" && (
          <div className="bg-blue_3 rounded-t-3xl h-[3px] w-full"></div>
        )}
      </div>
    </div>
  );
}
