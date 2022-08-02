import React from 'react';
import $ from 'jquery';
import HTML from '../../assets/images/projects/html.png';
import CSS from '../../assets/images/projects/css.png';
import Sass from '../../assets/images/projects/sass.png';
import Node from '../../assets/images/projects/node.png';
import Express from '../../assets/images/projects/express.png';
import Bookshelf from '../../assets/images/projects/bookshelf.png';
import Knex from '../../assets/images/projects/knex.png';
import ReactLogo from '../../assets/images/projects/react.png';
import MySQL from '../../assets/images/projects/mysql.png';
import './techstacks.scss';

function TechStacks(props) {
    
    $(document).ready(function () {
        const TechStacks = props.heroProject.techstacks

        TechStacks.includes('HTML')?document.querySelector('.techstacks__logo-html').style.display="block":document.querySelector('.techstacks__logo-html').style.display="none";
        TechStacks.includes('CSS')?document.querySelector('.techstacks__logo-css').style.display="block":document.querySelector('.techstacks__logo-css').style.display="none";
        TechStacks.includes('Sass')?document.querySelector('.techstacks__logo-sass').style.display="block":document.querySelector('.techstacks__logo-sass').style.display="none";
        TechStacks.includes('Node')?document.querySelector('.techstacks__logo-node').style.display="block":document.querySelector('.techstacks__logo-node').style.display="none";
        TechStacks.includes('Express')?document.querySelector('.techstacks__logo-express').style.display="block":document.querySelector('.techstacks__logo-express').style.display="none";
        TechStacks.includes('Bookshelf')?document.querySelector('.techstacks__logo-bookshelf').style.display="block":document.querySelector('.techstacks__logo-bookshelf').style.display="none";
        TechStacks.includes('Knex')?document.querySelector('.techstacks__logo-knex').style.display="block":document.querySelector('.techstacks__logo-knex').style.display="none";
        TechStacks.includes('React')?document.querySelector('.techstacks__logo-react').style.display="block":document.querySelector('.techstacks__logo-react').style.display="none";
        TechStacks.includes('MySQL')?document.querySelector('.techstacks__logo-mysql').style.display="block":document.querySelector('.techstacks__logo-mysql').style.display="none";
      })

  return (
    <div className="techstacks">
        <img src={HTML} className="techstacks__logo techstacks__logo-html" alt="HTML Logo"/>
        <img src={CSS} className="techstacks__logo techstacks__logo-css" alt="CSS Logo"/>
        <img src={Sass} className="techstacks__logo techstacks__logo-sass" alt="Sass Logo"/>
        <img src={Node} className="techstacks__logo techstacks__logo-node" alt="Node Logo"/>
        <img src={Express} className="techstacks__logo techstacks__logo-express" alt="Express Logo"/>
        <img src={Bookshelf} className="techstacks__logo techstacks__logo-bookshelf" alt="Bookshelf Logo"/>
        <img src={Knex} className="techstacks__logo techstacks__logo-knex" alt="Knex Logo"/>
        <img src={ReactLogo} className="techstacks__logo techstacks__logo-react" alt="React Logo"/>
        <img src={MySQL} className="techstacks__logo techstacks__logo-mysql" alt="MySQL Logo"/>
    </div>
    
  )
}

export default TechStacks;