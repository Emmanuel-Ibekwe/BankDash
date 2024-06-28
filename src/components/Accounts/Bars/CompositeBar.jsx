import { useEffect } from "react";

export default function CompositeBar({ day, maxValue, credit, debit }) {
  useEffect(() => {
    const debitId = document.getElementById(`debit-${day}`);
    const debitPercentHeight = (debit / maxValue) * 100;
    debitId.style.height = `${debitPercentHeight}%`;

    const creditId = document.getElementById(`credit-${day}`);
    const creditPercentHeight = (credit / maxValue) * 100;
    creditId.style.height = `${creditPercentHeight}%`;
  }, [day, maxValue, credit, debit]);
  return (
    <div className="flex flex-col space-y-2 h-full">
      <div className="flex justify-between items-end w-[25px] min-[600px]:w-12 xl:w-[70px] h-full item">
        <div
          id={`debit-${day}`}
          className="w-[10px] min-[600px]:w-5 xl:w-[30px] bg-[#1A16F3] rounded-[10px]"
        ></div>
        <div
          id={`credit-${day}`}
          className="w-[10px] min-[600px]:w-5 xl:w-[30px] bg-[#FCAA0B] rounded-[10px]"
        ></div>
      </div>
      <p className="justify-center flex text-xs xl:text-base">{day}</p>
    </div>
  );
}
