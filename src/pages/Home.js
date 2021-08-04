import React from 'react'
import {motion} from 'framer-motion';

import HomeSection from '../components/HomeSection';
import { ScrollTop } from '../components/ScrollTop';
import { pageAnimation } from '../animation';

const Home = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <HomeSection />
      <ScrollTop/>
    </motion.div>
  );
}

export default Home;
