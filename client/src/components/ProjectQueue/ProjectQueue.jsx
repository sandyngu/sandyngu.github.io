import React from 'react';
import Polaroid from '../../assets/images/polaroid.png';
import './projectqueue.scss';

function ProjectQueue(props) {
    const { id, name, description, hero } = props;

  return (
    <>       
        {hero.id !== id &&
        <div className="projectqueue__container">                     
            <img src={Polaroid} className="projectqueue__polaroid" alt="Polaroid"/>
            <div className="projectqueue__content">
                <h3 className="projectqueue__content-name">{name}</h3>
                <img src={hero} className="projectqueue__content-thumbnail" alt="Polaroid"/>
            </div>
        </div>
        }
    </>
  )
}

export default ProjectQueue;