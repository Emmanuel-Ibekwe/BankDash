import BlockCreditCardIcon from "./../../svg/BlockCreditCardIcon";
import PadlockIcon from "./../../svg/PadlockIcon";
import GoogleLogo from "./../../svg/GoogleLogo";
import AppleIcon from "../../svg/AppleIcon";

export default function CardSetting() {
  return (
    <div className="w-full min-[820px]:w-[31.82%]">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2 w-full">
        Card Setting
      </h2>
      <div className="w-full flex flex-col justify-between bg-white rounded-3xl p-4 xl:p-6 h-[321px] xl:h-[440px] ">
        <div className="flex space-x-4 xl:space-x-6 items-center justify-start">
          <div className="w-[45px] xl:w-[60px] h-[45px] xl:h-[60px] bg-[#FFF5D9] rounded-2xl flex items-center justify-center">
            <BlockCreditCardIcon className="w-5 xl:w-[25px] h-5 xl:h-[25px]" />
          </div>
          <div>
            <p className="text-text_3 font-medium text-xs xl:text-base">
              Block Card
            </p>
            <p className="text-text_2 text-[11px] xl:text-[15px]">
              Instantly block your card
            </p>
          </div>
        </div>
        <div className="flex space-x-4 xl:space-x-6 items-center justify-start">
          <div className="w-[45px] xl:w-[60px] h-[45px] xl:h-[60px] bg-[#E7EDFF] rounded-2xl flex items-center justify-center">
            <PadlockIcon className="w-5 xl:w-[25px] h-5 xl:h-[25px]" />
          </div>
          <div>
            <p className="text-text_3 font-medium text-xs xl:text-base">
              Change Pin Code
            </p>
            <p className="text-text_2 text-[11px] xl:text-[15px]">
              Choose another pin code
            </p>
          </div>
        </div>
        <div className="flex space-x-4 xl:space-x-6 items-center justify-start">
          <div className="w-[45px] xl:w-[60px] h-[45px] xl:h-[60px] bg-[#FFE0EB] rounded-2xl flex items-center justify-center">
            <GoogleLogo
              className="fill-[#FF82AC]"
              className="w-5 xl:w-[25px] h-5 xl:h-[25px]"
            />
          </div>
          <div>
            <p className="text-text_3 font-medium text-xs xl:text-base">
              Add to Google Pay
            </p>
            <p className="text-text_2 text-[11px] xl:text-[15px]">
              Withdraw without any card
            </p>
          </div>
        </div>
        <div className="flex space-x-4 xl:space-x-6 items-center justify-start">
          <div className="w-[45px] xl:w-[60px] h-[45px] xl:h-[60px] bg-[#DCFAF8] rounded-2xl flex items-center justify-center">
            <AppleIcon
              className="fill-[#16DBCC]"
              className="w-5 xl:w-[25px] h-5 xl:h-[25px]"
            />
          </div>
          <div>
            <p className="text-text_3 font-medium text-xs xl:text-base">
              Add to Apple Pay
            </p>
            <p className="text-text_2 text-[11px] xl:text-[15px]">
              Withdraw without any card
            </p>
          </div>
        </div>
        <div className="flex space-x-4 xl:space-x-6 items-center justify-start">
          <div className="w-[45px] xl:w-[60px] h-[45px] xl:h-[60px] bg-[#DCFAF8] rounded-2xl flex items-center justify-center">
            <AppleIcon
              className="fill-[#16DBCC]"
              className="w-5 xl:w-[25px] h-5 xl:h-[25px]"
            />
          </div>
          <div>
            <p className="text-text_3 font-medium text-xs xl:text-base">
              Add to Apple Store
            </p>
            <p className="text-text_2 text-[11px] xl:text-[15px]">
              Withdraw without any card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
