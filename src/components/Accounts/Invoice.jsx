import { numberWithCommas } from "../../utils/numberFormat";
import { capitalizeWords } from "./../../utils/graph";
import AppleIcon from "../../svg/AppleIcon";
import PlaystationIcon from "./../../svg/PlaystationIcon";
import PersonIcon from "../../svg/PersonIcon";

export default function Invoice({ time, title, amount }) {
  return (
    <div className="w-full flex justify-between items-center text-[13px] min-[600px]:text-[14.5px] min-[900px]:text-[13px] xl:text-base">
      <div className="flex  space-x-3 min-[600px]:space-x-5 min-[900px]:space-x-3 xl:space-x-4 w-[80%]">
        <div className=" w-[45px] min-[600px]:w-[50px] min-[900px]:w-[45px] xl:w-[60px]  h-[45px] min-[600px]:h-[50px] min-[900px]:h-[45px] xl:h-[60px] rounded-2xl bg-[#DCFAF8] flex items-center justify-center">
          {title === "apple store" ? (
            <AppleIcon className=" w-[18px] min-[600px]:w-[21.5px] min-[900px]:w-[18px] xl:w-fit h-[18px] min-[600px]:h-[21.5px] min-[900px]:h-[18px] xl:h-fit" />
          ) : title === "playstation" ? (
            <PlaystationIcon className=" w-[18px] min-[600px]:w-[21.5px] min-[900px]:w-[18px] xl:w-fit h-[18px] min-[600px]:h-[21.5px] min-[900px]:h-[18px] xl:h-fit" />
          ) : (
            <PersonIcon
              fillColor={`${title === "michael" ? "#FFBB38" : "#FF82AC"}`}
              className=" w-[18px] min-[600px]:w-[21.5px] min-[900px]:w-[18px] xl:w-fit h-[18px] min-[600px]:h-[21.5px] min-[900px]:h-[18px] xl:h-fit"
            />
          )}
        </div>
        <div className="">
          <p className="text-text_1">{capitalizeWords(title)}</p>
          <p className="text-text_2 text-xs min-[600px]:text-[13.5px] min-[900px]:text-xs xl:text-[15px]">
            {time}
          </p>
        </div>
      </div>
      <div className="text-text_2">${numberWithCommas(amount)}</div>
    </div>
  );
}
