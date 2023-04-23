import React from 'react';
import $ from 'jquery';
import Flowers from '../../assets/images/flowers3.png';
import Polaroid from '../../assets/images/polaroid.png';
import Polaroid2 from '../../assets/images/rectangle-polaroid.png';
import Funko from '../../assets/images/photos/funko.jpg';
import Us from '../../assets/images/photos/benji model4.jpg';
import Gamer from '../../assets/images/photos/MBIN8640.JPG';
import Covid from '../../assets/images/photos/covid.jpg';
import PCVideo from '../../assets/images/photos/pcvid2crop.mp4';
import Rito from '../../assets/images/photos/rito.jpg';
import Benji from '../../assets/images/photos/benji model3.jpg'
import PC from '../../assets/images/photos/pc.jpg'
import './aboutme.scss';

function AboutMe() {

  $(window).on('scroll', function() {
    let oVal = ($(window).scrollTop() / 240)
    $(".blurred").css("opacity", oVal)
  })

  // document.getElementById('vid').play();

  return (
    <div className="section" id="aboutme">
      <p className="title" style={{display: 'none'}}>about me</p>
      <div className="container">
          <div className="parallax parallax1">
              <h2 className="aboutme__section-title aboutme__section-title1 box-title">a <span className="brighter">bi</span>t ab<span className="brighter">o</span>ut me</h2>
              <div className="aboutme__section-box aboutme__section-box1 title-box"></div>
          </div>
          <div className="parallax parallax1 blurred"></div>
      </div>
      <div className="aboutme">     
          <img src={Flowers} alt="Flowers" className="aboutme__flowers flowers"/>
          {/* <img src={Paint} alt="Paint" className="aboutme__image aboutme__image1"/>
          <img src={Paint2} alt="Paint" className="aboutme__image aboutme__image2"/> */}
          <h2 className="aboutme__heading">who are you?</h2>
          <div className="aboutme__section">
              <img src={Us} className="aboutme__section-photo aboutme__section-photo1" alt="Me"/>
              <img src={Funko} className="aboutme__section-photo aboutme__section-photo2" alt="Me"/>
              <img src={Covid} className="aboutme__section-photo aboutme__section-photo3" alt="Me"/>
              <img src={Gamer} className="aboutme__section-photo aboutme__section-photo4" alt="Me"/>
              <video id="vid" autoplay='autoplay' loop muted className="aboutme__section-photo aboutme__section-photo5">
                <source src={PCVideo} type="video/mp4"></source>
              </video>
              <img src={Rito} className="aboutme__section-photo aboutme__section-photo6" alt="Me"/>
              <img src={Benji} className="aboutme__section-photo aboutme__section-photo7" alt="Me"/>
              <img src={PC} className="aboutme__section-photo aboutme__section-photo8" alt="Me"/>
              <img src={Polaroid} className="aboutme__section-polaroid aboutme__section-polaroid1" alt=""/>
              <img src={Polaroid2} className="aboutme__section-polaroid aboutme__section-polaroid2" alt=""/>
              <img src={Polaroid} className="aboutme__section-polaroid aboutme__section-polaroid3" alt=""/>
              <img src={Polaroid} className="aboutme__section-polaroid aboutme__section-polaroid4" alt=""/>
              <img src={Polaroid} className="aboutme__section-polaroid aboutme__section-polaroid5" alt=""/>
              <p className="aboutme__text aboutme__text1"><b><span className="bold">My name is Sandy and I am primarily a registered nurse. </span></b>I graduated from university in 2015 and have been working as a nurse since then. In August 2020 to October 2020, I enrolled in the <span className="highlight bold">BrainStation Web Development</span> certificate course. I had an amazing time, learning about the webdev world and connecting with like-minded individuals who were seeking to transition their careers into tech. I have always had an interest in tech and this began for me at a very young age. <br/><br/><br/><b>During my time at the bootcamp, I was given the opportunity to work as a <span className="bold">Public Health Nurse</span></b> with my local city to aide in the <span className="red bold">COVID-19 pandemic</span> response. I took this job opportunity and although it's had its advantages, it also meant putting a pause on my full-stack career. This portfolio, along with other small projects, have been a way for me to help maintain some skills I've learned in the bootcamp─ hopefully I am successul in showcasing them.</p>
              <p className="aboutme__text aboutme__text2">Outside of work, I spend a lot of amount of time gaming on my PC. One of my accomplishments is building a PC to call my own. I'm an avid supporter of <span className="rainbow aboutme--bold">RGB</span>. 
              <br/><br/><br/>Presently, my go-to game is <a href="https://tracker.gg/valorant/profile/riot/Chawpsticks%23123/overview" target="_blank" rel="noreferrer"><span className="valorant">Valorant</span></a>. In the recent past I was playing <span className="bold">Lost Ark</span> and <span className="bold">Hogwarts Legacy</span>. <br/><br/>I have been playing Valorant since beta. Before that, I wasted a lot of time playing <a href="https://na.op.gg/summoners/na/Chawpsticks" target="_blank" rel="noreferrer"><span className="league bold">League of Legends</span></a>. <br/><br/><i>Other than gaming</i>, I do enjoy spending time hanging out with loved ones, raising my <a href="https://instagram.com/benji.the.akita/" className="benji bold" target="_blank" rel="noreferrer" >American Akita named Benji</a>, and travelling.</p>
              <img src={Polaroid} className="aboutme__section-polaroid aboutme__section-polaroid6" alt=""/>
              <img src={Polaroid2} className="aboutme__section-polaroid aboutme__section-polaroid7" alt=""/>
              <img src={Polaroid2} className="aboutme__section-polaroid aboutme__section-polaroid8" alt=""/>
              <div className="blob">
              
              </div>
          </div>
          <div className="parallax parallax2">
              <h2 className="aboutme__section-title1 box-title">a <span className="brighter">bi</span>t ab<span className="brighter">o</span>ut me</h2>
              <h2 className="aboutme__section-title2">cont'd</h2>
              <div className="aboutme__section-box aboutme__section-box2 title-box"></div>
          </div>
      </div>    
    </div>
  )
}

export default AboutMe;