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
      } w-full min-w-[265px] min-[600px]:min-w-[320px] min-[900px]:min-w-[231px]  h-[170px] min-[600px]:h-[230px] min-[900px]:h-[190px] lg:h-[170px] xl:h-[230px] rounded-3xl border border-[#DFEAF2]   text-white overflow-hidden 
      `}
    >
      <div className="flex flex-col space-y-4 min-[600px]:space-y-10 min-[900px]:space-y-4 xl:space-y-10 box-border pb-3 min-[600px]:pb-6 min-[900px]:pb-4 lg:pb-3 xl:pb-6 px-4 pt-4 xl:pt-6">
        <div className="flex justify-between items-center ">
          <div>
            <h6
              className={`text-[11px] min-[600px]:text-xs min-[900px]:text-[11px] xl:text-xs font-normal ${!isBlue &&
                "text-text_2"}`}
            >
              Balance
            </h6>
            <h3
              className={`text-base min-[600px]:text-xl min-[900px]:text-base xl:text-xl font-semibold ${!isBlue &&
                "text-primary_2"}`}
            >
              ${numberWithCommas(balance)}
            </h3>
          </div>
          <div className="w-[29px] min-[600px]:w-fit min-[900px]:w-[29px] xl:w-fit  h-[29px] min-[600px]:h-fit min-[900px]:h-[29px] xl:h-fit">
            <img src={isBlue ? cardChip : cardChipDark} alt="" />
          </div>
        </div>
        <div className="flex justify-start space-x-12 text-white">
          <div className="">
            <p
              className={`text-[10px] min-[600px]:text-xs min-[900px]:text-[10px] xl:text-xs font-normal ${!isBlue &&
                "text-text_2"}`}
            >
              CARD HOLDER
            </p>
            <p
              className={`text-[13px] min-[600px]:text-sm min-[900px]:text-[13px] xl:text-sm font-semibold ${!isBlue &&
                "text-primary_2"}`}
            >
              {cardHolder}
            </p>
          </div>
          <div className="text-start">
            <p
              className={`text-[10px] min-[600px]:text-xs min-[900px]:text-[10px] xl:text-xs font-normal ${!isBlue &&
                "text-text_2"}`}
            >
              VALID THRU
            </p>
            <p
              className={`text-[13px] min-[600px]:text-sm min-[900px]:text-[13px] xl:text-sm font-semibold ${!isBlue &&
                "text-primary_2"}`}
            >
              {validThru}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between items-center w-full pt-3 min-[600px]:pt-4  min-[900px]:pt-3 xl:pt-4 pb-6 px-5 px-3 xl:px-5 ${
          isBlue ? "bg-[#4C49ED]" : "bg-white border-t border-[#DFEAF2]"
        }`}
      >
        <p
          className={`${!isBlue &&
            "text-primary_2"} font-semibold text-[15px] min-[600px]:text-base min-[900px]:text-[15px] xl:text-base`}
        >
          {hideSomeDigits(cardNo)}
        </p>
        <div className="w-[27px] min-[600px]:w-fit min-[900px]:w-[27px] xl:w-fit h-[18px] min-[600px]:h-fit min-[900px]:h-[18px] xl:h-fit">
          <img src={isBlue ? masterCardIcon : masterCardIconDark} alt="" />
        </div>
      </div>
    </div>
  );
}
