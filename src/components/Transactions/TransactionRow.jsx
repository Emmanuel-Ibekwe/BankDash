import { capitalizeWords } from "./../../utils/graph";
import { hideSomeDigits } from "../../utils/numberFormat";
import EncircledArrow from "./../../svg/EncircledArrow";
export default function TransactionRow({
  description,
  transactionId,
  type,
  card,
  date,
  amount,
  isIncome
}) {
  return (
    <div className="flex items-center justify-between min-[890px]:justify-normal w-full py-2 border-t-2 border-[#E6EFF5] text-text_3 text-xs xl:text-base">
      <div className="min-[890px]:w-[20%] flex items-center justify-start space-x-3">
        <p className={`${!isIncome && "rotate-180"}`}>
          <EncircledArrow />
        </p>
        <p>{capitalizeWords(description)}</p>
      </div>
      <div className="w-[12%] hidden min-[890px]:block">#{transactionId}</div>
      <div className="w-[12%] hidden min-[890px]:block">{type}</div>
      <div className="w-[12%] hidden min-[890px]:block">
        {hideSomeDigits(card).substring(0, 9)}
      </div>
      <div className="w-[18%] hidden min-[890px]:block">{date}</div>
      <div
        className={`min-[890px]:w-[10%] ${
          isIncome ? "text-[#FE5C73]" : "text-[#16DBAA]"
        }`}
      >
        {isIncome ? "+" : "-"}${amount}
      </div>
      <div className="w-[12%] hidden min-[890px]:block">
        <div className="hidden min-[890px]:block border border-blue_3 text-blue_3 w-fit px-4 py-2 rounded-full text-center">
          Download
        </div>
      </div>
    </div>
  );
}
