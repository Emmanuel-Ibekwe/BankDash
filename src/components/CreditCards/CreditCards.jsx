import CreditCardSection from "./CreditCardSection";

import AddNewCard from "./AddNewCard";
import CardLIst from "./CardLIst";
import CardSetting from "./CardSetting";

export default function CreditCards() {
  return (
    <div className="w-full box-border pt-6 mt-[140px] lg:mt-0  z-50 lg:pt-[110px] xl:pt-[120px] px-5 lg:px-[2.5%] xl:px-[2%] bg-background_1 pb-8">
      <CreditCardSection />
      <section className="w-full flex flex-col min-[820px]:flex-row space-y-5 min-[820px]:space-y-0 justify-between pt-6">
        <div className="w-full min-[820px]:w-[31.82%]">
          <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2 w-full">
            Card Expense Statistics
          </h2>
          <div className="w-full h-[210px] min-[375px]:h-[231px] xl:h-[290px] bg-white rounded-3xl"></div>
        </div>
        <CardLIst />
      </section>
      <section className="pt-6 w-full flex flex-col space-y-6 min-[820px]:space-y-0 min-[820px]:flex-row justify-between">
        <AddNewCard />
        <CardSetting />
      </section>
    </div>
  );
}
