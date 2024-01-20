import "./about.css";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="bio-content">
          <div className="about-title">
            <h1 className="dev">full stack web developer &</h1>
            <h1 className="ui-ux">ui/ux designer</h1>
          </div>
          <div className="about-paragraph">
            <p>
              HI MY NAME IS IS SALLY. FULL STACK SOFTWARE DEVELOPER AND SELF-TAUGHT UX/UI DESIGNER SPECIALIZED IN WEB AND MOBILE APPLICATIONS.
              </p>
          </div>

          <div className="arrow-connect-button">
            <div className="about-arrow">↓</div>
            <div className="connect-button">
              <h1>let's work together ➛</h1>
            </div>
          </div>
         
        </div> 
        <div className="about-picture"></div>
      </section>
    </>
  );
};

export default About;
