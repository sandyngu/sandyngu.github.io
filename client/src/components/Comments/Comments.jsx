import React from 'react';
import Flowers from '../../assets/images/flowers3.png';
import './comments.scss';

function Comments() {
  return (
    <div className="section">
        <div className="comments__wave comments__wave1">
          <svg viewBox="0 60 500 80" preserveAspectRatio="xMinYMin meet">
            <path className="comments__wave-svg comments__wave-svg1" d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
          </svg>
        </div>
        <div className="comments__wave comments__wave2">
          <svg viewBox="0 60 500 80" preserveAspectRatio="xMinYMin meet">
            <path className="comments__wave-svg comments__wave-svg2" d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
          </svg>
        </div>
        <p className="title" style={{display: 'none'}}>comments</p>
        <div className="parallax parallax5">
            <h2 className="aboutme__section-title aboutme__section-title1">feedback</h2>
            <div className="aboutme__section-box"></div>
        </div>
        <div className="comments">
            <h2 className="comments__heading">say something nice.</h2>
            <img src={Flowers} alt="Flowers" className="comments__flowers flowers"/>
        </div>
    </div>
  )
}

export default Comments;