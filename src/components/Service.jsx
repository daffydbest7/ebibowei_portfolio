import React from "react";
//icon
import { BsArrowRight } from "react-icons/bs";
//variants
import { fadeIn } from "../variants";
//motion
import { motion } from "framer-motion";


// services

const services =[{
    name: 'Data Analysis',
    description: `Unlock the Power of Data: Elevate your decision-making with my bespoke Data Analysis as a Service. With a proven track record of transforming raw data into actionable insights, I bring precision and depth to your strategic initiatives. Harness the potential of information-driven decisions and gain a competitive edge. Let's navigate the complexities of your data landscape together – turning challenges into opportunities, and numbers into narratives. Embrace the future of informed decision-making, where every data point is a stepping stone toward your organizational success.`,
    link: 'Learn more',
},

{
    name: 'Product/Program Management',
    description: `Ignite Success with Expert Program and Product Management Services: Elevate your projects with my seasoned expertise in orchestrating seamless programs and launching innovative products. As your dedicated Program/Product Manager, I bring a wealth of experience in navigating the intricate landscape of project lifecycles and product development. From inception to delivery, I ensure strategic alignment, resource optimization, and meticulous execution, turning your vision into reality. Let's embark on a collaborative journey, where your programs and products are not just managed but meticulously crafted for unparalleled success in today's dynamic market.`,
    link: 'Learn more',
},
]

const Services =()=>{
    return(
       <section className="w-full pt-8 pb-4 lg:pb-12 dark:bg-gradient-to-t from-black/95 to-black dark:text-gray-300" name="service">
        <div className="lg:container mx-auto ">
            <div className="container flex flex-col justify-between lg:flex-row">
                {/* text & image*/}
                
                <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}
                className=" text-center flex-1 lg:bg-service_new bg-cover mix-blend-luminosity lg:max-w-[600px] lg:bg-bottom lg:mb-0 lg:bg-no-repeat dark:lg:mix-blend-luminosity rounded-2xl lg:hover:scale-110 duration-300">
                    
                    <h2 className="text-teal-500 lg:text-blue-500 font-bold text-2xl uppercase mb-6 pt-4 lg:text-5xl"> What I Do.</h2>
                    <h3 className=" dark:text-white text-md mb-16 lg:text-xl lg:text-blue-500">
                    Major Highlights of My Capabilities... 
                    </h3>
                    
                </motion.div>
            
                {/* services */}
                <motion.div variants={fadeIn('left', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.1}}>
                    {/* services list */}
                    <div>
                        {services.map((service, index)=>{
                            //destructure service
                            const {name, description, link} = service
                           return(
                            <div className="border border-b border-blue-500 dark:border-white mb-4 hover:scale-105 duration-300 " key={index}>
                                <div className="lg:max-w-[450px] ml-4">
                                <h4 className="text-blue-500 mt-2 text-xl lg:text-2xl">{name} </h4>  
                                <p className="mb-4 text-sm lg:text-lg text-justify pr-2">{description}</p>
                                </div>
                                <div className="flex text-sm mb-2 ml-4 text-blue-500 items-center "><button href="#" >{link}</button> <BsArrowRight size={8} className="ml-2"/></div>   
                            </div>
                           ) 

                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    </section> 

    )
}
export default Services;