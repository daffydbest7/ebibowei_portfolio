import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";
import developer from '../images/developer.jpg';
import pupil from '../images/pupils.png';
import currency from '../images/currencyConverter.png';
import bmi from '../images/bmi.png';
import diabetes from '../images/diabetes.png';





const Portfolio =() =>{                                         

    const portfolios =[ 
        {                           
            id:1, src: diabetes, desc: "Power Bi: Diabetes Predictor",  
            url: "#", target: "", style: 'shadow-blue-800 shadow-lg rounded-lg ',  
        },          
        {
            id:2, src: developer, desc: "Excel: Automated Pupil Enrolment Dashboard", 
            url: "#", target: "", style: 'shadow-yellow-800 shadow-lg rounded-lg ',  
        },
        {
            id:3, src: pupil, desc: "Power Bi: School End of Term Performance Dashboard", 
            url: "#", target: "", style: 'shadow-blue-800 shadow-lg rounded-lg ',  
        },
        {
            id:4, src: currency, desc: "Excel: Dynamic Currency Converter", 
            url: "#", target: "", style: 'shadow-red-800 shadow-lg rounded-lg ',  
        },
        {
            id:5, src: bmi, desc: "Excel: Body Mass Index Calculator", 
            url: "#", target: "", style: 'shadow-green-800 shadow-lg rounded-lg ',  
        },
       
        
    ]



    return(
        <div className="pb-8  dark:bg-gradient-to-b from-black/95 to-black dark:text-gray-300">
        <section name="portfolio" className="container mx-auto section ">
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
               {/** Portfolio header here */}
                <div className="pb-8">
                    <p className="text-center text-blue-500 text-2xl lg:text-3xl font-bold lg:inline lg:border-b-4 lg:border-blue-500">Portfolio</p>
                    <p className="text-center py-6 lg:text-start lg:text-lg text-md">Projects speaks louder! available here are few of my finest projects done yet...</p>
                </div>

                {/**portfolio cards here */}
                <motion.div  variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:true, amount:0.1}}
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                {
                    portfolios.map(({id,src,desc,url,style,target}) => (                       
                        <div key={id} className={`max-h-[300px] lg:max-h-[270px] shadow-md rounded-lg duration-200 hover:animate-pulse hover:scale-105 lg:text-md ${style}`}>
                        <img src={src} alt="img" className="w-full h-[170px] mx-auto rounded-md"/> 
                        <div className="mx-auto text-center">
                            <p className="lg:text-sm  px-2  m-2 text-black dark:text-white font-bold ">{desc}</p>
                            <Link to={url} target={target} className="text-sm md:text-md m-2  text-blue-500 font-bold uppercase pb-12 lg:pb-2">Verify</Link>
                        </div>
                        </div>
                    
                    ))
                }
                </motion.div> 
                <p className="mt-8 text-center animate-pulse">and lots more...</p>
            </div>
        </section>
        </div>
    )
}

export default Portfolio;