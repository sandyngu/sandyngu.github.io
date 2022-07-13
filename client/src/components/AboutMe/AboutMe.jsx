import React from 'react';
import Flowers from '../../assets/images/flowers3.png';
import Paint from '../../assets/images/paint.png';
import Paint2 from '../../assets/images/paint4.png';
import './aboutme.scss';

function AboutMe() {
  return (
    <div className="section" id="aboutme">
      <p className="title" style={{display: 'none'}}>about me</p>
      <div className="parallax parallax1">
          <h2 className="aboutme__section-title aboutme__section-title1">a <span className="brighter">bi</span>t ab<span className="brighter">o</span>ut me</h2>
          <div className="aboutme__section-box"></div>
      </div>
      <div className="aboutme">     
          <img src={Flowers} alt="Flowers" className="aboutme__flowers flowers"/>
          <img src={Paint} alt="Flowers" className="aboutme__image aboutme__image1"/>
          <img src={Paint2} alt="Flowers" className="aboutme__image aboutme__image2"/>
          <h2 className="aboutme__heading">who are you?</h2>
          <div className="aboutme__section">
              <p className="aboutme__text aboutme__text1"><b><span className="bold">My name is Sandy and I am primarily a registered nurse. </span></b>I graduated from university in 2015 and have been working as a nurse since then. In August 2020 to October 2020, I enrolled in the <span className="highlight bold">BrainStation Web Development</span> certificate course. I had an amazing time, learning about the webdev world and connecting with like-minded individuals who were seeking to transition their careers into tech. I have always had an interest in tech and this began for me at a very young age. <br/><br/><br/><b>During my time at the bootcamp, I was given the opportunity to work as a <span className="bold">Public Health Nurse</span></b> with my local city to aide in the <span className="red bold">COVID-19 pandemic</span> response. I took this job opportunity and although it's had its advantages, it also meant putting a pause on my full-stack career. This portfolio, along with other small projects, have been a way for me to help maintain some skills I've learned in the bootcamp─ hopefully I am successul in showcasing them.</p>
              <p className="aboutme__text aboutme__text2">Outside of work, I spend an incredible amount of time gaming on my PC. One of my accomplishments is that I was able to build a PC to call my own. I am very much a <span className="rainbow aboutme--bold">supporter of RGB</span>. 
              <br/><br/>Presently, my go-to games are <a href="https://tracker.gg/valorant/profile/riot/Chawpsticks%23123/overview" target="_blank" rel="noreferrer"><span className="valorant red">Valorant</span></a> and <span className="bold">Lost Ark</span>. I have been playing Valorant (hardstuck plat) since beta and I play Lost Ark when work is slow (current iLvl is 1370). Before that, I wasted a lot of time playing <a href="https://na.op.gg/summoners/na/Chawpsticks" target="_blank" rel="noreferrer"><span className="league bold">League of Legends</span></a> (played for 8 seasons, highest rank achieved was plat 1). Other than gaming, I do enjoy spending time hanging out with loved ones and travelling.</p>
              <div className="blob">
              
              </div>
          </div>
          <div className="parallax parallax2">
              <h2 className="aboutme__section-title aboutme__section-title1">a <span className="brighter">bi</span>t ab<span className="brighter">o</span>ut me</h2>
              <h2 className="aboutme__section-title aboutme__section-title2">cont'd</h2>
              <div className="aboutme__section-box"></div>
          </div>
      </div>    
    </div>
  )
}

export default AboutMe;