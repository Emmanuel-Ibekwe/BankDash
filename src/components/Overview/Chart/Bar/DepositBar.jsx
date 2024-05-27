import { useEffect } from "react";

export default function DepositBar({ deposit, maxValue, day }) {
  useEffect(() => {
    const sat1 = document.getElementById(`${day}-d`);
    const percentHeight = (deposit / maxValue) * 100;
    sat1.style.height = `${percentHeight}%`;
  });

  return (
    <div
      id={`${day}-d`}
      className={`w-2.5 xl:w-[15px]  bg-[#1814F3] rounded-b-[30px] rounded-t-[30px]`}
    ></div>
  );
}
