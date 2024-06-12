import Invoice from "./Invoice";

export default function InvoiceesSent() {
  const invoices = [
    {
      invoice_title: "apple store",
      time: "5h ago",
      amount: "450"
    },
    {
      invoice_title: "michael",
      time: "2 days ago",
      amount: "160"
    },
    {
      invoice_title: "playstation",
      time: "5 days ago",
      amount: "1850"
    },
    {
      invoice_title: "william",
      time: "10 days ago",
      amount: "90"
    }
  ];

  return (
    <div className="w-full min-[900px]:w-[31.8%]">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2 ">
        Invoices Sent
      </h2>
      <div className="flex flex-col justify-between rounded-3xl h-[245px] min-[600px]:h-[276px] xl:h-[364px] px-4 min-[600px]:px-6 min-[900px]:px-5 xl:px-6  py-4 min-[600px]:py-6 min-[900px]:py-6 xl:py-8 bg-white">
        {invoices.map(ele => (
          <Invoice
            title={ele.invoice_title}
            time={ele.time}
            amount={ele.amount}
          />
        ))}
      </div>
    </div>
  );
}
