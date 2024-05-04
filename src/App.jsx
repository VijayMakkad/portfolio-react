import Test from "./Test";
import "./app.scss";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
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
    <section>Pr1</section>
    <section>Pr2</section>
    <section>Pr3</section>
    <section id='Contact'>Contact</section>
    {/* <Test/>
    <Test/> */}

  </div>;
};

export default App;
