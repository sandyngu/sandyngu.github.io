import React from 'react';
import Flowers from '../../assets/images/flowers3.png';
import Polaroid from '../../assets/images/polaroid.png';
import Polaroid2 from '../../assets/images/rectangle-polaroid.png';
import Polaroid3 from '../../assets/images/cut-polaroid.png';
import Mee from '../../assets/images/photos/me2.jpg';
import Me from '../../assets/images/photos/me3.png';
import Me2 from '../../assets/images/photos/me.png';

import './welcome.scss';

function Welcome() {
  return (
    <div className="welcome section" id="welcome">
        <p className="title" style={{display: 'none'}}>why, hello there</p>
        <div className="welcome__section">
            <img src={Flowers} alt="Flowers" className="welcome__image flowers"/>           
            <div className="welcome__section-text">
                <img src={Mee} className="welcome__section-photo welcome__section-photo1" alt="Me"/>
                <img src={Me2} className="welcome__section-photo welcome__section-photo2" alt="Me"/>
                <img src={Me} className="welcome__section-photo welcome__section-photo3" alt="Me"/>
                <img src={Polaroid} className="welcome__section-polaroid welcome__section-polaroid1" alt="Me"/>
                <img src={Polaroid2} className="welcome__section-polaroid welcome__section-polaroid2" alt="Me"/>
                <img src={Polaroid3} className="welcome__section-polaroid welcome__section-polaroid3" alt="Me"/>
                {/* <img src={} className="welcome__section-photo welcome__section-photo2" alt="Photo of Me"/> */}
                <h1 className="welcome__title">welcome</h1>
                <p className="welcome__maintext"><span className="welcome__maintext-first">Hi! You've managed to stumble upon my personal portfolio─ congratulations.</span> <br/><br/>It's nice to have some company so feel free to take a look around. I created this webpage from scratch so I hope it's somewhat impressive. Keep scrolling down to learn about me and the small projects I've worked on, and don't hesitate to <a href="#contact"><span className="welcome__maintext-second">connect with me!</span></a></p>
            </div>
        </div>
    </div>
  )
}

export default Welcome;