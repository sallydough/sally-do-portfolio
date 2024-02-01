import './nav.css'
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <section id="nav">
      <div className="about-projects">
      <Link to="/" style={{ textDecoration: 'none' }}>
            <h2>ABOUT ME</h2>
          </Link>
        <h1 className="dash-nav"></h1>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
            <h2>PROJECTS</h2>
          </Link>
      </div>
      <div className="name">
        <h2>Sally Do</h2>
      </div>
      <div className="experience-contact">
      <Link to="/experience" style={{ textDecoration: 'none' }}>
            <h2>EXPERIENCE</h2>
          </Link>
        <h1 className="dash-nav"></h1>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
            <h2>CONTACT</h2>
          </Link>
      </div>
    </section>
    </>
    
  )
}

export default Nav