import React from 'react';
import Polaroid from '../../assets/images/polaroid.png';
import './projectqueue.scss';

function ProjectQueue(props) {
    const { id, name, description, hero, heroProject } = props;

  return (
    <div>       
        {heroProject.id !== id &&
        <div className="projectqueue__container" onClick={()=>{props.updateHero(id)}}>                     
            <img src={Polaroid} className="projectqueue__polaroid" alt="Polaroid" />
            <div className="projectqueue__content">
                <h3 className="projectqueue__content-name">{name}</h3>
                <img src={hero} className="projectqueue__content-thumbnail" alt="Polaroid"/>
            </div>
        </div>
        }
    </div>
  )
}

export default ProjectQueue;