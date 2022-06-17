import React from 'react';
import './navbar.scss';

function navbar() {

  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">&lt; about me /&gt;</li>
        <li className="navbar__list-item">&lt; projects /&gt;</li>
        <li className="navbar__list-item">&lt; contact /&gt;</li>
      </ul>
    </div>
  )
}

export default navbar;