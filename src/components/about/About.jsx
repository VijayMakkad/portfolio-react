import "./about.scss"
import { motion, useInView} from "framer-motion"
import { useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect/dist/core';

const variants={
    inital:{
        y:-500,
        opacity:0,
        scale:0.2
        // y:100
    },
    animate:{
        // x:0,
        opacity:1,
        y:0,
        scale:1,
        transition:{
            duration:2,
            staggerChildren:0.1,
        
        }
    }
}

const About = () => {
    const typewriterRef = useRef();
     const ref = useRef();
     const isInView = useInView(ref,{margin:"-250px"});
     useEffect(() => {
    // Initialize Typewriter when the component mounts
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: ['AI.', 'Web developement.','Competetive Coding.','MLOps.'],
      autoStart: true,
      loop:true
    });

    // Clean up the Typewriter instance when the component unmounts
    return () => {
      typewriter.stop();
    };
  }, []); 
  return (
    <motion.div className="about" variants={variants} initial="inital" ref={ref} animate={isInView && "animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>Crafting Compelling Narratives Through Design <br />and Innovation.</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/bg.jpg" alt="" />
                
                <h1>I am <motion.b whileHover={{color:"orange"}}>Passionate</motion.b></h1>
            <button>Resume</button>
            </div>
            <div className="title" >

                <h1>about <motion.b whileHover={{color:"orange"}} ref={typewriterRef}></motion.b></h1>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente perferendis corrupti quidem necessitatibus nemo obcaecati atque eveniet hic perspiciatis officiis nam, minima maxime soluta reprehenderit veniam libero animi harum magnam!</p>

                <button>Go</button>
            </motion.div>
             <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente perferendis corrupti quidem necessitatibus nemo obcaecati atque eveniet hic perspiciatis officiis nam, minima maxime soluta reprehenderit veniam libero animi harum magnam!</p>

                <button>Go</button>
            </motion.div>
             <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente perferendis corrupti quidem necessitatibus nemo obcaecati atque eveniet hic perspiciatis officiis nam, minima maxime soluta reprehenderit veniam libero animi harum magnam!</p>

                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente perferendis corrupti quidem necessitatibus nemo obcaecati atque eveniet hic perspiciatis officiis nam, minima maxime soluta reprehenderit veniam libero animi harum magnam!</p>

                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
export default About