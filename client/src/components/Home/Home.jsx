import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import HeaderBar from '../HeaderBar/HeaderBar';
import NavBar from '../NavBar/NavBar';
import Welcome from '../Welcome/Welcome';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Comments from '../Comments/Comments';
import Footer from '../Footer/Footer';
import './home.scss';

class Home extends React.Component {

  state={
    hideMenu: true,
    headerTitle: "why, hello there",
    comments:[]
  }

  componentDidMount() {
    axios.get('http://localhost:5000/comments')
        .then(res => {
            this.setState({
                comments: res.data
            });
        })
        .catch(err => console.log(err))

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
      });
    
        $(document).ready(function () {
            $(window).trigger('scroll'); // init the value
        });
    };

  fadeMenu() {
    document.querySelector('.navbar').classList.add('fade-in');
  };

  logoHover = () => {
    if (this.state.hideMenu) {
      this.setState({
        hideMenu: false
      })
      document.querySelector('.headerbar__menu-line1').classList.add('headerbar__menu--hover1')
      document.querySelector('.headerbar__menu-line2').classList.add('headerbar__menu--hide')
      document.querySelector('.headerbar__menu-line3').classList.add('headerbar__menu--hover2')
      document.querySelector('.navbar').classList.add('fade-in');
      document.querySelector('.navbar').classList.remove('fade-out');
      document.querySelector('.headerbar__menu').style.zIndex=999;
    } else {
      this.setState({
        hideMenu: true
      })
      document.querySelector('.headerbar__menu-line1').classList.remove('headerbar__menu--hover1')
      document.querySelector('.headerbar__menu-line2').classList.remove('headerbar__menu--hide')
      document.querySelector('.headerbar__menu-line3').classList.remove('headerbar__menu--hover2')
      document.querySelector('.navbar').classList.remove('fade-in');
      document.querySelector('.navbar').classList.add('fade-out');
      document.querySelector('.headerbar__menu').style.zIndex=-1;
    }
    setTimeout(1000,this.fadeMenu())
  }

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
  changeContact = () => {
    this.setState({
      headerTitle: "contact"
    })
  }
  changeComments = () => {
    this.setState({
      headerTitle: "comments"
    })
  }
  
  render() {
    
    return (
      <div className="home">
        <HeaderBar state={this.state} logoHover={this.logoHover}/>
        <NavBar changeHeaderBar={this.changeHeaderBar} changeAboutMe={this.changeAboutMe} changeProjects={this.changeProjects} changeContact={this.changeContact} changeComments={this.changeComments}/>
        <Welcome />
        <AboutMe state={this.state}/>
        <Projects state={this.state}/>
        <Contact state={this.state}/>
        <Comments state={this.state}/>
        <Footer state={this.state}/>
      </div>
    )
    
  }
}

export default Home;