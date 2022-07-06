import React from 'react';
import Paint from '../../assets/images/paint.png';
import Paint2 from '../../assets/images/paint4.png';
import './aboutme.scss';

function AboutMe() {
  return (
    <div className="aboutme section" id="aboutme">
        <p className="title" style={{display: 'none'}}>about me</p>
        <img src={Paint} alt="Flowers" className="aboutme__image aboutme__image1"/>
        <img src={Paint2} alt="Flowers" className="aboutme__image aboutme__image2"/>
        <h2 className="aboutme__heading">a <span className="highlight">b</span><span className="highlight">i</span>t ab<span className="highlight">o</span>ut me.</h2>
        <div className="aboutme__section">
            <p className="aboutme__text aboutme__text1">My name is Sandy and I am primarily a registered nurse. I graduated from university in 2015 and have been working as a nurse since then. In August 2020 to October 2020, I enrolled in the <span className="highlight">BrainStation Web Development</span> certificate course. I had an amazing time, learning about the webdev world and connecting with like-minded individuals who were seeking to transition their careers into tech. I have always had an interest in tech and this began for me at a very young age. <br/><br/><br/>During my time at the bootcamp, I was given the opportunity to work as a Public Health nurse with my local city to aide in the <span className="red">COVID-19 pandemic</span> response. I took this job opportunity and although it's had its advantages, it also meant putting a pause on my full-stack career. This portfolio, along with other small projects, have been a way for me to help maintain some skills I've learned in the bootcamp─ hopefully I am successul in showcasing them.</p>
            <p className="aboutme__text aboutme__text2">Outside of work, I spend an incredible amount of time gaming on my PC. One of my accomplishments is that I was able to build a PC to call my own. I am very much a <span className="rainbow aboutme--bold">supporter of RGB</span>. 
            <br/><br/>Presently, my go-to games are <span className="valorant red">Valorant</span> and Lost Ark. I have been playing Valorant (hardstuck plat) since beta and I play Lost Ark when work is slow (current iLvl is 1370). Before that, I wasted a lot of time playing League of Legends (played for 8 seasons, highest rank achieved was plat 1). Other than gaming, I do enjoy spending time hanging out with loved ones and travelling.</p>
        </div>
    </div>
  )
}

export default AboutMe;