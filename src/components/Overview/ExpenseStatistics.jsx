import PieChart from "./PIeChart/PieChart";

export default function ExpenseStatistics() {
  return (
    <section className="mx-auto min-[900px]:m-0 w-full min-[900px]:w-[31%] lg:min-w-[231px]  box-border">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2">
        Expense Statistics
      </h2>
      <div className="flex flex-col items-center justify-center w-full  h-[261px] xl:h-[345px] flex-initial bg-white rounded-3xl lg:px-3 lg:py-4 xl:p-3">
        <PieChart />
        <div className="mx-auto text-center min-[900px]:m-0 w-[80%] min-[900px]:w-full xl:w-4/5 flex flex-col space-y-1 justify-center mx-auto lg:px-1 pb-4">
          <div className="flex items-center justify-between w-full">
            <div className="text-center flex items-center justify-center space-x-1 xl:space-x-2 w-1/2">
              <p className="bg-[#343C6A] rounded-full w-3 h-3"></p>
              <p className="text-xs">Entertainment</p>
            </div>
            <div className="flex items-center justify-center space-x-1 xl:space-x-2 w-1/2">
              <p className="bg-[#FC7900] rounded-full w-3 h-3"></p>
              <p className="text-xs ">Bill Expenses</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center space-x-1 xl:space-x-2 w-1/2">
              <p className="bg-[#1814F3] rounded-full w-3 h-3"></p>
              <p className="text-xs">Investment</p>
            </div>
            <div className="flex items-center justify-center space-x-1 xl:space-x-2 w-1/2">
              <p className="bg-[#FA00FF] rounded-full w-3 h-3"></p>
              <p className="text-xs">Others</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
