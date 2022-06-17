import React from 'react';
import './welcome.scss';

function Welcome() {
  return (
    <div className="welcome">
        <div className="welcome__section">
            <div className="welcome__section-text">
                <h1 className="welcome__title">welcome.</h1>
                <p className="welcome__maintext">Hi! You've managed to stumble upon my personal portfolio─ congratulations. It's nice to have some company so feel free to take a look around. I created this webpage from scratch so I hope it's somewhat impressive. Keep scrolling down to learn about me and the small projects I've worked on, and don't hesitate to connect with me!</p>
            </div>
        </div>
    </div>
  )
}

export default Welcome;