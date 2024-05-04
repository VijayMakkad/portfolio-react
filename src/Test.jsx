import {motion} from 'framer-motion'
import { useState } from 'react'

const Test=()=> {

     const [open,setOpen]=useState(false)
    const variants= {
        visible:(i)=>( { opacity: 1 ,x:50,
            // transition:{type:"spring",stiffness:1000,damping:30}
            transition:{delay:i*0.2}
        }),
        hidden: { opacity: 0 },
    }
const items=["item 1","item 2","item 3","item 4"]
   
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item,i) => (
        <motion.li  variants={variants} key={item} custom={i}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
export default Test