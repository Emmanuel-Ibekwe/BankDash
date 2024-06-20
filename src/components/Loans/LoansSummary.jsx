import { numberWithCommas } from "../../utils/numberFormat";
import ToolsIcon from "./../../svg/ToolsIcon";
import UserIcon2 from "./../../svg/UserIcon2";
import BriefcaseIcon from "./../../svg/BriefcaseIcon";
import GraphIcon from "./../../svg/GraphIcon";

export default function LoansSummary() {
  return (
    <div className="w-[992px] min-[833px]:w-full lg:w-[775px] min-[1070px]:w-full flex items-center justify-between">
      {/* Personal Laons */}
      <div className="w-[23.18%] bg-white rounded-[20px] lg:rounded-3xl flex items-center justify-start space-x-3 xl:justify-between px-8 min-[833px]:p-3.5 py-5 xl:p-5">
        <div className="w-[45px] xl:w-[70px] h-[45px] xl:h-[70px] rounded-full bg-[#E7EDFF] flex items-center justify-center">
          <UserIcon2 className="w-[18px] xl:w-fit h-[18px] xl:h-fit" />
        </div>
        <div>
          <p className="text-text_2 text-[11px] xl:text-base">Personal Loans</p>
          <p className="text-text_3 text-base xl:text-xl font-semibold">
            ${numberWithCommas(50000)}
          </p>
        </div>
      </div>
      {/*  Corporate Loans*/}
      <div className="w-[23.18%] bg-white rounded-[20px] lg:rounded-3xl flex items-center justify-start space-x-3 xl:justify-between px-8 min-[833px]:p-3.5 py-5 xl:p-5">
        <div className="w-[45px] xl:w-[70px] h-[45px] xl:h-[70px] rounded-full bg-[#FFF5D9] flex items-center justify-center">
          <BriefcaseIcon className="w-[18px] xl:w-fit h-[18px] xl:h-fit" />
        </div>
        <div>
          <p className="text-text_2 text-[11px] xl:text-base">
            Corporate Loans
          </p>
          <p className="text-text_3 text-base xl:text-xl font-semibold">
            ${numberWithCommas(100000)}
          </p>
        </div>
      </div>
      {/*  Business Loans*/}
      <div className="w-[23.18%] bg-white rounded-[20px] lg:rounded-3xl flex items-center justify-start space-x-3 xl:justify-between px-8 min-[833px]:p-3.5 py-5 xl:p-5">
        <div className="w-[45px] xl:w-[70px] h-[45px] xl:h-[70px] rounded-full bg-[#FFE0EB] flex items-center justify-center">
          <GraphIcon className="w-[18px] xl:w-fit h-[18px] xl:h-fit" />
        </div>
        <div>
          <p className="text-text_2 text-[11px] xl:text-base">Business Loans</p>
          <p className="text-text_3 text-base xl:text-xl font-semibold">
            ${numberWithCommas(500000)}
          </p>
        </div>
      </div>
      {/*  Custom Loans*/}
      <div className="w-[23.18%] bg-white rounded-[20px] lg:rounded-3xl flex items-center justify-start space-x-3 xl:justify-between px-8 min-[833px]:p-3.5 py-5 xl:p-5">
        <div className="w-[45px] xl:w-[70px] h-[45px] xl:h-[70px] rounded-full bg-[#DCFAF8] flex items-center justify-center">
          <ToolsIcon className="w-[18px] xl:w-fit h-[18px] xl:h-fit" />
        </div>
        <div>
          <p className="text-text_2 text-[11px] xl:text-base">Custom Loans</p>
          <p className="text-text_3 text-[13px] xl:text-lg font-semibold">
            Choose Money
          </p>
        </div>
      </div>
    </div>
  );
}
