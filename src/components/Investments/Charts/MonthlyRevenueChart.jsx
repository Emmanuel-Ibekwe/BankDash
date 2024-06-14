import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { numberWithCommas } from "../../../utils/numberFormat";

export default function MonthlyRevenueChart() {
  const [height, setHeight] = useState(228);
  const options = {
    chart: {
      id: "monthly-revenue"
    },

    colors: ["#16DBCC"],

    stroke: {
      width: 3,
      curve: "smooth"
    },
    xaxis: {
      categories: [2016, 2017, 2018, 2019, 2020, 2021],
      labels: {
        style: {
          colors: "#718EBF"
        }
      }
    },
    yaxis: {
      tickAmount: 4,
      labels: {
        formatter: function(value) {
          return `$${numberWithCommas(value)}`;
        },
        style: {
          colors: "#718EBF"
        }
      }
    },
    series: [
      {
        name: "Monthly Revenue",
        type: "line",
        data: [4000, 23000, 16000, 38000, 21000, 30000]
      }
    ]
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      setHeight(228);
    } else {
      setHeight(195);
    }
  }, []);

  return (
    <div className=" bg-white px-1.5 py-4 min-[600px]:p-5 rounded-3xl h-[226px] xl:h-[282px]">
      <Chart options={options} series={options.series} height={height} />
    </div>
  );
}
