import "./about.css";

const About = () => {
  return (
    <>
      <section id="about-container">
        <div className="bio-content">
          <div className="about-title">
            <h1>full stack web developer &</h1>
            <h1 className="ui-ux">ui/ux designer</h1>
          </div>
          <div className="about-paragraph">
            <p>
              HI MY NAME IS IS SALLY. IT'S MUCH, MUCH BETTER TO WIND UP WITH A
              LOT OF CRAP HAVING TRIED THAN TO OVERTHINK IN THE BEGINNING AND
              NOT DO IT.  LOT OF CRAP HAVING TRIED THAN TO OVERTHINK IN THE BEGINNING AND
              NOT DO IT.
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
