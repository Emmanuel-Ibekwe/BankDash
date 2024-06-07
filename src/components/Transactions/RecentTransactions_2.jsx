import { useState, useMemo } from "react";
import TransactionRow from "./TransactionRow";
import Pagination from "./Pagination";

const pageSize = 4;

export default function MyExpenses_RecentTransactions() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("all");

  const transactions = [
    {
      description: "spotify subscription",
      transaction_id: 12548791,
      type: "Shopping",
      card: 3778234556781234,
      date: "28 Jan, 12:30 AM",
      amount: 2500,
      isIncome: false
    },
    {
      description: "freepik sales",
      transaction_id: 12548792,
      type: "transfer",
      card: 3778234556781234,
      date: "25 Jan, 10:40 PM",
      amount: 4500,
      isIncome: true
    },
    {
      description: "mobile service",
      transaction_id: 12548793,
      type: "service",
      card: 3778234556781234,
      date: "20 Jan, 1:30 AM",
      amount: 500,
      isIncome: false
    },
    {
      description: "Wilson",
      transaction_id: 12548794,
      type: "Transfer",
      card: 3778234556781234,
      date: "02 Feb, 2:30 PM",
      amount: 2500,
      isIncome: true
    },
    {
      description: "Emily",
      transaction_id: 12548795,
      type: "Transfer",
      card: 3778234556781234,
      date: "05 Feb, 3:00 PM",
      amount: 2500,
      isIncome: true
    },
    {
      description: "netflix subscription",
      transaction_id: 12548796,
      type: "service",
      card: 3778234556781234,
      date: "08 Feb, 11:30 AM",
      amount: 25,
      isIncome: false
    },
    {
      description: "Andrew",
      transaction_id: 12548797,
      type: "transfer",
      card: 3778234556781234,
      date: "10 Feb, 10:30 AM",
      amount: 1300,
      isIncome: true
    },
    {
      description: "Freepik sales",
      transaction_id: 12548798,
      type: "transfer",
      card: 3778234556781238,
      date: "12 Feb, 12:30 AM",
      amount: 400,
      isIncome: true
    },
    {
      description: "spotify subscription",
      transaction_id: 12548799,
      type: "Shopping",
      card: 3778234556781234,
      date: "15 Feb, 12.30 AM",
      amount: 50,
      isIncome: false
    },
    {
      description: "freepik sales",
      transaction_id: 12548710,
      type: "transfer",
      card: 3778234556781234,
      date: "18 Feb, 9:30 AM",
      amount: 2500,
      isIncome: true
    },
    {
      description: "Jimmy",
      transaction_id: 12548711,
      type: "transfer",
      card: 3778234556781234,
      date: "20 Feb, 8:30 AM",
      amount: 1500,
      isIncome: false
    },
    {
      description: "Fred",
      transaction_id: 12548712,
      type: "Transfer",
      card: 3778234556781234,
      date: "25 Feb, 12.30 PM",
      amount: 2500,
      isIncome: false
    },
    {
      description: "Gift",
      transaction_id: 12548713,
      type: "transfer",
      card: 3778234556781234,
      date: "28 Feb, 12.30 AM",
      amount: 2000,
      isIncome: true
    }
  ];

  const filteredTransactions = {
    income: transactions.filter(transaction => transaction.isIncome),
    expense: transactions.filter(transaction => !transaction.isIncome),
    all: transactions
  };

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filteredTransactions[selectedType].slice(
      firstPageIndex,
      lastPageIndex
    );
  }, [currentPage, selectedType]);

  return (
    <div className="w-full pt-4">
      <div className="flex space-x-0 justify-between min-[465px]:space-x-20 min-[465px]:justify-normal text-[13px] xl:text-base font-medium">
        <div
          className="w-fit cursor-pointer"
          onClick={() => {
            setSelectedType("all");
            setCurrentPage(1);
          }}
        >
          <h4
            className={`${
              selectedType === "all" ? "text-blue_3" : "text-text_2"
            }  px-2`}
          >
            All Transactions
          </h4>
          {selectedType === "all" && (
            <div className="h-[3px] rounded-t-[10px] bg-blue_3"></div>
          )}
        </div>
        <div
          className="w-fit cursor-pointer"
          onClick={() => {
            setSelectedType("income");
            setCurrentPage(1);
          }}
        >
          <h4
            className={`${
              selectedType === "income" ? "text-blue_3" : "text-text_2"
            }  px-2`}
          >
            Income
          </h4>
          {selectedType === "income" && (
            <div className="h-[3px] rounded-t-[10px] bg-blue_3"></div>
          )}
        </div>
        <div
          className="w-fit cursor-pointer"
          onClick={() => {
            setSelectedType("expense");
            setCurrentPage(1);
          }}
        >
          <h4
            className={`${
              selectedType === "expense" ? "text-blue_3" : "text-text_2"
            }  px-2`}
          >
            Expense
          </h4>
          {selectedType === "expense" && (
            <div className="h-[3px] rounded-t-[10px] bg-blue_3"></div>
          )}
        </div>
      </div>

      <div className="w-full mt-5 px-6 min-[600px]:px-8 py-5 bg-white rounded-3xl ">
        <div className="flex text-text_2 pb-2 items-center justify-between min-[890px]:justify-normal w-full font-medium text-xs xl:text-base">
          <div className="min-[890px]:w-[20%]">Description</div>
          <div className="w-[12%] hidden min-[890px]:block">Transaction ID</div>
          <div className="w-[12%] hidden min-[890px]:block">Type</div>
          <div className="w-[12%] hidden min-[890px]:block">Card</div>
          <div className="w-[18%] hidden min-[890px]:block">Date</div>
          <div className="min-[890px]:w-[10%]">Amount</div>
          <div className="w-[12%] hidden min-[890px]:block">Receipt</div>
        </div>
        <div className="w-full">
          {currentData.map(transaction => (
            <TransactionRow
              description={transaction.description}
              transactionId={transaction.transaction_id}
              type={transaction.type}
              card={transaction.card}
              date={transaction.date}
              amount={transaction.amount}
              isIncome={transaction.isIncome}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-end">
        <Pagination
          currentPage={currentPage}
          totalCount={filteredTransactions[selectedType].length}
          pageSize={pageSize}
          onPageChange={page => setCurrentPage(page)}
          selectedType={selectedType}
        />
      </div>
    </div>
  );
}
