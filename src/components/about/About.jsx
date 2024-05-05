import "./about.scss"
import React from "react";
import { motion, useInView} from "framer-motion"
 import { Link } from 'react-router-dom';
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
                <a href="https://drive.google.com/file/d/1kMMs_g6Jns7pdODV5v0sR8kyyAUNIJPK/view" target="_blank" rel="noopener noreferrer">
                <button>Resume</button>
                </a>
                
            </div>
            <div className="title" >

                <h1>about <motion.b whileHover={{color:"orange"}} ref={typewriterRef}></motion.b></h1>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>School</h2>
                <p>Achieved excellence with a remarkable 96% in 10th and 97% in 12th grades. Successfully cleared the NTSE 1st round. Earned a gold medal in Ken Ken and abacus examination, showcasing intellectual prowess and dedication to academic and problem-solving endeavors.</p>

                               <button onClick={()=>{alert("Under Construction!")}}>Go</button>

            </motion.div>
             <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>College</h2>
                <p>Thriving at SRM University as a 2nd-year student, I've continued to excel with a stellar academic record. Achieved a remarkable 9.55 CGPA in the 1st semester and raised the bar even higher with a 9.71 CGPA in the 2nd semester. Now, in the 3rd semester, I've achieved a phenomenal 9.81 CGPA, culminating in an outstanding 9.71 overall CGPA for the first two years.</p>

                <button onClick={()=>{alert("Under Construction!")}}>Go</button>
            </motion.div>
             <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Diverse Sporting Success</h2>
                <p>A versatile athlete with triumphs at the district level in football, badminton, and swimming, I've recently added more feathers to my cap. Not only did I excel at the district level in high jump and volleyball, but I also elevated my status to the state level in football. At SRM University, I've contributed my skills to various sports arenas, including the inter-hostel football competition, showcasing my prowess across multiple sporting domains.</p>

                                <button onClick={()=>{alert("Under Construction!")}}>Go</button>

            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Hackathon</h2>
                <p>Engaged in the vibrant realm of hackathons, I showcased my skills by participating in 7 events. Notably, I emerged as a finalist in one of SRM University's hackathons, demonstrated my prowess in an online hackathon hosted by InnovateandEducate, and excelled as a finalist in a blockchain Pan-India hackathon named Genesis.</p>

                                <button onClick={()=>{alert("Under Construction!")}}>Go</button>

            </motion.div>
        </motion.div>
    </motion.div>
  )
}
export default About