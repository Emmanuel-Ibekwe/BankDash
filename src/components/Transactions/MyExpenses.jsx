import MyExpensesChart from "./MyExpensesChart/MyExpensesChart";

export default function MyExpenses() {
  return (
    <div className="w-full lg:min-w-[231px] h-[230px] min-[900px]:h-[190px] lg:h-[170px] xl:h-[230px] flex-initial bg-white rounded-3xl p-6 min-[900px]:px-3 min-[900px]:py-4 xl:p-5">
      <MyExpensesChart />
    </div>
  );
}
