import React from 'react';
import Logo from '../../assets/images/logo2.png'
import './headerbar.scss';

function HeaderBar() {
  return (
    <div className='headerbar'>
        <img src={Logo} className="headerbar__logo" alt="Logo"/>
        Welcome to Sandy Nguyen's Portfolio
    </div>
  )
}

export default HeaderBar;