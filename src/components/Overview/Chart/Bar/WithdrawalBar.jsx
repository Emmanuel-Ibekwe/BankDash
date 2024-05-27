import { useEffect } from "react";

export default function WithdrawalBar({ withdrawal, maxValue, day }) {
  useEffect(() => {
    const sat1 = document.getElementById(`${day}-w`);
    const percentHeight = (withdrawal / maxValue) * 100;
    sat1.style.height = `${percentHeight}%`;
  });

  return (
    <div
      id={`${day}-w`}
      className="w-2.5 xl:w-[15px] h-[30%] bg-[#16DBCC] rounded-b-[30px] rounded-t-[30px]"
    ></div>
  );
}
