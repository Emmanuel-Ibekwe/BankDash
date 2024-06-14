import { numberWithCommas } from "./../../../utils/numberFormat";
import { capitalizeWords } from "./../../../utils/graph";
import AppleLogo2 from "../../../svg/AppleLogo2";
import GoogleLogo from "../../../svg/GoogleLogo";
import TeslaLogo from "../../../svg/TeslaLogo";
export default function MyInvestmentItem({ name, amount, rate, logo }) {
  return (
    <div className="w-full flex  bg-white p-3 pr-4 xl:p-4 items-center justify-between rounded-[15px] xl:rounded-[20px]">
      <div className="flex space-x-4 items-center justify-center">
        <div className="w-[45px] xl:w-[60px] h-[45px] xl:h-[60px] rounded-[15px] xl:rounded-[20px] bg-[#FFE0EB] flex items-center justify-center">
          {name === "apple store" ? (
            <AppleLogo2 className="w-5 xl:w-fit h-5 xl:h-fit" />
          ) : name === "google" ? (
            <GoogleLogo className="w-5 xl:w-fit h-5 xl:h-fit" />
          ) : name === "tesla motors" ? (
            <TeslaLogo className="w-5 xl:w-fit h-5 xl:h-fit" />
          ) : (
            ""
          )}
        </div>
        <div>
          <p className="text-text_3 font-medium text-sm lg:text-xs xl:text-base">
            {capitalizeWords(name)}
          </p>
          <p className="hidden min-[375px]:block text-text_2 text-xs lg:text-[11px] xl:text-[15px]">
            E-Commerce, Marketplace
          </p>
          <p className="block min-[375px]:hidden text-text_2 text-xs lg:text-[11px] xl:text-[15px]">
            E-Commer...
          </p>
        </div>
      </div>

      <div className="hidden min-[500px]:block">
        <p className="text-text_3 font-medium text-sm lg:text-xs xl:text-base">
          ${numberWithCommas(amount)}
        </p>
        <p className="text-text_2 text-xs lg:text-[11px] xl:text-[15px]">
          Investment value
        </p>
      </div>
      <div>
        <p
          className={`text-sm lg:text-xs xl:text-base ${
            rate >= 0 ? "text-[#16DBAA]" : "text-[#FE5C73]"
          }`}
        >
          {`${rate >= 0 ? "+" : ""}${rate}`}%
        </p>
        <p className="text-text_2 text-xs lg:text-[11px] xl:text-[15px]">
          Return Value
        </p>
      </div>
    </div>
  );
}
