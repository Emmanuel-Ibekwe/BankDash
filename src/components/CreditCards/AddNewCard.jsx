import CardDetailsForm from "./CardDetailsForm";

export default function AddNewCard() {
  return (
    <div className="w-full min-[820px]:w-[66.36%]">
      <h2 className="text-primary_2 font-semibold text-base min-[600px]:text-lg xl:text-xl pb-2 w-full">
        Add New Card
      </h2>
      <div className="w-full bg-white rounded-3xl p-6 h-[560px] min-[375px]:h-[527px] min-[600px]:h-[321px] xl:h-[440px]">
        <p className="text-text_2 pr-4 xl:pr-8 text-xs xl:text-base">
          Credit card generally means a plastic card issued by Scheduled
          Commercial Banks asssigned to a Cardholder with a credit limit that
          can be used to purchase goods and services on credit or obtain cash
          advances.
        </p>

        <CardDetailsForm />
      </div>
    </div>
  );
}
