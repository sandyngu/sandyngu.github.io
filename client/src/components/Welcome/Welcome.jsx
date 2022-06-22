import React from 'react';
import './welcome.scss';

function Welcome() {
  return (
    <div className="welcome section" id="welcome">
        <p className="title" style={{display: 'none'}}>sandy nguyen</p>
        <div className="welcome__section">
          {/* <img src={Flower} className="welcome__flower"/> */}
            <div className="welcome__section-text">
                <h1 className="welcome__title">welcome.</h1>
                <p className="welcome__maintext"><span className="welcome__maintext-first">Hi! You've managed to stumble upon my personal portfolio─ congratulations.</span> It's nice to have some company so feel free to take a look around. I created this webpage from scratch so I hope it's somewhat impressive. Keep scrolling down to learn about me and the small projects I've worked on, and don't hesitate to <a href="#contact"><span className="welcome__maintext-second">connect with me!</span></a></p>
            </div>
        </div>
    </div>
  )
}

export default Welcome;