import React from 'react';
import Flowers from '../../assets/images/flowers3.png';
import Blob from '../../assets/images/blob.svg';
import Polaroid from '../../assets/images/polaroid.png';
import Polaroid2 from '../../assets/images/rectangle-polaroid.png';
import './welcome.scss';

function Welcome() {
  return (
    <div className="welcome section" id="welcome">
        <p className="title" style={{display: 'none'}}>why, hello there</p>
        <div className="parallax parallax0">
        <img src={Blob} className="blob" alt="Blob"/>
        <h1 className="new new1">andy</h1>
            <h1 className="new new2">Nguyen</h1>
            <h1 className="big">S</h1>
        </div>
        <div className="welcome__section">
            <img src={Flowers} alt="Flowers" className="welcome__image flowers"/>           
            <div className="welcome__section-text">
                <img src={Polaroid} className="welcome__section-polaroid welcome__section-polaroid1" alt="Photo of Me"/>
                <img src={Polaroid2} className="welcome__section-polaroid welcome__section-polaroid2" alt="Photo of Me"/>
                {/* <img src={} className="welcome__section-photo welcome__section-photo1" alt="Photo of Me"/>
                <img src={} className="welcome__section-photo welcome__section-photo1" alt="Photo of Me"/> */}
                <h1 className="welcome__title">welcome</h1>
                <p className="welcome__maintext"><span className="welcome__maintext-first">Hi! You've managed to stumble upon my personal portfolio─ congratulations.</span> <br/><br/>It's nice to have some company so feel free to take a look around. I created this webpage from scratch so I hope it's somewhat impressive. Keep scrolling down to learn about me and the small projects I've worked on, and don't hesitate to <a href="#contact"><span className="welcome__maintext-second">connect with me!</span></a></p>
            </div>
        </div>
    </div>
  )
}

export default Welcome;