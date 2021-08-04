import React from 'react';
import { useHistory } from 'react-router-dom';
import {motion} from 'framer-motion';
import styled from 'styled-components';

import {projectState} from '../projectState';
import { pageAnimation } from '../animation';

const ProjectDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = React.useState(projectState);
  const [project, setProject] = React.useState(null);

  
  React.useEffect(() => {
    const currentProject = projects.filter((stateProject) => stateProject.url === url);
    setProject(currentProject[0]);
  }, [projects, url]);
  
  return (
    <>
      {project && (
        <Details 
          exit="exit" 
          variants={pageAnimation} 
          initial="hidden" 
          animate="show">
          <Headline>
            <h2>{project.title}</h2>
            <img src={project.secondaryImg} alt="project" /> 
          </Headline>
          <DetailInfo>
            {project.projectInfo.map((projectInfo) => (
              <Info 
                key={projectInfo.title}
                description={projectInfo.description}
                title={projectInfo.title}
                demo={projectInfo.demo}
                features={projectInfo.features}
                />
            ))}
            
          </DetailInfo>
        </Details>
      )}
    </>
  );
};
const Details = styled(motion.div)`
  color: #fff;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 25vh;
  position: relative;
  text-align: center;
  img {
      width: 100%;
      height: 75vh;
      object-fit: cover;
    }
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;
const DetailInfo = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
  
`;
const InfoStyle = styled.div`
  padding: 5rem 8rem;
    h3 {
      font-size: 2rem;
      display:flex;
      justify-content:space-between;
      align-items: center;
    }
    .line {
      width: 100%;
      background: #23d997;
      height: 0.5rem;
      margin: 1rem 0;
    }
    li {
      padding: 0.5rem;
      font-size: 1.1rem;
      font-weight: 600;
    }
    p {
      padding: 2rem 0;
    }
    a {
      text-decoration: none;
      color: #23d997;
    }
    @media (max-width: 500px) {
      padding: 2em;
    }
`;

const Info = (props) => {
  return (
    <InfoStyle>
      <h3>{props.title}
      <a target="_blank" rel="noopener noreferrer" href={props.demo}>DEMO</a>
      </h3>
      <div className="line"></div>
      <p>{props.description}</p>
      <ul >
        {props.features.map((item, ind) => (<li key={ind}>
        {item}
          </li>))}
      </ul>
    </InfoStyle>
  )
}

export default ProjectDetails;
