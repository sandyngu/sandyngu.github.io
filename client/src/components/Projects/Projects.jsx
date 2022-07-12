import React from 'react';
import Flowers from '../../assets/images/flowers3.png';
import './projects.scss';

function Projects() {
  return (
    <>
    <div className="parallax parallax3"></div>
    <div className="projects section" id="projects">
        <p className="title" style={{display: 'none'}}>projects</p>
        <h2 className="projects__heading">things i've made.</h2>
        <img src={Flowers} alt="Flowers" className="projects__flowers flowers"/>
    </div>
    </>
  )
}

export default Projects;