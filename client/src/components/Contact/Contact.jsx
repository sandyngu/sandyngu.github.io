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
import ContactButton from '../ContactButton/ContactButton';
import './contact.scss';

function Contact() {

  function showLinkedIn() {
    $(".contact__button-logo1").css("opacity", 1);
    $(".contact__button-logo1").css("filter", "saturation(0.5)");
  };

  function showEmail() {
    $(".contact__button-logo2").css("opacity", 1);
  }

  function showGitHub() {
    $(".contact__button-logo3").css("opacity", 1);
  }

  function showResume() {
    $(".contact__button-logo4").css("opacity", 1);
  }

  function showSocialMedia() {
    $(".contact__button-logo5").css("opacity", 1);
  }

  function hideLinkedIn() {
    $(".contact__button-logo1").css("opacity", 0);
    $(".contact__button1").css("filter", "grayscale(60%)");
  };

  function hideEmail() {
    $(".contact__button-logo2").css("opacity", 0);
    $(".contact__button2").css("filter", "grayscale(60%)");
  }

  function hideGitHub() {
    $(".contact__button-logo3").css("opacity", 0);
    $(".contact__button3").css("filter", "grayscale(60%)");
  }

  function hideResume() {
    $(".contact__button-logo4").css("opacity", 0);
    $(".contact__button4").css("filter", "grayscale(60%)");
  }

  function hideSocialMedia() {
    $(".contact__button-logo5").css("opacity", 0);
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
            <a href="https://www.linkedin.com/in/sandyngu/" target="_blank" rel="noreferrer" className="contact__button-link">
              <ContactButton>
                <div className="contact__button contact__button1" onMouseOver={()=>showLinkedIn()} onMouseLeave={()=>hideLinkedIn()}>
                    <img src={LinkedIn} className="contact__button-logo contact__button-logo1" alt="LinkedIn Logo" />
                    <br/><div className="contact__button-text contact__button-text1">linkedin  </div>
                </div>
              </ContactButton>
            </a>
            <a href="mailto:contact@sandynguyen.ca" className="contact__button-link">
              <ContactButton>
                <div className="contact__button contact__button2" onMouseOver={()=>showEmail()} onMouseLeave={()=>hideEmail()}>
                    <img src={Email} className="contact__button-logo contact__button-logo2" alt="Email Logo" />
                    <br/><div className="contact__button-text contact__button-text2">e-mail</div>
                </div>
              </ContactButton>
              {/* <img src={Polaroid} className="contact__button-polaroid contact__button-polaroid2" alt="" onMouseOver={()=>showEmail()} onMouseLeave={()=>hideEmail()}/> */}
            </a>
            <a href="https://github.com/sandyngu" target="_blank" rel="noreferrer" className="contact__button-link">
              <ContactButton>
                <div className="contact__button contact__button3" onMouseOver={()=>showGitHub()} onMouseLeave={()=>hideGitHub()}>
                    <img src={GitHub} className="contact__button-logo contact__button-logo3" alt="GitHub Logo" />
                    <br/><div className="contact__button-text contact__button-text3">github</div>
                </div>
              </ContactButton>
              {/* <img src={Polaroid} className="contact__button-polaroid contact__button-polaroid3" alt="" onMouseOver={()=>showGitHub()} onMouseLeave={()=>hideGitHub()}/> */}
            </a>
            <a href={ResumeDoc} target="_blank" rel="noreferrer" className="contact__button-link">
              <ContactButton>
                <div className="contact__button contact__button4" onMouseOver={()=>showResume()} onMouseLeave={()=>hideResume()}>
                    <img src={Resume} className="contact__button-logo contact__button-logo4" alt="Resume Logo" />
                    <br/><div className="contact__button-text contact__button-text4">resume</div>
                </div>
              </ContactButton>
              {/* <img src={Polaroid} className="contact__button-polaroid contact__button-polaroid4" alt="" onMouseOver={()=>showResume()} onMouseLeave={()=>hideResume()}/> */}
            </a>
            <a href="https://instagram.com/sandyngu" target="_blank" rel="noreferrer" className="contact__button-link">
              <ContactButton>
                <div className="contact__button contact__button5" onMouseOver={()=>showSocialMedia()} onMouseLeave={()=>hideSocialMedia()}>
                    <img src={Insta} className="contact__button-logo contact__button-logo5" alt="Instagram Logo" />
                    <br/><div className="contact__button-text contact__button-text5">socials</div>
                </div>
              </ContactButton>
              {/* <img src={Polaroid} className="contact__button-polaroid contact__button-polaroid5" alt="" onMouseOver={()=>showSocialMedia()} onMouseLeave={()=>hideSocialMedia()}/> */}
            </a>
            <a href="https://instagram.com/sandyngu" target="_blank" rel="noreferrer" className="contact__button-link">
              <ContactButton>
                <div className="contact__button contact__button6" onMouseOver={()=>showLinkedIn()} onMouseLeave={()=>hideLinkedIn()}>
                    <img src={Insta} className="contact__button-logo contact__button-logo6" alt="Instagram Logo" />
                    <br/><div className="contact__button-text contact__button-text6">empty</div>
                </div>
              </ContactButton>
              {/* <img src={Polaroid} className="contact__button-polaroid contact__button-polaroid5" alt="" onMouseOver={()=>showSocialMedia()} onMouseLeave={()=>hideSocialMedia()}/> */}
            </a>
        </div>
        </div>
    </div>
  )
}

export default Contact;