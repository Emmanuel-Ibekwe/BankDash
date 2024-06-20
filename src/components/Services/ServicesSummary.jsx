import LifeInsuranceIcon from "../../svg/LifeInsuranceIcon";
import BagIcon from "../../svg/BagIcon";
import SafetyShieldIcon from "../../svg/SafetyShieldIcon";

export default function ServicesSummary() {
  return (
    <section className="flex justify-between items-centerd w-[720px] min-[775px]:w-full">
      {/* Life Insurance */}
      <div className="w-[31.53%] bg-white flex items-center justify-start space-x-3 xl:space-x-5  rounded-[20px] lg:rounded-3xl px-6 xl:px-10 py-5 ">
        <div className="w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] rounded-full flex items-center justify-center bg-[#E7EDFF]">
          <LifeInsuranceIcon className="w-[20px] xl:w-fit h-[20px] xl:h-fit" />
        </div>
        <div>
          <h2 className="text-xs xl:text-base xl:text-xl font-semibold text-text_3">
            Life Insurance
          </h2>
          <p className="text-xs xl:text-base text-text_2">
            Unlimited protection
          </p>
        </div>
      </div>
      {/* Shopping */}
      <div className="w-[31.53%] bg-white flex items-center justify-start space-x-3 xl:space-x-5  rounded-[20px] lg:rounded-3xl px-6 xl:px-10 py-5 ">
        <div className="w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] rounded-full flex items-center justify-center bg-[#FFF5D9]">
          <BagIcon className="w-[20px] xl:w-fit h-[20px] xl:h-fit" />
        </div>
        <div>
          <h2 className="text-xs xl:text-base xl:text-xl font-semibold text-text_3">
            Shopping
          </h2>
          <p className="text-xs xl:text-base text-text_2">Buy. Think. Grow.</p>
        </div>
      </div>
      {/* Safety */}
      <div className="w-[31.53%] bg-white flex items-center justify-start space-x-3 xl:space-x-5  rounded-[20px] lg:rounded-3xl px-6 xl:px-10 py-5 ">
        <div className="w-[50px] xl:w-[70px] h-[50px] xl:h-[70px] rounded-full flex items-center justify-center bg-[#DCFAF8]">
          <SafetyShieldIcon className="w-[20px] xl:w-fit h-[20px] xl:h-fit" />
        </div>
        <div>
          <h2 className="text-xs xl:text-base xl:text-xl font-semibold text-text_3">
            Safety
          </h2>
          <p className="text-xs xl:text-base text-text_2">We are your allies</p>
        </div>
      </div>
    </section>
  );
}
