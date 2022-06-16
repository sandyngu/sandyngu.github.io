import React from 'react';
import Logo from '../../assets/images/logo.png'
import './headerbar.scss';

function HeaderBar() {
  return (
    <div className='headerbar'>
        <img src={Logo} className="headerbar__logo" alt="Logo"/>
        <h2 className="headerbar__text">Sandy Nguyen</h2>
        <div className="headerbar__menu">
            <div className="headerbar__menu-logo">
                <div className="headerbar__menu-line headerbar__menu-line1">———</div>
                <div className="headerbar__menu-line headerbar__menu-line2">———</div>
                <div className="headerbar__menu-line headerbar__menu-line3">———</div>
            </div>
        </div>
    </div>
  )
}

export default HeaderBar;