import { NavLink } from "react-router-dom";
import {
  TransferIcon,
  UserIcon,
  HomeIcon,
  InvestmentIcon,
  CreditCardIcon,
  LoanIcon,
  ServiceIcon,
  EconometricsIcon,
  SettingIcon
} from "../../svg";
import BankDashIcon from "../../assets/bankdash_icon.png";

export default function MobileNav() {
  return (
    <nav className="fixed top-0 bottom-0 left-0 h-full w-60 bg-white border-r border-[#E6EFF5] select-none shrink-0">
      <header className="flex space-x-2 pl-8  pr-4 !items-center w-full h-[85px]">
        <div>
          <img src={BankDashIcon} alt="BankDash" />
        </div>
        <h1 className="font-bold text-primary_2 text-2xl">BankDash.</h1>
      </header>
      <ul className="flex flex-col justify-between bg-white space-y-0">
        <li>
          <NavLink to="" className="w-full">
            {({ isActive }) => (
              <div className="flex h-12 ">
                {isActive && (
                  <div className="w-1.5 bg-primary_1 rounded-lg"></div>
                )}
                <p className="flex pl-8 space-x-6 items-center">
                  <span className="justify-self-start">
                    <HomeIcon
                      fillColor={`${isActive ? "#2D60FF" : "#b1b1b1"}`}
                    />
                  </span>
                  <span className={isActive ? "text-primary_1" : "text-text_1"}>
                    Dashboard
                  </span>
                </p>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="transactions" className="w-full">
            {({ isActive }) => (
              <div className="flex h-12 ">
                {isActive && (
                  <div className="w-1.5 bg-primary_1 rounded-lg"></div>
                )}
                <p className="flex pl-8 space-x-6 items-center">
                  <span>
                    <TransferIcon
                      fillColor={`${isActive ? "#2D60FF" : "#b1b1b1"}`}
                    />
                  </span>{" "}
                  <span className={isActive ? "text-primary_1" : "text-text_1"}>
                    Transactions
                  </span>
                </p>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="accounts" className="w-full">
            {({ isActive }) => (
              <div className="flex h-12 ">
                {isActive && (
                  <div className="w-1.5 bg-primary_1 rounded-lg"></div>
                )}
                <p className="flex pl-8 space-x-6 items-center">
                  <span>
                    <UserIcon
                      fillColor={`${isActive ? "#2D60FF" : "#b1b1b1"}`}
                    />
                  </span>
                  <span className={isActive ? "text-primary_1" : "text-text_1"}>
                    Accounts
                  </span>
                </p>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="investments" className="w-full">
            {({ isActive }) => (
              <div className="flex h-12 ">
                {isActive && (
                  <div className="w-1.5 bg-primary_1 rounded-lg"></div>
                )}
                <p className="flex pl-8 space-x-6 items-center">
                  <span>
                    <InvestmentIcon
                      fillColor={`${isActive ? "#2D60FF" : "#b1b1b1"}`}
                    />
                  </span>
                  <span className={isActive ? "text-primary_1" : "text-text_1"}>
                    Investments
                  </span>
                </p>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="credit-cards" className="w-full">
            {({ isActive }) => (
              <div className="flex h-12 ">
                {isActive && (
                  <div className="w-1.5 bg-primary_1 rounded-lg"></div>
                )}
                <p className="flex pl-8 space-x-6 w-full items-center">
                  <span>
                    <CreditCardIcon
                      fillColor={isActive ? "#2D60FF" : "#b1b1b1"}
                    />
                  </span>
                  <span className={isActive ? "text-primary_1" : "text-text_1"}>
                    Credit Cards
                  </span>
                </p>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="loans" className="w-full">
            {({ isActive }) => (
              <div className="flex h-12 ">
                {isActive && (
                  <div className="w-1.5 bg-primary_1 rounded-lg"></div>
                )}
                <p className="flex pl-8 space-x-6 items-center">
                  <span className="justify-self-start">
                    <LoanIcon fillColor={isActive ? "#2D60FF" : "#b1b1b1"} />
                  </span>{" "}
                  <span className={isActive ? "text-primary_1" : "text-text_1"}>
                    Loans
                  </span>
                </p>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="services" className="w-full">
            {({ isActive }) => (
              <div className="flex h-12 ">
                {isActive && (
                  <div className="w-1.5 bg-primary_1 rounded-lg"></div>
                )}
                <p className="flex pl-8 space-x-6 items-center">
                  <span>
                    <ServiceIcon fillColor={isActive ? "#2D60FF" : "#b1b1b1"} />
                  </span>
                  <span className={isActive ? "text-primary_1" : "text-text_1"}>
                    Services
                  </span>
                </p>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="my-privileges" className="w-full">
            {({ isActive }) => (
              <div className="flex h-12 ">
                {isActive && (
                  <div className="w-1.5 bg-primary_1 rounded-lg"></div>
                )}
                <p className="flex pl-8 space-x-6 items-center">
                  <span>
                    <EconometricsIcon
                      fillColor={isActive ? "#2D60FF" : "#b1b1b1"}
                    />
                  </span>
                  <span className={isActive ? "text-primary_1" : "text-text_1"}>
                    My Privileges
                  </span>
                </p>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="settings" className="w-full">
            {({ isActive }) => (
              <div className="flex h-12 ">
                {isActive && (
                  <div className="w-1.5 bg-primary_1 rounded-lg"></div>
                )}
                <p className="flex pl-8 space-x-6 items-center">
                  <span>
                    <SettingIcon fillColor={isActive ? "#2D60FF" : "#b1b1b1"} />
                  </span>
                  <span className={isActive ? "text-primary_1" : "text-text_1"}>
                    Settings
                  </span>
                </p>
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
