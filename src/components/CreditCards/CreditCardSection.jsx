import CreditCard from "./CreditCard";

export default function CreditCardSection() {
  const cardDetails = {
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    balance: 5376,
    cardNo: 3778234556781234
  };

  return (
    <section className="w-full ">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2 w-full">
        My Cards
      </h2>
      <div className="w-full flex justify-between space-x-4 min-[600px]:space-x-6 overflow-x-scroll scrollbar1 min-[900px]:overflow-auto">
        <div className="min-w-[265px] min-[600px]:min-w-[320px] min-[900px]:min-w-[231px] w-[31.82%]">
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

        <div className="min-w-[265px] min-[600px]:min-w-[320px] min-[900px]:min-w-[231px] w-[31.82%]">
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
        <div className="min-w-[265px] min-[600px]:min-w-[320px] min-[900px]:min-w-[231px] w-[31.82%]">
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
    </section>
  );
}
