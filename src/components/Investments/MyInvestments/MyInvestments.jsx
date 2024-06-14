import MyInvestmentItem from "./MyInvestmentItem";
import AppleLogo2 from "../../../svg/AppleLogo2";
import GoogleLogo from "../../../svg/GoogleLogo";
import TeslaLogo from "../../../svg/TeslaLogo";

export default function MyInvestments() {
  const investments = [
    {
      name: "apple store",
      amount: 54000,
      rate: 16
    },
    {
      name: "google",
      amount: 25300,
      rate: -4
    },
    {
      name: "tesla motors",
      amount: 8200,
      rate: 25
    }
  ];

  return (
    <div className="w-full min-[800px]:w-[57.73%]">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-3 ">
        My Investments
      </h2>
      <div className="flex flex-col justify-between h-[230px] xl:h-[310px]">
        {investments.map(el => (
          <MyInvestmentItem
            name={el.name}
            amount={el.amount}
            rate={el.rate}
            logo={el.logo}
          />
        ))}
      </div>
    </div>
  );
}
