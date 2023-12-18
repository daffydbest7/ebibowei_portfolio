import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
//import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Service';
import Portfolio from './components/portfolio';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Quickscroll from './components/Quickscroll';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {WiDaySunny} from 'react-icons/wi';
import { Link } from 'react-scroll';


function App() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    
    <div className={darkMode ? "dark" : ""}>
      <div name="home" className="">
        <div className='dark:bg-gradient-to-t from-black/95 to-black dark:text-gray-300'>
        <div className='mx-10 lg:mx-0 md:mx-0 xl:mx-0 '>
        <div className="lg:container md:container xl:container mx-auto   ">
            <nav className='lg:container md:container xl:container py-10 flex justify-between'>
                <h1 className='text-md md:text-3xl hover:scale-110 duration-200 font-signature dark:text-white'> Ebibowei</h1>
                <ul className='flex items-center'>
                  <li onClick={()=>setDarkMode(!darkMode)}>
                    {darkMode ? <WiDaySunny  className='cursor-pointer text-md md:text-2xl hover:text-blue-400 hover:scale-110 duration-200 text-white'/> 
                    
                    :
                    <BsFillMoonStarsFill className='cursor-pointer text-md md:text-2xl hover:text-blue-400 hover:scale-110 duration-200'/> }</li>
                    
                  <li> <Link to="contact" smooth={true} spy={true} duration={2000} className='bg-gradient-to-r from-blue-300 to-blue-600 text-white text-xl px-2 py-2 rounded-md ml-8 md:ml-12 
                  md:px-2 md:py-2 md:text-xl hover:bg-gradient-to-l  hover:scale-105 duration-200 cursor-pointer' >Hire Me</Link></li>
                </ul>
            </nav>
            </div>
            </div>
      <Home/>
        </div>
      </div>
      <Quickscroll/>
      <About/>
      <Services/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer/>
      <Navbar />
      <SocialLinks/>
      </div>
      
   
  );
}

export default App;
