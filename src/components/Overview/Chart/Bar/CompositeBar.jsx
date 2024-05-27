import React from "react";
import DepositBar from "./DepositBar";
import WithdrawalBar from "./WithdrawalBar";

export default function CompositeBar({ withdrawal, deposit, maxValue, day }) {
  return (
    <div className="flex flex-col items-center space-y-3  translate-y-7 w-[42px]">
      <div className="lg:h-40 xl:h-56 flex items-end w-full justify-between">
        <DepositBar deposit={deposit} maxValue={maxValue} day={day} />
        <WithdrawalBar withdrawal={withdrawal} maxValue={maxValue} day={day} />
      </div>
      <div className="text-text_2 text-xs">{day}</div>
    </div>
  );
}
