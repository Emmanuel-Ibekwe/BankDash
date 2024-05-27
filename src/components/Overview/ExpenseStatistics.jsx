import PieChart from "./PIeChart/PieChart";

export default function ExpenseStatistics() {
  return (
    <section className=" w-[31%] lg:min-w-[231px] xl:min-w-[335px] box-border">
      <h2 className="text-primary_2 font-semibold text-lg xl:text-xl pb-2">
        Expense Statistics
      </h2>
      <div className="flex flex-col items-center justify-center w-full h-[261px] xl:min-w-[335px] xl:h-[332.3px] flex-initial bg-white rounded-3xl lg:px-3 lg:py-4 xl:p-3">
        <PieChart />
        <div className="w-full xl:w-4/5 flex flex-col space-y-1 justify-center ">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-1 xl:space-x-2 w-1/2">
              <p className="bg-[#343C6A] rounded-full w-3 h-3"></p>
              <p className="text-xs">Entertainment</p>
            </div>
            <div className="flex items-center space-x-1 xl:space-x-2 w-1/2">
              <p className="bg-[#FC7900] rounded-full w-3 h-3"></p>
              <p className="text-xs">Bill Expenses</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-1 xl:space-x-2 w-1/2">
              <p className="bg-[#1814F3] rounded-full w-3 h-3"></p>
              <p className="text-xs">Investment</p>
            </div>
            <div className="flex items-center space-x-1 xl:space-x-2 w-1/2">
              <p className="bg-[#FA00FF] rounded-full w-3 h-3"></p>
              <p className="text-xs">Others</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
