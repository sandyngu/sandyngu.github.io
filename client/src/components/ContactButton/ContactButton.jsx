import React from 'react';
import './contactbutton.scss';
import Polaroid from '../../assets/images/rectangle-polaroid.png';

function ContactButton(props) {
    return (
        <div className="contactbutton">
            <img src={Polaroid} className="contactbutton__polaroid" alt="Polaroid" />
            {props.children}
        </div>
    )
}

export default ContactButton;