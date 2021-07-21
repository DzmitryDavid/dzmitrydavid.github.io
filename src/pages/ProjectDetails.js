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
            <img src={project.mainImg} alt="proj" /> 
          </Headline>
          <DetailInfo>
            {project.projectInfo.map((projectInfo) => (
              <Info 
                key={projectInfo.title}
                description={projectInfo.description}
                title={projectInfo.title}/>
            ) )}
          </DetailInfo>
          <ImageDisplay>
            <img src={project.secondaryImg} alt="proj" />
          </ImageDisplay>
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
  padding-top: 20vh;
  position: relative;
  img {
      width: 100%;
      height: 70vh;
      object-fit: cover;

    }
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
`;
const DetailInfo = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
const InfoStyle = styled.div`
  padding: 5rem;
    h3 {
      font-size: 2rem;
    }
    .line {
      width: 100%;
      background: #23d997;
      height: 0.5rem;
      margin: 1rem 0;
    }
    p {
      padding: 2rem 0;
    }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width:100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const Info = (props) => {
  return (
    <InfoStyle>
      <h3>{props.title}</h3>
      <div className="line"></div>
      <p>{props.description}</p>
    </InfoStyle>
  )
}
export default ProjectDetails;
