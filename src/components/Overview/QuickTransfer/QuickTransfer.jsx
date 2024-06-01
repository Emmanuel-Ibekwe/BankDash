import { useState, useEffect } from "react";
import carouselPic1 from "../../../assets/carousel_pic_1.png";
import carouselPic2 from "../../../assets/carousel_pic_2.png";
import carouselPic3 from "../../../assets/carousel_pic_3.png";
import { groupIntoThrees } from "../../../utils/quick-transfer";
import StaffProfile from "./StaffProfile";
import { set } from "jsonpointer";
import { TelegramIcon } from "../../../svg";

export default function QuickTransfer() {
  const [isPressed, setIsPressed] = useState(0);
  const [btnId, setBtnId] = useState("");
  const [curSlide, setCurSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const [outline, setOutline] = useState(false);
  const staff = [
    {
      name: "Livia Bator",
      pic: carouselPic1,
      role: "CEO"
    },
    {
      name: "Randy Press",
      pic: carouselPic2,
      role: "Director"
    },
    {
      name: "Workman",
      pic: carouselPic3,
      role: "Designer"
    },
    {
      name: "Jack Forge",
      pic: carouselPic2,
      role: "Software Developer"
    },
    {
      name: "Noble Nod",
      pic: carouselPic2,
      role: "AI Engineer"
    },
    {
      name: "Levi Aaron",
      pic: carouselPic2,
      role: "Database Adminstrator"
    }
  ];
  let nextSlide, prevSlide;
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    setMaxSlide(+slides.length - 1);

    const goToSlide = function(slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    goToSlide(curSlide);
    console.log("curSlide: ", curSlide);
    console.log("maxSlide: ", maxSlide);
  }, [curSlide]);

  let timeoutId = null;

  const handleClick = id => {
    setIsPressed(true);
    if (id === "left") {
      if (curSlide <= 0) {
        setCurSlide(maxSlide);
      } else {
        setCurSlide(prev => prev - 1);
      }
    } else if (id === "right") {
      if (curSlide == maxSlide) {
        console.log("maxSlide right");
        setCurSlide(0);
      } else {
        console.log("right ++");
        console.log("typeof maxSlide: ", typeof maxSlide);
        setCurSlide(prev => prev + 1);
      }
    }
    setBtnId(id);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      setIsPressed(false);
      setBtnId("");
    }, 300);
  };

  return (
    <div className="w-full lg:min-w-[295px]  xl:min-w-[400px] h-[223px] xl:h-[276px] rounded-3xl bg-white px-5 xl:px-6 py-8">
      <div className="w-full min-[390px]:w-[90%] min-[500px]:w-[65%] min-[548px]:w-[60%] min-[658px]:w-1/2 min-[760px]:w-full lg:h-28 xl:h-36 relative">
        <button
          className={` bg-white opacity-70 w-10 xl:w-[50px] z-20 absolute -left-6 top-1/2  h-10 xl:h-[50px] rounded-full ease-in border border-white ${
            isPressed && btnId === "left"
              ? "-translate-y-1/4 shadow-md"
              : "shadow-xl -translate-y-1/2"
          }`}
          onClick={() => {
            handleClick("left");
          }}
        >
          &lt;
        </button>

        <div className="relative h-28 xl:h-36 w-60 xl:w-80  overflow-hidden ">
          {groupIntoThrees(staff).map((group, i) => (
            <div
              className="absolute top-0 flex w-60 xl:w-80 h-full justify-between slide transition duration-300"
              data-slide={`${i}`}
            >
              <StaffProfile
                pic={group[0].pic}
                name={group[0].name}
                role={group[0].role}
              />
              {group[1] && (
                <StaffProfile
                  pic={group[1].pic}
                  name={group[1].name}
                  role={group[1].role}
                />
              )}
              {group[2] && (
                <StaffProfile
                  pic={group[1].pic}
                  name={group[1].name}
                  role={group[1].role}
                />
              )}
            </div>
          ))}
        </div>
        <button
          className={`bg-white  cursor-pointer opacity-60 w-10 xl:w-[50px] z-20 absolute -right-4 top-1/2  h-10 xl:h-[50px] rounded-full ease-in border border-white ${
            isPressed && btnId === "right"
              ? "-translate-y-1/4 shadow-md"
              : "shadow-xl -translate-y-1/2"
          }`}
          onClick={() => {
            handleClick("right");
          }}
        >
          &gt;
        </button>
      </div>

      <div className="flex w-full items-center justify-between mt-2 xl:mt-4">
        <p className="text-text_2 text-xs xl:text-sm w-[35%] w-[40%]">
          Write Amount
        </p>
        <div className={`flex w-[65%] xl:w-[60%] items-center justify-end`}>
          <div className="h-10 xl:h-[50px] rounded-full w-[168px] xl:w-[265px] justify-end relative">
            <input
              type="number"
              className="text-text_2 text-xs xl:text-base w-full h-full bg-[#EDF1F7] pl-4 pr-[90px] xl:pr-[120px] rounded-full focus:outline-text_2"
              placeholder="Amount"
              onFocus={() => setOutline(true)}
              onBlur={() => setOutline(false)}
            />
            <div
              className={`absolute right-0 top-0 box-border  bg-[#1814F3] flex w-[100px] xl:w-[125px] lg:h-10 xl:h-[50px] rounded-full p-2.5 items-center justify-around`}
            >
              <p className="text-white">Send</p>
              <button className={`focus:outline-none `} type="button">
                <TelegramIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
