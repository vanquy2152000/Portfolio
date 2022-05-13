import "./contact.scss";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact me</h1>
      <div className="contact-links">
        <a href="" className="contact youtube">
          <AiOutlineYoutube className="icon" />
          <h2>Youtube</h2>
          <span>Creative Ambition</span>
        </a>

        <a href="" className="contact youtube">
          <AiOutlineWhatsApp className="icon" />
          <h2>WhatsApp</h2>
          <span>+000 000 0000</span>
        </a>

        <a href="" className="contact youtube">
          <AiOutlineInstagram className="icon" />
          <h2>Instagram</h2>
          <span>_Creative_Ambition_</span>
        </a>
      </div>
    </div>
  );
};
export default Contact;
