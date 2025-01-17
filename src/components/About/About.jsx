import "./about.css";
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <>
      <section id="/" className="about">
        <div className="bio-content">
          <div className="about-title">
            <h1 className="dev">full stack web developer &</h1>
            <h1 className="ui-ux">ui/ux designer</h1>
          </div>
          <div className="about-picture-mobile"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
          <div className="about-paragraph">
            <p>
              HI, I'M SALLY. DESIGNING AND DEVELOPING USER-FOCUSED MOBILE AND WEB APPLICATIONS THAT DRIVES ENGAGMENT AND MEETS BUSINESS GOALS.
              </p>
          </div>

          <div className="arrow-connect-button">
            <div className="about-arrow">↑</div>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <div className="connect-button">
              <h1>Let's DO this ➛</h1>
            </div>
            </Link>
          </div>
         
        </div> 
        <div className="about-picture"></div>
      </section>
    </>
  );
};

export default About;
