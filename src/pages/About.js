import React from 'react'
import {motion} from 'framer-motion';
import AboutSection from '../components/AboutSection/AboutSection';

import { pageAnimation } from '../animation';

const About = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection/>
    </motion.div>
  );
}

export default About;
