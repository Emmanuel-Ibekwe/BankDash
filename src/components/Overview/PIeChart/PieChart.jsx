import { useEffect } from "react";
import { findAngles, getAngleInRad } from "./../../../utils/pie-chart";

export default function PieChart() {
  // const [rotationAngle, setRotationAngle] = useState(56);
  // let angle = 34;
  useEffect(() => {
    let rotationAngle = 0;

    const colors = ["#343C6A", "#FC7900", "#1814F3", "#FA00FF"];

    const loans = [
      {
        length: 100,
        amount: 300,
        title: "Entertainment"
      },
      {
        length: 210,
        amount: 15,
        title: "Bill Expense"
      },
      {
        length: 230,
        amount: 35,
        title: "Investment"
      },
      {
        length: 250,
        amount: 20,
        title: "Others"
      }
    ];
    let lengths;
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      lengths = [200, 210, 230, 240];
    } else if (screenWidth >= 900) {
      lengths = [110, 130, 150, 160];
    } else {
      lengths = [117, 138, 159, 170];
    }

    console.log("loans: ", findAngles(loans));
    findAngles(loans).forEach((loan, i) => {
      createSlice(loan.angle, lengths[i], loan.title, colors[i], rotationAngle);
      rotationAngle += loan.angle;
    });

    // createSlice(30, 90, "expense", "blue", 0);
    // createSlice(angle, length, "expenses");

    function createSlice(angle, radius, id, color, rotate) {
      let oppYPosition;
      let oppXPosition;
      let oppLength;

      let sliceConRadius = radius + 20;
      const chart = document.getElementById("pie-chart");
      const slice = document.createElement("div");
      const sliceContainer = document.createElement("div");
      // const sliceInnerDiv = document.createElement("div");
      // sliceInnerDiv.classList.add("slice-inner-div");
      // const slicePercentParagraph = document.createElement("p");
      // slicePercentParagraph.innerText = `${((angle * 100) / 360).toFixed(0)}%`;
      // // slicePercentParagraph.style.transform = `rotate(-${rotate}deg)`;

      // const sliceTitleParagraph = document.createElement("p");
      // // sliceTitleParagraph.innerText = `${((angle / 360) * 100).toFixed()}%`;
      // sliceTitleParagraph.innerText = id;
      slice.id = id;

      sliceContainer.style.width = `${sliceConRadius}px`;
      sliceContainer.style.height = `${sliceConRadius}px`;

      // sliceInnerDiv.appendChild(slicePercentParagraph);
      // sliceInnerDiv.appendChild(sliceTitleParagraph);
      // sliceInnerDiv.style.left = `${(radius / 4) *
      //   Math.sin(getAngleInRad(angle / 2)) +
      //   radius / 2}px`;
      // slice.appendChild(sliceInnerDiv);
      // sliceInnerDiv.style.top = `${radius / 2 -
      //   (radius / 4) * Math.cos(getAngleInRad(angle / 2))}px`;
      // sliceInnerDiv.style.transform = `translate(-50%, -50%)`;
      // sliceInnerDiv.style.transform = `translate(-50%, -50%)rotate(-${rotate}deg)`;

      slice.style.width = `${radius}px`;
      slice.style.height = `${radius}px`;
      slice.style.backgroundColor = color;
      sliceContainer.style.transform = `rotate(${rotate}deg)`;

      slice.classList.add("slice");
      sliceContainer.classList.add("slice-container");

      slice.style.transform = `translate(${1}px, -${(angle * 2) / 360 + 2}px)`;

      // if (rotate <= 90) {
      //   offsetY = offset;
      //   offsetX = offsetY * Math.tan(getAngleInRad(angle / 2));
      //   slice.style.transform = `translate(${offsetX}px, -${offsetY}px)`;
      // } else if (rotate > 90 && rotate <= 180) {
      //   offsetX = 1.3395;
      //   offsetY = offsetX * Math.tan(getAngleInRad(angle / 2));
      //   console.log("offsetX", offsetX);
      //   slice.style.transform = `translate(${offsetX}px, -${15}px)`;
      // } else if (rotate > 180 && rotate <= 270) {
      //   slice.style.transform = `translate(${offsetX}px, -${15}px)`;
      // }

      if (angle <= 90) {
        if (angle <= 45) {
          oppLength = radius * Math.tan(getAngleInRad(angle));
          oppXPosition = 50 + (oppLength * 100) / (2 * radius);
          slice.style.clipPath = `polygon(50% 0%, 50% 50%, ${oppXPosition}% 0%)`;
          // Slice container
          // sliceConLength = sliceConRadius * Math.tan(getAngleInRad(angle));
          // sliceConXPosition =
          //   50 + (sliceConLength * 100) / (2 * sliceConRadius);
          // console.log("sliceConXPosition: ", sliceConXPosition);
          // console.log("oppXPosition: ", oppXPosition);

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
    }
  }, []);

  return (
    <div
      id="pie-chart"
      className="translate-y-3 min-[900px]:translate-y-0 w-[280px] min-[900px]:w-[180px] xl:w-[280px] h-[280px] min-[900px]:h-[180px] xl:h-[280px] relative"
    ></div>
  );
}
