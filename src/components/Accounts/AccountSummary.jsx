import { numberWithCommas } from "./../../utils/numberFormat";
import { MoneyBagIcon, IncomeIcon, PiggyBankIcon } from "../../svg";
import Expense from "../../svg/Expense";

export default function AccountSummary() {
  return (
    <section className="w-full space-y-6 flex flex-col min-[740px]:flex-row min-[740px]:space-y-0 items-center justify-between">
      <div className="w-full min-[740px]:w-[48.7%] flex items-center justify-between">
        <div className="rounded-xl min-[520px]:rounded-3xl w-[47.2%] bg-white flex items-center justify-evenly min-[440px]:justify-start min-[520px]:justify-evenly min-[570px]:justify-start space-x-0 min-[440px]:space-x-4 min-[520px]:space-x-0 min-[570px]:space-x-6 min-[630px]:space-x-8 min-[740px]:space-x-0 min-[740px]:justify-evenly py-4 min-[520px]:py-6 px-2 min-[440px]:pl-4 min-[520px]:px-3 min-[570px]:pl-6 min-[740px]:px-3">
          <div className="flex items-center justify-center w-[40px] min-[375px]:w-[50px] min-[520px]:w-[70px] min-[740px]:w-[50px] min-[840px]:w-[60px] lg:w-[50px] xl:w-[70px] h-[40px] min-[375px]:h-[50px] min-[520px]:h-[70px] min-[740px]:h-[50px] min-[840px]:h-[60px] lg:h-[50px] xl:h-[70px] rounded-full bg-[#FFF5D9]">
            <MoneyBagIcon className="fill-[#FFBB38] w-[17px] min-[375px]:w-[20px] min-[520px]:w-[30px] min-[740px]:w-[25px] lg:w-[20px] xl:w-[30px] h-[17px] min-[375px]:h-[20px] min-[520px]:h-[30px] min-[740px]:h-[25px] lg:h-[20px] xl:h-[30px]" />
          </div>
          <div>
            <h3 className="text-text_2 text-[11px] min-[375px]:text-xs min-[520px]:text-base min-[740px]:text-xs min-[840px]:text-[14px] lg:text-xs xl:text-base">
              My Balance
            </h3>
            <p className="text-text_3 text-[15px] min-[375px]:text-base min-[520px]:text-2xl min-[740px]:text-base min-[840px]:text-xl lg:text-base xl:text-2xl font-semibold">
              ${numberWithCommas(12750)}
            </p>
          </div>
        </div>

        <div className="rounded-xl min-[520px]:rounded-3xl w-[47.2%] bg-white flex items-center justify-evenly min-[440px]:justify-start min-[520px]:justify-evenly min-[570px]:justify-start space-x-0 min-[440px]:space-x-4 min-[520px]:space-x-0 min-[570px]:space-x-6 min-[630px]:space-x-8 min-[740px]:space-x-0 min-[740px]:justify-evenly py-4 min-[520px]:py-6 px-2 min-[440px]:pl-4 min-[520px]:px-3 min-[570px]:pl-6 min-[740px]:px-3">
          <div className="flex items-center justify-center w-[40px] min-[375px]:w-[50px] min-[520px]:w-[70px] min-[740px]:w-[50px] min-[840px]:w-[60px] lg:w-[50px] xl:w-[70px] h-[40px] min-[375px]:h-[50px] min-[520px]:h-[70px] min-[740px]:h-[50px] min-[840px]:h-[60px] lg:h-[50px] xl:h-[70px] rounded-full bg-[#E7EDFF]">
            <IncomeIcon className="w-[17px] min-[375px]:w-[20px] min-[520px]:w-[30px] min-[740px]:w-[25px] lg:w-[20px] xl:w-[30px] h-[17px] min-[375px]:h-[20px] min-[520px]:h-[30px] min-[740px]:h-[25px] lg:h-[20px] xl:h-[30px]" />
          </div>
          <div>
            <h3 className="text-text_2 text-[11px] min-[375px]:text-xs min-[520px]:text-base min-[740px]:text-xs min-[840px]:text-[14px] lg:text-xs xl:text-base">
              Income
            </h3>
            <p className="text-text_3 text-[15px] min-[375px]:text-base min-[520px]:text-2xl min-[740px]:text-base min-[840px]:text-xl lg:text-base xl:text-2xl font-semibold">
              ${numberWithCommas(5600)}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-[740px]:w-[48.7%] flex items-center justify-between">
        <div className="rounded-xl min-[520px]:rounded-3xl w-[47.2%] bg-white flex items-center justify-evenly min-[440px]:justify-start min-[520px]:justify-evenly min-[570px]:justify-start space-x-0 min-[440px]:space-x-4 min-[520px]:space-x-0 min-[570px]:space-x-6 min-[630px]:space-x-8 min-[740px]:space-x-0 min-[740px]:justify-evenly py-4 min-[520px]:py-6 px-2 min-[440px]:pl-4 min-[520px]:px-3 min-[570px]:pl-6 min-[740px]:px-3">
          <div className="flex items-center justify-center w-[40px] min-[375px]:w-[50px] min-[520px]:w-[70px] min-[740px]:w-[50px] min-[840px]:w-[60px] lg:w-[50px] xl:w-[70px] h-[40px] min-[375px]:h-[50px] min-[520px]:h-[70px] min-[740px]:h-[50px] min-[840px]:h-[60px] lg:h-[50px] xl:h-[70px] rounded-full bg-[#FFE0EB]">
            <Expense className="w-[17px] min-[375px]:w-[20px] min-[520px]:w-[30px] min-[740px]:w-[25px] lg:w-[20px] xl:w-[30px] h-[17px] min-[375px]:h-[20px] min-[520px]:h-[30px] min-[740px]:h-[25px] lg:h-[20px] xl:h-[30px]" />
          </div>
          <div>
            <h3 className="text-text_2 text-[11px] min-[375px]:text-xs min-[520px]:text-base min-[740px]:text-xs min-[840px]:text-[14px] lg:text-xs xl:text-base">
              Expense
            </h3>
            <p className="text-text_3 text-[15px] min-[375px]:text-base min-[520px]:text-2xl min-[740px]:text-base min-[840px]:text-xl lg:text-base xl:text-2xl font-semibold">
              ${numberWithCommas(3460)}
            </p>
          </div>
        </div>
        <div className="rounded-xl min-[520px]:rounded-3xl w-[47.2%] bg-white flex items-center justify-evenly min-[440px]:justify-start min-[520px]:justify-evenly min-[570px]:justify-start space-x-0 min-[440px]:space-x-4 min-[520px]:space-x-0 min-[570px]:space-x-6 min-[630px]:space-x-8 min-[740px]:space-x-0 min-[740px]:justify-evenly py-4 min-[520px]:py-6 px-2 min-[440px]:pl-4 min-[520px]:px-3 min-[570px]:pl-6 min-[740px]:px-3">
          <div className="flex items-center justify-center w-[40px] min-[375px]:w-[50px] min-[520px]:w-[70px] min-[740px]:w-[50px] min-[840px]:w-[60px] lg:w-[50px] xl:w-[70px] h-[40px] min-[375px]:h-[50px] min-[520px]:h-[70px] min-[740px]:h-[50px] min-[840px]:h-[60px] lg:h-[50px] xl:h-[70px] rounded-full bg-[#DCFAF8]">
            <PiggyBankIcon className="w-[17px] min-[375px]:w-[20px] min-[520px]:w-[30px] min-[740px]:w-[25px] lg:w-[20px] xl:w-[30px] h-[17px] min-[375px]:h-[20px] min-[520px]:h-[30px] min-[740px]:h-[25px] lg:h-[20px] xl:h-[30px]" />
          </div>
          <div>
            <h3 className="text-text_2 text-[11px] min-[375px]:text-xs min-[520px]:text-base min-[740px]:text-xs min-[840px]:text-[14px] lg:text-xs xl:text-base">
              Total Savings
            </h3>
            <p className="text-text_3 text-[15px] min-[375px]:text-base min-[520px]:text-2xl min-[740px]:text-base min-[840px]:text-xl lg:text-base xl:text-2xl font-semibold">
              ${numberWithCommas(7920)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
