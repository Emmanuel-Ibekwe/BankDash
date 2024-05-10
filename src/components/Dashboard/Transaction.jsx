import { PaypalIcon, CoinIcon, CardIcon } from "../../svg";
import { numberWithCommas } from "../../utils/numberFormat";
export default function Transaction({
  title,
  date,
  isReceived,
  amount,
  transaction_icon
}) {
  return (
    <div className=" flex lg:space-x-2 xl:space-x-3 items-center w-full">
      <div
        className={`${
          transaction_icon == "card"
            ? "bg-[#FFF5D9]"
            : transaction_icon == "paypal"
            ? "bg-[#E7EDFF]"
            : "bg-[#DCFAF8]"
        }  lg:w-10 xl:w-14 lg:h-10 xl:h-14 rounded-full flex items-center justify-center`}
      >
        {transaction_icon == "card" ? (
          <CardIcon className="lg:h-5 xl:h-[28px] lg:w-5 xl:w-[28px]" />
        ) : transaction_icon == "paypal" ? (
          <PaypalIcon className="lg:h-5 xl:h-[28px] lg:w-5 xl:w-[28px]" />
        ) : (
          <CoinIcon className="lg:h-5 xl:h-[28px] lg:w-5 xl:w-[28px]" />
        )}
      </div>
      <div className="grow hidden xl:block">
        <p className="text-[#232323] font-medium lg:text-[13px] xl:text-base">
          {title}
        </p>
        <p className="text-[#718EBF] lg:text-[12px] xl:text-[15px]">{date}</p>
      </div>
      <div className="grow lg:block xl:hidden">
        <p className="text-[#232323] font-medium lg:text-[13px] xl:text-base">
          {title.length > 12 ? `${title.substring(0, 9)}...` : title}
        </p>
        <p className="text-[#718EBF] lg:text-[12px] xl:text-[15px]">{date}</p>
      </div>
      <div
        className={`${
          isReceived ? "text-[#41D4A8]" : "text-[#FF4B4A]"
        } font-medium flex items-center justify-center lg:text-[11px] xl:text-base`}
      >
        {isReceived ? "+" : "-"}${numberWithCommas(amount)}
      </div>
    </div>
  );
}
