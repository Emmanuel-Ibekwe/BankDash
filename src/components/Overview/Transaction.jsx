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
    <div className=" flex space-x-5 min-[900px]:space-x-2 xl:space-x-3 items-center w-full">
      <div
        className={`${
          transaction_icon == "card"
            ? "bg-[#FFF5D9]"
            : transaction_icon == "paypal"
            ? "bg-[#E7EDFF]"
            : "bg-[#DCFAF8]"
        } w-14 min-[900px]:w-10 xl:w-14 h-14 min-[900px]:h-10 xl:h-14 rounded-full flex items-center justify-center`}
      >
        {transaction_icon == "card" ? (
          <CardIcon className="h-[28px] min-[900px]:h-5 xl:h-[28px] w-[28px] min-[900px]:w-5 xl:w-[28px]" />
        ) : transaction_icon == "paypal" ? (
          <PaypalIcon className="w-[28px] min-[900px]:h-5 xl:h-[28px]  w-[28px] min-[900px]:w-5 xl:w-[28px]" />
        ) : (
          <CoinIcon className="h-[28px] min-[900px]:h-5 xl:h-[28px] w-[28px] min-[900px]:w-5 xl:w-[28px]" />
        )}
      </div>
      <div className="grow hidden min-[375px]:block min-[900px]:hidden xl:block">
        <p className="text-[#232323] font-medium text-[13px] min-[600px]:text-[13.5px] min-[720px]:text-base">
          {title}
        </p>
        <p className="text-[#718EBF] text-[12px] min-[600px]:text-[13px] min-[720px]:text-[15px]">
          {date}
        </p>
      </div>
      <div className="grow block min-[375px]:hidden min-[900px]:block xl:hidden">
        <p className="text-[#232323] font-medium text-[13px] xl:text-base">
          {title.length > 12 ? `${title.substring(0, 9)}...` : title}
        </p>
        <p className="text-[#718EBF] text-[12px] xl:text-[15px]">{date}</p>
      </div>
      <div
        className={`${
          isReceived ? "text-[#41D4A8]" : "text-[#FF4B4A]"
        } font-medium flex items-center justify-center  text-[11px] min-[500px]:text-[13.5px] min-[720px]:text-base min-[900px]:text-[11px] xl:text-base`}
      >
        {isReceived ? "+" : "-"}${numberWithCommas(amount)}
      </div>
    </div>
  );
}
