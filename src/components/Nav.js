import React from 'react'
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';

const Nav = () => {
  const {pathname} = useLocation(); 
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">Portfolio</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Line 
            initial={{width: '0%'}}
            animate={{width: pathname === '/' ? '50%' : '0%'}}
          />
        </li>
        <li>
          <Link to="/projects">Projects</Link>
          <Line
            initial={{width: '0%'}}
            animate={{width: pathname === '/projects' ? '50%' : '0%'}}
          />
        </li>
        <li>
          <Link to="/about">About</Link>
          <Line
            initial={{width: '0%'}}
            animate={{width: pathname === '/about' ? '50%' : '0%'}}
          />
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  
  a {
    color: #fff;
    text-decoration: none;

  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: 400;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {

      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;

      }
    }
  }  
`;

const Line = styled(motion.div)`
height: 0.3rem;
background: #23d997;
width: 0%;
position: absolute;
bottom: -80%;
left: 60%;
transition: 0.45s linear;
@media (max-width: 1300px) {
  left: 0;
  
}
`
export default Nav;
