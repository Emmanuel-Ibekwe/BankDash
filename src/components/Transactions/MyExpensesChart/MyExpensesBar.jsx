import { useEffect, useState } from "react";
import { numberWithCommas } from "./../../../utils/numberFormat";

export default function MyExpensesBar({
  amount,
  month,
  maxAmount,
  currentIndex,
  onSetCurrentIndex,
  index
}) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const barId = document.getElementById(`my-expenses-${month}`);
    const percentHeight = (amount / maxAmount) * 100;
    barId.style.height = `${percentHeight}%`;
  });

  const handleSelectBar = () => {
    onSetCurrentIndex(index);
    setIsSelected(true);
  };
  console.log("index", index);
  console.log("currentIndex", currentIndex);
  console.log("isSelected", isSelected);
  return (
    <div className="h-full flex flex-col justify-end items-center">
      <div className="h-full flex flex-col items-center justify-end">
        <p
          className={`text-xs xl:text-sm font-medium text-[#343C6A] ${
            isSelected && currentIndex === index ? "visible" : "invisible"
          }`}
        >
          ${numberWithCommas(amount)}
        </p>
        <div
          onClick={handleSelectBar}
          className={`w-[37px] rounded-[10px] cursor-pointer  ${
            isSelected && currentIndex === index
              ? "bg-[#16DBCC] shadow-2xl shadow-[#16dbcc]"
              : "bg-[#EDF0F7]"
          }`}
          id={`my-expenses-${month}`}
        ></div>
      </div>
      <p className="text-text_2 text-xs xl:text-[13px]">{month}</p>
    </div>
  );
}
