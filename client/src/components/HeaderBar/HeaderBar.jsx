import React from 'react';
import Logo from '../../assets/images/logo.png'
import FlowerBorder from '../../assets/images/flowerborder.png'
import './headerbar.scss';

function HeaderBar(props) {

    return (
      <div className='headerbar'>
          <img src={Logo} className="headerbar__logo" alt="Logo"/>
          <h2 className="headerbar__text" id="header">{props.state.headerTitle}</h2>
          <div className="headerbar__image-container">
            <img src={FlowerBorder} className="headerbar__image" alt="Flowers" />
            <img src={FlowerBorder} className="headerbar__image" alt="Flowers" />
          </div>
          <div className="headerbar__menu">
              <div className="headerbar__menu-logo" onClick={()=>props.logoHover()}>
                  <div className="headerbar__menu-line headerbar__menu-line1">———</div>
                  <div className="headerbar__menu-line headerbar__menu-line2">———</div>
                  <div className="headerbar__menu-line headerbar__menu-line3">———</div>
              </div>
          </div>
          {/* <div id='header'>hello</div> */}
      </div>
    )
}

export default HeaderBar;