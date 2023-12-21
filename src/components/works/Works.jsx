import "./works.scss";
import js from "../../Assets/js.png";
import arrowleft from "../../Assets/arrow.png";
import { useState } from "react";
import mobile from "../../Assets/mobile.png";
import globe from "../../Assets/globe.png";
import write from "../../Assets/writing.png";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: `${mobile}`,
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, et!",
      img: "",
    },
    {
      id: "2",
      icon: `${globe}`,
      title: "Mobile Applications",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, consectetur.",
      img: "",
    },
    {
      id: "3",
      icon: `${write}`,
      title: "Branding",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, facilis.",
      img: "",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={js} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className="arrow left"
        src={arrowleft}
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        className="arrow right"
        src={arrowleft}
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Work;
