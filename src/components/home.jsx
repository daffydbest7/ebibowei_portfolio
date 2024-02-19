import React from "react";
//import icons
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {TfiUser} from 'react-icons/tfi';
//import animation
import {TypeAnimation} from 'react-type-animation';
//import motion
import {motion} from 'framer-motion';
//import variants
import {fadeIn} from '../variants';
import {Link} from "react-router-dom";
import { Link as LinkRoll } from 'react-scroll';
//import image
import ebibowei from "../images/nabena12.jpg";
import night from "../images/ebi_.jpg";
import day from "../images/ebi_.jpg";




const Home =() => {
  
    return(
        <div className="md:container lg:container xl:container 2xl:container 2xl:mx-auto lg:mx-auto md:mx-auto ">
        <div className="min-h-[80vh] lg:min-h-[75vh]">
            
            <div className="container mx-auto ">
            <div className="flex flex-col items-center mt-12 gap-y-8 lg:flex-row lg:items-center lg:gap-x-12"> 
                <div className="flex-1 text-center lg:text-left ">
                    <motion.h1 variants={
                        fadeIn('up', 0.3)
                    } initial="hidden"
                     whileInView={'show'} 
                     viewport={{once:false, amount:0.7}} 
                     className="text-3xl mb-2 font-bold leading-[0.8] lg:text-5xl dark:text-white">
                        EBIBOWEI <span>NABENA</span>
                    </motion.h1>
                    <motion.div 
                    variants={
                        fadeIn('up', 0.4)
                    } initial="hidden"
                     whileInView={'show'} 
                     viewport={{once:false, amount:0.7}} 
                     className="uppercase mb-6 text-md lg:text-3xl leading-[1]">
                    <span className="mr-4"> I am a</span>
                    <TypeAnimation sequence={[
                        'Data Analyst',
                        2000,
                        'Program Manager',
                        2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="text-blue-500"
                    wrapper="span"

                    />  
                </motion.div>
                <motion.p 
                variants={
                    fadeIn('up', 0.5)
                } initial="hidden"
                 whileInView={'show'} 
                 viewport={{once:false, amount:0.7}} className="md:max-w-[600px] text-sm md:text-md lg:text-lg text-justify">
                    Hello there! Welcome to my professional realm, where data transforms into actionable insights. 
                    With over 5 years of unwavering dedication to the field of data analytics, I stand at the 
                    intersection of experience and innovation. My journey is not merely a chronicle of statistical 
                    analyses but a testament to the art of decoding patterns and unlocking strategic possibilities
                </motion.p>
                <motion.div 
                variants={
                    fadeIn('up', 0.6)
                } initial="hidden"
                 whileInView={'show'} 
                 viewport={{once:false, amount:0.7}} 
                 className="flex justify-center lg:justify-start  space-x-3 text-2xl text-black lg:text-4xl my-8 lg:hidden dark:text-white">                  
                  
                    <Link to="https://instagram.com/bibonabena"><FaInstagram className="hover:text-blue-500 hover:scale-105 duration-300"/></Link>
                    <Link to="Ebibowei_Nabena_Resume.pdf" target="_blank" download={true}> <TfiUser className="hover:text-blue-500 hover:scale-105 duration-300"/></Link>
                    <Link to="https://www.linkedin.com/in/ebibowei-nabena/"><FaLinkedinIn className="hover:text-blue-500 hover:scale-105 duration-300"/></Link>
                    <Link to="mailto:ebibowei.nabena@emandhaitchicthub.ng"><HiOutlineMail className="hover:text-blue-500 hover:scale-105 duration-300" /></Link>                            
                </motion.div>
                <motion.div 
                variants={
                    fadeIn('up', 0.7)
                } initial="hidden"
                 whileInView={'show'} 
                 viewport={{once:false, amount:0.7}} 
                 className=" mt-[100px] lg:mt-12">
                    <LinkRoll to="portfolio" smooth={true} spy={true} duration={2000}>
                    <button  className="group flex mx-auto p-1 lg:p-2 btn btn-sm lg:btn-lg rounded-xl text-white 
                    bg-blue-500 drop-shadow-lg lg:m-0 cursor-pointer items-center"><span>PORTOLIO</span> <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight className="text-2xl "/></span>  </button>
                    </LinkRoll>
                </motion.div> 
                </div>
                {/** daylight mode image */}
                <motion.div
                variants={
                    fadeIn('down', 0.6)
                } initial="hidden"
                 whileInView={'show'} 
                 viewport={{once:false, amount:0.7}} 
                  className="dark:hidden">
                    <img src={day} className="hidden lg:block lg:max-w-[400px] lg:max-h-[300px] rounded-md hover:scale-105 duration-300  " alt="pic"/>
                </motion.div>

                {/**night mode image */}
                <motion.div
                variants={
                    fadeIn('down', 0.6)
                } initial="hidden"
                 whileInView={'show'} 
                 viewport={{once:false, amount:0.7}} 
                  className="hidden dark:block">
                    <img src={night} className="hidden lg:block  lg:max-w-[400px] lg:max-h-[300px] rounded-md hover:scale-105 duration-300 " alt="nightlifeimage"/>
                </motion.div>
            </div>
        </div>
         </div>
    </div>
    )
};

export default Home;
