import "./topbar.scss";
import { IoPerson } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Cool.
          </a>
          <div className="itemContainer">
            <IoPerson className="icon" />
            <span>+44 983 223 12</span>
          </div>
          <div className="itemContainer">
            <IoMdMail className="icon" />
            <span>saceanu.ionut@icloud.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
