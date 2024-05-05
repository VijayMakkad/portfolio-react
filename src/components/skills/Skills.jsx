import React, { useRef, useState } from 'react';
import "./skills.css";
import { SKILLS } from '../../utils/data';
import SkillCard from './skillcard/SkillCard';
import SkillsInfoCard from './skillInfoCard/SkillInfoCard';
import {motion, useInView} from "framer-motion"

const variants={
    inital:{
        y:500,
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
            duration:1.5,
            staggerChildren:0.1,
        
        }
    }
}

const Skills = () => {
    
    const ref = useRef();
    const isInView = useInView(ref,{margin:"150px"});
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    const handleSelectedSkill=(data)=>{
        setSelectedSkill(data);
    }
  return (
    <motion.section className='skills-container' variants={variants} initial="inital" ref={ref} animate={isInView && "animate"}>
        <h5>
            Technical Proficiency
        </h5>
        <motion.div variants={variants} className='skills-content'>
            <motion.div variants={variants} className="skills">
                {SKILLS.map((item) => (
                    <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        onClick={() => handleSelectedSkill(item)}
                    />
                ))}
            </motion.div>

            <motion.div variants={variants} className="skills-info">
                <SkillsInfoCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </motion.div>
        </motion.div>
    </motion.section>
  );
};

export default Skills;
