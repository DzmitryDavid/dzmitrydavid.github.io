import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation';

import burger from '../img/burger.jpg';
import chillPlayer from './img/player.jpg';
import movieFinder from './img/movieFinder.jpg';

const Projects = () => {
  return (
    <ProjectsStyled exit="exit"  variants={pageAnimation} initial="hidden" animate="show">
      <ProjectStyled>
        <h2>Burger Builder</h2>
        <div className="line"></div>
        <Link to="/projects/burger-builder">
          <img src={burger} alt="burger" />
        </Link>
      </ProjectStyled>
      <ProjectStyled>
        <h2>Chill Player</h2>
        <div className="line"></div>
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
  )
}

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
    background: #ccc;
    margin-bottom:  3rem;
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  }
`;
export default Projects;
