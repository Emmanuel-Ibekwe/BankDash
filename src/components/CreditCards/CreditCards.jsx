import CreditCardSection from "./CreditCardSection";

import AddNewCard from "./AddNewCard";
import CardLIst from "./CardLIst";
import CardSetting from "./CardSetting";
import CardExpenseStatistics from "./CardExpenseStatistics";

export default function CreditCards() {
  return (
    <div className="w-full box-border pt-6 mt-[140px] lg:mt-0  z-50 lg:pt-[110px] xl:pt-[120px] px-5 lg:px-[2.5%] xl:px-[2%] bg-background_1 pb-8">
      <CreditCardSection />
      <section className="w-full flex flex-col min-[820px]:flex-row space-y-5 min-[820px]:space-y-0 justify-between pt-6">
        <CardExpenseStatistics />
        <CardLIst />
      </section>
      <section className="pt-6 w-full flex flex-col space-y-6 min-[820px]:space-y-0 min-[820px]:flex-row justify-between">
        <AddNewCard />
        <CardSetting />
      </section>
    </div>
  );
}
