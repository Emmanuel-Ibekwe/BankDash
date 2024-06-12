import CreditCard from "../CreditCards/CreditCard";
import MyExpenses from "./MyExpenses";
import RecentTransactions_2 from "./RecentTransactions_2";

export default function Transactions() {
  const cardDetails = {
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    balance: 5376,
    cardNo: 3778234556781234
  };

  return (
    <div className="w-full box-border pt-6 mt-[140px] lg:mt-0 z-50 lg:pt-[110px] xl:pt-[120px] px-5 lg:px-[2.5%] xl:px-[2%] :bg-background_1 pb-8 ">
      <section className=" flex flex-col min-[900px]:flex-row min-[900px]:space-x-[2.75%] lg:justify-between pb-2 w-full box-border ">
        {/* Credit Card Section */}
        <div className="pb-1 flex space-x-5 min-[720px]:justify-between w-full min-[900px]:w-[65.75%] scrollbar1 overflow-x-scroll min-[720px]:overflow-x-auto">
          <div className="w-[47.9%] min-w-[265px] min-[600px]:min-w-[320px] min-[900px]:min-w-[231px] lg:min-w-[231px]">
            <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2">
              My Cards
            </h2>
            <CreditCard
              upperGradient="bg-gradient-to-br from-blue_2 to-blue_1"
              lowerGradient="bg-[#4C49ED]"
              isBlue={true}
              cardHolder={cardDetails.cardHolder}
              validThru={cardDetails.validThru}
              balance={cardDetails.balance}
              cardNo={cardDetails.cardNo}
            />
          </div>
          <div className="w-[47.9%] min-w-[265px] min-[600px]:min-w-[320px] min-[900px]:min-w-[231px] lg:min-w-[231px]">
            <h4 className="text-end text-base min-[600px]:text-lg xl:text-xl text-primary_2 font-semibold  pb-3">
              See All
            </h4>
            <CreditCard
              upperGradient="bg-white"
              lowerGradient="bg-white border-t border-[#DFEAF2]"
              isBlue={false}
              cardHolder={cardDetails.cardHolder}
              validThru={cardDetails.validThru}
              balance={cardDetails.balance}
              cardNo={cardDetails.cardNo}
            />
          </div>
        </div>

        <div className="w-full mx-auto   min-[900px]:w-[31.5%] min-w-[265px] lg:min-w-[231px] pt-3 min-[900px]:pt-0">
          <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2">
            My Expenses
          </h2>
          <MyExpenses />
        </div>
      </section>
      <section>
        <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2 pt-6">
          Recent Transactions
        </h2>
        <RecentTransactions_2 />
      </section>
    </div>
  );
}
