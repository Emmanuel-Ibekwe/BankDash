import { useState } from "react";
import MyExpensesBar from "./MyExpensesBar";
import { capitalizeWords } from "./../../../utils/graph";

export default function MyExpensesChart() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const myExpenses = [
    { month: "jan", amount: 13000 },
    { month: "feb", amount: 10000 },
    { month: "mar", amount: 9000 },
    { month: "apr", amount: 11000 },
    { month: "may", amount: 8500 },
    { month: "jun", amount: 12500 },
    { month: "jul", amount: 11500 },
    { month: "aug", amount: 9500 },
    { month: "sep", amount: 7000 },
    { month: "oct", amount: 6500 },
    { month: "nov", amount: 5500 },
    { month: "dec", amount: 4000 }
  ];

  const amounts = myExpenses.map(expense => expense.amount);
  const maxAmount = Math.max(...amounts);

  return (
    <div className="w-full scrollbar1 overflow-x-scroll h-full flex items-end justify-between min-[900px]:space-x-4 ">
      {myExpenses.map((expense, i) => (
        <MyExpensesBar
          month={capitalizeWords(expense.month)}
          amount={expense.amount}
          maxAmount={maxAmount}
          currentIndex={currentIndex}
          onSetCurrentIndex={setCurrentIndex}
          index={i}
        />
      ))}
    </div>
  );
}
