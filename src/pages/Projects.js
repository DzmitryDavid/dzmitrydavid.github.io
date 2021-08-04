import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion';
import {projectState} from '../projectState'
import { Hide } from '../styles';

import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
  
} from '../animation';

const Projects = () => {
  const [projects, setProjects] = React.useState(projectState);
  return (
    <ProjectsStyled
    
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>

        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />

      </motion.div>
      {projects.map((project) => {
        return <ProjectStyled key={project.title}>
        <motion.h2 variants={fade}>{project.title}</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to={project.url}>
          <Hide>
            <motion.img variants={photoAnimation} src={project.mainImg} alt={project.title} />
          </Hide>
        </Link>
      </ProjectStyled>
      })}
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  text-align: center;

  h2 {
    color: #fff;
    padding: 1rem 0;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;
const ProjectStyled = styled(motion.div)`
  padding-bottom: 10rem;
  @media (max-width: 650px) {
    padding-bottom: 2rem;
  }
  
  img {
      width: 70%;
      height: 60vh;
      object-fit: contain;
    }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
  width: 100%;
`;
const Frame2 = styled(Frame1)`
  background: #ff8ebf;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Projects;
