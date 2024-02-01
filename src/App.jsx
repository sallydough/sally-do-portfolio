import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav /> 
        {/* <About /> */}
        {/* <Projects />
        <Experience />
        <Contact /> */}
        <Routes>
          {/* <Route path="/" element={<Nav />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
