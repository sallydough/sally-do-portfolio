import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { RiMessengerFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-form">
        <h1 className="contact-title">let's connect</h1>
        {/* <div className="form-submit">
          <form action="">
            <input type="text" placeholder="Name" name="name" id="name" />
            <input type="email" placeholder="email" name="name" id="email" />
            <input type="number" placeholder="phone#" name="name" id="phone" />
            <input type="text" placeholder="message" name="name" id="message" />
            <button>Send</button>
          </form>
        </div> */}
      </div>
      <div className="contact-socials">
    
        <div className="email-link">
          <h2>
            <MdOutlineMail />
          </h2>
          <h2>sallydoh@gmail.com</h2>
        </div>
        <div className="photo-socials">
          <div className="socials">
            <div className="socials-group">
              <FaLinkedin size={120} />
              <h1>linkedin</h1>
            </div>
            <div className="socials-group">
              <BsGithub size={120} />
            <h1>github</h1>
            </div>
            <div className="socials-group">
              <RiMessengerFill size={120} />
            <h1>facebook</h1>
            </div>
            <div className="socials-group">
             <RiInstagramFill size={120} />
            <h1>instagram</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
