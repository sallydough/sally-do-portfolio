import "./about.css";

const About = () => {
  return (
    <>
      <section id="/" className="about">
        <div className="bio-content">
          <div className="about-title">
            <h1 className="dev">full stack web developer &</h1>
            <h1 className="ui-ux">ui/ux designer</h1>
          </div>
          <div className="about-paragraph">
            <p>
              HI, I'M SALLY. DESIGNING, DEVELOPING, AND MAINTAINING WEB APPLICATIONS USING FIGMA, HTML, CSS, REACT, AND RELATED TECHNOLOGIES.
              </p>
          </div>

          <div className="arrow-connect-button">
            <div className="about-arrow">↓</div>
            <div className="connect-button">
              <h1>let's DO stuff together ➛</h1>
            </div>
          </div>
         
        </div> 
        <div className="about-picture"></div>
      </section>
    </>
  );
};

export default About;
