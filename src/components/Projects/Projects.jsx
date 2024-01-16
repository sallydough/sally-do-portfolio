import "./projects.css";
import project1pic from "../../components/Projects/branching-river.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <div className="project-title">
        <h1>WORK & PROJECTS*</h1>
      </div>
      <main className="project-card-container">
        <article className="project-card card1">
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
        <article className="project-card card2">
          <figure className="project-pic">
          <img className="project-pic" src={project1pic} alt="Project Photo" />
          </figure>
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
        <article className="project-card card3">
          <figure className="project-pic">
            <img className="project-pic" src={project1pic} alt="Project Photo" />
          </figure>
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
        <article className="project-card card4">
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
        </article>
      </main>
    </section>
  );
};

export default Projects;
