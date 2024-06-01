import { useState } from "react";

export default function StaffProfile({ pic, name, role }) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={`w-1/3 h-full px-1 select-none cursor-pointer ${isSelected &&
        "bg-[#DFE5EE] border border-text_2 rounded-xl"}`}
      onClick={() => setIsSelected(prev => !prev)}
    >
      <div className="mx-auto w-[50px] xl:w-[70px] w-[50px] xl:h-[70px] mb-1">
        <img src={pic} alt="" className="w-full h-full" />
      </div>
      <div
        className={`text-center text-xs xl:text-base ${isSelected &&
          "font-bold"}`}
      >
        <p>{name}</p>
        <p className="text-xs xl:text-sm text-text_2">{role}</p>
      </div>
    </div>
  );
}
