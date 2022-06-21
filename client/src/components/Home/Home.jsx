import React from 'react';
import $ from 'jquery';
import HeaderBar from '../HeaderBar/HeaderBar';
import NavBar from '../NavBar/NavBar';
import Welcome from '../Welcome/Welcome';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './home.scss';

class Home extends React.Component {

  state={
    hideMenu: true,
    headerTitle: "sandy nguyen"
  }

  logoHover = () => {
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

  // changeHeaderBar = () => {
  //   if (window.location.href.indexOf('aboutme') !== -1) {
  //     this.setState({
  //       headerTitle: "about me"
  //     }) 
  //   } else if (window.location.href.indexOf('projects') !== -1) {
  //       this.setState({
  //         headerTitle: "projects"
  //       }) 
  //     }
  //     else if (window.location.href.indexOf('contact') !== -1) {
  //       this.setState({
  //         headerTitle: "contact"
  //       }) 
  //     } else {
  //       this.setState({
  //         headerTitle: "sandy nguyen"
  //       }) 
  //     }
  // }

  changeAboutMe = () => {
    this.setState({
      headerTitle: "about me"
    })
  }
  changeProjects = () => {
    this.setState({
      headerTitle: "projects"
    })
  }
  changeContact = () => {
    this.setState({
      headerTitle: "contact"
    })
  }

  componentDidMount() {

    $(window).on('load', function () {
      $(window).on("scroll resize", function () {
        var pos = $('#header').offset();
        $('.section').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                $('#header').html($(this).find('.title').text()); //or any other way you want to get the date
                return; //break the loop
            }
        });
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
    });
  });
  
  }
  
  render() {
    
    return (
      <div className="home">
        <HeaderBar state={this.state} logoHover={this.logoHover}/>
        <NavBar changeHeaderBar={this.changeHeaderBar} changeAboutMe={this.changeAboutMe} changeProjects={this.changeProjects} changeContact={this.changeContact}/>
        <Welcome />
        <AboutMe state={this.state}/>
        <Projects state={this.state}/>
        <Contact state={this.state}/>
      </div>
    )
    
  }
}

export default Home;