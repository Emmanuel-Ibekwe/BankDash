import { useEffect } from "react";
import DonutChart from "./DonutChart/DonutChart";

export default function CardExpenseStatistics() {
  const colors = ["#16DBCC", "#FF82AC", "#FFBB38", "#4C78FF"];
  const banks = ["dbl", "abm", "brc", "mcp"];

  return (
    <div className="w-full min-[820px]:w-[31.82%]">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2 w-full">
        Card Expense Statistics
      </h2>
      <div className="w-full h-[210px] min-[375px]:h-[231px] xl:h-[290px] flex items-center justify-center bg-white rounded-2xl xl:rounded-3xl">
        <div className="w-full flex flex-col items-center justify-center">
          <DonutChart colors={colors} />
          <div className="text-text_2 text-xs xl:text-[15px] w-full px-[10%]">
            <div className="flex items-center justify-between w-full">
              <div className="flex space-x-2 xl:space-x-4 items-center justify-start w-[50%]">
                <p
                  id="dbl-circle"
                  className="w-3 xl:w-[15px] h-3 xl:h-[15px] bg-[#16DBCC] rounded-full"
                ></p>{" "}
                <p>DBL Bank</p>
              </div>
              <div className="flex space-x-2 xl:space-x-4 items-center justify-start w-[50%]">
                <p
                  id="brc-circle"
                  className="w-3 xl:w-[15px] h-3 xl:h-[15px] bg-[#FF82AC] rounded-full"
                ></p>{" "}
                <p>BRC Bank</p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex space-x-2 xl:space-x-4 items-center justify-start w-[50%]">
                <p
                  id="abm-circle"
                  className="w-3 xl:w-[15px] h-3 xl:h-[15px] bg-[#FFBB38] rounded-full"
                ></p>{" "}
                <p>ABM Bank</p>
              </div>
              <div className="flex space-x-2 xl:space-x-4 items-center justify-start w-[50%]">
                <p
                  id="mcp-circle"
                  className="w-3 xl:w-[15px] h-3 xl:h-[15px] bg-[#4C78FF] rounded-full"
                ></p>{" "}
                <p>MCP Bank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
