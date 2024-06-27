import timezonesFile from "../../timezones.json";
import { useRef, useState } from "react";
import DropdownIcon from "../../svg/DropdownIcon";

export default function Preferences() {
  const [currencyOption, setCurrencyOption] = useState("USD");
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const [timezoneOption, setTimezoneOption] = useState(
    "(UTC-12:00) International Date Line West"
  );
  const [showTimezoneMenu, setShowTimezoneMenu] = useState(false);
  const [useDigitalCurrency, setUseDigitalCurrency] = useState(false);
  const [receiveMerchantOrder, setReceiveMerchantOrder] = useState(false);
  const [receiveRecommendation, setReceiveRecommendation] = useState(false);

  const timezonesData = JSON.parse(JSON.stringify(timezonesFile, null, 2));
  const timezones = timezonesData.map(el => el.text);
  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      currencyOption,
      timezoneOption,
      useDigitalCurrency,
      receiveMerchantOrder,
      receiveRecommendation
    };

    setCurrencyOption("USD");
    setTimezoneOption("(UTC-12:00) International Date Line West");
    setUseDigitalCurrency(false);
    setReceiveMerchantOrder(false);
    setReceiveRecommendation(false);
  };

  return (
    <div className="pt-6 min-[600px]:pt-12 pb-3 text-[13px] xl:text-base">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col min-[825px]:flex-row space-y-4 min-[825px]:space-y-0 items-center justify-between">
          <div className="w-full min-[825px]:w-[48.57%] flex flex-col">
            <label
              htmlFor="currency "
              className="pb-2"
              onClick={() => {
                setShowCurrencyMenu(true);
                setShowTimezoneMenu(false);
              }}
            >
              Currency
            </label>
            <div className="relative text-xs xl:text-[15px] cursor-pointer">
              <div
                onClick={() => {
                  setShowCurrencyMenu(prev => !prev);
                  setShowTimezoneMenu(false);
                }}
                className={`${showCurrencyMenu &&
                  "border-2 "} flex items-center justify-between  text-text_2 h-10 xl:h-[50px] rounded-[10px] xl:rounded-[15px] border border-[#DFEAF2] focus:outline-[#DFEAF2] px-5`}
              >
                <p>{currencyOption}</p>
                <p>
                  <DropdownIcon />
                </p>
              </div>
              {showCurrencyMenu && (
                <div className="absolute w-full bg-white z-[1000] border border-[#DFEAF2] shadow-xl ">
                  <p
                    className="hover:bg-blue_3 hover:text-white  text-text_3 px-3"
                    onClick={() => {
                      setCurrencyOption("USD");
                      setShowCurrencyMenu(false);
                    }}
                  >
                    USD
                  </p>
                  <p
                    className="hover:bg-blue_3 hover:text-white  text-text_3 px-3"
                    onClick={() => {
                      setCurrencyOption("NGR");
                      setShowCurrencyMenu(false);
                    }}
                  >
                    NGR
                  </p>
                  <p
                    className="hover:bg-blue_3 hover:text-white  text-text_3 px-3"
                    onClick={() => {
                      setCurrencyOption("GBP");
                      setShowCurrencyMenu(false);
                    }}
                  >
                    GBP
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full min-[825px]:w-[48.57%] flex flex-col">
            <label
              htmlFor="timezone"
              className="pb-2"
              onClick={() => {
                setShowTimezoneMenu(true);
                setShowCurrencyMenu(false);
              }}
            >
              Time
            </label>
            <div className="relative text-xs xl:text-[15px] cursor-pointer">
              <div
                onClick={() => {
                  setShowTimezoneMenu(prev => !prev);
                  setShowCurrencyMenu(false);
                }}
                className={`${showTimezoneMenu &&
                  "border-2 "} flex items-center justify-between  text-text_2 h-10 xl:h-[50px] rounded-[10px] xl:rounded-[15px] border border-[#DFEAF2] focus:outline-[#DFEAF2] px-5`}
              >
                <p className="hidden min-[825px]:block min-[949px]:hidden">
                  {timezoneOption.length > 39
                    ? `${timezoneOption.substring(0, 36)}...`
                    : timezoneOption}
                </p>
                <p className="block min-[330px]:hidden">
                  {timezoneOption.length > 25
                    ? `${timezoneOption.substring(0, 22)}...`
                    : timezoneOption}
                </p>
                <p className="hidden  min-[330px]:block min-[433px]:hidden">
                  {timezoneOption.length > 29
                    ? `${timezoneOption.substring(0, 26)}...`
                    : timezoneOption}
                </p>
                <p className="hidden min-[433px]:block min-[825px]:hidden min-[949px]:block">
                  {timezoneOption}
                </p>
                <p>
                  <DropdownIcon />
                </p>
              </div>
              {showTimezoneMenu && (
                <div className="absolute w-full bg-white z-[1000] border border-[#DFEAF2] shadow-xl h-[180px] overflow-y-auto">
                  {timezones.map(el => (
                    <p
                      className="hover:bg-blue_3 hover:text-white  text-text_3 px-3"
                      onClick={() => {
                        setTimezoneOption(`${el}`);
                        setShowTimezoneMenu(false);
                      }}
                    >
                      {el}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full pb-5 min-[600px]:pb-11 min-[700px]:pb-[70px]">
          <h2 className="pt-8 font-medium text-[17px]">Notification</h2>
          <div className="flex w-full items-start space-x-3 xl:space-x-4 pt-4">
            <div
              onClick={() => setUseDigitalCurrency(prev => !prev)}
              className={`rounded-full w-[16%] min-w-11 max-w-11 xl:max-w-[56px] xl:w-[56px] h-6 xl:h-[30.71px]  flex items-center cursor-pointer ${
                useDigitalCurrency
                  ? "justify-end bg-[#16DBCC]"
                  : "justify-start bg-[#DFEAF2]"
              }  p-0.5`}
            >
              <div className="w-[21.21px] xl:w-[27px] h-[21.21px] xl:h-[27px] bg-white rounded-full"></div>
            </div>
            <p>I send or receive digital currency</p>
          </div>

          <div className="flex w-full items-start space-x-3 xl:space-x-4 pt-4">
            <div
              onClick={() => setReceiveMerchantOrder(prev => !prev)}
              className={`rounded-full w-[16%] min-w-11 max-w-11 xl:max-w-[56px] xl:w-[56px] h-6 xl:h-[30.71px] flex items-center cursor-pointer p-0.5 ${
                receiveMerchantOrder
                  ? "justify-end bg-[#16DBCC]"
                  : "justify-start bg-[#DFEAF2]"
              }`}
            >
              <div className="w-[21.21px] xl:w-[27px] h-[21.21px] xl:h-[27px] bg-white rounded-full"></div>
            </div>
            <p>I receive merchant order</p>
          </div>
          {/* Receive recommendation */}
          <div className="flex w-full items-start space-x-3 xl:space-x-4 pt-4">
            <div
              onClick={() => setReceiveRecommendation(prev => !prev)}
              className={`rounded-full w-[16%] min-w-11 max-w-11 xl:max-w-[56px] xl:w-[56px] h-6 xl:h-[30.71px] flex items-center cursor-pointer p-0.5 ${
                receiveRecommendation
                  ? "justify-end bg-[#16DBCC]"
                  : "justify-start bg-[#DFEAF2]"
              }`}
            >
              <div className="w-[21.21px] xl:w-[27px] h-[21.21px] xl:h-[27px] bg-white rounded-full"></div>
            </div>
            <p>Add recommendations to my account</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <button className="font-medium text-lg w-full min-[600px]:w-[130px] xl:w-[190px] h-10 xl:h-[50px] bg-blue_3 rounded-[9px] xl:rounded-[10px] xl:rounded-[15px] text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
