import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">Portfolio</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About</Link>
        </li>
        <li>
          <Link to="/projects">2. Projects</Link>
        </li>
        <li>
          <Link to="/contacts">3. Contacts</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 1rem 10rem;
  background-color: #282828;
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
`;
export default Nav;
