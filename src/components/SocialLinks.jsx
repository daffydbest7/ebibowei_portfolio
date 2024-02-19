import React from "react";
import {  FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {AiFillInstagram} from 'react-icons/ai';
import {TfiUser} from 'react-icons/tfi';
import { Link } from "react-router-dom";


const SocialLinks =() =>{

    const links =[
        {
            id: 1,  
            child: (        
                <>      
                Resume <TfiUser size={30}/>
                </>
            ),           
            style: 'rounded-tr-md bg-gradient-to-r from-teal-400 to-teal-700 flex justify-between items-center w-40 h-14 px-3  ml-[-90px] hover:ml-[-15px] hover:rounded-md duration-300 hover:scale-110 ',
            href: 'Ebibowei_Nabena_Resume.pdf',
            download: true,
        },
       
        {
            id: 2,
            child: (
                <>
                LinkedIn<FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/ebibowei-nabena',
            style: 'bg-gradient-to-r from-blue-400 to-blue-700 flex justify-between items-center w-40 h-14 px-3  ml-[-90px] hover:ml-[-15px] hover:rounded-md duration-300 hover:scale-110 ',           
        },
        {
            id: 3,
            child: (
                <>
                Mail<HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:ebibowei.nabena@hotmail.com',
            style: 'bg-gradient-to-r from-black to-gray-600 flex justify-between items-center w-40 h-14 px-3  ml-[-90px] hover:ml-[-15px] hover:rounded-md duration-300 hover:scale-110 ',
            
        },
       
        {
            id: 4,
            child: (
                <>
                Instagram<AiFillInstagram size={30}/>
                </>
            ),
            href: 'https://instagram.com/bibonabena',
            style: 'rounded-br-md bg-gradient-to-r from-igorange to-igpurple flex justify-between items-center w-40 h-14 px-4  ml-[-90px] hover:ml-[-15px] hover:rounded-md duration-300 hover:scale-110 ',         
        },
    ]    
    return(
        
        <div name="socialLinks" className="hidden lg:flex flex-col top-[35%] left-0 fixed">
          <ul>  
            {links.map(({id,child,href,style,download})=>(
                <li key={id} className={style}>
                <Link to={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">{child}</Link></li>
            ))}          
        </ul>           
        </div>      
    )
}

export default SocialLinks;