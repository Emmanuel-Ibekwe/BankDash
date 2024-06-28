import { useEffect } from "react";
import { findAngles, getAngleInRad } from "./../../../utils/pie-chart";

export default function DonutChart({ colors }) {
  // const [rotationAngle, setRotationAngle] = useState(56);
  // let angle = 34;
  useEffect(() => {
    let rotationAngle = 0;
    const innerColors = ["#1EC6B8", "#FF6195", "#FFB11F", "#3464F3"];
    const loans = [
      {
        length: 100,
        amount: 100,
        title: "Entertainment"
      },
      {
        length: 210,
        amount: 100,
        title: "Bill Expense"
      },
      {
        length: 230,
        amount: 100,
        title: "Investment"
      },
      {
        length: 250,
        amount: 100,
        title: "Others"
      }
    ];

    let lengths;
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      lengths = [180, 120, 130, 150];
    } else {
      lengths = [170, 110, 120, 140];
    }

    console.log("loans: ", findAngles(loans));
    findAngles(loans).forEach((loan, i) => {
      createSlice(
        loan.angle,
        lengths[i],
        loan.title,
        colors[i],
        innerColors[i],
        rotationAngle
      );
      rotationAngle += loan.angle;
    });

    function createSlice(angle, radius, id, color, innerColor, rotate) {
      let oppYPosition;
      let oppXPosition;
      let oppLength;

      const chart = document.getElementById("donut-chart");
      const slice = document.createElement("div");
      const hole = document.createElement("div");
      const sliceContainer = document.createElement("div");

      slice.id = id;

      sliceContainer.style.width = `${radius}px`;
      sliceContainer.style.height = `${radius}px`;
      sliceContainer.style.backgroundColor = `${color}`;

      slice.style.width = `${75}px`;
      slice.style.height = `${75}px`;
      slice.style.backgroundColor = innerColor;
      sliceContainer.style.transform = `rotate(${rotate}deg)`;

      slice.classList.add("slice");
      hole.classList.add("hole");
      sliceContainer.classList.add("slice-container");

      if (angle <= 90) {
        if (angle <= 45) {
          oppLength = radius * Math.tan(getAngleInRad(angle));
          oppXPosition = 50 + (oppLength * 100) / (2 * radius);
          slice.style.clipPath = `polygon(50% 0%, 50% 50%, ${oppXPosition}% 0%)`;

          sliceContainer.style.clipPath = `polygon(50% 0%, 50% 50%, ${oppXPosition}% 0%)`;
        } else if (angle > 45) {
          angle = 90 - angle;
          oppLength = radius * Math.tan(getAngleInRad(angle));
          oppYPosition = 50 - (oppLength * 100) / (2 * radius);
          slice.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%,  100% ${oppYPosition}%)`;
          sliceContainer.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%,  100% ${oppYPosition}%)`;
        }
      } else if (angle > 90 && angle <= 180) {
        angle = angle - 90;
        if (angle <= 45) {
          oppLength = radius * Math.tan(getAngleInRad(angle));
          oppYPosition = 50 + (oppLength * 100) / (2 * radius);
          slice.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%,  100% ${oppYPosition}%)`;
          sliceContainer.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%,  100% ${oppYPosition}%)`;
        } else if (angle > 45) {
          angle = 90 - angle;
          oppLength = radius * Math.tan(getAngleInRad(angle));
          oppXPosition = 50 + (oppLength * 100) / (2 * radius);
          slice.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${oppXPosition}% 100%)`;
          sliceContainer.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${oppXPosition}% 100%)`;
        }
      } else if (angle > 180 && angle <= 270) {
        angle = angle - 180;
        if (angle <= 45) {
          oppLength = radius * Math.tan(getAngleInRad(angle));
          oppXPosition = 50 - (oppLength * 100) / (2 * radius);
          slice.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${oppXPosition}% 100%)`;
          sliceContainer.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${oppXPosition}% 100%)`;
        } else if (angle > 45) {
          angle = 90 - angle;
          oppLength = radius * Math.tan(getAngleInRad(angle));
          oppYPosition = 50 + (oppLength * 100) / (2 * radius);
          slice.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${oppYPosition}%)`;
          sliceContainer.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${oppYPosition}%)`;
        }
      } else if (angle > 270 && angle <= 360) {
        angle = angle - 270;
        if (angle <= 45) {
          oppLength = radius * Math.tan(getAngleInRad(angle));
          oppYPosition = 50 - (oppLength * 100) / (2 * radius);
          slice.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${oppYPosition}%)`;
          sliceContainer.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${oppYPosition}%)`;
        } else if (angle > 45) {
          angle = 90 - angle;
          oppLength = radius * Math.tan(getAngleInRad(angle));
          oppXPosition = 50 - (oppLength * 100) / (2 * radius);
          slice.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${oppXPosition}% 0%)`;
          sliceContainer.style.clipPath = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${oppXPosition}% 0%)`;
        }
      }
      sliceContainer.appendChild(slice);
      chart.appendChild(sliceContainer);
      chart.appendChild(hole);
    }
  }, [colors]);

  return (
    <div
      id="donut-chart"
      className=" w-[280px] min-[900px]:w-[180px] xl:w-[280px] h-[170px] min-[900px]:h-[170px] xl:h-[188px] relative"
    ></div>
  );
}
