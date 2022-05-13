import "./home.scss";
import img from "../props/img2.jpg";
import { BsMouse } from "react-icons/bs";
import Buttons from "../button/button";

const Home = () => {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="main-img">
          <div className="circle "></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <img src={img} alt="" />
      </div>
      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>
      <h2>
        <span>About Me</span>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius animi
          ex aspernatur culpa quis labore, aliquam sapiente earum fugit impedit.
          Doloremque impedit molestias cum ex enim commodi aut asperiores
          repellendus minus, magni ab voluptatem modi. Voluptatem in dolorem,
          assumenda quaerat pariatur aspernatur natus, dicta nisi, molestiae
          incidunt eos! Sed, rerum, blanditiis unde iure facere fugiat dolor id
          quam, illum quod beatae voluptatibus. Corporis commodi sunt, laborum
          assumenda nesciunt obcaecati, inventore sequi dolorum, amet adipisci
          eveniet itaque quaerat. Ducimus dolorem libero veniam, fuga hic
          accusantium amet optio laboriosam deserunt autem consequuntur, nam
          dolores aspernatur. Minima aperiam quaerat asperiores earum quibusdam
          nesciunt.
        </p>
      </h2>
      <Buttons />
    </div>
  );
};

// let Toggle = document.querySelectorAll(".main-img");
// Toggle.forEach((active) => {
//   active.addEventListener("click", () => {
//     changeactive(Toggle);
//     active.classList.toggle("active");
//   });
// });

// const changeactive = () => {
//   Toggle.forEach((active) => {
//     active.classList.remove("active");
//   });
// };

export default Home;
