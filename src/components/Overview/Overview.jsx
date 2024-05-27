import CreditCard from "./CreditCard";
import RecentTransaction from "./RecentTransactions";
import WeeklyActivity from "./WeeklyActivity";
import ExpenseStatistics from "./ExpenseStatistics";
import QuickTransfer from "./QuickTransfer/QuickTransfer";
import SplineChart from "./Chart/SplineChart";

export default function Overview() {
  const cardDetails = {
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    balance: 5376,
    cardNo: 3778234556781234
  };

  return (
    <div className="w-full box-border lg:pt-[110px] xl:pt-[120px] lg:px-[2.5%] xl:px-[2%] bg-background_1 pb-8 mb-[1000px]">
      <section className="flex justify-between pb-2 w-full box-border">
        <div className="w-[31.5%]">
          <h2 className="text-primary_2 font-semibold text-lg xl:text-xl pb-2">
            My Cards
          </h2>
          <CreditCard
            isBlue={true}
            cardHolder={cardDetails.cardHolder}
            validThru={cardDetails.validThru}
            balance={cardDetails.balance}
            cardNo={cardDetails.cardNo}
          />
        </div>
        <div className="w-[31.5%]">
          <h4 className="text-end text-primary_2 font-semibold  pb-3">
            See All
          </h4>
          <CreditCard
            isBlue={false}
            cardHolder={cardDetails.cardHolder}
            validThru={cardDetails.validThru}
            balance={cardDetails.balance}
            cardNo={cardDetails.cardNo}
          />
        </div>
        <div className="w-[31.5%]">
          <p className="text text-primary_2 font-semibold text-lg xl:text-xl pb-2">
            Recent Transaction
          </p>
          <RecentTransaction />
        </div>
      </section>
      <section className="w-full pt-4">
        <div className="flex justify-between w-full">
          <WeeklyActivity />
          <ExpenseStatistics />
        </div>
      </section>
      <section className="w-full pt-6 flex justify-between">
        <div>
          <h4 className="text-primary_2 font-semibold text-lg xl:text-xl pb-2">
            Quick Transfer
          </h4>
          <QuickTransfer />
        </div>
        <div>
          <h4 className="text-primary_2 font-semibold text-lg xl:text-xl pb-2">
            Balance History
          </h4>
          <SplineChart />
        </div>
      </section>
    </div>
  );
}
