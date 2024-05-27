import { useState, useEffect } from "react";
import { getYAxisValues } from "./../../../utils/graph";
import CompositeBar from "./Bar/CompositeBar";

export default function Graph() {
  const [yValues, setYValues] = useState([]);
  const [valueHeight, setValueHeight] = useState(0);
  const deposits = [490, 340, 320, 490, 150, 395, 400];
  const withdrawals = [240, 120, 260, 370, 245, 245, 340];
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  useEffect(() => {
    setYValues(getYAxisValues(deposits, withdrawals));
    const height = Math.floor(226 / yValues.length);

    setValueHeight(`h-[${height}]px`);
  }, []);

  return (
    <div className="lg:min-w-[487px] w-full xl:min-w-[706px] h-[261px] xl:h-[332.3px]  flex-initial bg-white pl-8 pr-4 pt-6 !pb-10 box-border rounded-3xl">
      <div className="w-[90%] flex justify-end pb-3 xl:pb-5 mx-auto">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <div className="bg-[#1814F3]  w-[15px] h-[15px] rounded-full" />
            <p className="text-text_2 text-[15px]">Deposit</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#16DBCC] w-[15px] h-[15px] rounded-full" />
            <p className="text-text_2 text-[15px]">Withdrawal</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-40 xl:h-[226px] border-b relative mx-auto">
        <ul className="w-full top-0">
          {yValues.map(y => (
            <li className="w-full lg:h-8 xl:h-[45px] border-t relative">
              <div className="absolute -top-3 -left-9">{y}</div>
            </li>
          ))}
        </ul>
        <div className="absolute -bottom-2 -left-5">0</div>

        <div className="absolute top-0 w-full h-full flex items-end justify-evenly">
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
