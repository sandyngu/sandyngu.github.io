import React from 'react';
import ResumeDoc from '../../assets/Sandy Nguyen - Resume.pdf'
import LinkedIn from '../../assets/images/linkedin.png'
import Email from '../../assets/images/email.png'
import GitHub from '../../assets/images/github.png'
import Resume from '../../assets/images/resume.png'
import './contact.scss';

function Contact() {

  function showLinkedIn() {
    document.querySelector('.contact__button-text1').style.display="inline-block";
  };

  function showEmail() {
    document.querySelector('.contact__button-text2').style.display="inline-block";
  }

  function showGitHub() {
    document.querySelector('.contact__button-text3').style.display="inline-block";
  }

  function showResume() {
    document.querySelector('.contact__button-text4').style.display="inline-block";
  }

  function hideLinkedIn() {
    document.querySelector('.contact__button-text1').style.display="none";
  };

  function hideEmail() {
    document.querySelector('.contact__button-text2').style.display="none";
  }

  function hideGitHub() {
    document.querySelector('.contact__button-text3').style.display="none";
  }

  function hideResume() {
    document.querySelector('.contact__button-text4').style.display="none";
  }

  return (
    <div className="contact section" id="contact">
        <p className="title" style={{display: 'none'}}>contact</p>
        <h2 className="contact__heading">connect with me.</h2>
        <div className="contact__button-container">
          <a href="https://www.linkedin.com/in/sandyngu/" target="_blank" rel="noreferrer">
            <div className="contact__button contact__button1" onMouseOver={()=>showLinkedIn()} onMouseLeave={()=>hideLinkedIn()}>
                <img src={LinkedIn} className="contact__button-logo" alt="LinkedIn Logo" />
                <br/><div className="contact__button-text contact__button-text1">linkedin</div>
            </div>
          </a>
          <a href="mailto:sandy_nguyen@live.ca">
            <div className="contact__button contact__button2" onMouseOver={()=>showEmail()} onMouseLeave={()=>hideEmail()}>
                <img src={Email} className="contact__button-logo" alt="Email Logo" />
                <br/><div className="contact__button-text contact__button-text2">e-mail</div>
            </div>
          </a>
          <a href="https://github.com/sandyngu" target="_blank" rel="noreferrer">
            <div className="contact__button contact__button3" onMouseOver={()=>showGitHub()} onMouseLeave={()=>hideGitHub()}>
                <img src={GitHub} className="contact__button-logo" alt="GitHub Logo" />
                <br/><div className="contact__button-text contact__button-text3">github</div>
            </div>
          </a>
          <a href={ResumeDoc} target="_blank" rel="noreferrer">
            <div className="contact__button contact__button4" onMouseOver={()=>showResume()} onMouseLeave={()=>hideResume()}>
                <img src={Resume} className="contact__button-logo" alt="Resume Logo" />
                <br/><div className="contact__button-text contact__button-text4">resume</div>
            </div>
          </a>
            <div className="contact__button">
hi
            </div>
            <div className="contact__button">
hi
            </div>
        </div>
    </div>
  )
}

export default Contact;