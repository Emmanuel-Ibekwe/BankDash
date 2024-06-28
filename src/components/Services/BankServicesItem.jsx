import { IncomeIcon } from "../../svg";
import BriefcaseIcon from "../../svg/BriefcaseIcon";
import GraphIcon from "../../svg/GraphIcon";
import UserIcon2 from "../../svg/UserIcon2";
import SafetyShieldIcon from "../../svg/SafetyShieldIcon";

export default function BankServicesItem({ service }) {
  return (
    <div className="w-full mb-4 bg-white p-3 min-[375px]:p-4 rounded-2xl flex items-center justify-between">
      <div className="flex space-x-3 min-[375px]:space-x-4 w-[66%] min-[425px]:w-[70%] min-[775px]:w-[29.97%] items-center">
        <div
          className={`w-[45px] xl:w-[60px] h-[45px] xl:h-[60px] rounded-[15px]
           xl:rounded-[20px] flex items-center justify-center ${
             service === "Bank loans" ||
             service === "Savings accounts" ||
             service === "Business loans"
               ? "bg-[#FFE0EB]"
               : service === "Checking accounts"
               ? "bg-[#FFF5D9]"
               : service === "Debit and credit cards"
               ? "bg-[#E7EDFF]"
               : service === "Life insurance"
               ? "bg-[#DCFAF8]"
               : ""
           } `}
        >
          {service === "Business loans" ? (
            <IncomeIcon className="fill-[#C5C5CF] w-[20px] xl:w-[25px] h-[20px] xl:h-[25px]" />
          ) : service === "Checking accounts" ? (
            <BriefcaseIcon className=" w-[20px] xl:w-[25px] h-[20px] xl:h-[25px]" />
          ) : service === "Savings accounts" ? (
            <GraphIcon className=" w-[20px] xl:w-[25px] h-[20px] xl:h-[25px]" />
          ) : service === "Debit and credit cards" ? (
            <UserIcon2 className=" w-[20px] xl:w-[25px] h-[20px] xl:h-[25px]" />
          ) : service === "Life insurance" ? (
            <SafetyShieldIcon className=" w-[20px] xl:w-[25px] h-[20px] xl:h-[25px]" />
          ) : (
            ""
          )}
        </div>
        <div>
          <h2 className="block min-[375px]:hidden text-text_3 text-[12px] min-[375px]:text-[13px] xl:text-base font-medium">
            {`${service.substring(0, 13)}...`}
          </h2>
          <h2 className="hidden min-[375px]:block text-text_3 text-[12px] min-[375px]:text-[13px] xl:text-base font-medium">
            {service}
          </h2>
          <p className="text-text_2 text-[11px] min-[375px]:text-xs xl:text-[15px]">
            It is long established
          </p>
        </div>
      </div>
      <div className="w-[17.48%] hidden min-[775px]:block">
        <p className="text-text_3 text-[13px] xl:text-base font-medium">
          Lorem epsum
        </p>
        <p className="text-text_2 text-xs xl:text-[15px]">Many publishing</p>
      </div>
      <div className="w-[17.48%] hidden min-[775px]:block">
        <p className="text-text_3 text-[13px] xl:text-base font-medium">
          Lorem epsum
        </p>
        <p className="text-text_2 text-xs xl:text-[15px]">Many publishing</p>
      </div>
      <div className="w-[17.48%] hidden min-[775px]:block">
        <p className="text-text_3 text-[13px] xl:text-base font-medium">
          Lorem epsum
        </p>
        <p className="text-text_2 text-xs xl:text-[15px]">Many publishing</p>
      </div>
      <div className="w-[34%] min-[425px]:w-[30%] min-[775px]:w-[17.58%] text-blue_3">
        <button
          type="button"
          className="text-xs xl:text-[15px] w-[90px] min-[425px]:w-[120px] xl:w-[150px] h-[30px] xl:h-[35px] border-none min-[775px]:border border-blue_3 hover:border-text_2 hover:text-text_2 px-0 min-[425px]:px-4  rounded-full"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
