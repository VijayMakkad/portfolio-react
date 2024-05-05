import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";
import ToGoTop from "./components/ToGoTop";
const App = () => {
  return <div>
    <section id='Home'>
      <Navbar/>
      <Hero/>
      </section>
    <section id='About'><Parallax type="about"/></section>
    <section><About/></section>
    <section id="Skills"><Skills/></section>
    <section id='Projects'><Parallax type="projects"/></section>
    <Project/>
    <section id='Contact'><Contact/></section>
    </div>;
};

export default App;
