import './projects.css'

const Projects = () => {
  return (
   <section id="projects">
    <div className="project-title">
     <h1>WORK & PROJECTS</h1> 
    </div>
    <main className="project-card-container">
      <article className="project-card">
        <figure className="project-pic">Picture</figure>
        <h1>MENSTRUAL TRACKING APP</h1>
        <p>This app tracks your menstrual cycle to provide optimization in your overall health, activity, fasting.</p>
        <div className="github-demo">
          <button>GITHUB</button>
          <button>LIVE DEMO</button>
        </div>
      </article>
      <article className="project-card">
        <figure className="project-pic">Picture</figure>
        <h1>MENSTRUAL TRACKING APP</h1>
        <p>This app tracks your menstrual cycle to provide optimization in your overall health, activity, fasting.</p>
        <div className="github-demo">
          <button>GITHUB</button>
          <button>LIVE DEMO</button>
        </div>
      </article>
      <article className="project-card">
        <figure className="project-pic">Picture</figure>
        <h1>MENSTRUAL TRACKING APP</h1>
        <p>This app tracks your menstrual cycle to provide optimization in your overall health, activity, fasting.</p>
        <div className="github-demo">
          <button>GITHUB</button>
          <button>LIVE DEMO</button>
        </div>
      </article>
    </main>
  
   </section>
  )
}

export default Projects