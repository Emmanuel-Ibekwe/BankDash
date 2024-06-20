import { numberWithCommas } from "./../../utils/numberFormat";
export default function ActiveLoansOverview() {
  const loans = [
    {
      loanMoney: 100000,
      balance: 40500,
      duration: 8,
      interestRate: 12,
      installment: 2000
    },
    {
      loanMoney: 500000,
      balance: 250000,
      duration: 36,
      interestRate: 10,
      installment: 8000
    },
    {
      loanMoney: 900000,
      balance: 40500,
      duration: 12,
      interestRate: 12,
      installment: 5000
    },
    {
      loanMoney: 50000,
      balance: 40500,
      duration: 25,
      interestRate: 5,
      installment: 2000
    },
    {
      loanMoney: 50000,
      balance: 40500,
      duration: 5,
      interestRate: 16,
      installment: 10000
    },
    {
      loanMoney: 80000,
      balance: 25000,
      duration: 14,
      interestRate: 8,
      installment: 2000
    },
    {
      loanMoney: 12000,
      balance: 5500,
      duration: 9,
      interestRate: 13,
      installment: 500
    },
    {
      loanMoney: 160000,
      balance: 108000,
      duration: 13,
      interestRate: 13,
      installment: 7000
    }
  ];

  const loanAmounts = loans.map(el => el.loanMoney);
  const loanBalances = loans.map(el => el.balance);
  const loanInstallments = loans.map(el => el.installment);

  const totalLoan = loanAmounts.reduce((total, cur) => {
    return cur + total;
  });
  const totalBalance = loanBalances.reduce((total, cur) => cur + total);
  const totalInstallment = loanInstallments.reduce((total, cur) => cur + total);

  return (
    <section className="w-full pt-6">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2">
        Active Loans Overview
      </h2>
      <div className="w-full text-[11px] min-[375px]:text-xs xl:text-base bg-white px-5 py-6 min-[375px]:p-6 rounded-[15px] min-[600px]rounded-3xl  flex flex-col justify-between">
        <div className="text-text_2 flex items-center justify-between pb-4">
          <p className="w-[5.8%] hidden min-[790px]:block">SI. No</p>
          <p className="w-[33%] min-[790px]:w-[14.49%] ">Loan Money</p>
          <p className="w-[33%]  min-[790px]:w-[14.49%]">Left to repay</p>
          <p className="w-[14.01%] hidden min-[790px]:block">Duration</p>
          <p className="w-[14.49%] hidden min-[790px]:block">Interest rate</p>
          <p className="w-[19.32%] hidden min-[790px]:block">Installment</p>
          <p className="w-[33%]  min-[790px]:w-[17.39%]">Repay</p>
        </div>
        {loans.map((el, i) => (
          <div className="py-4 text-text_3 flex items-center justify-between border-t border-[#E6EFF5]">
            <p className="w-[5.8%] hidden min-[790px]:block">
              {i + 1 < 10 ? `0${i + 1}` : i + 1}
            </p>
            <p className="w-[33%] min-[790px]:w-[14.49%]">
              ${numberWithCommas(el.loanMoney)}
            </p>
            <p className="w-[33%]  min-[790px]:w-[14.49%]">
              ${numberWithCommas(el.balance)}
            </p>
            <p className="w-[14.01%] hidden min-[790px]:block">
              {el.duration} months
            </p>
            <p className="w-[14.49%] hidden min-[790px]:block">
              {el.interestRate}
            </p>
            <p className="w-[19.32%] hidden min-[790px]:block">
              ${numberWithCommas(el.installment)}/month
            </p>
            <div className="w-[33%]  min-[790px]:w-[17.39%]">
              <button
                className="text-blue_3 w-[70px] min-[790px]:w-[100px] h-[25px] min-[790px]:h-[35px] border border-blue_3 rounded-full"
                type="button"
              >
                Repay
              </button>
            </div>
          </div>
        ))}
        <div className="pt-4 text-[#FE5C73] flex items-end min-[790px]:items-center justify-between border-t border-[#E6EFF5]">
          <div className="w-[33%] min-[790px]:w-[20.29%] flex space-y-2 min-[790px]:space-y-0 flex-col  min-[790px]:flex-row items-start justify-between">
            <p className="w-[28.59%] ">Total</p>
            <p className="w-[71.41%]">${numberWithCommas(totalLoan)}</p>
          </div>
          <p className="w-[33%] min-[790px]:w-[14.49%] ">
            ${numberWithCommas(totalBalance)}
          </p>
          <p className="w-[14.01%] hidden min-[790px]:block"> </p>
          <p className="w-[14.49%] hidden min-[790px]:block"></p>
          <p className="w-[19.32%] hidden min-[790px]:block">
            ${numberWithCommas(totalInstallment)}
            /month
          </p>
          <div className="w-[33%] min-[790px]:w-[17.39%]"></div>
        </div>
      </div>
    </section>
  );
}
