import React from 'react';
import { About, Hide, Description, Image } from '../styles';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import Wave from './Wave';
import { titleAnimation, fade, photoAnimation } from '../animation';
import aboutImg from '../img/I.jpg';

const HomeSection = () => {
  
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
            <motion.h2 variants={titleAnimation} > <span>Front End</span> 
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} >developer.</motion.h2>
          </Hide>
        </motion.div>
          <motion.p variants={fade}>Hello everyone! My name is Dzmitry. 
          <div>I'm a Front-end developer from Minsk, Belarus</div></motion.p>
          <Link to="/about">
            <motion.button  variants={fade}>More about me</motion.button>
          </Link>

          </Description>  
          <Image >
            <motion.img variants={photoAnimation}  src={aboutImg} alt="Dzmitry" />
          </Image>
          <Wave/>
    </About>
  )
}

export default HomeSection;