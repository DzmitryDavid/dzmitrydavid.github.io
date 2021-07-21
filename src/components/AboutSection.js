import React from 'react';
import { About, Hide, Description, Image } from '../styles';


const AboutSection = () => {
  
  return (
    <About>
      <Description>
        <div >
          <Hide>
            <h2 >
            Dzmitry Davidovich
            </h2>
          </Hide>
          <Hide>
            <h2>Front <span> End</span> 
            </h2>
          </Hide>
          <Hide>
            <h2>developer.</h2>
          </Hide>
        </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a iste asperiores vel doloribus   recusandae. Nihil, rem placeat?</p>
          <button>Contact me</button>
          </Description>  
          <Image>
            <img src="" alt="Dzmitry" />
          </Image>
    </About>
  )
}

export default AboutSection;