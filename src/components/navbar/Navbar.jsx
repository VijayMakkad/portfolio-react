import React from "react";
import {motion} from "framer-motion";
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
                    <a href="https://www.linkedin.com/in/vijay-makkad-1573681b3/" target="_blank"><img src="/linkdin1.png" alt="" /></a>
                    <a href="https://www.instagram.com/user._.doesnotexisttt/" target="_blank"><img src="/instagram.png" alt="" /></a>
                    <a href="https://github.com/VijayMakkad" target="_blank"><img src="/github.png" alt="" /></a>

                </div>
            </div>
        </div>
    )
};

export default Navbar;