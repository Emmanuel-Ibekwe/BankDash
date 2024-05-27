import React, { Component, useEffect, useState } from "react";
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
    } else if (screenWidth >= 1024) {
      setHeight(190);
    }
  }, []);

  return (
    <div className="lg:min-w-[423px] w-[59%] xl:min-w-[635px] lg:h-[220px] xl:h-[276px] bg-white rounded-3xl lg:px-3 lg:py-4 xl:p-5">
      <Chart options={options} series={options.series} height={height} />
    </div>
  );
}
