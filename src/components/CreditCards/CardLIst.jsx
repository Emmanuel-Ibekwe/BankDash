import { capitalizeWords } from "./../../utils/graph";
import { hideSomeDigits } from "../../utils/numberFormat";
import { CreditCardIcon } from "../../svg/index";

export default function CardLIst() {
  const cards = [
    {
      cardType: "secondary",
      bank: "DBL Bank",
      cardNo: 3778234556781234,
      name: "William"
    },
    {
      cardType: "secondary",
      bank: "BRC Bank",
      cardNo: 3778234556784300,
      name: "Michael"
    },
    {
      cardType: "secondary",
      bank: "ADB Bank",
      cardNo: 3778234556787560,
      name: "Edward"
    }
  ];
  return (
    <div className="w-full min-[820px]:w-[65.91%] ">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2 w-full">
        Card List
      </h2>

      <div className="w-full h-[210px] min-[375px]:h-[231px] xl:h-[290px] flex flex-col justify-between items-center">
        {cards.map((el, i) => (
          <div className="bg-white w-full p-2 min-[375px]:p-3  xl:pr-6 rounded-2xl min-[820px]:rounded-3xl flex justify-between items-center">
            <div className="flex space-x-2.5 xl:space-x-4 items-center">
              <div
                className={`w-[45px] xl:w-[60px] h-[45px] xl:h-[60px] rounded-xl xl:rounded-[20px] flex items-center justify-center ${
                  i === 0
                    ? "bg-[#E7EDFF]"
                    : i === 1
                    ? "bg-[#FFE0EB]"
                    : i === 2
                    ? "bg-[#FFF5D9]"
                    : ""
                }`}
              >
                <CreditCardIcon
                  className={`w-[20px] xl:w-[26px] h-[20px] xl:h-[26px]`}
                  fillColor={`${
                    i === 0
                      ? "#396AFF"
                      : i === 1
                      ? "#FF82AC"
                      : i === 2
                      ? "#FFBB38"
                      : ""
                  }`}
                />
              </div>
              <div className="">
                <p className=" text-text_3 font-medium text-[11px] min-[375px]:text-sm min-[600px]:text-xs xl:text-base">
                  Card Type
                </p>
                <p className=" text-[10px] min-[375px]:text-xs xl:text-[15px] text-text_2">
                  {capitalizeWords(el.cardType)}
                </p>
              </div>
            </div>

            <div className="">
              <p className=" text-text_3 font-medium text-[11px] min-[375px]:text-sm min-[600px]:text-xs xl:text-base">
                Bank
              </p>
              <p className=" text-[10px] min-[375px]:text-xs xl:text-[15px] text-text_2">
                {el.bank}
              </p>
            </div>
            <div className="hidden min-[600px]:block ">
              <p className=" text-text_3 font-medium text-xs xl:text-base">
                Card Number
              </p>
              <p className=" text-xs xl:text-[15px] text-text_2">
                {hideSomeDigits(el.cardNo)}
              </p>
            </div>
            <div className="hidden min-[600px]:block ">
              <p className=" text-text_3 font-medium text-xs xl:text-base">
                Name in Card
              </p>
              <p className=" text-xs xl:text-[15px] text-text_2">
                {capitalizeWords(el.name)}
              </p>
            </div>
            <div className=" text-blue_3 text-[10px] min-[375px]:text-[11px] xl:text-[15px] font-medium">
              View Details
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
