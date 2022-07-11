import React from 'react';
import $ from 'jquery';
import ResumeDoc from '../../assets/Sandy Nguyen - Resume.pdf'
import LinkedIn from '../../assets/images/linkedin.png'
import Email from '../../assets/images/email.png'
import GitHub from '../../assets/images/github.png'
import Resume from '../../assets/images/resume.png'
import Tulip from '../../assets/images/tulip.png'
import Arrows from '../../assets/images/2arrow.png'
import Insta from '../../assets/images/insta.png'
import './contact.scss';

function Contact() {

  function showLinkedIn() {
    document.querySelector('.contact__button-text1').style.display="inline-block";
    $(".contact__button-logo1").css("opacity", 1)
  };

  function showEmail() {
    document.querySelector('.contact__button-text2').style.display="inline-block";
    $(".contact__button-logo2").css("opacity", 1)
  }

  function showGitHub() {
    document.querySelector('.contact__button-text3').style.display="inline-block";
    $(".contact__button-logo3").css("opacity", 1)
  }

  function showResume() {
    document.querySelector('.contact__button-text4').style.display="inline-block";
    $(".contact__button-logo4").css("opacity", 1)
  }

  function showSocialMedia() {
    document.querySelector('.contact__button-text5').style.display="inline-block";
    $(".contact__button-logo5").css("opacity", 1)
  }

  function hideLinkedIn() {
    document.querySelector('.contact__button-text1').style.display="none";
    $(".contact__button-logo1").css("opacity", 0.7)
  };

  function hideEmail() {
    document.querySelector('.contact__button-text2').style.display="none";
    $(".contact__button-logo2").css("opacity", 0.7)
  }

  function hideGitHub() {
    document.querySelector('.contact__button-text3').style.display="none";
    $(".contact__button-logo3").css("opacity", 0.7)
  }

  function hideResume() {
    document.querySelector('.contact__button-text4').style.display="none";
    $(".contact__button-logo4").css("opacity", 0.7)
  }

  function hideSocialMedia() {
    document.querySelector('.contact__button-text5').style.display="none";
    $(".contact__button-logo5").css("opacity", 0.7)
  }

  return (
    <div className="contact section" id="contact">
        <p className="title" style={{display: 'none'}}>contact</p>
        <div className="contact__container">
            <img src={Arrows} className="contact__arrow" alt="Arrow"/>
            <h2 className="contact__heading">connect with me.</h2>
        </div>
        <img src={Tulip} className="contact__image" alt="Tulip"/>
        <div className="contact__button-container">
          <a href="https://www.linkedin.com/in/sandyngu/" target="_blank" rel="noreferrer">
            <div className="contact__button contact__button1" onMouseOver={()=>showLinkedIn()} onMouseLeave={()=>hideLinkedIn()}>
                <img src={LinkedIn} className="contact__button-logo contact__button-logo1" alt="LinkedIn Logo" />
                <br/><div className="contact__button-text contact__button-text1">linkedin</div>
            </div>
          </a>
          <a href="mailto:sandy_nguyen@live.ca">
            <div className="contact__button contact__button2" onMouseOver={()=>showEmail()} onMouseLeave={()=>hideEmail()}>
                <img src={Email} className="contact__button-logo contact__button-logo2" alt="Email Logo" />
                <br/><div className="contact__button-text contact__button-text2">e-mail</div>
            </div>
          </a>
          <a href="https://github.com/sandyngu" target="_blank" rel="noreferrer">
            <div className="contact__button contact__button3" onMouseOver={()=>showGitHub()} onMouseLeave={()=>hideGitHub()}>
                <img src={GitHub} className="contact__button-logo contact__button-logo3" alt="GitHub Logo" />
                <br/><div className="contact__button-text contact__button-text3">github</div>
            </div>
          </a>
          <a href={ResumeDoc} target="_blank" rel="noreferrer">
            <div className="contact__button contact__button4" onMouseOver={()=>showResume()} onMouseLeave={()=>hideResume()}>
                <img src={Resume} className="contact__button-logo contact__button-logo4" alt="Resume Logo" />
                <br/><div className="contact__button-text contact__button-text4">resume</div>
            </div>
          </a>
          <a href="https://instagram.com/sandyngu" target="_blank" rel="noreferrer">
            <div className="contact__button contact__button5" onMouseOver={()=>showSocialMedia()} onMouseLeave={()=>hideSocialMedia()}>
                <img src={Insta} className="contact__button-logo contact__button-logo5" alt="Instagram Logo" />
                <br/><div className="contact__button-text contact__button-text5">socials</div>
            </div>
          </a>
            <div className="contact__button">
hi
            </div>
        </div>
    </div>
  )
}

export default Contact;