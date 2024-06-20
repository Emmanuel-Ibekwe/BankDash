import ServicesSummary from "./ServicesSummary";
import BankServicesList from "./BankServicesList";

export default function Services() {
  return (
    <div className="w-full box-border pt-6 mt-[140px] lg:mt-0 mb-[1000px] z-50 lg:pt-[110px] xl:pt-[120px] px-5 lg:px-[2.5%] xl:px-[2%] :bg-background_1 pb-8 ">
      <div className="w-full overflow-x-auto pb-2 scrollbar1 ">
        <ServicesSummary />
      </div>
      <BankServicesList />
    </div>
  );
}
