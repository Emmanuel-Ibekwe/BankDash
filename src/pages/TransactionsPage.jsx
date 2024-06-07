import { useOutletContext } from "react-router-dom";
import Header from "../components/Header/Header";
import Transactions from "../components/Transactions/Transactions";

export default function TransactionsPage() {
  const [isNavClosed, setIsNavClosed] = useOutletContext();
  return (
    <div className="w-full lg:body-width-lg xl:body-width-xl static lg:absolute lg:left-[230px] xl:left-60">
      <Header
        isNavClosed={isNavClosed}
        onSetIsNavClosed={setIsNavClosed}
        title="Transactions"
      />
      <Transactions />
    </div>
  );
}
