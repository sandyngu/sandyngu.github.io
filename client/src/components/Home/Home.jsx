import React from 'react';
import HeaderBar from '../HeaderBar/HeaderBar';
import NavBar from '../NavBar/NavBar';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import './home.scss';

class Home extends React.Component {

  render() {

    return (
      <div classname="home">
        <HeaderBar />
        <NavBar />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    )
    
  }
}

export default Home;