import React from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';

import Toggle from '../components/Toggle';
import { pageAnimation } from '../animation';
import { About } from '../styles';

const MoreInfo = () => {
  return (
    <MoreInfoStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h2>
        Frontend developer
        <span> Dzmitry Davidovich</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="About">
          <div className="description">
            I’m a front-end developer from Minsk, Belarus. I have experience
            developing web applications using native{' '}
            <span className="highline">JavaScript</span> and creating web pages
            using WordPress, but one of my favorite functional areas is
            developing single-page applications using{' '}
            <span className="highline">React, Redux, TypeScript.</span>
            I'm good at managing multiple tasks, I'm very detail-oriented, and
            organize my time very efficiently. I am a motivated worker and a
            fast learner, also have strong communication abilities. Always I
            trying to find the best solutions and loves diving deep into complex
            systems. Now I'm looking for an opportunity to apply my technical
            knowledge and my creative problem-solving skills at the company. I
            have collected several examples of work in my portfolio which you
            can see in
            <a
              target="_blanc"
              className="link"
              href="https://github.com/DzmitryDavid"
            >
              {' '}
              my repository.
            </a>
          </div>
        </Toggle>

        <Toggle title="Education">
          <div className="description">
            <span>Self – education</span>
            <p>
              I am currently studying typescript, then I plan to start learning
              Node.js
            </p>
            <span>
              Rolling Scopes School 2020 – 2021 (EPAM Training center)
            </span>
            <p>
              Front - end developer. Creating web pages, client-side single-page
              applications using HTML, CSS, JavaScript, React, TypeScript.
            </p>
            <span>
              Private Institute of Management and Business (2009 -2014)
            </span>
            <p>Bachelor of management, Bachelor of Economics</p>
          </div>
        </Toggle>

        <Toggle title="Experience">
          <div className="description">
            <span>
              Rolling Scopes School 2020 – 2021 (EPAM Training center)
              <span>Front - end developer</span>
            </span>
            <p>
              Independent and team development of web applications and web
              pages, refactoring, debugging and code review. Solving algorithmic
              problems, analysis, and practical application of software design
              patterns and principles.
            </p>
            <span>Freelance (2019 – 2020)</span>
            <span>Front - end developer</span>
            <p>
              Assistance in the development of websites. Layout for WordPress,
              further support and administration web pages.
            </p>
            <span>«Foods and Drinks» 2019 – 2020. </span>
            <span>Deputy chef</span>
            <p>
              Managing the work of kitchen staff, organizing the production
              process. Control over the implementation of company standards.
              Assistance in the development and introduction of dishes in the
              menu.
            </p>
            <span>«Pizza Tempo» 2013 – 2019. </span>
            <span>Chef</span>
            <p>
              Managing the work of kitchen staff, organizing the production process, monitoring the implementation of company standards.
              Acceptance and quality control of goods, communication with suppliers.
              Internship and adaptation of new employees.
            </p>
          </div>
        </Toggle>
        <Toggle title="Technical Skills">
          <div className="description">
            <ul>
              <li> HTML CSS Sass</li>
              <li>JavaScript</li>
              <li>Webpack Gulp Parcel</li>
              <li>React/Redux</li>
              <li>TypeScript</li>
              <li>Node.js(...in progress)</li>
            </ul>
          </div>
        </Toggle>

        <Toggle title="Language Proficienty ">
          <div className="description">
            <span>English</span>
            <p>Pre-Intermediate</p>
            <span>Russian</span>
            <p>Native Speaker</p>
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
  .link {
    text-decoration: none;
    color: #23d997;
    font-size: 1.5rem;
    font-family: inherit;
  }
  .highline {
    display: inline;
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
    padding: 1rem 0;
    font-size: 1.5rem;
    line-height: 2rem;
    p {
      padding: 1rem 0;
    }
  }
`;

export default MoreInfo;
