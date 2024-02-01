import "./projects.css";
import canvaspic from "../../components/Projects/CANVAS2.png";
import justforuspic from "../../components/Projects/just-for-us.png";
import shopsitepic from "../../components/Projects/SHOP-SITE.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="project-title">
        <h1>work & projects*</h1>
      </div>
      <main className="project-card-container">
        <article className="project-card card1">
          <figure className="project-pic">
            <img
              className="project-pic"
              src={shopsitepic}
              alt="Project Photo"
            />
          </figure>
          <h1 className="project-name">Shop Chique</h1>
          <p className="description">
            LEARNED CONCEPTS OF HTML, CSS, JAVASCRIPT, AND MEDIA QUERIES THROUGH CREATION OF E-COMMERCE WEBSITE.
    
            <br/> Technology used: HTML, CSS, JavaScript, Media Queries
          </p>
          <div className="github-demo">
          <a href="https://github.com/sallydough/eccomerce-website" target="_blank" rel="noopener noreferrer">
              <button className="button-github">GITHUB</button></a>
            <a href="https://sallydough.github.io/eccomerce-website/" target="_blank" rel="noopener noreferrer">
              <button className="button-demo">LIVE DEMO</button>
             </a>
          </div>
        </article>
        <article className="project-card card2">
          <figure className="project-pic">
            <img className="project-pic" src={canvaspic} alt="Project Photo" />
          </figure>
          <h1 className="project-name">PORTFOLIO DESIGN FOR OUTFITTERS TENT</h1>
          <p className="description">
            CREATED A MINIMAL LOGO, ICON, BRAND, AND UI DESIGN FOR MY FRIEND TO SHARE
            HIS TALENT WITH THE WORLD.
            <br />
            <br />
            Technology used: Figma
          </p>

          <div className="github-demo">
          <a href="https://www.figma.com/file/oHku9t1OkXcc9G6ZGgk96n/Sally-Design-Board?type=design&node-id=210-101&mode=design&t=DZi3MKHVNibBuPEo-0" target="_blank" rel="noopener noreferrer">
              <button className="button-github">VIEW FIGMA</button></a>
          </div>
        </article>
        <article className="project-card card3">
          <figure className="project-pic">
            <img
              className="project-pic"
              src={justforuspic}
              alt="Project Photo"
            />
          </figure>
          <h1 className="project-name">JUST FOR US APP</h1>
          <p className="description">
            SENIOR ENHANCED LIVING APP FOR CONNECTION AND BELONGING
          </p>
          <div className="github-demo">
          
          <a href="https://github.com/sallydough/just-for-us-master" target="_blank" rel="noopener noreferrer">
              <button className="button-github">GITHUB</button></a>
            <a href="https://just-for-us-master.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="button-demo">LIVE DEMO</button>
             </a>
          </div>
        </article>
        {/* <article className="project-card card4">
          <figure className="project-pic"><img className="project-pic" src={project1pic} alt="Project Photo" /></figure>
          <h1 className="project-name">AI SUMMARIZER</h1>
          <p className="description">
            This app tracks your menstrual cycle to provide optimization in your
            overall health, activity, fasting. overall health, activity, fasting.
          </p>
          <div className="github-demo">
            <button className="button-github">GITHUB</button>
            <button className="button-demo">LIVE DEMO</button>
          </div>
        </article>
        <article className="project-card card5">
          <figure className="project-pic"><img className="project-pic" src={project1pic} alt="Project Photo" /></figure>
          <h1 className="project-name">MENSTRUAL TRACKING APP</h1>
          <p className="description">
            This app tracks your menstrual cycle to provide optimization in your
            overall health, activity, fasting.
          </p>
          <div className="github-demo">
            <button className="button-github">GITHUB</button>
            <button className="button-demo">LIVE DEMO</button>
          </div>
        </article>
        <article className="project-card card6">
          <figure className="project-pic"><img className="project-pic" src={project1pic} alt="Project Photo" /></figure>
          <h1 className="project-name">MENSTRUAL TRACKING APP</h1>
          <p className="description">
            This app tracks your menstrual cycle to provide optimization in your
            overall health, activity, fasting.
          </p>
          <div className="github-demo">
            <button className="button-github">GITHUB</button>
            <button className="button-demo">LIVE DEMO</button>
          </div>
        </article> */}
      </main>
    </section>
  );
};

export default Projects;
