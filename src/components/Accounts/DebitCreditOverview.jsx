import { numberWithCommas } from "./../../utils/numberFormat";
import CompositeBar from "./Bars/CompositeBar";

export default function DebitCreditOverview() {
  const debits = [490, 340, 320, 490, 150, 395, 400];
  const credits = [240, 120, 260, 370, 245, 245, 340];
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const totalDebit = 7560;
  const totalCredit = 5860;
  const maxValue = Math.max(...credits, ...debits);

  return (
    <div className="w-full min-[900px]:w-[66.36%]">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2 ">
        Debit &#38; Credit Overview
      </h2>
      <div className="bg-white w-full rounded-3xl h-[245px] min-[600px]:h-[276px] xl:h-[364px] pt-5 p-6">
        <div className="w-full flex justify-end min-[420px]:justify-between text-xs xl:text-base">
          <p className="text-text_2 w-[57.7%] hidden min-[420px]:block">
            <span className="text-[#333B69] ">
              ${numberWithCommas(totalDebit)}
            </span>{" "}
            Debited &#38;{" "}
            <span className="text-[#333B69] ">
              ${numberWithCommas(totalCredit)}
            </span>{" "}
            Credited in this Week
          </p>
          <div className="flex justify-end space-x-6 w-[28.2%]">
            <p className="flex space-x-2 items-center">
              <span className="block w-3 xl:w-[15px] h-3 xl:h-[15px] bg-[#1A16F3] rounded xl:rounded-[5px]"></span>{" "}
              <span>Debit</span>
            </p>
            <p className="flex space-x-2 items-center">
              <span className="block w-3 xl:w-[15px] h-3 xl:h-[15px] bg-[#FCAA0B] rounded xl:rounded-[5px]"></span>{" "}
              <span>Credit</span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between h-[90%] xl:h-[93%] pt-5 xl:pt-8">
          {debits.map((d, i) => (
            <CompositeBar
              day={days[i]}
              maxValue={maxValue}
              credit={credits[i]}
              debit={d}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
