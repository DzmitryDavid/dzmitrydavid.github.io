import React from 'react'
import styled from 'styled-components';
import {About, Description, Image} from '../styles';

// import clock from '../../img/clock.svg';
// import diafragm from '../../img/diaphragm.svg';
// import money from '../../img/money.svg';
// import teamwork from '../../img/teamwork.svg';
import homeTwo from '../img/burger.jpg';


const SkillsSection = () => {
  return (
    <Skills>
      <Description>
        <h2>My <span>Technical </span>skillset</h2>
      <Cards>
        <Card>
          <div className="icon">
            {/* <img src={clock} alt="clock" /> */}
            <h3>Lorem ipsum dolor sit.</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Card>
        <Card>
          <div className="icon">
            {/* <img src={diafragm} alt="clock" /> */}
            <h3>Lorem ipsum dolor sit.</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Card>
        <Card>
          <div className="icon">
            {/* <img src={money} alt="clock" /> */}
            <h3>Lorem ipsum dolor sit.</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Card>
        <Card>
          <div className="icon">
            {/* <img src={teamwork} alt="clock" /> */}
            <h3>Lorem ipsum dolor sit.</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </Card>
      </Cards>
      </Description>
      <Image>
        <img src={homeTwo} alt="camera" />
      </Image>
    </Skills>
  )
}

const Skills = styled(About) `
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }

`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
      justify-content: center;
      
    }

`;
const Card = styled.div`
  /* flex-basis: 5rem; */

  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: #fff;
      color: black;
      padding: 1rem;
    }
  }
`;
export default SkillsSection;
