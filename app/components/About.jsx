import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import Image from 'next/image';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper} from "../hoc";

 const ServiceCard = ({ index, title, icon, level }) => {
  return (
   
    <Tilt className="xs:w-[250px] w-full">
      
        <motion.div
          variant={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full items-center justify-center mx-auto green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450
              }}
              className='bg-tertiary rounded-[20px]
              py-5 px-12 min-h-[280px] group flex justify-evenly items-center flex-col'
            >
              <Image src={icon} alt={title}
                className="w-10  h-16 animate-spin group-hover:animate-bounce object-contain"/>
                <h3 className='text-white text-[20px]
                font-bold text-center'>{title}</h3>
                <p className='text-secondary text-xs '>{level}</p>
                
            </div>
         
        </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=' mr-[28px]'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p   
          variants={fadeIn("","", 0.1, 1)}
          className='mt-4 text-secondary text-[17px]
          max-w-3xl mr-8 leading-[30px]'>
            I’m a results-driven Fullstack Software Engineer/ Technical Lead with 5 years of hands-on experience in designing, developing, and optimizing complex software solutions. Adept at leading cross-functional teams, I have a proven track record of delivering high-quality products on time and within budget. Expertise lies in full-stack web/mobile development, system architecture, and innovative problem-solving. Passionate about staying at the forefront of technology trends, I bring a blend of technical proficiency and strategic thinking to drive impactful 
            outcomes. 

      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center mx-auto' > 
        {services.map((service, index) => (
          
            <ServiceCard key={service.title} index={index} {...service} />
            
        ))}
        
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");