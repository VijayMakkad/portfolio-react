import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return <div>
    <section id='Home'>
      <Navbar/>
      </section>
    <section id='About'>Parallax</section>
    <section id='Projects'>Services</section>
    <section>Parallax</section>
    <section>Pr1</section>
    <section>Pr2</section>
    <section>Pr3</section>
    <section id='Contact'>Contact</section>
    {/* <Test/>
    <Test/> */}

  </div>;
};

export default App;
