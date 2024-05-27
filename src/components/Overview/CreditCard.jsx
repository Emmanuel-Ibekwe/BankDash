import cardChip from "../../assets/card_chip.png";
import cardChipDark from "../../assets/card_chip_dark.png";
import masterCardIcon from "../../assets/mastercard_icon.png";
import masterCardIconDark from "../../assets/mastercard_dark.png";
import { numberWithCommas, hideSomeDigits } from "../../utils/numberFormat";

export default function CreditCard({
  isBlue,
  cardHolder,
  validThru,
  balance,
  cardNo
}) {
  return (
    <div
      className={`${
        isBlue ? "bg-gradient-to-br from-blue_2 to-blue_1" : "bg-white "
      } w-full lg:min-w-[231px] xl:min-w-[335px]  lg:h-[170px] xl:h-[230px] rounded-3xl border border-[#DFEAF2]   text-white overflow-hidden 
      `}
    >
      <div className="flex flex-col lg:space-y-4 xl:space-y-10 box-border lg:pb-3 xl:pb-6 px-4 lg:pt-4 xl:pt-6">
        <div className="flex justify-between items-center ">
          <div>
            <h6
              className={`lg:text-[11px] xl:text-xs font-normal ${!isBlue &&
                "text-text_2"}`}
            >
              Balance
            </h6>
            <h3
              className={`lg:text-base xl:text-xl font-semibold ${!isBlue &&
                "text-primary_2"}`}
            >
              ${numberWithCommas(balance)}
            </h3>
          </div>
          <div className="lg:w-[29px] xl:w-fit lg:h-[29px] xl:h-fit">
            <img src={isBlue ? cardChip : cardChipDark} alt="" />
          </div>
        </div>
        <div className="flex justify-start space-x-12 text-white">
          <div className="">
            <p
              className={`lg:text-[10px] xl:text-xs font-normal ${!isBlue &&
                "text-text_2"}`}
            >
              CARD HOLDER
            </p>
            <p
              className={`lg:text-[13px] xl:text-sm font-semibold ${!isBlue &&
                "text-primary_2"}`}
            >
              {cardHolder}
            </p>
          </div>
          <div className="text-start">
            <p
              className={`lg:text-[10px] xl:text-xs font-normal ${!isBlue &&
                "text-text_2"}`}
            >
              VALID THRU
            </p>
            <p
              className={`lg:text-[13px] xl:text-sm font-semibold ${!isBlue &&
                "text-primary_2"}`}
            >
              {validThru}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between items-center w-full lg:pt-3 xl:pt-4 pb-6 lg:px-3 xl:px-5 ${
          isBlue ? "bg-[#4C49ED]" : "bg-white border-t border-[#DFEAF2]"
        }`}
      >
        <p
          className={`${!isBlue &&
            "text-primary_2"} font-semibold lg:text-[15px] xl:text-base`}
        >
          {hideSomeDigits(cardNo)}
        </p>
        <div className="lg:w-[27px] xl:w-fit lg:h-[18px] xl:h-fit">
          <img src={isBlue ? masterCardIcon : masterCardIconDark} alt="" />
        </div>
      </div>
    </div>
  );
}
