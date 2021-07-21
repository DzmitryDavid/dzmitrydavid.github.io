import React from 'react'
import {motion} from 'framer-motion';

import HomeSection from '../components/HomeSection';
import { pageAnimation } from '../animation';

const Home = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <HomeSection />
    </motion.div>
  );
}

export default Home;
