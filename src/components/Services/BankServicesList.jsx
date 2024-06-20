import BankServicesItem from "./BankServicesItem";

export default function BankServicesList() {
  const bankServices = [
    "Business loans",
    "Checking accounts",
    "Savings accounts",
    "Debit and credit cards",
    "Life insurance",
    "Business loans"
  ];

  return (
    <section className="w-full pt-6">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2">
        Bank Services List
      </h2>
      <div className="w-full pt-4">
        {bankServices.map(el => (
          <BankServicesItem service={el} />
        ))}
      </div>
    </section>
  );
}
