import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function SplineChart() {
  const [height, setHeight] = useState(250);
  const options = {
    chart: {
      id: "spline-chart"
    },
    stroke: {
      curve: "smooth"
    },
    colors: ["#2D60FF"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    series: [
      {
        name: "series-1",
        type: "area",
        data: [0, 220, 340, 230, 490, 430, 790, 200, 590, 220, 620, 350]
      }
    ]
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      setHeight(240);
    } else {
      setHeight(190);
    }
  }, []);

  return (
    <div className=" w-full lg:min-w-[423px]   h-[223px] xl:h-[276px] bg-white rounded-3xl px-3 pt-4 pb-0 min-[406px]:py-4 xl:p-5">
      <div className="w-full translate-y-4 min-[406px]:translate-y-0">
        <Chart options={options} series={options.series} height={height} />
      </div>
    </div>
  );
}
