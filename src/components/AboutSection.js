import React from 'react';
import { About, Hide, Description, Image } from '../styles';
import {motion} from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';
import aboutImg from '../img/titleImg.png';

const AboutSection = () => {
  
  return (
    <About >
      <Description>
        <motion.div >
          <Hide>
            <motion.h2 variants={titleAnimation} init>
            Dzmitry Davidovich
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} >Front <span> End</span> 
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} >developer.</motion.h2>
          </Hide>
        </motion.div>
          <motion.p variants={fade}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a iste asperiores vel doloribus   recusandae. Nihil, rem placeat?</motion.p>
          <motion.button variants={fade}>More about me</motion.button>
          </Description>  
          <Image >
            <motion.img variants={photoAnimation}  src={aboutImg} alt="Dzmitry" />
          </Image>
    </About>
  )
}

export default AboutSection;