import React from 'react';
import './contact.scss';

function Contact() {
  return (
    <div className="contact section" id="contact">
        <p className="title" style={{display: 'none'}}>contact</p>
        <h2 className="contact__heading">connect with me.</h2>
        <div className="contact__button-container">
            <div className="contact__button">
                <div className="contact__button-text">
                  LinkedIn
                </div>
            </div>
            <div className="contact__button">
                <div className="contact__button-text">
                  E-mail
                </div>
            </div>
            <div className="contact__button">
                <div className="contact__button-text">
                    GitHub
                </div>
            </div>
            <div className="contact__button">
                <div className="contact__button-text">
                  Resume
                </div>
            </div>
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