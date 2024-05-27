import React from "react";
import Header from "../components/Header/Header";
import DashboardBody from "../components/Overview/Overview";

export default function Home() {
  return (
    <div className="lg:body-width-lg xl:body-width-xl absolute lg:left-[230px] xl:left-60">
      <Header />
      <DashboardBody />
    </div>
  );
}
