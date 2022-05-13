import "./nav.scss";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#members">
        <TiGroupOutline className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
};

let Icons = document.querySelectorAll(".navigation .icon");
Icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    changeactive(icon);
    icon.classList.add("active-nav");
  });
});

const changeactive = () => {
  Icons.forEach((icon) => {
    icon.classList.remove("active-nav");
  });
};

export default Navbar;
