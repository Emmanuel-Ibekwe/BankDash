import { hideSomeDigits } from "../../../utils/numberFormat";
import { capitalizeWords } from "./../../../utils/graph";
import ServiceIcon2 from "../../../svg/ServiceIcon2";
import SubscriptionIcon from "../../../svg/SubscriptionIcon";
import Person from "../../../svg/PersonIcon";

export default function LastTransactionRow({
  description,
  type,
  card,
  isIncome,
  status,
  amount,
  date
}) {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="hidden min-[370px]:flex w-[80%] min-[375px]:w-[70%] min-[720px]:w-[38.5%] flex items-center justify-start space-x-3">
        <div className="w-[45px] min-[520px]:w-[55px] min-[900px]:w-10 xl:w-[55px] h-[45px] min-[520px]:h-[55px] min-[900px]:h-10 xl:h-[55px] bg-[#DCFAF8] rounded-2xl flex items-center justify-center">
          {type === "service" ? (
            <ServiceIcon2 className="w-5 min-[520px]:w-[25px] min-[900px]:w-5 xl:w-full h-5 min-[520px]:h-[25px] min-[900px]:h-5 xl:h-[25px]" />
          ) : type === "shopping" ? (
            <SubscriptionIcon className="w-5 min-[520px]:w-[25px] min-[900px]:w-5 xl:w-full h-5 min-[520px]:h-[25px] min-[900px]:h-5 xl:h-[25px]" />
          ) : type === "transfer" ? (
            <Person className="w-5 min-[520px]:w-[25px] min-[900px]:w-5 xl:w-full h-5 min-[520px]:h-[25px] min-[900px]:h-5 xl:h-[25px]" />
          ) : (
            ""
          )}
        </div>
        <div className="">
          <div className="text-sm min-[520px]:text-base min-[900px]:text-xs xl:text-base text-text_3 font-medium">
            {capitalizeWords(description)}
          </div>
          <div className=" text-sm min-[520px]:text-base min-[900px]:text-xs xl:text-[15px] text-text_2">
            {capitalizeWords(date)}
          </div>
        </div>
      </div>

      <div className="block min-[370px]:hidden w-[80%] min-[375px]:w-[70%] min-[720px]:w-[38.5%] flex items-center justify-start space-x-3">
        <div className="w-[45px] min-[520px]:w-[55px] min-[900px]:w-10 xl:w-[55px] h-[45px] min-[520px]:h-[55px] min-[900px]:h-10 xl:h-[55px] bg-[#DCFAF8] rounded-2xl flex items-center justify-center">
          {type === "service" ? (
            <ServiceIcon2 className="w-5 min-[520px]:w-[25px] min-[900px]:w-5 xl:w-full h-5 min-[520px]:h-[25px] min-[900px]:h-5 xl:h-[25px]" />
          ) : type === "shopping" ? (
            <SubscriptionIcon className="w-5 min-[520px]:w-[25px] min-[900px]:w-5 xl:w-full h-5 min-[520px]:h-[25px] min-[900px]:h-5 xl:h-[25px]" />
          ) : type === "transfer" ? (
            <Person className="w-5 min-[520px]:w-[25px] min-[900px]:w-5 xl:w-full h-5 min-[520px]:h-[25px] min-[900px]:h-5 xl:h-[25px]" />
          ) : (
            ""
          )}
        </div>
        <div className="">
          <div className="text-sm min-[520px]:text-base min-[900px]:text-xs xl:text-base text-text_3 font-medium">
            {description.length <= 13
              ? capitalizeWords(description)
              : `${capitalizeWords(description).substring(0, 10)}...`}
          </div>
          <div className=" text-sm min-[520px]:text-base min-[900px]:text-xs xl:text-[15px] text-text_2">
            {capitalizeWords(date)}
          </div>
        </div>
      </div>

      <div className="hidden min-[720px]:block w-[16.5%] text-sm min-[520px]:text-base min-[900px]:text-xs xl:text-base text-text_2 ">
        {capitalizeWords(type)}
      </div>
      <div className="hidden min-[720px]:block w-[16.5%] text-sm min-[520px]:text-base min-[900px]:text-xs xl:text-base text-text_2 ">
        {hideSomeDigits(card).substring(0, 9)}
      </div>
      <div className="hidden min-[720px]:block w-[17.5%] text-sm min-[520px]:text-base min-[900px]:text-xs xl:text-base text-text_2 ">
        {capitalizeWords(status)}
      </div>
      <div
        className={`w-[20%] min-[375px]:w-[30%] min-[720px]:w-[11%] text-end min-[720px]:text-center text-sm min-[520px]:text-base min-[900px]:text-xs xl:text-base ${
          isIncome ? "text-[#16DBAA]" : "text-[#FE5C73]"
        }`}
      >
        {`${isIncome ? "+" : "-"}`}${amount}
      </div>
    </div>
  );
}
