import { useState, useRef } from "react";
import notificationIcon from "../../assets/notification-icon.png";
import settingsIcon from "../../assets/settings-icon-2.png";
import searchIcon from "../../assets/search_icon.png";
import profilePic from "../../assets/profile-pic.png";
import ToggleButton from "./../../svg/ToggleButton";

export default function Header({ onSetIsNavClosed, isNavClosed, title }) {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const [showBorder, setShowBorder] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const inputFocushandler = () => {
    setShowBorder(true);
    setShowSearchIcon(false);
  };
  const inputBlurHandler = () => {
    setShowBorder(false);
    setShowSearchIcon(true);
  };

  const handleSearchIcon = () => {
    setShowSearchIcon(false);

    inputRef.current.focus();
  };

  const handleSearchIcon2 = () => {
    setShowSearchIcon(false);

    inputRef2.current.focus();
  };

  return (
    <>
      <div className="hidden lg:block lg:body-width-lg xl:body-width-xl px-5 lg:px-[2%] fixed top-0 lg:left-[230px] xl:left-60 bg-white box-border z-50">
        <div className="w-full h-[90px] flex pt-6 pb-5 space-x-28 min-[1070px]:space-x-40 xl:space-x-96 items-center ">
          <h1 className="font-semibold text-primary_2 text-2xl w-[40%] min-[1070px]:w-[30%]">
            {title}
          </h1>
          <div className="flex justify-between w-full items-center cursor-pointer">
            <div
              className={`flex  lg:h-10 xl:h-[50px] overflow-hidden box-border ${
                showBorder
                  ? "border border-primary_2 rounded-full transition duration-300"
                  : ""
              }`}
            >
              {showSearchIcon && (
                <div
                  onClick={handleSearchIcon}
                  className=" block rounded-l-full lg:h-10 xl:h-[50px] flex items-center justify-center bg-background_1 pr-4 pl-6 "
                >
                  <img src={searchIcon} alt="" className="translate-y-0.5" />
                </div>
              )}
              <input
                type="text"
                placeholder="Search for something"
                className={`${!showSearchIcon &&
                  "!px-8 !w-[312px] rounded-full"} focus:outline-none focus:px-8 focus:w-[312px] w-64 lg:h-10 xl:h-[50px]  bg-background_1 rounded-r-full`}
                onFocus={inputFocushandler}
                onBlur={inputBlurHandler}
                ref={inputRef}
              />
            </div>
            <div className="lg:w-10 xl:w-[50px] lg:h-10 xl:h-[50px] bg-background_1 flex items-center justify-center rounded-full">
              <img src={settingsIcon} alt="" className="" />
            </div>
            <div className="lg:w-10 xl:w-[50px] lg:h-10 xl:h-[50px] bg-background_1 flex items-center justify-center rounded-full">
              <img src={notificationIcon} alt="" />
            </div>
            <div className="lg:w-11 xl:w-15 lg:h-11 xl:h-15 ">
              <img src={profilePic} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 z-50 block lg:hidden w-full px-5 lg:px-[2.5%] bg-white h-[140px] box-border">
        <div className="flex items-center justify-between pt-6">
          <div
            className="cursor-pointer"
            onClick={() => {
              onSetIsNavClosed(true);
            }}
          >
            <ToggleButton />
          </div>
          <h2 className="font-semibold text-xl text-primary_2">{title}</h2>
          <div className="w-10 h-10">
            <img src={profilePic} alt="" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center w-full pt-4">
          <div
            className={`cursor-pointer flex h-10 xl:h-[50px] w-full max-w-[424px] overflow-hidden box-border justify-center items-center ${
              showBorder
                ? "border border-primary_2 rounded-full transition duration-300"
                : ""
            }`}
          >
            {showSearchIcon && (
              <div
                onClick={handleSearchIcon2}
                className="rounded-l-full h-10 xl:h-[50px] flex items-center justify-center bg-background_1 pr-4 pl-6 "
              >
                <img src={searchIcon} alt="" className="translate-y-0.5" />
              </div>
            )}
            <input
              type="text"
              placeholder="Search for something"
              className={`${!showSearchIcon &&
                "!px-8 rounded-full"} focus:outline-none w-full h-10 xl:h-[50px]  bg-background_1 rounded-r-full`}
              onFocus={inputFocushandler}
              onBlur={inputBlurHandler}
              ref={inputRef2}
            />
          </div>
        </div>
      </header>
    </>
  );
}
