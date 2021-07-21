import React from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';
import Toggle from '../components/Toggle';

import { About } from '../styles';

const MoreInfo = () => {
  return (
    <MoreInfoStyled>
      <h2>
        More About
        Dzmitry
        <span>Davidovich</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="About">
          <div className="description">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nesciunt, nihil?
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="description">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nesciunt, nihil?
            </p>
          </div>
        </Toggle>

        <Toggle title="Different paymant Methods">
          <div className="description">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nesciunt, nihil?
            </p>
          </div>
        </Toggle>

        <Toggle title="What product do you offer">
          <div className="description">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nesciunt, nihil?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </MoreInfoStyled>
  );
};

const MoreInfoStyled = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .info-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .title {
    padding: 3rem 0;
    cursor: pointer;
  }
  .description {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default MoreInfo;
