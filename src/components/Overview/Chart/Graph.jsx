import { useState, useEffect } from "react";
import { getYAxisValues } from "./../../../utils/graph";
import CompositeBar from "./Bar/CompositeBar";

export default function Graph() {
  const [yValues, setYValues] = useState([]);
  const [deposits, setDeposits] = useState([490, 340, 320, 490, 150, 395, 400]);
  const [withdrawals, setWithdrawals] = useState([
    240,
    120,
    260,
    370,
    245,
    245,
    340
  ]);

  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  useEffect(() => {
    setDeposits(prev => prev);
    setWithdrawals(prev => prev);
    setYValues(getYAxisValues(deposits, withdrawals));
  }, [deposits, withdrawals]);

  return (
    <div className="z-20 lg:min-w-[487px] w-full h-[261px] xl:h-[345px]  flex-initial bg-white pr-1 min-[900px]:pr-4 pl-8 pt-6 !pb-10 box-border rounded-3xl">
      <div className="w-[90%] flex justify-end pb-3 xl:pb-5 mx-auto">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <div className="bg-blue_3  w-[15px] h-[15px] rounded-full" />
            <p className="text-text_2 text-xs min-[900px]:text-[15px]">
              Deposit
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#16DBCC] w-[15px] h-[15px] rounded-full" />
            <p className="text-text_2 text-xs min-[900px]:text-[15px]">
              Withdrawal
            </p>
          </div>
        </div>
      </div>
      <div className="w-[85%] h-40 xl:h-[226px] border-b relative mx-auto">
        <ul className="w-full top-0">
          {yValues.map(y => (
            <li className="w-full h-8 xl:h-[45px] border-t relative">
              <div className="absolute z-20 -top-2 -left-9 text-text_2 text-xs xl:text-[13px]">
                {y}
              </div>
            </li>
          ))}
        </ul>
        <div className="absolute z-20 -bottom-2 -left-5 text-text_2 text-xs xl:text-[13px]">
          0
        </div>

        <div className="absolute z-20 top-0 w-full h-full flex items-end justify-evenly">
          {deposits.map((deposit, i) => (
            <CompositeBar
              key={i}
              day={days[i]}
              withdrawal={withdrawals[i]}
              deposit={deposit}
              maxValue={yValues[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
