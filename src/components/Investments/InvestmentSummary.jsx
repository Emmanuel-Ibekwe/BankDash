import { numberWithCommas } from "./../../utils/numberFormat";
import MoneyBagIcon from "./../../svg/MoneyBagIcon";
import PieChartIcon from "../../svg/PieChartIcon";
import RepeatIcon from "./../../svg/RepeatIcon";

export default function InvestmentSummary() {
  const investment_summary = {
    totalInvestment: 150000,
    numOfInvestments: 1250,
    rate: -5.8
  };

  return (
    <div className="w-full flex flex-col min-[800px]:flex-row space-y-5 min-[800px]:space-y-0 items-center justify-between">
      <div className="w-full min-[800px]:w-[32.11%] bg-white rounded-2xl min-[800px]:rounded-[25px] flex space-x-4  px-6 xl:px-8 py-4">
        <div className="w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] rounded-full bg-[#DCFAF8] flex items-center justify-center">
          <MoneyBagIcon className="w-[20px] xl:w-[30px] h-[20px] xl:h-[30px] fill-[#16DBCC]" />
        </div>
        <div>
          <p className="text-text_2 text-xs xl:text-base ">
            Total Amount Invested
          </p>
          <p className="text-base xl:text-xl font-semibold">
            ${numberWithCommas(investment_summary.totalInvestment)}
          </p>
        </div>
      </div>

      {/* Number of Investments */}
      <div className="w-full min-[800px]:w-[32.11%] bg-white rounded-2xl min-[800px]:rounded-[25px] flex space-x-4  px-6 xl:px-8 py-4">
        <div className="w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] rounded-full bg-[#FFE0EB] flex items-center justify-center">
          <PieChartIcon className="w-[20px] xl:w-[30px] h-[20px] xl:h-[30px] " />
        </div>
        <div>
          <p className="text-text_2 text-xs xl:text-base ">
            Number of Investments
          </p>
          <p className="text-base xl:text-xl font-semibold">
            ${numberWithCommas(investment_summary.numOfInvestments)}
          </p>
        </div>
      </div>

      {/* Rate of Return */}
      <div className="w-full min-[800px]:w-[32.11%] bg-white rounded-2xl min-[800px]:rounded-[25px] flex space-x-4  px-6 xl:px-8 py-4">
        <div className="w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] rounded-full bg-[#E7EDFF] flex items-center justify-center">
          <RepeatIcon className="w-[20px] xl:w-[30px] h-[20px] xl:h-[30px] " />
        </div>
        <div>
          <p className="text-text_2 text-xs xl:text-base ">
            Number of Investments
          </p>
          <p className="text-base xl:text-xl font-semibold">
            ${numberWithCommas(investment_summary.numOfInvestments)}
          </p>
        </div>
      </div>
    </div>
  );
}
