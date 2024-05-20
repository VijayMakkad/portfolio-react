import React from "react";
import {motion} from "framer-motion";
import { Github, Instagram, Linkedin } from 'lucide-react';
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
    return(
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0,scale:0.5}}
                animate={{opacity:1,scale:1.2}}
                transition={{duration:1}}
                >Vijay Makkad</motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/vijay-makkad-1573681b3/" target="_blank"><Linkedin color="#0A66C2" /></a>
                    <a href="https://www.instagram.com/user._.doesnotexisttt/" target="_blank"><Instagram color="#bc1888" /></a>
                    <a href="https://github.com/VijayMakkad" target="_blank"><Github scale={1.5} /></a>

                </div>
            </div>
        </div>
    )
};

export default Navbar;