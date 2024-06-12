import { hideSomeDigits } from "../../../utils/numberFormat";
import LastTransactionRow from "./LastTransactionRow";

export default function LastTransactions() {
  const lastTransactions = [
    {
      description: "spotify subscription",
      type: "shopping",
      card: 3778234556781234,
      amount: 2500,
      isIncome: false,
      status: "pending",
      date: "25 Jan 2021"
    },
    {
      description: "freepik sales",
      type: "transfer",
      card: 3778234556781234,
      amount: 4500,
      isIncome: true,
      status: "completed",
      date: "27 Jan 2021"
    },
    {
      description: "mobile service",
      type: "service",
      card: 3778234556781234,
      amount: 500,
      isIncome: false,
      status: "completed",
      date: "30 Jan 2021"
    }
  ];

  return (
    <div className="w-full min-[900px]:w-[66.36%]  ">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2 ">
        Last Transactions
      </h2>
      <div className="flex flex-col justify-between px-5 min-[900px]:px-3 xl:px-5 py-6 min-[900px]:py-6 lg:py-4 xl:py-6 w-full bg-white rounded-3xl h-[230px] min-[900px]:h-[190px] lg:h-[170px] xl:h-[230px]">
        {lastTransactions.map(tx => (
          <LastTransactionRow
            description={tx.description}
            type={tx.type}
            card={tx.card}
            isIncome={tx.isIncome}
            status={tx.status}
            amount={tx.amount}
            date={tx.date}
          />
        ))}
      </div>
    </div>
  );
}
