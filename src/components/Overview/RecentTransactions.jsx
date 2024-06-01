import { CardIcon, PaypalIcon, CoinIcon } from "../../svg";
import Transaction from "./Transaction";

export default function RecentTransactions() {
  const transactions = [
    {
      title: "Deposit from my Card",
      date: "28 January 2021",
      isReceived: false,
      amount: 850,
      transaction_icon: "card"
    },
    {
      title: "Deposit from Paypal",
      date: "25 January 2021",
      isReceived: true,
      amount: 2500,
      transaction_icon: "paypal"
    },
    {
      title: "Jemi Wilson",
      date: "21 January 2021",
      isReceived: true,
      amount: 5400,
      transaction_icon: "coin"
    }
  ];

  return (
    <div className="flex justify-center items-center w-full lg:min-w-[231px]   h-[230px] min-[900px]:h-[190px] lg:h-[170px] xl:h-[230px] flex-initial bg-white rounded-3xl px-5 py-6 min-[900px]:px-3 min-[900px]:py-4 xl:p-5">
      <div className="flex space-y-3.5 lg:space-y-2 xl:space-y-3 flex-col w-full justify-center items-center">
        {transactions.map(transaction => (
          <Transaction
            key={transaction.title}
            title={transaction.title}
            date={transaction.date}
            amount={transaction.amount}
            transaction_icon={transaction.transaction_icon}
            isReceived={transaction.isReceived}
          />
        ))}
      </div>
    </div>
  );
}
