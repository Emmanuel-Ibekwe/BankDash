import AccountSummary from "./AccountSummary";
import LastTransactions from "./LastTransactions/LastTransactions";
import CreditCard from "../CreditCards/CreditCard";
import DebitCreditOverview from "./DebitCreditOverview";
import InvoiceesSent from "./InvoiceesSent";

export default function Accounts() {
  const cardDetails = {
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    balance: 5376,
    cardNo: 3778234556781234
  };

  return (
    <div className=" w-full box-border pt-6 mt-[140px] lg:mt-0  z-50 lg:pt-[110px] xl:pt-[120px] px-5 lg:px-[2.5%] xl:px-[2%] :bg-background_1 pb-8">
      <AccountSummary />

      <section className="w-full flex space-y-6 min-[900px]:space-y-0 flex-col min-[900px]:flex-row justify-between pt-6">
        <LastTransactions />
        <div className="w-[45%] min-[900px]:w-[31.8%]">
          <div className="w-full min-w-[265px] min-[600px]:min-w-[320px] min-[900px]:min-w-[231px] w-full flex justify-between">
            <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2">
              My Card
            </h2>
            <p className="font-semibold text-sm min-[600px]:text-[15px] xl:text-[17px] text-primary_2">
              See All
            </p>
          </div>

          <CreditCard
            upperGradient="bg-gradient-to-r from-[#2D60FF] to-[#539BFF]"
            lowerGradient="bg-gradient-to-r from-[#4f7bff] to-[#67a3f8]"
            isBlue={true}
            cardHolder={cardDetails.cardHolder}
            validThru={cardDetails.validThru}
            balance={cardDetails.balance}
            cardNo={cardDetails.cardNo}
          />
        </div>
      </section>

      {/* Third Section */}
      <section className="pt-6 flex justify-between w-full space-y-6 min-[900px]:space-y-0 flex-col min-[900px]:flex-row">
        <DebitCreditOverview />
        <InvoiceesSent />
      </section>
    </div>
  );
}
