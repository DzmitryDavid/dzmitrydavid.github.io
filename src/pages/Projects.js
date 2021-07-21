import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hide } from '../styles';
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer
} from '../animation';

import burger from '../img/burger.jpg';
import chillPlayer from '../img/player.jpg';
import movieFinder from '../img/movieFinder.jpg';

const Projects = () => {
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

      <ProjectStyled>
        <motion.h2 variants={fade}>Burger Builder</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/projects/burger-builder">
          <Hide>
            <motion.img variants={photoAnimation} src={burger} alt="burger" />
          </Hide>
        </Link>
      </ProjectStyled>
      <ProjectStyled>
        <h2>Chill Player</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/projects/chill-player">
          <img src={chillPlayer} alt="chill-player" />
        </Link>
      </ProjectStyled>
      <ProjectStyled>
        <h2>Movie Finder</h2>
        <div className="line"></div>
        <Link to="/projects/movie-finder">
          <img src={movieFinder} alt="finder" />
        </Link>
      </ProjectStyled>
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: #fff;
  h2 {
    padding: 1rem 0;
  }
`;
const ProjectStyled = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
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
