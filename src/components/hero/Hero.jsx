import { motion } from "framer-motion"
import "./hero.scss"

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
}

const sliderVariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-200%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:14,
            staggerChildern:0.1,
        }
    },
    
}


const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>Vijay Makkad</motion.h2>
            <motion.h1 variants={textVariants}>Web Developer and MLOps Engineer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <a href="https://github.com/VijayMakkad"><motion.button variants={textVariants}>See the latest Project</motion.button></a>
                <a href="#Contact"><motion.button whileHover={{background:"lightgray",color:"black"}} variants={textVariants}>Contact Me</motion.button></a>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} intial="intial" animate="animate">
            Coding Enthusiast
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" alt="Vijay Makkad" />
        </div>
    </div>
  )
}
export default Hero