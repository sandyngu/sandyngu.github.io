import React from 'react';
import $ from 'jquery';
import ResumeDoc from '../../assets/Sandy Nguyen - Resume.pdf'
import LinkedIn from '../../assets/images/linkedin.png'
import Email from '../../assets/images/email.png'
import GitHub from '../../assets/images/github.png'
import Resume from '../../assets/images/resume3.png'
import Tulip from '../../assets/images/tulip.png'
import Arrows from '../../assets/images/2arrow.png'
import Insta from '../../assets/images/insta.png'
import Polaroid from '../../assets/images/rectangle-polaroid.png';
import './contact.scss';

function Contact() {

  function showLinkedIn() {
    document.querySelector('.contact__button-text1').style.display="inline-block";
    $(".contact__button-logo1").css("opacity", 1)
    $(".contact__button1").css("filter", "invert(0.8)");
  };

  function showEmail() {
    document.querySelector('.contact__button-text2').style.display="inline-block";
    $(".contact__button-logo2").css("opacity", 1)
    $(".contact__button2").css("filter", "invert(0.8)");
  }

  function showGitHub() {
    document.querySelector('.contact__button-text3').style.display="inline-block";
    $(".contact__button-logo3").css("opacity", 1)
    $(".contact__button3").css("filter", "invert(0.8)");
  }

  function showResume() {
    document.querySelector('.contact__button-text4').style.display="inline-block";
    $(".contact__button-logo4").css("opacity", 1)
    $(".contact__button4").css("filter", "invert(0.8)");
  }

  function showSocialMedia() {
    document.querySelector('.contact__button-text5').style.display="inline-block";
    $(".contact__button-logo5").css("opacity", 1)
    $(".contact__button5").css("filter", "invert(0.8)");
  }

  function hideLinkedIn() {
    document.querySelector('.contact__button-text1').style.display="none";
    $(".contact__button-logo1").css("opacity", 0)
    $(".contact__button1").css("filter", "grayscale(60%)");
  };

  function hideEmail() {
    document.querySelector('.contact__button-text2').style.display="none";
    $(".contact__button-logo2").css("opacity", 0)
    $(".contact__button2").css("filter", "grayscale(60%)");
  }

  function hideGitHub() {
    document.querySelector('.contact__button-text3').style.display="none";
    $(".contact__button-logo3").css("opacity", 0)
    $(".contact__button3").css("filter", "grayscale(60%)");
  }

  function hideResume() {
    document.querySelector('.contact__button-text4').style.display="none";
    $(".contact__button-logo4").css("opacity", 0)
    $(".contact__button4").css("filter", "grayscale(60%)");
  }

  function hideSocialMedia() {
    document.querySelector('.contact__button-text5').style.display="none";
    $(".contact__button-logo5").css("opacity", 0)
    $(".contact__button5").css("filter", "grayscale(60%)");
  }

  return (
    <div className="section" id="contact">
        <p className="title" style={{display: 'none'}}>contact</p>
        <div className="parallax parallax4">
            <h2 className="contact__section-title box-title">get in touch</h2>
            <div className="contact__section-box title-box"></div>
        </div>
        <div className="contact">
            <div className="contact__container">
                <img src={Arrows} className="contact__arrow" alt="Arrow"/>
                <h2 className="contact__heading">connect with me.</h2>
            </div>
            <img src={Tulip} className="contact__image" alt="Tulip"/>
            <div className="contact__button-container">
              <a href="https://www.linkedin.com/in/sandyngu/" target="_blank" rel="noreferrer">
                <div className="contact__button contact__button1">
                    <img src={LinkedIn} className="contact__button-logo contact__button-logo1" alt="LinkedIn Logo" />
                    <br/><div className="contact__button-text contact__button-text1">linkedin</div>
                </div>
                <img src={Polaroid} className="contact__button-polaroid contact__button-polaroid1" alt="" onMouseOver={()=>showLinkedIn()} onMouseLeave={()=>hideLinkedIn()}/>
              </a>
              <a href="mailto:contact@sandynguyen.ca" className="contact__button-link">
                <div className="contact__button contact__button2">
                    <img src={Email} className="contact__button-logo contact__button-logo2" alt="Email Logo" />
                    <br/><div className="contact__button-text contact__button-text2">e-mail</div>
                </div>
                <img src={Polaroid} className="contact__button-polaroid contact__button-polaroid2" alt="" onMouseOver={()=>showEmail()} onMouseLeave={()=>hideEmail()}/>
              </a>
              <a href="https://github.com/sandyngu" target="_blank" rel="noreferrer">
                <div className="contact__button contact__button3">
                    <img src={GitHub} className="contact__button-logo contact__button-logo3" alt="GitHub Logo" />
                    <br/><div className="contact__button-text contact__button-text3">github</div>
                </div>
                <img src={Polaroid} className="contact__button-polaroid contact__button-polaroid3" alt="" onMouseOver={()=>showGitHub()} onMouseLeave={()=>hideGitHub()}/>
              </a>
              <a href={ResumeDoc} target="_blank" rel="noreferrer">
                <div className="contact__button contact__button4">
                    <img src={Resume} className="contact__button-logo contact__button-logo4" alt="Resume Logo" />
                    <br/><div className="contact__button-text contact__button-text4">resume</div>
                </div>
                <img src={Polaroid} className="contact__button-polaroid contact__button-polaroid4" alt="" onMouseOver={()=>showResume()} onMouseLeave={()=>hideResume()}/>
              </a>
              <a href="https://instagram.com/sandyngu" target="_blank" rel="noreferrer">
                <div className="contact__button contact__button5">
                    <img src={Insta} className="contact__button-logo contact__button-logo5" alt="Instagram Logo" />
                    <br/><div className="contact__button-text contact__button-text5">socials</div>
                </div>
                <img src={Polaroid} className="contact__button-polaroid contact__button-polaroid5" alt="" onMouseOver={()=>showSocialMedia()} onMouseLeave={()=>hideSocialMedia()}/>
              </a>
              <a href="https://instagram.com/sandyngu" target="_blank" rel="noreferrer">
                <div className="contact__button">
    hi
                </div>
                <img src={Polaroid} className="contact__button-polaroid contact__button-polaroid6" alt=""/>

              </a>
            </div>
        </div>
    </div>
  )
}

export default Contact;