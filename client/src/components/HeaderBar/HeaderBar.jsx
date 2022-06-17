import React from 'react';
import Logo from '../../assets/images/logo.png'
import './headerbar.scss';

class HeaderBar extends React.Component {

  state={
    hideMenu: true
  }

  logoHover() {
    if (this.state.hideMenu) {
      this.setState({
        hideMenu: false
      })
      document.querySelector('.headerbar__menu-line1').classList.add('headerbar__menu--hover1')
      document.querySelector('.headerbar__menu-line2').classList.add('headerbar__menu--hide')
      document.querySelector('.headerbar__menu-line3').classList.add('headerbar__menu--hover2')
      document.querySelector('.navbar').style.display="block"
    } else {
      this.setState({
        hideMenu: true
      })
      document.querySelector('.headerbar__menu-line1').classList.remove('headerbar__menu--hover1')
      document.querySelector('.headerbar__menu-line2').classList.remove('headerbar__menu--hide')
      document.querySelector('.headerbar__menu-line3').classList.remove('headerbar__menu--hover2')
      document.querySelector('.navbar').style.display="none"
    }
  }
  // logoLeave() {
  //     document.querySelector('.headerbar__menu-line1').classList.remove('headerbar__menu--hover1')
  //     document.querySelector('.headerbar__menu-line2').classList.remove('headerbar__menu--hide')
  //     document.querySelector('.headerbar__menu-line3').classList.remove('headerbar__menu--hover2')
  //     document.querySelector('.navbar').style.display="none"
  // }

  render() {

    return (
      <div className='headerbar'>
          <img src={Logo} className="headerbar__logo" alt="Logo"/>
          <h2 className="headerbar__text">sandy nguyen.</h2>
          <div className="headerbar__menu">
              <div className="headerbar__menu-logo" onClick={()=>this.logoHover()} /*onMouseLeave={()=>this.logoLeave()}*/>
                  <div className="headerbar__menu-line headerbar__menu-line1">———</div>
                  <div className="headerbar__menu-line headerbar__menu-line2">———</div>
                  <div className="headerbar__menu-line headerbar__menu-line3">———</div>
              </div>
          </div>
      </div>
    )
  }


}

export default HeaderBar;