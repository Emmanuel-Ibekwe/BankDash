import InvestmentSummary from "./InvestmentSummary";
import YearlyTotalInvestmentChart from "./Charts/YearlyTotalInvestmentChart";
import MonthlyRevenueChart from "./Charts/MonthlyRevenueChart";
import MyInvestments from "./MyInvestments/MyInvestments";
import TrendingStocks from "./TrendingStocks/TrendingStocks";

export default function Investments() {
  return (
    <div className="w-full box-border pt-6 mt-[140px] lg:mt-0 z-50 lg:pt-[110px] xl:pt-[120px] px-5 lg:px-[2.5%] xl:px-[2%] :bg-background_1 pb-8 ">
      <InvestmentSummary />
      <section className="w-full pt-6 flex flex-col min-[800px]:flex-row space-y-5 min-[800px]:space-y-0 justify-between ">
        <div className="w-full min-[800px]:w-[49%]">
          <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-3 ">
            Yearly Total Investment
          </h2>
          <YearlyTotalInvestmentChart />
        </div>
        <div className="w-full min-[800px]:w-[49%]">
          <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-3 ">
            Monthly Revenue
          </h2>
          <MonthlyRevenueChart />
        </div>
      </section>
      <section className="pt-6 flex justify-between flex-col min-[800px]:flex-row">
        <MyInvestments />
        <TrendingStocks />
      </section>
    </div>
  );
}
