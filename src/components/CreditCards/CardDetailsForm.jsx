import { useRef } from "react";
import DropdownIcon from "./../../svg/DropdownIcon";

export default function CardDetailsForm() {
  const dateInputRef = useRef(null);

  const handleExpirationDate = () => {
    if (dateInputRef.current) {
      console.log(dateInputRef.current);
      dateInputRef.current.value = "2024-06-14";
      dateInputRef.current.focus(); // Focus on the input element to open the date picker
    }
  };

  return (
    <form action="" className="w-full mt-4 xl:mt-8">
      <div className="w-full flex flex-col min-[600px]:flex-row space-y-5 min-[600px]:space-y-0 justify-between">
        <div className="flex flex-col w-full min-[600px]:w-[48.12%]">
          <label
            for="card-type"
            className="pb-2 xl:pb-4 text-text_3 text-xs xl:text-base"
          >
            Card Type
          </label>
          <input
            id="card-type"
            placeholder="Classic"
            className="text-[15px] placeholder-text-text_2 focus:outline-[#DFEAF2] border border-[#DFEAF2] px-4 rounded-[10px] min-[600px]:rounded-[15px] h-10 xl:h-[50px]"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full min-[600px]:w-[48.12%]">
          <label
            for="card-name"
            className="pb-2 xl:pb-4 text-text_3 text-xs xl:text-base"
          >
            Name on Card
          </label>
          <input
            id="card-name"
            placeholder="My Cards"
            className="text-[15px] placeholder-text-text_2 focus:outline-[#DFEAF2] border border-[#DFEAF2] px-4 rounded-[10px] min-[600px]:rounded-[15px] h-10 xl:h-[50px]"
            type="text"
          />
        </div>
      </div>
      <div className="w-full flex flex-col min-[600px]:flex-row space-y-5 min-[600px]:space-y-0 justify-between pt-5 min-[600px]:pt-3 xl:pt-5">
        <div className="flex flex-col w-full min-[600px]:w-[48.12%]">
          <label
            for="card-number"
            className="pb-2 xl:pb-4 text-text_3 text-xs xl:text-base"
          >
            Card Number
          </label>
          <input
            id="card-number"
            placeholder="**** **** **** ****"
            className="text-[15px] focus:outline-[#DFEAF2] placeholder-text-text_2  border border-[#DFEAF2] px-4 rounded-[10px] min-[600px]:rounded-[15px] h-10 xl:h-[50px]"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full min-[600px]:w-[48.12%]">
          <label
            for="date-picker"
            className="pb-2 xl:pb-4 text-text_3 text-xs xl:text-base"
          >
            Expiration Date
          </label>
          <div className="flex items-center justify-between w-full border border-[#DFEAF2] px-4 rounded-[10px] min-[600px]:rounded-[15px] h-10 xl:h-[50px]">
            <p className="text-[15px] placeholder-text-text_2">
              25 January 2023
            </p>
            <div
              className=" w-fit cursor-pointer"
              onClick={handleExpirationDate}
            >
              <DropdownIcon />
            </div>
          </div>
          <input
            id="date-picker"
            placeholder="25 January 2023"
            className="text-[15px] hidden border border-[#DFEAF2] px-4 rounded-[10px] min-[600px]:rounded-[15px] h-10 xl:h-[50px]"
            type="date"
            ref={dateInputRef}
          />
        </div>
      </div>
      <div className="w-full mt-6 xl:mt-8">
        <button className="w-full min-[600px]:w-[120px] xl:w-40 h-10 xl:h-[50px] text-[15px] xl:text-base rounded-[9px] bg-blue_3 text-white">
          Add Card
        </button>
      </div>
    </form>
  );
}
