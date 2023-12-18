import React from "react";
//import icons
import { BiUser, BiHome, BiSolidContact} from 'react-icons/bi';
import {GiSkills} from 'react-icons/gi';
import {FaServicestack, FaBriefcase} from 'react-icons/fa';





// link
import { Link } from "react-scroll";




const Navbar =() =>{
   
    const links =[
        {
            id: 1,
            icon: <BiHome />,
            to: "home",
            
        },
        {
            id: 2,
            icon: <BiUser />,
            to: "about",
          
        },
        {
            id: 3,
            icon: <FaServicestack />,
            to: "service",
           
        },
        {
            id: 4,
            icon: <FaBriefcase />,
            to: "portfolio",
        },
        {
            id: 5,
            icon: <GiSkills />,
            to: "experience",
        },
        {
            id: 6,
            icon: <BiSolidContact  />,
            to: "contact",
        },
    ]

    return(
        <nav name="navbar" className="fixed bottom-[-2px] lg:bottom-8 w-full overflow-hidden z-50 ">
        <div className="mx-auto">  
            {/* nav inner*/}
            <div className="bg-gradient-to-l  h-[7vh] lg:h-[60px] md:h-[60px] backdrop-blur-2xl md:rounded-full lg:rounded-full 
           max-w-full md:max-w-[400px] lg:max-w-[400px] xl:max-w-[400px] mx-auto px-5 flex 
             justify-between items-center  text-white hover:bg-gradient-to-r from-black/60 to-black/100
              lg:dark:border border-blue-500"> 
             { links.map(({id,icon,to})=>(
                <div className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl">
                <Link activeClass="active"  key={id} to={to}  smooth={true} spy={true} duration={1500} offset={0} className="cursor-pointer drop-shadow-2xl lg:w-[50px] lg:h-[50px] flex items-center justify-center hover:text-blue-500 ">
                {icon}     
            </Link>
                </div>
             ))}
                
              
            </div>
        </div>
        </nav>
    )

};

export default Navbar;