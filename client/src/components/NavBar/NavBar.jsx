import React from 'react';
import './navbar.scss';

function navbar() {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">about me</li>
        <li className="navbar__list-item">projects</li>
        <li className="navbar__list-item">contact</li>
      </ul>
    </div>
  )
}

export default navbar;