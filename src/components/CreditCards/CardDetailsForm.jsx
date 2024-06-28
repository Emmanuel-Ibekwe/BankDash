import moment from "moment";
import { useRef, useState } from "react";
import DropdownIcon from "./../../svg/DropdownIcon";
import { spaceDigits, cardNumberFormatting } from "./../../utils/numberFormat";

export default function CardDetailsForm() {
  const dobRef = useRef();
  const [expirationDate, setExpirationDate] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [submitValue, setSubmitValue] = useState(false);

  const handleDate = e => {
    const d = new Date(e.target.value);
    setExpirationDate(moment(d).format("DD MMMM YYYY"));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const cardDetails = {
    //   cardType,
    //   cardName,
    //   cardNumber,
    //   expirationDate
    // };
    if (
      cardType === "" ||
      cardNumber.length < 16 ||
      cardName === "" ||
      expirationDate === ""
    ) {
      return;
    }

    setCardName("");
    setCardType("");
    setCardNumber("");
    setExpirationDate("");
    setSubmitValue(false);
  };
  return (
    <form
      action=""
      className="w-full mt-4 xl:mt-8 text-text_3"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col min-[600px]:flex-row space-y-5 min-[600px]:space-y-0 justify-between">
        <div className="flex flex-col w-full min-[600px]:w-[48.12%]">
          <label
            htmlFor="card-type"
            className="pb-2 xl:pb-4 text-text_3 text-xs xl:text-base"
          >
            Card Type
          </label>
          <input
            onChange={e => setCardType(e.target.value)}
            id="card-type"
            placeholder="Classic"
            className="text-[15px] placeholder-text_2 focus:outline-[#DFEAF2] border border-[#DFEAF2] px-4 rounded-[10px] min-[600px]:rounded-[15px] h-10 xl:h-[50px]"
            type="text"
            value={cardType}
          />
          {cardType.length === 0 && submitValue && (
            <p className="text-xs text-red-400 pt-0.5">
              Card type not entered!
            </p>
          )}
        </div>
        <div className="flex flex-col w-full min-[600px]:w-[48.12%]">
          <label
            for="card-name"
            className="pb-2 xl:pb-4 text-text_3 text-xs xl:text-base"
          >
            Name on Card
          </label>
          <input
            onChange={e => setCardName(e.target.value)}
            id="card-name"
            placeholder="My Cards"
            className="text-[15px] placeholder-text_2 focus:outline-[#DFEAF2] border border-[#DFEAF2] px-4 rounded-[10px] min-[600px]:rounded-[15px] h-10 xl:h-[50px]"
            type="text"
            value={cardName}
          />
          {cardName.trim().length === 0 && submitValue && (
            <p className="text-xs text-red-400 pt-0.5">
              Card name not entered!
            </p>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col min-[600px]:flex-row space-y-5 min-[600px]:space-y-0 justify-between pt-5 min-[600px]:pt-3 xl:pt-5">
        <div className="flex flex-col w-full min-[600px]:w-[48.12%]">
          <label
            htmlFor="card-number"
            className="pb-2 xl:pb-4 text-text_3 text-xs xl:text-base"
          >
            Card Number
          </label>
          <input
            onChange={e => {
              setCardNumber(cardNumberFormatting(e.target.value));
              console.log("card number", spaceDigits(cardNumber));
            }}
            value={spaceDigits(cardNumber)}
            id="card-number"
            placeholder="**** **** **** ****"
            className="text-[15px] focus:outline-[#DFEAF2] placeholder-text_2  border border-[#DFEAF2] px-4 rounded-[10px] min-[600px]:rounded-[15px] h-10 xl:h-[50px]"
            type="text"
          />
          {cardNumber.length < 16 && submitValue && (
            <p className="text-xs text-red-400 pt-0.5">
              Card number empty or less than 16!
            </p>
          )}
        </div>
        <div className="flex flex-col w-full min-[600px]:w-[48.12%]">
          <label
            htmlFor="date-picker"
            className="pb-2 xl:pb-4 text-text_3 text-xs xl:text-base"
          >
            Expiration Date
          </label>
          <div className="w-full relative">
            <div className=" w-full flex items-center justify-between border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-10 xl:h-[50px] px-5 focus:outline-[#DFEAF2]">
              <p
                className={`${
                  expirationDate === "" ? "text-text_2" : "text-text_3"
                }`}
              >
                {expirationDate === ""
                  ? "25 January 2025"
                  : moment(expirationDate).format("DD MMMM YYYY")}
              </p>
              <p
                className="cursor-pointer"
                onClick={() => {
                  dobRef.current.showPicker();
                }}
              >
                <DropdownIcon />
              </p>
            </div>
            {expirationDate === "" && submitValue && (
              <p className="text-xs text-red-400 pt-0.5">
                Expiration date not entered!
              </p>
            )}
            <input
              ref={dobRef}
              onChange={handleDate}
              id="edit-profile-dob"
              type="date"
              placeholder="DD/MM/YYYY"
              className="-m-8 invisible absolute  w-full border border-[#DFEAF2] rounded-[10px] xl:rounded-[15px] h-[0.1px] xl:h-[50px] px-5 focus:outline-[#DFEAF2]"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-6 xl:mt-8">
        <button
          onClick={() => setSubmitValue(true)}
          className="w-full min-[600px]:w-[120px] xl:w-40 h-10 xl:h-[50px] text-[15px] xl:text-base rounded-[9px] bg-blue_3 text-white"
        >
          Add Card
        </button>
      </div>
    </form>
  );
}
