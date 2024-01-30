import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-form">
        <h1 className="contact-title">let's connect</h1>
        <div className="form-submit">
          <form action="">
            <input type="text" placeholder="Name" name="name" id="name" />
            <input type="email" placeholder="email" name="name" id="email" />
            <input type="number" placeholder="phone#" name="name" id="phone" />
            <input type="text" placeholder="message" name="name" id="message" />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div className="contact-socials">
        <h1>*:</h1>
        <div className="email-link">
          <h2>email icon</h2>
          <h2>sallydoh@gmail.com</h2>
        </div>
        <h2>catch me on:</h2>
        <div className="photo-socials">
          <h1>photo</h1>
          <div className="socials">
            <h1>linkedin</h1>
            <h1>github</h1>
            <h1>facebook</h1>
            <h1>ig</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
