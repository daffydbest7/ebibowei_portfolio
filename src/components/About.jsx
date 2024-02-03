import React from "react";

//countup
import CountUp from 'react-countup'
import { motion } from "framer-motion";
import {fadeIn} from '../variants';
import office_image from '../images/ebi_1.jpg';
//intersection observer hook
import { useInView } from "react-intersection-observer";


const About = () => {
  
  const stats =[{
    id: 1,
    title: <p>Years of <br/>Experience </p>,
    value: 5,
    text:"+",
  },
 
  {
    id: 2,
    title: <p>Teams <br/>Lead </p>,
    value: 7,
  },
  {
    id: 3,
    title: <p>Personal <br/>Projects </p>,
    value: 6,
  },
 
 

]
  const {ref, inView} = useInView([
    ])
    return (
          <div className="dark:bg-gradient-to-b from-black/95 to-black dark:text-gray-500">
         <section className="lg:container lg:mx-12 section pt-8 lg:min-h-screen pb-12" name="about" ref={ref}>
          <div className="container mx-auto h-full ">
            <div className="flex  flex-col-reverse lg:flex-row lg:gap-x-12 lg:gap-y-0 lg:items-start ">
                {/* about image */}
                <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}
                className="hidden md:block flex-1 bg-about_new h-[200px] md:h-[300px] lg:h-[300px] xl:h-[500px] bg-cover bg-no-repeat 
                mix-blend-luminosity bg-top rounded-2xl hover:scale-105 duration-300"></motion.div>
                {/** about image for sm */}
                <div className="md:hidden ">
                  <img src={office_image} className="rounded-lg dark:mix-plus-lighter " alt="small screen pic"/>
                </div>
                {/* texts here */}
                <div className="flex-1 ">
                    <motion.h2 variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}} 
                    className="text-2xl uppercase text-blue-500 lg:text-3xl font-bold mb-4">
                    About me</motion.h2>
                    
                  <motion.h3 variants={fadeIn('left', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}} 
                  className="mb-8 font-bold text-md md:text-xl text-justify">
                  As a seasoned data analyst, my prowess extends beyond data manipulation; I am adept in program management and meticulous
                   research methodologies. Whether orchestrating comprehensive data-driven strategies or delving into nuanced research
                    projects, my commitment to excellence remains unwavering.
                  </motion.h3>
                    
                  <motion.p variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}
                  className="mb-4 text-justify text-sm md:text-md lg:text-lg">                
                    Within these digital corridors, witness the symphony of my expertise unfold. 
                    Each project encapsulates a narrative of problem-solving finesse, showcasing my ability 
                    to turn raw data into strategic gold. Join me on this expedition through the intricacies 
                    of data analytics, where precision meets sophistication and complexity unravels into clarity.
                     Your exploration has just begun; there's much more to uncover as you delve into the layers of
                      my professional odyssey.
                    
                    </motion.p>
                    <motion.div 
                    variants={fadeIn('left', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}
                    className="flex gap-x-4 lg:gap-x-10 mb-12 ">  
                    {stats.map(({id,value,title,text}) =>(
                      <div className="grid grid-cols-3 gap-2">
                    <div key={id} >
                    <div className="text-xl md:text-3xl text-blue-500 font-bold mb-2">                    
                    {inView ? <CountUp start={0}  end={value} duration={6}/>: null}{text}  
                    </div>
                    <div className="text-sm tracking-[0px] font-bold">
                    {title}
                    </div>
                    </div> 
                    </div>

                    ))}                                   
                                                   
                </motion.div>                
                </div>
            </div>
          </div>
        </section>
      </div>
     
    )
}
export default About;

