import React from "react";
import mysql from '../images/mysql.png';
import powerbi from '../images/Powerbii.jpg';
import rprogram from '../images/Rprogramming.webp';
import excel from '../images/excel.jpg';
import tableau from '../images/tableau.png';
import { fadeIn } from "../variants";
import { motion } from "framer-motion";


const Experience =() =>{

    const skills = [
        
        {
            id: 1,src: mysql, title: 'SQL', style: 'shadow-blue-800 shadow-md  py-2 rounded-md',
        },
        {
            id: 2,src: excel, title: 'EXCEL', style: 'shadow-green-700 shadow-md  py-2 rounded-md',
        },
        {
            id: 3,src: rprogram, title: 'R', style: 'shadow-blue-800 shadow-md  py-2 rounded-md',
        },
        {
            id: 4,src: powerbi, title: 'POWER BI', style: 'shadow-yellow-600 shadow-md  py-2 rounded-md',
        },
        {
            id: 5,src: tableau, title: 'TABLEAU', style: 'shadow-purple-800 shadow-md  py-2 rounded-md',
        },
        

    ]
    return (
        <div name="experience" className="mx-auto  w-full dark:bg-gradient-to-t from-black to-black dark:text-gray-300">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
                <div>
                    <p className="text-2xl lg:text-3xl font-bold border-b-4 border-gray-500 p-2 inline text-blue-500">Skills</p>
                    <p className="py-6 text-md lg:text-lg">Check out the list of skills I have mastery over.</p>
                </div>

                <motion.div variants={fadeIn('right', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}
                className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8  sm:px-0 lg:text-md ">

                    { skills.map(({id,src,title,style})=>(
                        <div key={id} className={`${style} rounded-full hover:animate-pulse`}>
                        <img src={src} alt="skill"  className="w-20 h-20 mx-auto hover:scale-105 rounded-full duration-500"/>
                        <p className="pt-4 text-sm md:text-md uppercase font-bold"> {title} </p>
                        </div>
                    ))         
                    }

                </motion.div>
            </div>

        </div>
    )
}

export default Experience