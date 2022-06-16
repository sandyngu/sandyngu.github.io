import React from 'react';
import HeaderBar from '../HeaderBar/HeaderBar'
import NavBar from '../NavBar/NavBar'
import './home.scss';

class Home extends React.Component {

  render() {

    return (
      <div classname="home">
        <HeaderBar />
        <NavBar />
      </div>
    )
    
  }
}

export default Home;