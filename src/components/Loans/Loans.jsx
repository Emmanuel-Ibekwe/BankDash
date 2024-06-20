import LoansSummary from "./LoansSummary";
import ActiveLoansOverview from "./ActiveLoansOverview";

export default function Loans() {
  return (
    <div className=" w-full box-border pt-6 mt-[140px] mb-[1000px] lg:mt-0  z-50 lg:pt-[110px] xl:pt-[120px] px-5 lg:px-[2.5%] xl:px-[2%] :bg-background_1 pb-8">
      <div className="w-full scrollbar1 overflow-x-scroll min-[1070px]:overflow-x-auto pb-2">
        <LoansSummary />
      </div>

      <ActiveLoansOverview />
    </div>
  );
}
