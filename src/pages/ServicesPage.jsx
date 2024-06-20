import { useOutletContext } from "react-router-dom";
import Header from "../components/Header/Header";
import Services from "./../components/Services/Services";

export default function ServicesPage() {
  const [isNavClosed, setIsNavClosed] = useOutletContext();
  return (
    <div className="w-full lg:body-width-lg xl:body-width-xl static lg:absolute lg:left-[230px] xl:left-60">
      <Header
        isNavClosed={isNavClosed}
        onSetIsNavClosed={setIsNavClosed}
        title="Services"
      />
      <Services />
    </div>
  );
}
