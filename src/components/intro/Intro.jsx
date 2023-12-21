import "./intro.scss";
import man from "../../Assets/man.png";
import down from "../../Assets/down.png";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={man} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Saceanu Ionut</h1>
          <h3>
            Web Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portofolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
