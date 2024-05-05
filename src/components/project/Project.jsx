import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
const items=[
    {
        id:1,
        title:"Food Ordering App",
        img:"https://images.pexels.com/photos/4061560/pexels-photo-4061560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"The React Native food ordering app, fueled by Supabase technology, revolutionizes the dining experience with its user-friendly interface and robust features. Seamlessly integrated with Supabase's real-time database, users enjoy swift access to a diverse array of culinary options, enhanced by personalized profiles and secure payment management. With intuitive navigation, search filters, and real-time order tracking, the app simplifies the ordering process, ensuring a seamless journey from menu exploration to doorstep delivery. Whether craving local delights or international cuisine, this innovative app elevates convenience and satisfaction, offering a delectable solution for modern-day food enthusiasts.",
        link:"https://github.com/VijayMakkad/FoodOrdering-App"
    },
    {
        id:2,
        title:"Idea Clinic Forum Website",
        img:"/ideaclinic.png",
        desc:"The IdeaClinic forum, developed on Next.js and backed by Supabase, offers professors and students a dynamic platform for collaborative discussions. Users create profiles, join specialized groups, and engage in threaded discussions, fostering knowledge exchange and collaboration. With Next.js's fast performance and Supabase's secure database, the forum ensures seamless interaction and data management. Features like upvoting and tagging streamline content discovery, while notifications keep users informed. By facilitating meaningful exchanges on diverse academic topics, IdeaClinic empowers the college community to share insights, seek advice, and drive innovation in an accessible and engaging online environment.",
        link:"https://ideaclinic-forum.vercel.app/"
    },
    {
        id:3,
        title:"CO2 Emission Prediction Website",
        img:"https://images.pexels.com/photos/3044479/pexels-photo-3044479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"The CO2 emission prediction website harnesses the power of machine learning and algorithms like Linear Regression to provide accurate forecasts of carbon dioxide emissions. Utilizing a user-friendly interface, visitors input relevant data such as vehicle type, distance traveled, and fuel type. The website's backend, built using Flask, processes this information and applies trained Linear Regression models to predict CO2 emissions.By leveraging machine learning techniques, the website contributes to sustainability efforts by promoting awareness in transportation and energy consumption.",
        link:"https://github.com/VijayMakkad/CO2-Emission-using-ML"
    },
    {
        id:4,
        title:"Blog Website",
        img:"https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"The Next.js and Supabase blog website seamlessly integrates reader interaction with a dynamic comment section and social sharing features. Powered by Next.js for optimal performance and Supabase for secure data management, each blog post encourages community engagement through comments, likes, and replies. Social sharing buttons extend the reach of content, fostering broader discussions and knowledge sharing across networks. By combining Next.js's efficiency with Supabase's versatility, the blog website offers a compelling platform for both informative content consumption and active reader participation, facilitating an enriching online community experience.",
        link:"https://sample-blog-vijaymakkad.vercel.app/"
    }
]

const Single=({item})=>{
    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref,
        // offset:["start start","end end"]
    })
    const y=useTransform(scrollYProgress,[0,1],[-300,300])
    return(
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>

                <motion.img whileHover={{scale:1.05}} src={item.img} alt="" />
                    </div>
            <motion.div className="textContainer" style={{y}}>
                <h2 >{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{scale:1.05}}>See Demo</motion.button>
                    </a>
            </motion.div>
                </div>
            </div>
        </section>
    )
}
const Project = () => {
    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]})

    const scaleX=useSpring(scrollYProgress,{stiffness:100,damping:30})

  return (
    <div className="project" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
        <Single item={item} key={item.id}/>
    ))}</div>
  )
}

export default Project