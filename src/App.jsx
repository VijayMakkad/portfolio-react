import Test from "./Test";
import "./app.scss";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/project/Project";
const App = () => {
  return <div>
    <section id='Home'>
      <Navbar/>
      <Hero/>
      </section>
    <section id='About'><Parallax type="about"/></section>
    <section><About/></section>
    {/* <section id="Skills">Skills</section> */}
    <section id='Projects'><Parallax type="projects"/></section>
    <Project/>
    <section id='Contact'>Contact</section>
    {/* <Test/>
    <Test/> */}

  </div>;
};

export default App;
