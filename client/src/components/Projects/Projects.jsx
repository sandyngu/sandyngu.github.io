import React from 'react';
import Flowers from '../../assets/images/flowers3.png';
import './projects.scss';

function Projects() {
  return (
    <div className="section" id="projects">
        <p className="title" style={{display: 'none'}}>projects</p>
        <div className="parallax parallax3">
            <h2 className="aboutme__section-title aboutme__section-title1">creations</h2>
            <div className="aboutme__section-box"></div>
        </div>
        <div className="projects">
            <h2 className="projects__heading">things i've made.</h2>
            <img src={Flowers} alt="Flowers" className="projects__flowers flowers"/>
        </div>
        <div className="projects__wave projects__wave1">
          <svg viewBox="0 60 500 500" preserveAspectRatio="xMinYMin meet">
            <path className="projects__wave-svg projects__wave-svg1" d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
          </svg>
        </div>
        <div className="projects__wave projects__wave2">
          <svg viewBox="0 60 500 500" preserveAspectRatio="xMinYMin meet">
            <path className="projects__wave-svg projects__wave-svg2" d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
          </svg>
        </div>
    </div>
  )
}

export default Projects;