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
        <h1 className="contact-title">let's connet</h1>
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
          <a href="mailto:sallydoh@gmail.com?">
            <h2>
              <MdOutlineMail size={70} />
            </h2>
            <h2>sallydoh@gmail.com</h2>
          </a>
        </div>
        <div className="photo-socials">
          <div className="socials">
            <div className="socials-group">
              <a
                href="https://www.linkedin.com/in/sallydough/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="contact-icon" />
                <h1>linkedin</h1>
              </a>
            </div>
            <div className="socials-group">
              <a
                href="https://github.com/sallydough"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub 
                className="contact-icon" />
                <h1>github</h1>
              </a>
            </div>
            <div className="socials-group">
              <a
                href="https://www.facebook.com/sallyuyen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiMessengerFill 
                className="contact-icon" />
                <h1>facebook</h1>
              </a>
            </div>
            <div className="socials-group">
              <a
                href="https://www.instagram.com/sallydough/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill 
                className="contact-icon" />
                <h1>instagram</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
