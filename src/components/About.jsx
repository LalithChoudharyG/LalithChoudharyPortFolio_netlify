import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">

        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">

          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center"> {title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = ({ isMobile }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn(" ", "", 0.1, 1)}
        className="mt-2 text-secondary text-[17px] max-w-5xl leading-[30px] text-justify">
         I'm a passionate Web Developer with a solid computer science background, specializing in front-end 
         development with React. I love turning innovative ideas into engaging digital experiences that are 
         both dynamic and user-friendly. With a dash of Python and Docker in my toolkit, I blend technical 
         know-how with creative problem-solving to build robust, future-forward web applications. I'm always 
         excited to dive into new challenges and craft unique solutions that push the boundaries of what's 
         possible on the web. Come explore my portfolio and see how I’m shaping digital experiences.
      </motion.p>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
  {services.map((service, index) => 
    (<ServiceCard key={service.title} index={index} {...service} />))}
</div>


      
    </>
  )
}

export default SectionWrapper(About, "about");
