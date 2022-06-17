import React from 'react';
import './navbar.scss';

function NavBar(props) {

  return (
    <div className="navbar">
      <ul className="navbar__list">
        <a href="#aboutme"><li className="navbar__list-item" onClick={()=>props.changeAboutMe()}>&lt; about me /&gt;</li></a>
        <a href="#projects"><li className="navbar__list-item" onClick={()=>props.changeProjects()}>&lt; projects /&gt;</li></a>
        <a href="#contact"><li className="navbar__list-item" onClick={()=>props.changeContact()}>&lt; contact /&gt;</li></a>
      </ul>
    </div>
  )
}

export default NavBar;